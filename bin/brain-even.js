#!/usr/bin/env node

import { showRules, getRandomNumber } from "../src/index.js";

import parity from "../src/games/brain-even.js";

showRules('Answer "yes" if the number is even, otherwise answer "no".');
parity(getRandomNumber());
