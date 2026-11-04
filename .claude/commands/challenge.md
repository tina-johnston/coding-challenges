---
description: Start a timed interview coding challenge (Claude plays interviewer)
argument-hint: [number | slug | random | weakest]
---

Run a mock pairing interview.

1. Pick the challenge from `challenges/`:
   - number or slug in `$ARGUMENTS` → that one
   - `weakest` → lowest average in PROGRESS.md (ties: oldest)
   - `random` or empty → one not attempted yet, else the oldest attempt
   Say which one and how many times it has been attempted. If there are earlier attempts, read the latest `NOTES.md` and name the one thing to improve this time.
2. If `sandbox/` does not exist and the challenge needs code, set it up first (NestJS + Prisma + SQLite in `sandbox/api`, Vite React + TS + TanStack Query + Vitest + Testing Library in `sandbox/web`), committed as a clean baseline. Tell Tina before installing.
3. Create `attempts/<slug>/<today YYYY-MM-DD>/` (add `-2` if it exists) and copy the sandbox parts the challenge needs into it.
4. Read the brief aloud as an interviewer would: just the ask in quotes, nothing from "Slice" or "Watch for". Then stop and wait for clarifying questions.
5. Note the start time. During the challenge follow CLAUDE.md: don't solve, tiered hints, time callouts, one curveball from the brief or the study guide.
6. When Tina says they are finished or time is up, tell Tina to run `/done`.
