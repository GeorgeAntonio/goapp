import { State } from './state';

export interface Action {
  name: string;
  precond: State;
  effects: State;
  cost: number;
}

// Exemplos de ações para o berserker
const searchEnemy: Action = {
  name: 'searchEnemy',
  precond: { beingAttacked: false, enemyKilled: false, hasEnemy: false },
  effects: { beingAttacked: false, enemyKilled: false, hasEnemy: true },
  cost: 1,
};

const attack: Action = {
  name: 'attack',
  precond: { beingAttacked: false, hasEnemy: true, enemyKilled: false },
  effects: { beingAttacked: false, enemyKilled: true, hasEnemy: false },
  cost: 1,
};

const defend: Action = {
  name: 'defend',
  precond: { beingAttacked: true, hasEnemy: true, enemyKilled: false },
  effects: { beingAttacked: false, enemyKilled: false, hasEnemy: true },
  cost: 1,
};

export const actions = [searchEnemy, attack, defend];
