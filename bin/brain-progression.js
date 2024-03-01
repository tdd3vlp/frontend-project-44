#!/usr/bin/env node

import { showRules } from '../src/index.js';

import arithmeticProgression from '../src/games/brain-progression.js';

showRules('What number is missing in the progression?');
arithmeticProgression();
