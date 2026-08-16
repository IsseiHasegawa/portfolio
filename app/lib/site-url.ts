// 本番の公開 URL。canonical・OGP・sitemap・robots が同じ値を参照する必要があるため
// ここに集約する。独自ドメイン > Vercel の自動割り当て > ローカル の優先順位で決める。
export function siteUrl(): string {
  // 独自ドメインを使う場合はこれを設定する（最優先）
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    // 末尾スラッシュを除いて統一
    return explicit.replace(/\/$/, "");
  }

  // Vercel デプロイ時に自動設定されるホスト名
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    // https:// を付け、余分なスラッシュや既存のプロトコルを除去
    return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  // ローカル開発時のデフォルト
  return "http://localhost:3000";
}
