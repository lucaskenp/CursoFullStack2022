const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, { type } = {}) {
  switch (type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default:
      return state;
  }
}
