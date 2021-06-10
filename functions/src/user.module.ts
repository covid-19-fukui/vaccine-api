import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import UserController from './controller/user.controller';
import { HttpExceptionFilter } from './controller/http.exception.filter';
import UserService from './service/user.service';
import UserFireStoreRepository from './repository/user.repository';
import FireStoreConfig from './config/firestore.config';
import * as admin from 'firebase-admin';
import OauthSharedService from './sharedservice/oauth.sharedservice';
import * as functions from 'firebase-functions';
import TwitterTokenConfig from './config/twitter.token.config';
import FirestoreCollectionConfig from './config/firestore.collection.config';

admin.initializeApp();
const firestore = admin.firestore();
const twitterTokenConfig: TwitterTokenConfig = functions.config().twitter.token;
const firestoreCollectionConfig: FirestoreCollectionConfig = functions.config()
  .firestore.collections;

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    { provide: 'FIRESTORE', useValue: firestore },
    UserService,
    OauthSharedService,
    UserFireStoreRepository,
    FireStoreConfig,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: 'TWITTER_TOKEN_CONFIG', useValue: twitterTokenConfig },
    {
      provide: 'FIRESTORE_COLLECTIONS_CONFIG',
      useValue: firestoreCollectionConfig,
    },
  ],
})
export default class UserModule {}
