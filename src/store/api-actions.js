import {ActionCreator} from "./action";
import {adaptOfferToClient} from "../utils";
import {AuthorizationStatus} from "../consts";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => data.map(adaptOfferToClient))
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
