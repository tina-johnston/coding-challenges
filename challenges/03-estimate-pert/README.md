# 03 · Estimate summary with PERT · 45 min · full stack
"Each project has estimate lines (optimistic, likely, pessimistic). Show the total."
Slice: `EstimateLine` model → pure `pert()` function with `it.each` tests → GET /projects/:id/estimate (ParseUUIDPipe) → hook → summary card.
Watch for: PERT = (o + 4m + p) / 6, Decimal `.toNumber()`, 404 for another org's project.
