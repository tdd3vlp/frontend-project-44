#!/usr/bin/env node

import { showRules, getRandomNumber } from "../src/index.js";

import greatestCommonDivisor from "../src/games/brain-gcd.js";

showRules("Find the greatest common divisor of given numbers.");
greatestCommonDivisor(getRandomNumber(20), getRandomNumber(20));
