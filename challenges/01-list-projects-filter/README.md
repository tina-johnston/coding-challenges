# 01 · List projects with a status filter · 45 min · full stack
"Show a table of projects that can be filtered by status."
Slice: Prisma `Project` (status enum, `Decimal` budget) → GET /projects?status= → `useProjects(status)` → table + select filter → one backend test + one frontend test.
Watch for: tenancy (`orgId` in every where), `select` only needed fields, query key includes status.
