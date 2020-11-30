import {ActionCreator} from "./action";
import {adaptOfferToClient, adaptCommentToClient, adaptUserInfo, getOffersSortByCities} from "../utils";
import {AuthorizationStatus} from "../consts";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => data.map(adaptOfferToClient))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(ActionCreator.downloadOffer(offer)))
);

export const getOfferComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => data.map(adaptCommentToClient))
    .then((data) => dispatch(ActionCreator.getOfferComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.getUserInfo(adaptUserInfo(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.getUserInfo(adaptUserInfo(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const changeOfferStatus = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${hotelId}/${status}`)
  .then(({data}) => adaptOfferToClient(data))
  .then((offer) => dispatch(ActionCreator.updateOffer(offer)))
);

export const deleteOffer = (hotelId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${hotelId}/${status}`)
  .then(({data}) => adaptOfferToClient(data))
  .then((offer) => dispatch(ActionCreator.deleteOfferFromFavorites(offer)))
);

export const getNerbyOffers = (id) => (dispatch, _getState, api) =>
  api.get(`/hotels/${id}/nearby`)
  .then(({data}) => data.map(adaptOfferToClient))
  .then((offers) => dispatch(ActionCreator.getNerbyOffers(offers)));

export const postingComment = (hotelId, {comment, rating}, {onSuccess, onError}) => (dispatch, _getState, api) => (
  api.post(`/comments/${hotelId}`, {comment, rating})
    .then(({data}) => data.map(adaptCommentToClient))
    .then((data) => {
      dispatch(ActionCreator.getOfferComments(data));
      if (onSuccess) {
        onSuccess();
      }
    })
    .catch((err) => {
      if (onError) {
        onError(err);
      }
    })
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => data.map(adaptOfferToClient))
    .then((offers) => getOffersSortByCities(offers))
    .then((offers) => dispatch(ActionCreator.loadFavoriteOffers(offers)))
);
