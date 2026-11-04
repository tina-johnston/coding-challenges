// Playground: `npm run try` re-runs this file on every save.
// Paste a snippet, log the values, check for undefined.

type Project = { id: string; name: string; status?: 'ACTIVE' | 'DONE' };

const projects: Project[] = [
  { id: '1', name: 'Bridge', status: 'ACTIVE' },
  { id: '2', name: 'Tunnel' },
];

const filtered = projects.filter((p) => p.status === 'ACTIVE');

console.log('filtered:', filtered);
console.log('missing status:', projects.find((p) => p.status === undefined));
console.table(projects);
