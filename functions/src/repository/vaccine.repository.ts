import { Injectable } from '@nestjs/common';
import FireStoreConfig from '../config/firestore.config';
import VaccineEntity from './dto/vaccine.entity';
import * as admin from 'firebase-admin';
import moment from 'moment';

/**
 * ユーザを取得するサービス層
 */
@Injectable()
export class VaccineFireStoreRepository {
  /**
   * ユーザクラスへの変換
   */
  private readonly VACCINE_CONVERTER = {
    toFirestore(vaccineEntity: VaccineEntity): admin.firestore.DocumentData {
      return {
        id: vaccineEntity.id,
        date: vaccineEntity.date,
        countFirst: vaccineEntity.countFirst,
        countSecond: vaccineEntity.countSecond,
        percentageFirst: vaccineEntity.percentageFirst,
        percentageSecond: vaccineEntity.percentageSecond,
        countMaleFirst: vaccineEntity.countMaleFirst,
        countMaleSecond: vaccineEntity.countMaleSecond,
        percentageMaleFirst: vaccineEntity.percentageMaleFirst,
        percentageMaleSecond: vaccineEntity.percentageMaleSecond,
        countFemaleFirst: vaccineEntity.countFemaleFirst,
        countFemaleSecond: vaccineEntity.countFemaleSecond,
        percentageFemaleFirst: vaccineEntity.percentageFemaleFirst,
        percentageFemaleSecond: vaccineEntity.percentageFemaleSecond,
        countOldFirst: vaccineEntity.countOldFirst,
        countOldSecond: vaccineEntity.countOldSecond,
        percentageOldFirst: vaccineEntity.percentageOldFirst,
        percentageOldSecond: vaccineEntity.percentageOldSecond,
        countYoungFirst: vaccineEntity.countOldFirst,
        countYoungSecond: vaccineEntity.countOldSecond,
        percentageYoungFirst: vaccineEntity.percentageYoungFirst,
        percentageYoungSecond: vaccineEntity.percentageYoungSecond,
      };
    },
    fromFirestore(
      snapshot: admin.firestore.QueryDocumentSnapshot,
    ): VaccineEntity {
      const data = snapshot.data();
      return new VaccineEntity(
        data.id,
        data['prefecture'],
        data['date'],
        data['countFirst'],
        data['countSecond'],
        data['percentageFirst'],
        data['percentageSecond'],
        data['countMaleFirst'],
        data['countMaleSecond'],
        data['percentageMaleFirst'],
        data['percentageMaleSecond'],
        data['countFemaleFirst'],
        data['countFemaleSecond'],
        data['percentageFemaleFirst'],
        data['percentageFemaleSecond'],
        data['countOldFirst'],
        data['countOldSecond'],
        data['percentageOldFirst'],
        data['percentageOldSecond'],
        data['countYoungFirst'],
        data['countYoungSecond'],
        data['percentageYoungFirst'],
        data['percentageYoungSecond'],
      );
    },
  };

  /**
   * コンストラクタ
   *
   * @param {FireStoreConfig} fireStoreConfig FireStoreの設定
   */
  constructor(private readonly fireStoreConfig: FireStoreConfig) {}

  /**
   * ワクチン接種状況の一覧取得
   *
   * @param {number} prefetcureCode 都道府県コード
   * @param {number} count 取得件数
   * @returns {Promise<VaccineEntity[]>} firestoreのレスポンス
   */
  async getVaccines(
    prefectureCode: number,
    count: number,
  ): Promise<VaccineEntity[]> {
    return (
      await this.fireStoreConfig
        .getVaccination()
        .withConverter(this.VACCINE_CONVERTER)
        .where('prefecture', '==', prefectureCode)
        .orderBy('date', 'desc')
        .limit(count)
        .get()
    ).docs.map((doc) => doc.data());
  }

  /**
   * ワクチン接種状況の取得
   *
   * @param {number} prefetcureCode 都道府県コード
   * @param {Date} date 日付
   * @returns {Promise<VaccineEntity[]>} firestoreのレスポンス
   */
  async getVaccine(
    prefectureCode: number,
    date: moment.Moment,
  ): Promise<VaccineEntity[]> {
    return (
      await this.fireStoreConfig
        .getVaccination()
        .withConverter(this.VACCINE_CONVERTER)
        .where('prefecture', '==', prefectureCode)
        .where('date', '>=', date.startOf('day').toDate())
        .where('date', '<=', date.endOf('day').toDate())
        .orderBy('date', 'desc')
        .limit(1)
        .get()
    ).docs.map((doc) => doc.data());
  }
}
