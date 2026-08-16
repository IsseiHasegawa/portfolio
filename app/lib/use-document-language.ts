import { useEffect } from "react";
import type { Language } from "../data/content";

// 言語切替はクライアントの state だけで行うため、layout.tsx が出力した
// <html lang="en"> が日本語表示に切り替えても "en" のまま残る。
// スクリーンリーダーが日本語を英語の発音で読み上げてしまうので、切替に追従させる。
//
// 注意: これはクライアント側の補正であり、SEO 上の多言語対応にはならない。
// 検索エンジンに認識させるには /en, /ja のルーティング分割が必要。
export function useDocumentLanguage(language: Language): void {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
}
