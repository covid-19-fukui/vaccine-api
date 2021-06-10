import { IsNotEmpty, IsString } from 'class-validator';

export default class UserOauthRequest {
  @IsNotEmpty()
  @IsString()
  tweetId: string;

  /**
   * コンストラクタ
   *
   * @param tweetId tweetId
   */
  constructor(tweetId: string) {
    this.tweetId = tweetId;
  }
}
