import type { Diagram } from '../types';
import { gitStudyJam } from './gitStudyJam';
import { mentoring } from './mentoring';

/** All maps, in dropdown order. The first one opens by default. */
export const diagrams: Diagram[] = [gitStudyJam, mentoring];
