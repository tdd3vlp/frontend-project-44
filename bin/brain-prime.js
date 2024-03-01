#!/usr/bin/env node

import { showRules, getRandomNumber } from '../src/index.js';

import isPrime from '../src/games/brain-prime.js';

showRules('Answer "yes" if given number is prime. Otherwise answer "no".');
isPrime(getRandomNumber(100));
