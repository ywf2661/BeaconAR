export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

export const drawer = () => {
  return {
    type: 'drawer'
  };
};