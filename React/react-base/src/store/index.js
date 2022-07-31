import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, { type } = {}) => {
  switch (type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;
