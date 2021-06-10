import { Injectable } from '@nestjs/common';
import FireStoreConfig from '../config/firestore.config';
import UserEntity from './dto/user.entity';
import * as admin from 'firebase-admin';

/**
 * ユーザを取得するサービス層
 */
@Injectable()
export default class UserFireStoreRepository {
  /**
   * ユーザクラスへの変換
   */
  private readonly USER_CONVERTER = {
    toFirestore(userEntity: UserEntity): admin.firestore.DocumentData {
      return {
        id: userEntity.getUserId(),
        accessToken: userEntity.getAccessToken(),
        accessTokenSecret: userEntity.getAccessTokenSecret(),
      };
    },
    fromFirestore(snapshot: admin.firestore.QueryDocumentSnapshot): UserEntity {
      const data = snapshot.data();
      return new UserEntity(
        data.id,
        data['accessToken'],
        data['accessTokenSecret'],
      );
    },
  };

  /**
   * コンストラクタ
   *
   * @param fireStoreConfig FireStoreの設定
   */
  constructor(private readonly fireStoreConfig: FireStoreConfig) {}

  /**
   * ユーザの取得
   *
   * @param userId ユーザID
   * @returns ユーザ
   */
  async getUser(userId: string): Promise<UserEntity | undefined> {
    return (
      await this.fireStoreConfig
        .getUsers()
        .withConverter(this.USER_CONVERTER)
        .doc(userId)
        .get()
    ).data();
  }
}
