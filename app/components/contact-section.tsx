import { siteLinks } from "../data/site-links";
import type { Content } from "../data/content";
import { ButtonLink } from "./button-link";
import { Section } from "./section";

type ContactSectionProps = {
  contact: Content["contact"];
};

// 連絡先セクション
export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <Section id="contact" title={contact.title}>
      <p className="mb-6 max-w-2xl text-lg text-slate-600">{contact.body}</p>

      <div className="flex flex-wrap gap-4">
        <ButtonLink href={siteLinks.email} variant="primary">
          {contact.email} {/* mailto: リンク */}
        </ButtonLink>
        <ButtonLink href={siteLinks.github} external>
          GitHub
        </ButtonLink>
        {/* URL 未設定のうちは出さない（site-links.ts を参照） */}
        {siteLinks.linkedIn ? (
          <ButtonLink href={siteLinks.linkedIn} external>
            LinkedIn
          </ButtonLink>
        ) : null}
        <ButtonLink href={siteLinks.resume} external>
          {contact.resume}
        </ButtonLink>
      </div>
    </Section>
  );
}
