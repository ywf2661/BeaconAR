export default (state = { selectedLibraryId: false }, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    case 'drawer':
      console.log(state);
      
      return { ...state, selectedLibraryId: !state.selectedLibraryId };
    default:
      return state;
  }
};
