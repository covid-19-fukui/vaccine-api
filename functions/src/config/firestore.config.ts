import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';
import FirestoreCollectionConfig from './firestore.collection.config';

/**
 * FireStoreの設定
 */
@Injectable()
export default class FireStoreConfig {
  /**
   * コンストラクタ
   */
  constructor(
    @Inject('FIRESTORE')
    private readonly firestore: admin.firestore.Firestore,
    @Inject('FIRESTORE_COLLECTIONS_CONFIG')
    private readonly firestoreCollectionsConfig: FirestoreCollectionConfig,
  ) {}

  /**
   * FireStoreの取得
   *
   * @returns FireStore
   */
  getVaccination(): admin.firestore.CollectionReference<admin.firestore.DocumentData> {
    const collectionName = this.firestoreCollectionsConfig.vaccination;
    return this.firestore.collection(collectionName);
  }
}
