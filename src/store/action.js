export const ActionType = {
  CHANGE_CITY: `change city`,
  CHANGE_SORT_TYPE: `change sort type`,
  GET_HOVERED_OFFER: `get offer`,
  LOAD_OFFERS: `load offers`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
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
  getHoveredOffer: (offer) => ({
    type: ActionType.GET_HOVERED_OFFER,
    payload: offer
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
