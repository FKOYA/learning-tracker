# .github/instructions/

GitHub Copilot のパス限定インストラクションを置くディレクトリ。

## 追加するとき

`AGENTS.md`（リポジトリ全体のルール）だけでは足りない、特定のパス（glob）にだけ適用したいルールができたときに追加する（例: `src/**/*.test.ts` 専用のテスト規約など）。まだ具体的な必要が無いため、現時点ではこのディレクトリにファイルはない。

## 形式

`.github/instructions/<name>.instructions.md` を作成し、先頭に対象パスを指定する frontmatter を置く。

```yaml
---
applyTo: "src/**/*.test.ts"
---
```

以降に、そのパスに適用したいルールを Markdown で書く。
