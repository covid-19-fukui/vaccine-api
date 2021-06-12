import * as admin from 'firebase-admin';

export default class VaccineEntity {
  /**
   * コンストラクタ
   *
   * @param {string} id
   * @param {number} prefecture
   * @param {admin.firestore.Timestamp} date
   * @param {number} countFirst
   * @param {number} countSecond
   * @param {number} percentageFirst
   * @param {number} percentageSecond
   * @param {number} countMaleFirst
   * @param {number} countMaleSecond
   * @param {number} percentageMaleFirst
   * @param {number} percentageMaleSecond
   * @param {number} countFemaleFirst
   * @param {number} countFemaleSecond
   * @param {number} percentageFemaleFirst
   * @param {number} percentageFemaleSecond
   * @param {number} countOldFirst
   * @param {number} countOldSecond
   * @param {number} percentageOldFirst
   * @param {number} percentageOldSecond
   * @param {number} countYoungFirst
   * @param {number} countYoungSecond
   * @param {number} percentageYoungFirst
   * @param {number} percentageYoungSecond
   */
  constructor(
    readonly id: string,
    readonly prefecture: number,
    readonly date: admin.firestore.Timestamp,
    readonly countFirst: number,
    readonly countSecond: number,
    readonly percentageFirst: number,
    readonly percentageSecond: number,
    readonly countMaleFirst: number,
    readonly countMaleSecond: number,
    readonly percentageMaleFirst: number,
    readonly percentageMaleSecond: number,
    readonly countFemaleFirst: number,
    readonly countFemaleSecond: number,
    readonly percentageFemaleFirst: number,
    readonly percentageFemaleSecond: number,
    readonly countOldFirst: number,
    readonly countOldSecond: number,
    readonly percentageOldFirst: number,
    readonly percentageOldSecond: number,
    readonly countYoungFirst: number,
    readonly countYoungSecond: number,
    readonly percentageYoungFirst: number,
    readonly percentageYoungSecond: number,
  ) {}
}
