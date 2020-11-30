export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  GET_HOVERED_OFFER: `GET_HOVERED_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  GET_USER_INFO: `GET_USER_INFO`,
  UPDATE_OFFER: `UPDATE_OFFER`,
  DOWNLOAD_OFFER: `DOWNLOAD_OFFER`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_NERBY_OFFERS: `GET_NERBY_OFFERS`,
  POST_COMMENT: `POST_COMMENT`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  DELETE_OFFER_FROM_FAVORITES: `DELETE_OFFER_FROM_FAVORITES`
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

  loadFavoriteOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  getUserInfo: (data) => ({
    type: ActionType.GET_USER_INFO,
    payload: data,
  }),
  updateOffer: (newOffer) => ({
    type: ActionType.UPDATE_OFFER,
    payload: newOffer,
  }),
  downloadOffer: (offer) => ({
    type: ActionType.DOWNLOAD_OFFER,
    payload: offer
  }),
  getOfferComments: (offer) => ({
    type: ActionType.GET_COMMENTS,
    payload: offer
  }),
  getNerbyOffers: (offers) => ({
    type: ActionType.GET_NERBY_OFFERS,
    payload: offers
  }),

  deleteOfferFromFavorites: (offer) => ({
    type: ActionType.DELETE_OFFER_FROM_FAVORITES,
    payload: offer
  })
};
