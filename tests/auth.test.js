const globals = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app');

const { it, expect } = globals;

it('Should pass.', () => {
  expect(1).toEqual(1);
});
