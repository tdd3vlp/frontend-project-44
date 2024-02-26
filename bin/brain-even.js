#!/usr/bin/env node

import { showRules, getRandomNumber } from "../src/index.js";
import checkParity from "../src/games/brain-even.js";

showRules('Answer "yes" if the number is even, otherwise answer "no".');
checkParity(getRandomNumber());
