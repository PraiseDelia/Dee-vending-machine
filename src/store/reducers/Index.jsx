let initialState = {
  profile: {},
  allUsers: {},
  sellersProduct: [],
  allProducts: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE":
      return { ...state, profile: action.payload };
    case "ALL_USERS":
      return { ...state, allUsers: action.payload };
    case "SELLERS_PRODUCT":
      return { ...state, sellersProduct: action.payload };
    case "ALL_PRODUCTS":
      return { ...state, allProducts: action.payload };

    default:
      return state;
  }
};
export default reducers;
