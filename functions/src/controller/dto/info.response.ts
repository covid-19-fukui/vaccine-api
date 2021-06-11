import { ApiProperty } from '@nestjs/swagger';

export default class InfoResponse {
  @ApiProperty({ example: '2021-06-11T21:18:36+09:00' })
  readonly datetime: string;

  @ApiProperty({ example: '18' })
  readonly prefectureCode: number;

  constructor(datetime: string, prefectureCode: number) {
    this.datetime = datetime;
    this.prefectureCode = prefectureCode;
  }
}
