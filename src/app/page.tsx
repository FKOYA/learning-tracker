import { sortByProgressDesc } from "@/lib/progress";

type LearningItem = {
  title: string;
  category: string;
  tags: string[];
  progress: number;
  memo: string;
};

const learningItems: LearningItem[] = [
  {
    title: "Next.js App Router",
    category: "Frontend",
    tags: ["App Router", "Server Components", "Layout"],
    progress: 70,
    memo: "Server Components とレイアウト構造を復習中",
  },
  {
    title: "TypeScript",
    category: "Language",
    tags: ["Type Inference", "Union", "Intersection"],
    progress: 45,
    memo: "型推論と Union / Intersection の使い分けを強化",
  },
  {
    title: "SQL",
    category: "Database",
    tags: ["JOIN", "Aggregation", "Hands-on"],
    progress: 30,
    memo: "JOIN と集計クエリのパターンをハンズオンで学習",
  },
  {
    title: "Docker",
    category: "Infrastructure",
    tags: ["Multi-stage Build", "Dev Environment"],
    progress: 55,
    memo: "マルチステージビルドと開発環境の最適化を試す",
  },
];

export default function Home() {
  const sortedLearningItems = sortByProgressDesc(learningItems);
  const categoryOrder = [...new Set(learningItems.map((item) => item.category))];
  const itemsByCategory = new Map<string, LearningItem[]>();

  for (const item of sortedLearningItems) {
    const existingItems = itemsByCategory.get(item.category);

    if (existingItems) {
      existingItems.push(item);
      continue;
    }

    itemsByCategory.set(item.category, [item]);
  }

  const groupedLearningItems = categoryOrder
    .map((category) => ({
      category,
      items: itemsByCategory.get(category) ?? [],
    }))
    .filter((group) => group.items.length > 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-10 text-slate-900 sm:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8">
          <p className="text-sm font-semibold tracking-wide text-sky-700">LEARNING TRACKER</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">学習項目一覧</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            title・category・tags・progress・memo をカード形式で管理するシンプルなページです。
          </p>
        </header>

        <div className="space-y-8">
          {groupedLearningItems.map((group) => (
            <section key={group.category}>
              <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-800">{group.category}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <div className="mb-1 flex items-center justify-between text-xs text-slate-600">
                        <span>progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-sky-500"
                          style={{ width: `${item.progress}%` }}
                          aria-label={`${item.title} progress ${item.progress}%`}
                        />
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-700">
                      <span className="mr-1 font-medium text-slate-500">memo:</span>
                      {item.memo}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
