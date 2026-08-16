import { useEffect, useState } from "react";

// 画面上端付近の判定バンド。固定ヘッダーの高さ分だけ下げ、下側は大きく削って
// 「今読んでいる」セクションだけがバンドに入るようにする。
const DETECTION_BAND = "-88px 0px -70% 0px";

// スクロール位置に対応するセクションの id を返す。どれにも該当しないとき
// （ヒーロー表示中など）は null。ids はページ上の並び順で渡すこと。
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    // IntersectionObserver は「変化した要素」しか通知しないため、
    // 現在見えているものを自前で保持して毎回そこから判定する
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }

        // 複数が同時に入ることがあるので、ページ上で最も先に来るものを採用する
        setActiveId(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: DETECTION_BAND },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
