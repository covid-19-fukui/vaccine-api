import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInt, IsOptional, Max, Min } from 'class-validator';

export default class VaccineQuery {
  @ApiProperty({ example: 18, description: '都道府県コード(福井県のみ対応)' })
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  readonly prefectureCode: number;

  @ApiProperty({
    example: 30,
    description: '取得日数',
    default: 30,
    required: false,
  })
  @IsInt()
  @Min(1)
  @Max(30)
  @IsOptional()
  @Type(() => Number)
  readonly count: number = 30;

  /**
   * コンストラクタ
   *
   * @param {number} prefectureCode prefectureCode
   * @param {number} count count
   */
  constructor(prefectureCode: number, count: number) {
    this.prefectureCode = prefectureCode;
    if (count) {
      this.count = count;
    }
  }
}
