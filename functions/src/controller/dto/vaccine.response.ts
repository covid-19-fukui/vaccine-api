import { ApiProperty } from '@nestjs/swagger';

export default class VaccineResponse {
  @ApiProperty({ example: '2021-06-10', description: '接種状況の集計日' })
  readonly date: string;
  @ApiProperty({ example: 1635, description: '一回目の接種人数(当日分)' })
  readonly countFirst: number;
  @ApiProperty({ example: 795, description: '二回目の接種人数(当日分)' })
  readonly countSecond: number;
  @ApiProperty({
    example: 10.720296859741211,
    description: '一回目の接種率(累計)',
  })
  readonly percentageFirst: number;
  @ApiProperty({
    example: 1.9734556674957275,
    description: '二回目の接種率(累計)',
  })
  readonly percentageSecond: number;
  @ApiProperty({
    example: 710,
    description: '男性の場合の一回目の接種人数(当日分)',
  })
  readonly countMaleFirst: number;
  @ApiProperty({
    example: 342,
    description: '男性の場合の二回目の接種人数(当日分)',
  })
  readonly countMaleSecond: number;
  @ApiProperty({
    example: 8.994806289672852,
    description: '男性の場合の一回目の接種率(累計)',
  })
  readonly percentageMaleFirst: number;
  @ApiProperty({
    example: 1.4131945371627808,
    description: '男性の場合の二回目の接種率(累計)',
  })
  readonly percentageMaleSecond: number;
  @ApiProperty({
    example: 925,
    description: '女性の場合の一回目の接種人数(当日分)',
  })
  readonly countFemaleFirst: number;
  @ApiProperty({
    example: 452,
    description: '女性の場合の二回目の接種人数(当日分)',
  })
  readonly countFemaleSecond: number;
  @ApiProperty({
    example: 12.296463966369629,
    description: '女性の場合の一回目の接種率(累計)',
  })
  readonly percentageFemaleFirst: number;
  @ApiProperty({
    example: 2.4895737171173096,
    description: '女性の場合の二回目の接種率(累計)',
  })
  readonly percentageFemaleSecond: number;
  @ApiProperty({
    example: 1579,
    description: '65歳以上の場合の一回目の接種人数(当日分)',
  })
  readonly countOldFirst: number;
  @ApiProperty({
    example: 780,
    description: '65歳以上の場合の二回目の接種人数(当日分)',
  })
  readonly countOldSecond: number;
  @ApiProperty({
    example: 34.7356071472168,
    description: '65歳以上の場合の一回目の接種率(累計)',
  })
  readonly percentageOldFirst: number;
  @ApiProperty({
    example: 6.338403701782227,
    description: '65歳以上の場合の二回目の接種率(累計)',
  })
  readonly percentageOldSecond: number;
  @ApiProperty({
    example: 56,
    description: '64歳以下の場合の一回目の接種人数(当日分)',
  })
  readonly countYoungFirst: number;
  @ApiProperty({
    example: 14,
    description: '64歳以下の場合の二回目の接種人数(当日分)',
  })
  readonly countYoungSecond: number;
  @ApiProperty({
    example: 0.48504239320755005,
    description: '64歳以下の場合の一回目の接種率(累計)',
  })
  readonly percentageYoungFirst: number;
  @ApiProperty({
    example: 0.11048593372106552,
    description: '64歳以下の場合の一回目の接種率(累計)',
  })
  readonly percentageYoungSecond: number;

  /**
   * コンストラクタ
   *
   * @param {string} date 接種状況の集計日
   * @param {number} countFirst 一回目の接種人数(当日分)
   * @param {number} countSecond 二回目の接種人数(当日分)
   * @param {number} percentageFirst 一回目の接種率(累計)
   * @param {number} percentageSecond 二回目の接種率(累計)
   * @param {number} countMaleFirst 男性の場合の一回目の接種人数(当日分)
   * @param {number} countMaleSecond 男性の場合の二回目の接種人数(当日分)
   * @param {number} percentageMaleFirst 男性の場合の一回目の接種率(累計)
   * @param {number} percentageMaleSecond 男性の場合の二回目の接種率(累計)
   * @param {number} countFemaleFirst 女性の場合の一回目の接種人数(当日分)
   * @param {number} countFemaleSecond 女性の場合の二回目の接種人数(当日分)
   * @param {number} percentageFemaleFirst 女性の場合の一回目の接種率(累計)
   * @param {number} percentageFemaleSecond 女性の場合の二回目の接種率(累計)
   * @param {number} countOldFirst 65歳以上の場合の一回目の接種人数(当日分)
   * @param {number} countOldSecond 65歳以上の場合の二回目の接種人数(当日分)
   * @param {number} percentageOldFirst 65歳以上の場合の一回目の接種率(累計)
   * @param {number} percentageOldSecond 65歳以上の場合の二回目の接種率(累計)
   * @param {number} countYoungFirst 64歳以下の場合の一回目の接種人数(当日分)
   * @param {number} countYoungSecond 64歳以下の場合の二回目の接種人数(当日分)
   * @param {number} percentageYoungFirst 64歳以下の場合の一回目の接種率(累計)
   * @param {number} percentageYoungSecond 64歳以下の場合の二回目の接種率(累計)
   */
  constructor(
    date: string,
    countFirst: number,
    countSecond: number,
    percentageFirst: number,
    percentageSecond: number,
    countMaleFirst: number,
    countMaleSecond: number,
    percentageMaleFirst: number,
    percentageMaleSecond: number,
    countFemaleFirst: number,
    countFemaleSecond: number,
    percentageFemaleFirst: number,
    percentageFemaleSecond: number,
    countOldFirst: number,
    countOldSecond: number,
    percentageOldFirst: number,
    percentageOldSecond: number,
    countYoungFirst: number,
    countYoungSecond: number,
    percentageYoungFirst: number,
    percentageYoungSecond: number,
  ) {
    this.date = date;
    this.countFirst = countFirst;
    this.countSecond = countSecond;
    this.percentageFirst = percentageFirst;
    this.percentageSecond = percentageSecond;
    this.countMaleFirst = countMaleFirst;
    this.countMaleSecond = countMaleSecond;
    this.percentageMaleFirst = percentageMaleFirst;
    this.percentageMaleSecond = percentageMaleSecond;
    this.countFemaleFirst = countFemaleFirst;
    this.countFemaleSecond = countFemaleSecond;
    this.percentageFemaleFirst = percentageFemaleFirst;
    this.percentageFemaleSecond = percentageFemaleSecond;
    this.countOldFirst = countOldFirst;
    this.countOldSecond = countOldSecond;
    this.percentageOldFirst = percentageOldFirst;
    this.percentageOldSecond = percentageOldSecond;
    this.countYoungFirst = countYoungFirst;
    this.countYoungSecond = countYoungSecond;
    this.percentageYoungFirst = percentageYoungFirst;
    this.percentageYoungSecond = percentageYoungSecond;
  }
}
