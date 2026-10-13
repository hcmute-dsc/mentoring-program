import type { MapNode } from './types';

/* Rows: A1 centre y=80, A2 centre y=260, B1 centre y=440. Phases start at x=1540, one every 180. */
export const nodes: MapNode[] = [
  {
    id: 'root',
    k: 'root',
    x: 20,
    y: 396,
    w: 280,
    h: 172,
    t: 'HCMUTE DSC Mentoring',
    s: '16 weeks',
    img: true,
    d: {
      tag: 'Overview',
      title: 'HCMUTE DSC Mentoring Program',
      text: 'A 16-week program. Members learn with a mentor in one of three groups. In every group, members work in teams of 3–5. Each group has its own goal, and every team shows what they achieved on demo day.',
      groups: [
        {
          h: 'Group goals',
          items: [
            'A1 · Programming Foundations: a team builds a console app that uses classes and a database',
            'A2 · Problem Solving: a team solves problems every week, and the team explains one hard problem',
            'B1 · Team Project: a team builds a web app and puts it online',
          ],
        },
        {
          h: 'Key facts',
          items: [
            '16 weeks (one semester)',
            '1 group per member, per semester',
            'Teams of 3–5 members in every group',
            'Less than 3 hours of self-study per week',
            '6 meetings, about 1–2 a month',
            'Every team presents on demo day, and each member shows their own part',
          ],
        },
      ],
    },
  },

  /* Section heads */
  {
    id: 's-groups',
    k: 'sec',
    x: 360,
    y: 275,
    w: 210,
    h: 60,
    t: 'Tracks and groups',
    s: '2 tracks · 3 groups',
    d: {
      tag: 'Structure',
      text: 'There are three groups: A1 and A2 in Track A, and B1 in Track B. Each member joins one group and stays in it for the whole semester. Inside each group, members work in teams of 3–5. Each team project fits about 40 hours of work per member. Each group has its own timeline.',
      groups: [
        {
          h: 'Teamwork in every group',
          items: [
            'Each team has 3–5 members',
            'Each member owns one clear part of the work',
            'The team shares one code repository',
            'Members review each other’s work',
          ],
        },
      ],
    },
  },
  {
    id: 's-week',
    k: 'sec',
    x: 360,
    y: 630,
    w: 210,
    h: 60,
    t: 'Weekly routine',
    s: 'Online, every week',
    d: {
      tag: 'Every week',
      text: 'A short routine keeps everyone active between meetings. It takes only a few minutes.',
      groups: [
        {
          h: 'Tools',
          items: [
            'Discord or Messenger: team and group chats for questions and updates',
            'A code hosting service, such as GitHub or GitLab: holds the code',
            'Google Meet: online meetings',
          ],
        },
      ],
    },
  },

  /* Tracks and groups */
  {
    id: 'trackA',
    k: 'a',
    x: 650,
    y: 140,
    w: 190,
    h: 60,
    t: 'Track A',
    s: 'Foundations',
    code: true,
    d: {
      tag: 'Track A',
      c: 'a',
      text: 'For 1st and 2nd year students. Learn the basics in a team before building real projects.',
      groups: [
        {
          h: 'Topics',
          items: [
            'Data Structures and Algorithms (DSA)',
            'Object-Oriented Programming (OOP)',
            'Structured Query Language (SQL)',
          ],
        },
      ],
    },
  },
  {
    id: 'trackB',
    k: 'b',
    x: 650,
    y: 410,
    w: 190,
    h: 60,
    t: 'Track B',
    s: 'Software Development',
    code: true,
    d: {
      tag: 'Track B',
      c: 'b',
      text: 'For 3rd and 4th year students. Get hands-on experience building software in a team.',
      groups: [{ h: 'Topics', items: ['Backend web development', 'Frontend web development', 'Mobile development'] }],
    },
  },
  {
    id: 'moveup',
    k: 'chip',
    x: 628,
    y: 292,
    w: 124,
    h: 28,
    t: 'Move up · check',
    d: {
      tag: 'Joining',
      c: 'b',
      title: 'Moving up to Track B',
      text: 'A strong 1st or 2nd year student can join Track B. To join, they show their own project that uses the foundation knowledge. A mentor reviews the project to check their skills.',
      groups: [
        {
          h: 'What to show',
          items: [
            'A project you built yourself',
            'It uses foundation knowledge, such as OOP, SQL, or DSA',
            'You can explain how it works and why you built it that way',
          ],
        },
      ],
    },
  },
  {
    id: 'joinA',
    k: 'chip',
    x: 758,
    y: 292,
    w: 136,
    h: 28,
    t: 'Join A · no check',
    d: {
      tag: 'Joining',
      c: 'a',
      title: 'Joining Track A later',
      text: 'A 3rd or 4th year student can join Track A for stronger foundations. No check is needed.',
    },
  },
  {
    id: 'a1',
    k: 'a',
    x: 930,
    y: 50,
    w: 260,
    h: 60,
    t: 'A1 · Programming Foundations',
    s: 'OOP + SQL',
    d: {
      tag: 'A1 · Track A',
      c: 'a',
      title: 'Programming Foundations',
      sub: 'OOP + SQL',
      text: 'A team of 3–5 builds one small console app. It uses classes and saves data in a database. A console app runs in a terminal window with a text menu.',
      groups: [
        { h: 'Example ideas', items: ['Library manager', 'Student grade tracker', 'Club event manager'] },
        {
          h: 'Teamwork',
          items: [
            'The team splits the app into parts, for example the features for books or for borrowing. Each member builds one or more parts.',
            'The team shares one code repository',
            'Members review each other’s code before it is merged',
          ],
        },
        {
          h: 'To pass',
          items: [
            '3 or more classes',
            '3 or more database tables',
            'Create, read, update, and delete data',
            'Each member can explain their own part',
          ],
        },
      ],
    },
  },
  {
    id: 'a2',
    k: 'a',
    x: 930,
    y: 230,
    w: 260,
    h: 60,
    t: 'A2 · Problem Solving',
    s: 'DSA',
    d: {
      tag: 'A2 · Track A',
      c: 'a',
      title: 'Problem Solving',
      sub: 'DSA',
      text: 'A team of 3–5 solves problems together. Each week, the team picks 3–5 problems. Each member solves them, then the team compares the solutions. DSA means Data Structures and Algorithms. Topics go in order, from simple to hard.',
      groups: [
        {
          h: 'Topic order',
          items: [
            'Arrays',
            'Strings',
            'Stacks and queues',
            'Recursion',
            'Hash tables',
            'Sorting and searching',
            'Trees',
            'Graphs',
            'Dynamic programming (basics)',
          ],
        },
        {
          h: 'Teamwork',
          items: [
            'A weekly team review: members explain their solutions and compare ideas',
            'Members take turns leading the review',
            'The team keeps all solutions in one shared code repository',
          ],
        },
        {
          h: 'Optional team project',
          items: [
            'A program that shows how sorting or search methods work, step by step. Each member builds one method.',
          ],
        },
        {
          h: 'To pass',
          items: [
            'The team explains how it solved one hard problem',
            'Show the idea and the code',
            'Explain why it is fast enough',
            'Each member explains one part of the talk and can answer questions about the whole solution',
            'Take part in the weekly team reviews',
          ],
        },
      ],
    },
  },
  {
    id: 'b1',
    k: 'b',
    x: 930,
    y: 410,
    w: 260,
    h: 60,
    t: 'B1 · Team Project',
    s: 'Backend + Frontend',
    d: {
      tag: 'B1 · Track B',
      c: 'b',
      title: 'Team Project',
      sub: 'Backend + Frontend (Mobile optional)',
      text: 'A team of 3–5 builds one web app. Each member takes one role: backend, frontend, or mobile (optional).',
      groups: [
        { h: 'Example ideas', items: ['Club website with event sign-up', 'Study group finder', 'Shared expense app'] },
        {
          h: 'To pass',
          items: [
            'Login',
            '2 or more main features',
            'A working API (the rules the app uses to ask the backend for data)',
            'The app is online for others to try',
          ],
        },
      ],
    },
  },

  /* A1 timeline */
  {
    id: 'a1t',
    k: 'sec',
    x: 1250,
    y: 50,
    w: 210,
    h: 60,
    t: 'A1 timeline',
    s: '6 phases',
    d: {
      tag: 'A1 schedule',
      c: 'a',
      sub: 'For group A1',
      text: 'Members work in teams of 3–5. They learn OOP first, then SQL. Then each team chooses a project idea and uses both skills to build one console app together. The build phase is the longest, because the app joins both skills and every member’s part.',
    },
  },
  {
    id: 'a1p1',
    k: 'n',
    x: 1540,
    y: 48,
    w: 160,
    h: 64,
    t: 'Kick-off',
    s: '~1 week',
    d: {
      tag: 'A1 · Phase 1 · ~1 week',
      c: 'a',
      text: 'Form your team and set up your machine.',
      groups: [
        {
          h: 'Goals',
          items: ['Form a team of 3–5', 'Know the A1 goals and the pass rules', 'Get your computer ready for coding'],
        },
        {
          h: 'What to do',
          items: [
            'Join the group chat and meet your mentor',
            'Create a team chat',
            'Install a code editor and the language your team uses',
          ],
        },
        {
          h: 'Done when',
          items: ['Your team is posted in the group chat', 'Every member can run a simple "Hello, world" program'],
        },
      ],
    },
  },
  {
    id: 'a1p2',
    k: 'n',
    x: 1720,
    y: 48,
    w: 160,
    h: 64,
    t: 'Learn OOP',
    s: '~3 weeks',
    d: {
      tag: 'A1 · Phase 2 · ~3 weeks',
      c: 'a',
      note: 'At the end of this phase, record the presentation meeting and send the video to your mentor.',
      text: 'Learn how to organize code with classes and objects. OOP means Object-Oriented Programming.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Write a class with fields and methods',
            'Create objects that work together',
            'Use encapsulation and inheritance in simple cases',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Start with classes, objects, constructors, and methods',
            'Then learn encapsulation: private fields, getters, and setters',
            'Last, learn inheritance and simple interfaces',
            'Do small exercises, such as a Student class or a BankAccount class',
            'Review each other’s exercise code inside the team',
          ],
        },
        {
          h: 'Done when',
          items: [
            'Each member gave a short presentation to the team that explains their practice classes',
            'Each member wrote practice classes that work together',
          ],
        },
      ],
    },
  },
  {
    id: 'a1p3',
    k: 'n',
    x: 1900,
    y: 48,
    w: 160,
    h: 64,
    t: 'Learn SQL',
    s: '~3 weeks',
    d: {
      tag: 'A1 · Phase 3 · ~3 weeks',
      c: 'a',
      note: 'At the end of this phase, record the presentation meeting and send the video to your mentor.',
      text: 'Learn how to save and read data in a database. SQL is the language you use to talk to the database.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Create tables with primary keys and foreign keys',
            'Write SELECT, INSERT, UPDATE, and DELETE queries',
            'Join two tables in one query',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Install a database, such as SQLite or MySQL',
            'Practice queries on a sample database',
            'Design 3 tables for a small example, such as a library',
            'Draw how your tables link to each other',
          ],
        },
        {
          h: 'Done when',
          items: [
            'Your practice tables are created in the database',
            'Each member gave a short presentation to the team that explains their practice tables and queries',
          ],
        },
      ],
    },
  },
  {
    id: 'a1p4',
    k: 'n',
    x: 2080,
    y: 48,
    w: 160,
    h: 64,
    t: 'Build the app',
    s: '~6 weeks',
    d: {
      tag: 'A1 · Phase 4 · ~6 weeks',
      c: 'a',
      text: 'Choose your project idea, then join everyone’s classes and the database into one working app.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Choose one project idea as a team',
            'Connect your program to the database',
            'Create, read, update, and delete data from the app',
            'Build a simple text menu',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Pick a project idea together: library manager, grade tracker, club event manager, or your own',
            'Split the app into parts and decide who builds each part',
            'Design the main classes and 3 or more tables, and ask your mentor to review them',
            'Add one feature at a time, for example "Add book", then "List books"',
            'Test each feature before you start the next one',
            'Review each other’s code before you merge it',
            'Set a weekly team goal and check it together',
          ],
        },
        {
          h: 'Done when',
          items: [
            'Create, read, update, and delete all work',
            'The app meets the pass rules: 3 or more classes and 3 or more tables',
          ],
        },
      ],
    },
  },
  {
    id: 'a1p5',
    k: 'n',
    x: 2260,
    y: 48,
    w: 160,
    h: 64,
    t: 'Finish and polish',
    s: '~1 week',
    d: {
      tag: 'A1 · Phase 5 · ~1 week',
      c: 'a',
      text: 'Make the app stable and ready to show.',
      groups: [
        { h: 'Goals', items: ['Fix the main bugs', 'Write a clear README', 'Plan a short demo'] },
        {
          h: 'What to do',
          items: [
            'Ask another team to try your app and report problems',
            'Fix bugs, starting with the ones that crash the app',
            'Write a README: what the app does, how to run it, and who did what',
            'Plan the demo: which features you show, in order, and who shows each one',
          ],
        },
        {
          h: 'Done when',
          items: [
            'The app runs without crashing',
            'The README is in the team’s code repository',
            'The team practiced the demo',
          ],
        },
      ],
    },
  },
  {
    id: 'a1p6',
    k: 'a',
    x: 2440,
    y: 48,
    w: 160,
    h: 64,
    t: 'Demo day',
    s: '~2 weeks',
    d: {
      tag: 'A1 · Phase 6 · ~2 weeks',
      c: 'a',
      text: 'Show your app to the club as a team and learn from the feedback. Alumni judge the projects.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Present your app clearly',
            'Explain one design choice your team made',
            'Collect feedback for your next step',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Show the main features live',
            'Each member explains their own part',
            'Explain how the classes and tables connect',
            'Answer questions from alumni and members',
            'Write down the feedback and one thing to improve',
          ],
        },
        { h: 'Done when', items: ['The team presented on demo day', 'Each member knows their next learning step'] },
      ],
    },
  },

  /* A2 timeline */
  {
    id: 'a2t',
    k: 'sec',
    x: 1250,
    y: 230,
    w: 210,
    h: 60,
    t: 'A2 timeline',
    s: '8 phases',
    d: {
      tag: 'A2 schedule',
      c: 'a',
      sub: 'For group A2',
      text: 'Members work in teams of 3–5. Each team solves 3–5 problems each week and follows the topics in order, from simple to hard. Each week ends with a team review of the solutions. The last topic, dynamic programming, is the hardest, so the phase covers only the basics. The last weeks are for review and the team’s demo day talk.',
    },
  },
  {
    id: 'a2p1',
    k: 'n',
    x: 1540,
    y: 228,
    w: 160,
    h: 64,
    t: 'Kick-off',
    s: '~1 week',
    d: {
      tag: 'A2 · Phase 1 · ~1 week',
      c: 'a',
      text: 'Form your team, plan the semester, and get ready to solve problems.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Form a team of 3–5',
            'Know the A2 goals and the pass rule',
            'Choose one programming language for the team',
            'Create an account on a practice site',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Meet your team and mentor',
            'Choose one language as a team and keep it for the whole semester. One language makes code reviews easier.',
            'Sign up on a practice site, such as LeetCode or HackerRank',
            'Create a shared code repository for the team’s solutions',
            'Pick a time for the weekly team review and who leads it first',
            'Solve 3 easy warm-up problems',
          ],
        },
        {
          h: 'Done when',
          items: ['Every member solved the warm-up problems', 'The team sent its first weekly update to the mentor'],
        },
      ],
    },
  },
  {
    id: 'a2p2',
    k: 'n',
    x: 1720,
    y: 228,
    w: 160,
    h: 64,
    t: 'Basic structures',
    s: '~3 weeks',
    d: {
      tag: 'A2 · Phase 2 · ~3 weeks',
      c: 'a',
      note: 'At the end of this phase, record one team review and send the video to your mentor.',
      text: 'Learn the basic ways to store data, and the idea of recursion. Four topics in about 3 weeks. Arrays and strings can share one week.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Use arrays and strings to solve common problems',
            'Know when to use a stack or a queue',
            'Write a recursive function with a clear base case (the point where it stops)',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Follow this order: arrays, strings, stacks and queues, recursion',
            'For each topic, read or watch a short lesson, then solve 3–5 problems',
            'Start with easy problems, then try one medium or hard problem each week',
            'In the weekly team review, take turns explaining your solutions',
          ],
        },
        {
          h: 'Done when',
          items: ['You solved problems on every topic', 'You explained at least one solution in a team review'],
        },
      ],
    },
  },
  {
    id: 'a2p3',
    k: 'n',
    x: 1900,
    y: 228,
    w: 160,
    h: 64,
    t: 'Hash tables',
    s: '~2 weeks',
    d: {
      tag: 'A2 · Phase 3 · ~2 weeks',
      c: 'a',
      note: 'At the end of this phase, record one team review and send the video to your mentor.',
      text: 'Learn hash tables: hash maps and hash sets. They find, add, and remove items very fast, so many slow solutions become fast.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Use a hash map to count items or to link a key to a value',
            'Use a hash set to check if an item was seen before',
            'Explain why a lookup takes about O(1) time',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Learn the hash map and hash set of your team’s language',
            'Solve 3–5 problems each week, such as counting words or finding two numbers that add up to a target',
            'Take an array problem you solved before and make it faster with a hash map',
            'In the weekly team review, take turns explaining your solutions',
          ],
        },
        {
          h: 'Done when',
          items: ['You solved problems on this topic', 'You explained at least one solution in a team review'],
        },
      ],
    },
  },
  {
    id: 'a2p4',
    k: 'n',
    x: 2080,
    y: 228,
    w: 160,
    h: 64,
    t: 'Sort and search',
    s: '~2 weeks',
    d: {
      tag: 'A2 · Phase 4 · ~2 weeks',
      c: 'a',
      note: 'At the end of this phase, record one team review and send the video to your mentor.',
      title: 'Sorting and searching',
      sub: '~2 weeks',
      text: 'Learn common sorting and searching methods, and how to judge if code is fast.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Explain how at least two sorting methods work',
            'Use binary search on sorted data',
            'Describe speed with Big-O, for example O(n) or O(log n). Big-O shows how running time grows when the input grows.',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Trace a sorting method by hand on a short list',
            'Write binary search yourself before you use a library',
            'For each problem you solve, write down its Big-O',
            'In the team review, compare solutions: which one is faster, and why?',
          ],
        },
        {
          h: 'Done when',
          items: ['You solved problems on every topic', 'You explained at least one solution in a team review'],
        },
      ],
    },
  },
  {
    id: 'a2p5',
    k: 'n',
    x: 2260,
    y: 228,
    w: 160,
    h: 64,
    t: 'Trees and graphs',
    s: '~3 weeks',
    d: {
      tag: 'A2 · Phase 5 · ~3 weeks',
      c: 'a',
      note: 'At the end of this phase, record one team review and send the video to your mentor.',
      text: 'Harder topics. Learn trees first, then graphs. Take your time and draw before you code.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Visit every node of a tree in different orders',
            'Use breadth-first search (BFS) and depth-first search (DFS) on a graph',
            'Choose the right structure for a problem',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Draw trees and graphs on paper before you write code',
            'Start with binary trees, then move to graphs',
            'Solve 3–5 problems each week. It is fine if they take longer.',
          ],
        },
        {
          h: 'Done when',
          items: ['You solved problems on every topic', 'You explained at least one solution in a team review'],
        },
      ],
    },
  },
  {
    id: 'a2p6',
    k: 'n',
    x: 2440,
    y: 228,
    w: 160,
    h: 64,
    t: 'DP basics',
    s: '~2 weeks',
    d: {
      tag: 'A2 · Phase 6 · ~2 weeks',
      c: 'a',
      note: 'At the end of this phase, record one team review and send the video to your mentor.',
      title: 'Dynamic programming basics',
      sub: '~2 weeks',
      text: 'Learn the basics of dynamic programming (DP). DP saves the answers to smaller problems and reuses them, so the same work is not done twice. This phase covers only simple problems.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Find the smaller problems inside a problem',
            'Turn a slow recursive solution into a fast one by saving answers',
            'Solve simple 1D DP problems, such as climbing stairs or the house robber problem',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Start from recursion: write the slow recursive solution first',
            'Then save the answers you already found (memoization)',
            'Then build the answers in a table, from small to big',
            'Solve 3–5 easy and medium problems each week',
            'In the weekly team review, take turns explaining your solutions',
          ],
        },
        {
          h: 'Done when',
          items: ['You solved problems on this topic', 'You explained at least one solution in a team review'],
        },
      ],
    },
  },
  {
    id: 'a2p7',
    k: 'n',
    x: 2620,
    y: 228,
    w: 160,
    h: 64,
    t: 'Review and prepare',
    s: '~1 week',
    d: {
      tag: 'A2 · Phase 7 · ~1 week',
      c: 'a',
      text: 'Fill the gaps in your knowledge and prepare your demo day explanation.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Get better at your weak topics',
            'Choose one hard problem as a team',
            'Explain the idea, the code, and the speed clearly',
          ],
        },
        {
          h: 'What to do',
          items: [
            'List the topics you find hardest and solve more problems on them',
            'Pick one hard problem that the team solved well and that every member understands',
            'Prepare three parts: the idea, the code, and why it is fast enough',
            'Plan the team talk: who explains each part',
            'Make sure every member can explain the whole solution, not only their own part',
            'Practice the full talk together as a team',
          ],
        },
        { h: 'Done when', items: ['The team’s explanation is ready', 'The team practiced the full talk'] },
      ],
    },
  },
  {
    id: 'a2p8',
    k: 'a',
    x: 2800,
    y: 228,
    w: 160,
    h: 64,
    t: 'Demo day',
    s: '~2 weeks',
    d: {
      tag: 'A2 · Phase 8 · ~2 weeks',
      c: 'a',
      text: 'Present to the club as a team. The team explains one hard problem together. Alumni judge.',
      groups: [
        { h: 'Goals', items: ['Explain the team’s solution clearly', 'Answer questions about speed', 'Get feedback'] },
        {
          h: 'What to do',
          items: [
            'Describe the problem in simple words',
            'Show the idea first, then the code',
            'Explain why it is fast enough',
            'Each member explains their own part of the talk',
            'Answer questions from alumni and members',
          ],
        },
        { h: 'Done when', items: ['The team presented on demo day', 'Every member meets the A2 pass rule'] },
      ],
    },
  },

  /* B1 timeline */
  {
    id: 's-time',
    k: 'sec',
    x: 1250,
    y: 410,
    w: 210,
    h: 60,
    t: 'B1 timeline',
    s: '5 phases',
    d: {
      tag: 'B1 schedule',
      c: 'b',
      sub: 'For group B1',
      text: 'A team of 3–5 builds one web app together. First, each member learns the skills for their role: backend, frontend, or mobile. Then the team builds the app. The build phase is the longest, because the frontend and backend must work together and the app must go online. The last weeks are for polish and the team demo.',
    },
  },
  {
    id: 'p1',
    k: 'n',
    x: 1540,
    y: 408,
    w: 160,
    h: 64,
    t: 'Kick-off',
    s: '~1 week',
    d: {
      tag: 'B1 · Phase 1 · ~1 week',
      c: 'b',
      text: 'Form your team and choose what to build.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Form a team of 3–5',
            'Choose one app idea',
            'Give each member one role: backend, frontend, or mobile',
          ],
        },
        {
          h: 'What to do',
          items: [
            'Meet your team and mentor',
            'Pick an idea: club website, study group finder, shared expense app, or your own',
            'List the login and the 2 main features',
            'Create a shared code repository and a team chat',
          ],
        },
        { h: 'Done when', items: ['Your idea, features, and roles are posted in the group chat'] },
      ],
    },
  },
  {
    id: 'p2',
    k: 'n',
    x: 1720,
    y: 408,
    w: 160,
    h: 64,
    t: 'Learn core skills',
    s: '~4 weeks',
    d: {
      tag: 'B1 · Phase 2 · ~4 weeks',
      c: 'b',
      title: 'Learn the core skills',
      sub: '~4 weeks',
      text: 'Learn the skills for your role on your own. Mentors share free online courses instead of teaching everything from zero.',
      groups: [
        {
          h: 'Goals',
          items: [
            'Backend: build a simple API that returns data',
            'Frontend: build pages and forms that use an API. The API is the set of rules the frontend uses to ask the backend for data.',
          ],
        },
        {
          h: 'What to do',
          items: ['Follow the courses on the resource list', 'Build a small practice project for your role'],
        },
        { h: 'Done when', items: ['You finished a small practice project for your role'] },
      ],
    },
  },
  {
    id: 'p3',
    k: 'n',
    x: 1900,
    y: 408,
    w: 160,
    h: 64,
    t: 'Build the project',
    s: '~7 weeks',
    d: {
      tag: 'B1 · Phase 3 · ~7 weeks',
      c: 'b',
      text: 'Build the app together. Core features first, extra features later.',
      groups: [
        { h: 'Goals', items: ['Login works', '2 or more main features work', 'Frontend and backend are connected'] },
        {
          h: 'What to do',
          items: [
            'Choose tools together: framework, database, and hosting',
            'Agree on the API as a team: write down every API call the app needs',
            'Build login first, then the main features',
            'Split the work into small tasks and set a weekly team goal',
            'Review each other’s code before you merge it',
            'Put the app online early, then keep updating it',
          ],
        },
        {
          h: 'Done when',
          items: ['The core features work from start to finish', 'The app is online for others to try'],
        },
      ],
    },
  },
  {
    id: 'p4',
    k: 'n',
    x: 2080,
    y: 408,
    w: 160,
    h: 64,
    t: 'Finish and polish',
    s: '~2 weeks',
    d: {
      tag: 'B1 · Phase 4 · ~2 weeks',
      c: 'b',
      text: 'Make the app stable, clean, and ready to show.',
      groups: [
        { h: 'Goals', items: ['Fix the main bugs', 'Improve how the app looks', 'Write the README'] },
        {
          h: 'What to do',
          items: [
            'Ask friends to try the app and report problems',
            'Fix bugs, starting with the most serious ones',
            'Write a README: what the app does, how to run it, and who did what',
            'Plan the demo: who shows which part',
          ],
        },
        { h: 'Done when', items: ['The app meets all pass rules', 'The team practiced the demo'] },
      ],
    },
  },
  {
    id: 'p5',
    k: 'b',
    x: 2260,
    y: 408,
    w: 160,
    h: 64,
    t: 'Demo day',
    s: '~2 weeks',
    d: {
      tag: 'B1 · Phase 5 · ~2 weeks',
      c: 'b',
      text: 'Present your app to the club as a team. Alumni judge the projects.',
      groups: [
        { h: 'Goals', items: ['Show the app working', 'Explain how the parts connect', 'Collect feedback'] },
        {
          h: 'What to do',
          items: [
            'Show login and the main features live',
            'Each member explains their own part',
            'Answer questions from alumni and members',
            'Write down the feedback and ideas for the next version',
          ],
        },
        { h: 'Done when', items: ['The team presented on demo day'] },
      ],
    },
  },

  /* Weekly routine */
  {
    id: 'w1',
    k: 'n',
    x: 650,
    y: 628,
    w: 160,
    h: 64,
    t: 'Monday',
    s: 'Team sets a goal',
    d: { tag: 'Weekly routine', text: 'Each team decides its own small, clear goal for the week.' },
  },
  {
    id: 'w2',
    k: 'n',
    x: 830,
    y: 628,
    w: 160,
    h: 64,
    t: 'Mid-week',
    s: 'Questions',
    d: {
      tag: 'Weekly routine',
      text: 'Members ask questions in the team chat. Teammates try to answer each other first. The mentor helps when the team is stuck.',
    },
  },
  {
    id: 'w3',
    k: 'n',
    x: 1010,
    y: 628,
    w: 160,
    h: 64,
    t: 'Sunday',
    s: 'Team update',
    d: {
      tag: 'Weekly routine',
      text: 'Each team sends its mentor one short update. Members take turns writing it for the team.',
      pre: 'Done:    Book and Member classes, books table\nNext:    Borrow and return actions\nBlocked: Not sure how to save dates in SQL',
    },
  },
  {
    id: 'w4',
    k: 'm',
    x: 1190,
    y: 628,
    w: 160,
    h: 64,
    t: 'Mentor',
    s: 'Reads updates',
    d: {
      tag: 'Weekly routine',
      c: 'm',
      title: 'Mentor reads updates',
      text: 'The mentor reads each team’s update and sees which team is stuck.',
    },
  },
];
