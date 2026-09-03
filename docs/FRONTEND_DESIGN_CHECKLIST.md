# Frontend Design Checklist

This repository follows the LL GTM Studio frontend design standard. The master standard lives in the private `ll-gtm-studio` repository at `docs/FRONTEND_DESIGN_STANDARD.md`.

Use this local checklist during implementation and review.

## Before implementation

Confirm:

- the target user is clear
- the primary job/action is clear
- the page has a one-sentence visual thesis
- the information hierarchy is defined
- typography, color, spacing, radius, and layout constraints are explicit enough to guide implementation

Do not default to generic “modern SaaS” styling.

## Layout

- Prefer hierarchy, typography, whitespace, grids, and dividers before decorative containers.
- Do not center every major section.
- Use asymmetry only when it follows a clear grid.
- Vary section density and composition.
- Avoid repeated headline → paragraph → three-card patterns.

## Cards

Cards should represent discrete objects such as records, products, datasets, plans, search results, or selectable options.

Do not create cards merely to organize explanatory text. Avoid unnecessary nested cards.

## Typography

- Typography should contribute to the visual identity.
- Maintain clear hierarchy without relying entirely on containers.
- Keep body text at comfortable reading widths.
- Review important headline line breaks manually.

## Geometry and effects

- Use a deliberate radius system; do not round everything.
- Reserve pill shapes mainly for tags, statuses, filters, metadata, and compact controls.
- Do not automatically introduce blue-purple gradients, glowing blobs, glassmorphism, excessive shadows, gradient text, or floating decorative shapes.
- Use effects only when they support the defined visual language.

## Icons and imagery

- Icons should improve recognition or interaction, not decorate every heading.
- Avoid generic AI-symbol overuse.
- Prefer real product screenshots, actual data, diagrams, maps, charts, reports, workflows, photography, and original illustrations over generic stock or abstract AI imagery.

## Motion

Animation should communicate state, hierarchy, transition, feedback, or orientation. Do not apply universal fade-up-on-scroll animation. Respect reduced-motion preferences.

## Copy and evidence

- Prefer concrete claims, examples, and evidence.
- Avoid vague AI-marketing language.
- If a competitor could use the exact same sentence, rewrite it.
- Show real outputs or proof where possible instead of decorating claims.

## Brand and industry fit

Ask:

- Does this look appropriate for what the organization actually does?
- Does it reflect the defined visual thesis?
- Does it contain at least one recognizable visual convention?
- Would it still feel specific if the logo and product name were removed?

Do not force unrelated LL GTM products or clients into one visual template.

## Semantic and accessibility quality

Maintain semantic HTML, meaningful headings, descriptive links, accessible form labels, useful alt text, clear navigation, keyboard access, visible focus states, adequate contrast, adequate touch targets, and reduced-motion support.

Visual distinctiveness must not reduce machine readability or accessibility.

## Responsive review

Do not treat mobile as a compressed desktop page. Review headline wrapping, spacing, buttons, navigation, screenshots, tables, card layouts, touch targets, image crops, and forms.

## Final anti-generic audit

Before declaring frontend work complete, check:

- Are too many things cards?
- Are too many corners rounded?
- Is too much content centered?
- Are gradients or shadows unnecessary?
- Are generic icons overused?
- Does every section look structurally identical?
- Is the copy vague?
- Could real evidence replace decorative material?
- Does the site feel composed rather than assembled?
- Could this page belong to twenty unrelated startups?

If the answer to the last question is yes, perform another design-polish iteration.

## Human review required

Do not silently make major decisions about brand direction, typography systems, major color changes, distinctive visual motifs, unusual interaction patterns, or public-facing claims. Flag them for human review.

## Definition of done

Frontend work is complete only when it is **functional, clear, accessible, responsive, credible, intentional, and specific to the product or organization**.
