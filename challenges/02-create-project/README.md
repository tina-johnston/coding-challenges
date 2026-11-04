# 02 · Create a project · 45 min · full stack
"Add a form to create a project."
Slice: Zod DTO → POST /projects (orgId from the token, never the body) → `useCreateProject` mutation → React Hook Form → invalidate `projectKeys.all`.
Watch for: `valueAsNumber`, 400 vs 201, showing server errors in the form.
