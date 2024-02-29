#!/usr/bin/env node

import { showRules, getRandomNumber } from "../src/index.js";

import GCD from "../src/games/brain-gcd.js";

showRules("Find the greatest common divisor of given numbers.");
GCD(getRandomNumber(), getRandomNumber());
