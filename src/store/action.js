export const ActionType = {
  CHANGE_CITY: `change city`,
  CHANGE_SORT_TYPE: `change sort type`,
  GET_HOVERED_OFFER_ID: `get offer ID`
};

export const ActionCreator = {
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity,
  }),
  changeSortType: (newSortingType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: newSortingType
  }),
  getHoveredOfferId: (id) => ({
    type: ActionType.GET_HOVERED_OFFER_ID,
    payload: id
  })
};
