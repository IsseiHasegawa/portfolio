import { siteLinks } from "../data/site-links";
import type { Content } from "../data/content";
import { ButtonLink } from "./button-link";
import { Section } from "./section";

type ContactSectionProps = {
  contact: Content["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <Section id="contact" title={contact.title}>
      <p className="mb-6 max-w-2xl text-lg text-slate-600">{contact.body}</p>

      <div className="flex flex-wrap gap-4">
        <ButtonLink href={siteLinks.email} variant="primary">
          {contact.email}
        </ButtonLink>
        <ButtonLink href={siteLinks.github} external>
          GitHub
        </ButtonLink>
        <ButtonLink href={siteLinks.linkedIn} external>
          LinkedIn
        </ButtonLink>
        <ButtonLink href={siteLinks.resume} external>
          {contact.resume}
        </ButtonLink>
      </div>
    </Section>
  );
}
