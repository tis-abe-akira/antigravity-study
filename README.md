# Antigravity Study - シンプルなTODOアプリ

React/Viteを使用したフロントエンドと、FastAPI（Python）を使用したバックエンドを組み合わせた、フルスタックのTODOアプリケーションです。

## 特徴
- **タスク管理**: リアルタイムに追加・完了・削除が可能
- **データ永続化**: ローカルのSQLiteデータベースにデータを保存
- **モダンUI**: グラデーションやバックドロップフィルターを採用したプレミアムなデザイン
- **E2Eテスト**: Playwright を用いた安定した自動テストスイート

## アプリケーションの動作

アプリケーションの動作の様子は以下の動画をご覧ください。

### 実際の動作画面
![検証成功時の録画](docs/assets/test_todo_app_final_success_1773350677088.webp)

### E2Eテスト実行の様子
![E2Eテスト結果](docs/assets/test_todo_app_retry_1773350501474.webp)

## プロジェクト構成

- `frontend/` - React (Vite) を使用したフロントエンドアプリケーション
- `backend/` - FastAPI (uv) を使用したバックエンドアプリケーション
- `e2e/` - Playwright を使用したE2Eテストスイート
- `docs/` - ドキュメントおよびWebP形式の動作確認動画など
  - [プロジェクト・ウォークスルー](docs/walkthrough.md)
- `operation_manual.md` - アプリケーションの起動と実行方法についての詳細手順

## 起動方法

アプリケーションの起動や操作の詳細手順については、以下のマニュアルを参照してください。

👉 [操作マニュアル (`operation_manual.md`)](operation_manual.md)
