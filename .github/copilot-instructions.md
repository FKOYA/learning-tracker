# Copilot向け補足

このリポジトリの規約・コマンドは [`AGENTS.md`](../AGENTS.md) を正としています。Copilot Coding Agent は AGENTS.md を直接読み込みますが、Copilot Chat やコードレビューなど、このファイルを参照する機能向けに要点だけ記載しています。

- 開発: `npm run dev` / Lint: `npm run lint` / Test: `npm run test`
- 変更時は AGENTS.md の規約（TypeScript, ESLint, Vitest でのテスト配置ルールなど）に従うこと

特定のパス（例: テストファイルのみ）に固有のルールが必要な場合は `.github/instructions/*.instructions.md` を追加する（詳細は [`instructions/README.md`](instructions/README.md) 参照）。
