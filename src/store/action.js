export const ActionType = {
  CHANGE_CITY: `change city`,
};

export const ActionCreator = {
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity,
  }),
};
