import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, { type } = {}) {
  switch (type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Success');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Erro');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Requisição');
      return state;
    }
    default:
      return state;
  }
}
