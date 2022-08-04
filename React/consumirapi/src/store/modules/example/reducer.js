import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, { type } = {}) {
  switch (type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }
    default:
      return state;
  }
}
