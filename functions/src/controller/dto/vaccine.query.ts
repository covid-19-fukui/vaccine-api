import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export default class VaccineQuery {
  @ApiProperty({ example: 18, description: '都道府県コード(福井県のみ対応)' })
  @IsNotEmpty()
  @IsNumberString()
  prefectureCode: string;

  /**
   * コンストラクタ
   *
   * @param {string} prefectureCode prefectureCode
   */
  constructor(prefectureCode: string) {
    this.prefectureCode = prefectureCode;
  }
}
