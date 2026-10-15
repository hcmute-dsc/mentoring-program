export interface Release {
  version: string;
  /** Release date, YYYY-MM-DD. */
  date: string;
  /** What is new, one short sentence each. */
  items: string[];
}

/**
 * Release notes, newest first. The "What's new" popup (click the version tag) shows them.
 * When you raise the version in package.json, add an entry here for it.
 */
export const releases: Release[] = [
  {
    version: '2.0.0',
    date: '2026-10-15',
    items: [
      'A new map: the Git & GitHub Study Jam timeline, from the kickoff to the closing ceremony.',
      'Pick the map in the dropdown at the top-left.',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-10-14',
    items: [
      'Switch between the light and dark theme with the button in the top-right corner.',
      'The site follows your system theme until you pick one. Your choice is saved in this browser.',
      'Click the version tag to see what is new in each version.',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-10-13',
    items: [
      'An interactive map of the mentoring program. Click a block to see its details.',
      'Drag to move the map. Scroll or pinch to zoom. "Fit" shows the whole map.',
      'Show or hide the timeline phases of each group.',
      'Team-based groups, and notes that mark the required steps.',
      'Keys: + / - zoom, 0 fits the map, Esc closes the panel.',
    ],
  },
];
