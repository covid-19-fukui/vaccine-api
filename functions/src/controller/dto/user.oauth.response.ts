import { ApiProperty } from '@nestjs/swagger';
import OauthModel from '../../domain/oauth.model';
/**
 * ユーザ取得APIのレスポンス
 */
export default class UserOauthResponse {
  @ApiProperty()
  private readonly oauth: OauthModel;

  /**
   * コンストラクタ
   *
   * @param oauth oauth
   */
  constructor(oauth: OauthModel) {
    this.oauth = oauth;
  }

  /**
   * tokenの取得
   *
   * @returns token
   */
  getOauth(): OauthModel {
    return this.oauth;
  }
}
