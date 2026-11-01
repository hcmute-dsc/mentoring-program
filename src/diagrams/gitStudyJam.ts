import type { Diagram, Edge, MapNode } from '../types';

/* Git weeks: centres at y=80, 200, 320, 440 and 560. Docker weeks: centres at y=680 and 800. The Git & GitHub node sits at y=320 and the Docker node at y=740, each in the middle of its weeks. The root sits between them, at y=530. */
const nodes: MapNode[] = [
  {
    id: 'root',
    k: 'root',
    x: 20,
    y: 444,
    w: 280,
    h: 172,
    t: 'Study Jam',
    s: '2 tracks',
    img: true,
    d: {
      tag: 'Overview',
      title: 'Study Jam',
      text: 'Learn by working as a team. The Study Jam has two tracks: Git & GitHub, and Docker.',
      groups: [
        {
          h: 'Tracks',
          items: ['Git & GitHub: 5 weeks', 'Docker: 2 weeks'],
        },
        {
          h: 'Git & GitHub timeline',
          items: [
            'Week 1 · Kickoff: Git and GitHub basics',
            'Week 2 · Home page: branches and pull requests',
            'Week 3 · About us: many branches at the same time',
            'Week 4 · Contact: code review and merge',
            'Week 5 · Closing ceremony: recap and showcase',
          ],
        },
      ],
    },
  },
  {
    id: 's-time',
    k: 'sec',
    x: 360,
    y: 290,
    w: 210,
    h: 60,
    t: 'Git & GitHub',
    s: '5 weeks',
    d: {
      tag: 'Track 1',
      title: 'Git & GitHub',
      text: 'Each team builds a small website together, one page at a time. Five weeks, from the kickoff to the closing ceremony. Each week adds one new part of the Git and GitHub workflow.',
    },
  },
  {
    id: 's-docker',
    k: 'sec',
    x: 360,
    y: 710,
    w: 210,
    h: 60,
    t: 'Docker',
    s: 'Track 2',
    d: {
      tag: 'Track 2',
      title: 'Docker',
      text: 'Pack an app into containers and ship it automatically. Two weeks, based on the DevOps course, using one app all the way through: the Club Management API.',
      groups: [
        {
          h: 'Three stages',
          items: [
            'Stage 1 · Foundation: the DevOps workflow and the dev environment',
            'Stage 2 · Container: Docker and Compose',
            'Stage 3 · CI/CD: tests and builds that run by themselves',
          ],
        },
        {
          h: 'Timeline',
          items: [
            'Week 1 · Foundation and Docker: run and build containers',
            'Week 2 · Compose and CI/CD: many containers, then automation',
          ],
        },
      ],
    },
  },
  {
    id: 'wk1',
    k: 'a',
    x: 650,
    y: 50,
    w: 260,
    h: 60,
    t: 'Week 1 · Kickoff',
    s: 'Git and GitHub basics',
    d: {
      tag: 'Week 1',
      c: 'a',
      title: 'Kickoff',
      sub: 'Git and GitHub basics',
      text: 'Meet your team and get ready to use Git and GitHub.',
      groups: [
        {
          h: 'What you learn',
          items: [
            'What version control is, and why teams use it',
            'The difference between Git (the tool) and GitHub (the website that hosts the code)',
            'Install Git and set your name and email',
            'Create a GitHub account',
            'Repositories: create one, and clone it to your computer',
          ],
        },
      ],
    },
  },
  {
    id: 'wk2',
    k: 'a',
    x: 650,
    y: 170,
    w: 260,
    h: 60,
    t: 'Week 2 · Home page',
    s: 'Branches and pull requests',
    d: {
      tag: 'Week 2',
      c: 'a',
      title: 'Home page',
      sub: 'Branches and pull requests',
      text: 'The team leader starts the codebase, and one member builds the Home page.',
      groups: [
        {
          h: 'What you learn',
          items: [
            'Create a branch from main, or from another branch',
            'Commit your changes with a clear message in English',
            'Push a branch to GitHub',
            'Open a pull request into main, with a title and a description',
          ],
        },
      ],
    },
  },
  {
    id: 'wk3',
    k: 'a',
    x: 650,
    y: 290,
    w: 260,
    h: 60,
    t: 'Week 3 · About us',
    s: 'Many branches at once',
    d: {
      tag: 'Week 3',
      c: 'a',
      title: 'About us page',
      sub: 'Many branches at the same time',
      text: 'Every member adds a section about themselves to the same page.',
      groups: [
        {
          h: 'What you learn',
          items: [
            'Work on your own branch while teammates work on theirs',
            'Follow a branch naming rule, such as feature/about-<student ID>',
            'Open many pull requests into main at the same time, one for each member',
            'Get the latest main and fix merge conflicts when two people change the same file',
          ],
        },
      ],
    },
  },
  {
    id: 'wk4',
    k: 'a',
    x: 650,
    y: 410,
    w: 260,
    h: 60,
    t: 'Week 4 · Contact',
    s: 'Code review and merge',
    d: {
      tag: 'Week 4',
      c: 'a',
      title: 'Contact page',
      sub: 'Code review and merge',
      text: 'One member builds the Contact page, and the team leader reviews it.',
      groups: [
        {
          h: 'What you learn',
          items: [
            'Add a reviewer to a pull request',
            'Review code: comment, approve, or request changes. "LGTM" means "Looks Good To Me".',
            'Update a pull request with new commits on the same branch',
            'Merge a pull request into main',
            'Delete a branch after the merge',
          ],
        },
      ],
    },
  },
  {
    id: 'wk5',
    k: 'a',
    x: 650,
    y: 530,
    w: 260,
    h: 60,
    t: 'Week 5 · Closing ceremony',
    s: 'Recap and showcase',
    d: {
      tag: 'Week 5',
      c: 'a',
      title: 'Closing ceremony',
      sub: 'Recap and showcase',
      text: 'Teams show their websites and look back at what they learned.',
      groups: [
        {
          h: 'What you learn',
          items: [
            'The full team workflow: branch, commit, push, pull request, review, merge',
            'Read the history of a repository: commits, pull requests, and who changed what',
            'Present your team’s work and its history on GitHub',
          ],
        },
      ],
    },
  },
  {
    id: 'dk1',
    k: 'a',
    x: 650,
    y: 650,
    w: 260,
    h: 60,
    t: 'Week 1 · Foundation and Docker',
    s: 'Run and build containers',
    d: {
      tag: 'Week 1',
      c: 'a',
      title: 'Foundation and Docker',
      sub: 'Run and build containers',
      text: 'Set up your environment, then learn to run and build containers.',
      groups: [
        {
          h: 'Stage 1 · Foundation',
          items: [
            'The DevOps workflow: how an app gets from your computer to a server',
            'A working dev environment: terminal, WSL2 and Git',
          ],
        },
        {
          h: 'Stage 2 · Docker',
          items: [
            'Containers versus virtual machines; images, containers and registries',
            'Docker commands: run, ps, logs, exec and stop',
            'Write a Dockerfile for the Node.js API',
          ],
        },
      ],
    },
  },
  {
    id: 'dk2',
    k: 'a',
    x: 650,
    y: 770,
    w: 260,
    h: 60,
    t: 'Week 2 · Compose and CI/CD',
    s: 'Many containers, then automation',
    d: {
      tag: 'Week 2',
      c: 'a',
      title: 'Compose and CI/CD',
      sub: 'Many containers, then automation',
      text: 'Run the whole system with one command, then let GitHub build it for you.',
      groups: [
        {
          h: 'Stage 2 · Compose',
          items: [
            'Docker Compose: services, networks and volumes',
            'Run the web, the API and PostgreSQL together, and keep the data',
          ],
        },
        {
          h: 'Stage 3 · CI/CD',
          items: [
            'What CI/CD is, and what a pipeline looks like',
            'A GitHub Actions workflow that runs the tests on every push',
            'Build the Docker image and publish it to GHCR',
          ],
        },
      ],
    },
  },
];

const edges: Edge[] = [
  { a: 'root', b: 's-time', line: true },
  { a: 'root', b: 's-docker', line: true },
  { a: 's-docker', b: 'dk1', c: 'a' },
  { a: 's-docker', b: 'dk2', c: 'a' },
  { a: 's-time', b: 'wk1', c: 'a' },
  { a: 's-time', b: 'wk2', c: 'a' },
  { a: 's-time', b: 'wk3', c: 'a', line: true },
  { a: 's-time', b: 'wk4', c: 'a' },
  { a: 's-time', b: 'wk5', c: 'a' },
];

export const gitStudyJam: Diagram = {
  id: 'git-study-jam',
  name: 'Study Jam',
  nodes,
  edges,
  rows: [],
};
