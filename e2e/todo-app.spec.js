import { test, expect } from '@playwright/test';

test.describe('TODO App E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should add, complete, and delete tasks', async ({ page }) => {
    const input = page.getByPlaceholder('What needs to be done?');
    const addButton = page.getByRole('button', { name: 'Add Task' });

    // ユニークな名前を使用して、既存のデータとの衝突を避ける
    const prefix = `test-${Date.now()}`;
    const taskName1 = `${prefix}-milk`;
    const taskName2 = `${prefix}-dog`;

    // 1. タスクを追加: taskName1
    await input.fill(taskName1);
    await addButton.click();
    await expect(page.getByText(taskName1, { exact: true })).toBeVisible();

    // 2. タスクを追加: taskName2
    await input.fill(taskName2);
    await addButton.click();
    await expect(page.getByText(taskName2, { exact: true })).toBeVisible();

    // 3. taskName1 を完了にする
    // ロールベースのロケーターを使用して確実に1つのアイテムに絞り込む
    const item1 = page.getByRole('listitem').filter({ hasText: taskName1 });
    // セレクターをより具体的に（ボタンやチェックボックスのクラス名を使用）
    await item1.locator('.checkbox').click();
    await expect(item1).toHaveClass(/completed/);

    // 4. taskName2 を削除する
    const item2 = page.getByRole('listitem').filter({ hasText: taskName2 });
    await item2.locator('.delete-btn').click();
    await expect(page.getByText(taskName2, { exact: true })).not.toBeVisible();

    // 最終確認
    await expect(page.getByText(taskName1, { exact: true })).toBeVisible();
    await expect(item1).toHaveClass(/completed/);
  });
});
