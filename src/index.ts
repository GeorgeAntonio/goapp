import { actions } from './actions'
import { Npc } from './npc'
import { State } from './state'

// Definindo o estado inicial do berserker
const state: State = {
  beingAttacked: false,
  hasEnemy: false,
  enemyKilled: false,
  isStunned: false,
  isCloseEnough: false,
  isLowOnHealth: false,
  // Adicione mais propriedades conforme necessário
};

// Definindo o objetivo do berserker
const goal: State = {
  enemyKilled: true,  // Objetivo principal  
};


// Criando a instância do berserker
const berserker = new Npc(state, actions);
berserker.goal = goal;

// Exibindo o estado inicial
console.log(berserker.state);

// Executando o plano
while (berserker.plan.length > 0) {
  berserker.execute();
}

// Exibindo o estado final após a execução do plano
console.log(berserker.state);