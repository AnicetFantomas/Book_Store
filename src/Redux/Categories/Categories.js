const CHECK = 'COMPLETED';
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      return [...state, 'Under construction'];

    default: return state;
  }
};

export const categAction = () => ({
  type: CHECK,
});

export default categoriesReducer;
