# AGENTS.md

Next.js (App Router) + React + TypeScript で書かれた学習進捗トラッカー。GitHub Copilot / Claude Code など、このリポジトリで作業する AI エージェント共通のルールをまとめたもの。

## セットアップ・コマンド

- `npm run dev` — 開発サーバー起動
- `npm run lint` — ESLint
- `npm run test` — Vitest（単発実行）
- `npm run test:watch` — Vitest（watch）
- `npm run build` — 本番ビルド

## コーディング規約

- TypeScript / ESLint（`eslint.config.mjs`、eslint-config-next ベース）の設定に従う
- スタイリングは Tailwind CSS v4
- テストは Vitest + Testing Library。テストファイルはテスト対象と同じディレクトリに `*.test.ts(x)` として置く（例: `src/lib/progress.ts` と `src/lib/progress.test.ts`）
- 変更を加えたら `npm run lint` と `npm run test` を通すこと

## PR作成時の注意

- `.github/PULL_REQUEST_TEMPLATE.md` の項目（変更内容・変更理由・Copilotの活用ポイント・動作確認方法）を埋めること
- ローカルでの動作確認、可能であれば Vercel プレビューでの確認を行うこと

## 補足

- ここに書かれていないファイル構成は都度リポジトリを探索して把握すること（陳腐化するためファイルツリーはここに書かない）
- サブディレクトリ固有のルールが必要になった場合は、そのディレクトリ配下に `AGENTS.md` を追加する（例: `src/app/api/AGENTS.md`）。ルートの内容と重複させず差分のみを書く
