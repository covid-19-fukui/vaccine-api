# Ii-Ne-bot-udb

[![test](https://github.com/FooQooProject/Ii-Ne-bot-udb/actions/workflows/test.yaml/badge.svg)](https://github.com/FooQooProject/Ii-Ne-bot-udb/actions/workflows/test.yaml)
[![codecov](https://codecov.io/gh/FooQooProject/Ii-Ne-bot-user-api/branch/develop/graph/badge.svg?token=K6P127HQC8)](https://codecov.io/gh/FooQooProject/Ii-Ne-bot-user-api)

## ステージング環境

```
# プロジェクト
$ firebase use ii-ne-bot-staging
# 環境変数の設定
$ firebase functions:config:set firestore.collection="stg-users"
# デプロイ
$ firebase deploy --only functions
# 動作確認
$ curl "https://us-central1-ii-ne-bot-staging.cloudfunctions.net/api/v1/user/0DRaFzKjusT7LSgtq8WC" -i
```

## 動作確認

```bash
$ firebase emulators:start --import=./data/ --export-on-exit

$ curl "http://localhost:5001/ii-ne-bot/us-central1/api/v1/user/uKxglANVQw2mURl29QeM"
```
