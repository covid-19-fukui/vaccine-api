import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export default class VaccineParamter {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  prefectureId: string;

  /**
   * コンストラクタ
   *
   * @param prefectureId prefectureId
   */
  constructor(prefectureId: string) {
    this.prefectureId = prefectureId;
  }
}
