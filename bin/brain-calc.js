#!/usr/bin/env node

import { showRules, getRandomNumber } from "../src/index.js";

import calculator, { getRandomOperand } from "../src/games/brain-calc.js";

showRules("What is the result of the expression?");
calculator(getRandomNumber(10), getRandomOperand(), getRandomNumber(10));
