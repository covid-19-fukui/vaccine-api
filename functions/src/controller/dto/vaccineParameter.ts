import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumberString } from 'class-validator';

export default class VaccineParameter {
  @ApiProperty({ example: 18, description: '都道府県コード(福井県のみ対応)' })
  @IsNotEmpty()
  @IsNumberString()
  prefectureCode: string;

  @ApiProperty({ example: '2021-06-11', description: 'ISO8601形式の日付' })
  @IsDateString()
  date: string;

  /**
   * コンストラクタ
   *
   * @param {string} prefectureCode prefectureCode
   * @param {string} date date
   */
  constructor(prefectureCode: string, date: string) {
    this.prefectureCode = prefectureCode;
    this.date = date;
  }
}
