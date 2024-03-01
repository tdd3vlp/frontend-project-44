#!/usr/bin/env node

import { showRules, getRandomNumber } from '../src/index.js';

import parityCheck from '../src/games/brain-even.js';

showRules('Answer "yes" if the number is even, otherwise answer "no".');
parityCheck(getRandomNumber(60));
