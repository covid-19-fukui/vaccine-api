import { ApiProperty } from '@nestjs/swagger';
import InfoResponse from './info.response';
import VaccineResponse from './vaccine.response';
/**
 * ユーザ取得APIのレスポンス
 */
export default class VaccineApiResponse {
  @ApiProperty({ description: 'リクエスト情報' })
  readonly info: InfoResponse;

  @ApiProperty({ type: [VaccineResponse], description: 'ワクチン接種状況' })
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
