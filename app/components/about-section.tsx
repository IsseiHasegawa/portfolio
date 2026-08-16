import type { Content } from "../data/content";
import { Section } from "./section";

// about オブジェクトだけを受け取る
type AboutSectionProps = {
  about: Content["about"];
};

// 自己紹介セクション
export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about" title={about.title}>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        {about.body} {/* 長文プロフィール */}
      </p>
    </Section>
  );
}
