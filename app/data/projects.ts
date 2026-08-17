// プロジェクト1件分。技術スタック（tags）と URL は翻訳不要なので共通で持つ。
export type Project = {
  id: string;
  tags: string[]; // 使用技術。そのまま表示するので訳さない
  link?: string;
  en: { title: string; body: string; linkLabel: string };
  ja: { title: string; body: string; linkLabel: string };
};

export const projects: Project[] = [
  {
    id: "pseudoscope",
    tags: ["C", "C++", "Python", "Tree-sitter", "Linux", "Git"],
    link: "https://github.com/IsseiHasegawa/PseudoScope",
    en: {
      title: "PseudoScope",
      body: "A mutation-testing tool that finds pseudo-tested code: functions whose bodies can be changed arbitrarily without a single test failing. It mutates each function, rebuilds the project, and reruns the suite, so coverage numbers that only look reassuring are exposed as such.",
      linkLabel: "GitHub",
    },
    ja: {
      title: "PseudoScope",
      body: "擬似テスト済みコード、つまり本体をどう書き換えてもテストが1つも失敗しない関数を検出するミューテーションテストツールです。各関数を変異させてプロジェクトを再ビルドし、テストを再実行することで、見かけ上のカバレッジが実質を伴っていない箇所を明らかにします。",
      linkLabel: "GitHub",
    },
  },
  {
    id: "distributed-key-value-store",
    tags: ["C++", "Distributed Systems", "Fault Injection", "Linux"],
    link: "https://x.gd/ERwXc",
    en: {
      title: "Distributed Key-Value Store",
      body: "A research prototype built to measure what failure detection and replication actually cost. Heartbeat detection with tunable intervals and timeouts, synchronous and asynchronous replication modes, and fault-injection experiments that quantify detection latency, downtime, and false positives.",
      linkLabel: "Research report",
    },
    ja: {
      title: "分散キーバリューストア",
      body: "障害検出とレプリケーションの実コストを測定するために構築した研究用プロトタイプです。間隔とタイムアウトを調整できるハートビート検出、同期・非同期の両レプリケーションモード、そして検出レイテンシ・ダウンタイム・誤検出を定量化する障害注入実験を備えています。",
      linkLabel: "研究レポート",
    },
  },
];
