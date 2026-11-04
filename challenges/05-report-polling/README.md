# 05 · Generate a report and poll for it · 45 min · full stack
"Users can request a report and download it when ready."
Slice: `Report` (status enum) → POST returns 202 + id → fake worker (setTimeout) → GET /reports/:id → `useQuery` with `refetchInterval` until READY → download link.
Watch for: stop polling on READY/FAILED, idempotency, short-lived download URL.
