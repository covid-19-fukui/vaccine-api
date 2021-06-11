import { ApiProperty } from '@nestjs/swagger';

export default class VaccineResponse {
  @ApiProperty({ example: '2021-06-10' })
  readonly date: string;
  @ApiProperty({ example: 1635 })
  readonly countFirst: number;
  @ApiProperty({ example: 795 })
  readonly countSecond: number;
  @ApiProperty({ example: 10.720296859741211 })
  readonly percentageFirst: number;
  @ApiProperty({ example: 1.9734556674957275 })
  readonly percentageSecond: number;
  @ApiProperty({ example: 710 })
  readonly countMaleFirst: number;
  @ApiProperty({ example: 342 })
  readonly countMaleSecond: number;
  @ApiProperty({ example: 8.994806289672852 })
  readonly percentageMaleFirst: number;
  @ApiProperty({ example: 1.4131945371627808 })
  readonly percentageMaleSecond: number;
  @ApiProperty({ example: 925 })
  readonly countFemaleFirst: number;
  @ApiProperty({ example: 452 })
  readonly countFemaleSecond: number;
  @ApiProperty({ example: 12.296463966369629 })
  readonly percentageFemaleFirst: number;
  @ApiProperty({ example: 2.4895737171173096 })
  readonly percentageFemaleSecond: number;
  @ApiProperty({ example: 1579 })
  readonly countOldFirst: number;
  @ApiProperty({ example: 780 })
  readonly countOldSecond: number;
  @ApiProperty({ example: 34.7356071472168 })
  readonly percentageOldFirst: number;
  @ApiProperty({ example: 6.338403701782227 })
  readonly percentageOldSecond: number;
  @ApiProperty({ example: 56 })
  readonly countYoungFirst: number;
  @ApiProperty({ example: 14 })
  readonly countYoungSecond: number;
  @ApiProperty({ example: 0.48504239320755005 })
  readonly percentageYoungFirst: number;
  @ApiProperty({ example: 0.11048593372106552 })
  readonly percentageYoungSecond: number;

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
