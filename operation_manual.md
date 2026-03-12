# TODO App Operation Manual

This manual explains how to run and use the simple TODO application.

## Prerequisites
- Python (with `uv` installed)
- Node.js & npm

## Component Setup

### Backend (FastAPI)
1. Navigate to the `backend` directory.
2. The backend uses `uv` for dependency management.
3. Start the backend server:
   ```bash
   uv run python main.py
   ```
   The server will run at `http://localhost:8000`.

### Frontend (React + Vite)
1. Navigate to the `frontend` directory.
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

## E2E Testing (Playwright)
ブラウザでの自動テストを実行する手順です。
1. `e2e` ディレクトリに移動します。
2. 開発サーバー（FrontendとBackendの両方）が実行されていることを確認してください。
3. テストを実行します：
   ```bash
   npm test
   ```
   テスト結果がコンソールに表示されます。

## How to Use
1. Open your browser and go to `http://localhost:5173`.
2. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter.
3. **Complete a Task**: Click the checkbox next to a task to toggle its completion status.
4. **Delete a Task**: Click the "✕" button on the right side of a task to remove it.
