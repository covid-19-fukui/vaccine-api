import { Injectable } from '@nestjs/common';
import InfoResponse from '../controller/dto/info.response';
import VaccineResponse from '../controller/dto/vaccine.response';
import VaccineEntity from '../repository/dto/vaccine.entity';
import VaccineApiResponse from '../controller/dto/vaccine.api.response';
import { VaccineFireStoreRepository } from '../repository/vaccine.repository';
import * as moment from 'moment-timezone';

/**
 * ユーザを取得するサービス層
 */
@Injectable()
export class VaccineService {
  /**
   * コンストラクタ
   *
   * @param {VaccineFireStoreRepository} userFireStoreRepository
   */
  constructor(
    private readonly vaccineFireStoreRepository: VaccineFireStoreRepository,
  ) {}

  /**
   * ワクチン接種状況の取得
   *
   * @param {string} prefectureId 都道府県コード
   * @returns {Promise<VaccineApiResponse>} ワクチン接種状況
   */
  async getVaccine(prefectureId: string): Promise<VaccineApiResponse> {
    const now = moment().tz('Asia/Tokyo').format();

    const prefectureCode = this.convertStringToNum(prefectureId);

    const vaccineEntity: VaccineEntity[] = await this.vaccineFireStoreRepository.getVaccine(
      prefectureCode,
    );

    const vaccineResponse: VaccineResponse[] = vaccineEntity.map((entity) =>
      this.buildVaccineResponse(entity),
    );

    return new VaccineApiResponse(
      new InfoResponse(now, prefectureCode),
      vaccineResponse,
    );
  }

  /**
   * 文字列型の都道府県コード
   *
   * @param {string} prefectureId
   * @returns {number} 数値型の都道府県コード
   */
  private convertStringToNum(prefectureId: string): number {
    return Number(prefectureId);
  }

  /**
   *
   *
   * @param {VaccineEntity} vaccineEntity
   * @returns {VaccineResponse}
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

  // 日付をYYYY-MM-DDの書式で返すメソッド
  private formatDate(dt: Date): string {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return y + '-' + m + '-' + d;
  }
}
