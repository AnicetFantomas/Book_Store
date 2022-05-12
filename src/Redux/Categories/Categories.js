const CHECK = 'COMPLETED';

const categoriesReducer = (state = '', action) => {
  const info = 'Under construction';
  switch (action.type) {
    case CHECK:
      return info;

    default: return state;
  }
};

export const categAction = () => ({
  type: CHECK,
});

export default categoriesReducer;
