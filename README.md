# LL GTM Studio — public website

Small, static-first public website for LL GTM Studio. This repository is intentionally separate from private operating materials.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact delivery

The inquiry form sends server-side through Resend. Copy `.env.example` and configure `RESEND_API_KEY` and `CONTACT_TO_EMAIL`; optionally set `CONTACT_FROM_EMAIL` after verifying a sending domain.

## Public-content boundary

Only deliberately approved public copy belongs here. Do not copy prospect lists, customer research, pricing analysis, experiment notes, client material, internal scorecards, opportunity pipelines, or unpublished strategy from the private operating repository.

See [`docs/SITE_FOUNDATION.md`](docs/SITE_FOUNDATION.md) for the V1 architecture and content rules.
