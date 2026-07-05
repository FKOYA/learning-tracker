# .claude/skills/

Claude Code の Agent Skills（再利用可能な手順・知識のまとまり）を置くディレクトリ。

## 追加するとき

このリポジトリ固有の、繰り返し発生する複数ステップの作業手順ができたときに追加する（例: 進捗データの移行手順など）。一度きりの作業のために Skill を作らない。まだ該当するものが無いため、現時点ではこのディレクトリに Skill はない。

## 形式

```
.claude/skills/<skill-name>/
├── SKILL.md      必須。YAML frontmatter + 手順本文
├── scripts/      任意。実行可能なスクリプト
├── references/   任意。必要時に読み込まれる参考資料
└── assets/       任意。テンプレートなど成果物用ファイル
```

`SKILL.md` の frontmatter:

```yaml
---
name: skill-name        # kebab-case。ディレクトリ名と一致させる
description: いつ使う Skill かを1文で
# 任意: allowed-tools, disable-model-invocation, user-invocable
---
```
