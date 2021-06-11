import { ApiProperty } from '@nestjs/swagger';
import InfoResponse from './info.response';
import VaccineResponse from './vaccine.response';
/**
 * ユーザ取得APIのレスポンス
 */
export default class VaccineApiResponse {
  @ApiProperty()
  readonly info: InfoResponse;

  @ApiProperty({ type: [VaccineResponse] })
  readonly vaccination: VaccineResponse[];

  /**
   * コンストラクタ
   *
   * @param vaccination ワクチン接種状況
   */
  constructor(info: InfoResponse, vaccination: VaccineResponse[]) {
    this.info = info;
    this.vaccination = vaccination;
  }
}
