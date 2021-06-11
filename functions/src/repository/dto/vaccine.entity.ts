import * as admin from 'firebase-admin';

export default class VaccineEntity {
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
