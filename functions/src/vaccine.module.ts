import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { VaccineController } from './controller/vaccine.controller';
import { HttpExceptionFilter } from './controller/http.exception.filter';
import { VaccineFireStoreRepository } from './repository/vaccine.repository';
import FireStoreConfig from './config/firestore.config';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import FirestoreCollectionConfig from './config/firestore.collection.config';
import { VaccineService } from './service/vaccine.service';

admin.initializeApp();
const firestore = admin.firestore();
const firestoreCollectionConfig: FirestoreCollectionConfig = functions.config()
  .firestore.collections;

@Module({
  imports: [],
  controllers: [VaccineController],
  providers: [
    { provide: 'FIRESTORE', useValue: firestore },
    VaccineService,
    VaccineFireStoreRepository,
    FireStoreConfig,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    {
      provide: 'FIRESTORE_COLLECTIONS_CONFIG',
      useValue: firestoreCollectionConfig,
    },
  ],
})
export class VaccineModule {}
