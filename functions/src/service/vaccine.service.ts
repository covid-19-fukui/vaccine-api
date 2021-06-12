import { Injectable, NotFoundException } from '@nestjs/common';
import InfoResponse from '../controller/dto/info.response';
import VaccineResponse from '../controller/dto/vaccine.response';
import VaccineEntity from '../repository/dto/vaccine.entity';
import VaccineListApiResponse from '../controller/dto/vaccine.list.api.response';
import { VaccineFireStoreRepository } from '../repository/vaccine.repository';
import * as moment from 'moment-timezone';
import VaccineApiResponse from 'src/controller/dto/vaccine.api.response';
import VaccineQuery from '../controller/dto/vaccine.query';
import * as functions from 'firebase-functions';

const log = functions.logger;

/**
 * ユーザを取得するサービス層
 */
@Injectable()
export class VaccineService {
  /**
   * コンストラクタ
   *
   * @param {VaccineFireStoreRepository} vaccineFireStoreRepository ワクチン接種状況を取得するfirestoreのリポジトリ
   */
  constructor(
    private readonly vaccineFireStoreRepository: VaccineFireStoreRepository,
  ) {}

  /**
   * ワクチン接種状況の一覧取得
   *
   * @param {string} prefectureCode 都道府県コード
   * @returns {Promise<VaccineListApiResponse>} ワクチン接種状況
   */
  async findVaccines(
    vaccineQuery: VaccineQuery,
  ): Promise<VaccineListApiResponse> {
    const now = this.getNow();

    log.info(vaccineQuery);

    const vaccineEntity: VaccineEntity[] = await this.vaccineFireStoreRepository.getVaccines(
      vaccineQuery.prefectureCode,
      vaccineQuery.count,
    );

    const vaccineResponse: VaccineResponse[] = vaccineEntity.map((entity) =>
      this.buildVaccineResponse(entity),
    );

    return new VaccineListApiResponse(
      new InfoResponse(now, vaccineQuery.prefectureCode),
      vaccineResponse,
    );
  }

  /**
   * ワクチン接種状況の取得
   *
   * @param {string} prefectureCode 都道府県コード
   * @param {string} date 集計対象日
   * @returns {Promise<VaccineListApiResponse>} ワクチン接種状況
   */
  async getVaccine(
    prefectureCodeString: string,
    dateString: string,
  ): Promise<VaccineApiResponse> {
    const now = this.getNow();

    const prefectureCode = this.convertStringToNum(prefectureCodeString);
    const date = this.convertStringToDate(dateString);

    const vaccineEntity: VaccineEntity[] = await this.vaccineFireStoreRepository.getVaccine(
      prefectureCode,
      date,
    );

    if (vaccineEntity.length <= 0) {
      throw new NotFoundException(
        `Requested vaccination data does not exist: {prefectureCode: ${prefectureCode}, date: {dateString}}`,
      );
    }

    const vaccineResponse: VaccineResponse = vaccineEntity.map((entity) =>
      this.buildVaccineResponse(entity),
    )[0];

    return new VaccineApiResponse(
      new InfoResponse(now, prefectureCode),
      vaccineResponse,
    );
  }

  /**
   * 現在時刻を取得する
   *
   * @returns {string} 文字列化した現在時刻
   */
  private getNow(): string {
    return moment().tz('Asia/Tokyo').format();
  }

  /**
   * 文字列型の都道府県コード
   *
   * @param {string} prefectureCode
   * @returns {number} 数値型の都道府県コード
   */
  private convertStringToNum(prefectureCode: string): number {
    return Number(prefectureCode);
  }

  /**
   *
   * @param date
   * @returns
   */
  private convertStringToDate(date: string): moment.Moment {
    return moment.tz(date, 'Asia/Tokyo');
  }

  /**
   * ワクチン接種状況のレスポンスクラスを生成する
   *
   * @param {VaccineEntity} vaccineEntity firebaseから取得したワクチン接種状況
   * @returns {VaccineResponse} レスポンスクラス
   */
  private buildVaccineResponse(vaccineEntity: VaccineEntity): VaccineResponse {
    const date = this.formatDate(vaccineEntity.date.toDate());

    return new VaccineResponse(
      date,
      vaccineEntity.countFirst,
      vaccineEntity.countSecond,
      vaccineEntity.percentageFirst,
      vaccineEntity.percentageSecond,
      vaccineEntity.countMaleFirst,
      vaccineEntity.countMaleSecond,
      vaccineEntity.percentageMaleFirst,
      vaccineEntity.percentageMaleSecond,
      vaccineEntity.countFemaleFirst,
      vaccineEntity.countFemaleSecond,
      vaccineEntity.percentageFemaleFirst,
      vaccineEntity.percentageFemaleSecond,
      vaccineEntity.countOldFirst,
      vaccineEntity.countOldSecond,
      vaccineEntity.percentageOldFirst,
      vaccineEntity.percentageOldSecond,
      vaccineEntity.countYoungFirst,
      vaccineEntity.countYoungSecond,
      vaccineEntity.percentageYoungFirst,
      vaccineEntity.percentageYoungSecond,
    );
  }

  /**
   * 日付をYYYY-MM-DDの書式で返すメソッド
   *
   * @param {Date} date Date
   * @returns {string} YYYY-MM-DD形式の日付
   */
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const day = ('00' + date.getDate()).slice(-2);
    return year + '-' + month + '-' + day;
  }
}
