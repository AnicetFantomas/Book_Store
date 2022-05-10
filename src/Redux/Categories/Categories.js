const CHECK = 'BookStore/Categories/CHECK_STATUS';

const categoriesReduce = (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';

    default: return state;
  }
};

export const catAction = () => ({
  type: CHECK,
});

export default categoriesReduce;
