
const initialState = {
  
};

const commonReducer = (state = initialState, action) => {
  switch (action.payload) {
    default: {
      return { ...state };
    }
  }
}

export default commonReducer;