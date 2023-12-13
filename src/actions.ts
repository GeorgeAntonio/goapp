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
  precond: { 
    beingAttacked: false, 
    enemyKilled: false, 
    hasEnemy: false, 
    isStunned: false, 
    isLowOnHealth: false,  
  },
  effects: { 
    beingAttacked: false, 
    enemyKilled: false, 
    hasEnemy: true, 
  },
  cost: 1,
};

const moveCloser: Action = {
  name: 'moveCloser',
  precond: { 
    beingAttacked: false, 
    enemyKilled: false, 
    hasEnemy: true, 
    isCloseEnough : false, 
    isStunned: false, 
    isLowOnHealth: false, 
  },
  effects: { 
    beingAttacked: true, 
    isCloseEnough: true,
  },
  cost: 1,
};

const attack: Action = {
  name: 'attack',
  precond: {     
    hasEnemy: true, 
    enemyKilled: false, 
    isCloseEnough: true, 
    isStunned: false, 
    isLowOnHealth: false 
  },
  effects: { 
    beingAttacked: false, 
    hasEnemy: false, 
    isCloseEnough: false, 
    isStunned: true, 
  },
  cost: 1,
};

const regainCounsciousness: Action = {
  name: 'regainCounsciousness',
  precond: { 
    isStunned: true, 
  },
  effects: {     
    isStunned: false, 
    isLowOnHealth: true, 
  },
  cost: 1,
}

const checkCoastClear: Action = {
  name: 'checkCoastClear',
  precond:{    
    isStunned: false,       
  },
  effects:{
    enemyKilled: true,
  },
  cost: 1,
}

const defend: Action = {
  name: 'defend',
  precond: { 
    beingAttacked: true, 
    hasEnemy: true, 
    enemyKilled: false, 
    isCloseEnough: true,
    isStunned: false, 
    isLowOnHealth: true, 
  },
  effects: { 
    beingAttacked: false, 
    enemyKilled: false, 
    hasEnemy: true, 
    isCloseEnough: false, 
  },
  cost: 1,
};



export const actions = [
  searchEnemy,
  moveCloser, 
  attack, 
  regainCounsciousness,
  checkCoastClear,
  defend
];
