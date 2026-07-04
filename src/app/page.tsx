type LearningItem = {
  title: string;
  progress: number;
  memo: string;
};

const learningItems: LearningItem[] = [
  {
    title: "Next.js App Router",
    progress: 70,
    memo: "Server Components とレイアウト構造を復習中",
  },
  {
    title: "TypeScript",
    progress: 45,
    memo: "型推論と Union / Intersection の使い分けを強化",
  },
  {
    title: "SQL",
    progress: 30,
    memo: "JOIN と集計クエリのパターンをハンズオンで学習",
  },
  {
    title: "Docker",
    progress: 55,
    memo: "マルチステージビルドと開発環境の最適化を試す",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-10 text-slate-900 sm:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-8">
          <p className="text-sm font-semibold tracking-wide text-sky-700">LEARNING TRACKER</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">学習項目一覧</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            title・progress・memo をカード形式で管理するシンプルなページです。
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>

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
        </section>
      </div>
      </main>

  );
}
