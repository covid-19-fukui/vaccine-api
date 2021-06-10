export default class UserEntity {
  /**
   * コンストラクタ
   *
   * @param userId ユーザID
   * @param accessToken AccessToken
   * @param accessTokenSecret AccessTokenSecret
   */
  constructor(
    private readonly userId: string,
    private readonly accessToken: string,
    private readonly accessTokenSecret: string,
  ) {}

  /**
   * ユーザID取得
   *
   * @returns ユーザID
   */
  getUserId(): string {
    return this.userId;
  }

  /**
   * AccessToken取得
   *
   * @returns AccessToken
   */
  getAccessToken(): string {
    return this.accessToken;
  }

  /**
   * AccessTokenSecret取得
   *
   * @returns AccessTokenSecret
   */
  getAccessTokenSecret(): string {
    return this.accessTokenSecret;
  }
}
