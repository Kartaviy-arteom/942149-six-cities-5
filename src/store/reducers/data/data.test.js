import {getData} from "./data";
import {ActionType} from "../../action";


const offers = [
  {
    amenities: [`Air conditioning`, `Laptop friendly workspace`],
    bedroomsCount: 3,
    city: `Paris`,
    cityCords: [48.85661, 2.351499],
    cityZoom: 13,
    cords: [48.87961000000001, 2.353499],
    costValue: 332,
    description: `Template`,
    isFavorite: true,
    isPremium: false,
    maxGuestsCount: 1,
    offerId: 1,
    offerZoom: 1,
    owner: {
      avatarPath: `img/avatar.jpg`,
      isSuper: true,
      ownerId: 1,
      ownerName: `Boris`
    },
    photoPaths: [`https://`],
    previewImage: `https://`,
    ratingValue: 1,
    title: `Amazing...`,
    type: `apartment`,
  },
  {
    amenities: [`Air conditioning`, `Laptop friendly workspace`],
    bedroomsCount: 3,
    city: `Paris`,
    cityCords: [48.85661, 2.351499],
    cityZoom: 13,
    cords: [48.87961000000001, 2.353499],
    costValue: 332,
    description: `Template`,
    isFavorite: true,
    isPremium: false,
    maxGuestsCount: 2,
    offerId: 2,
    offerZoom: 2,
    owner: {
      avatarPath: `img/avatar.jpg`,
      isSuper: true,
      ownerId: 2,
      ownerName: `Boris`
    },
    photoPaths: [`https://`],
    previewImage: `https://`,
    ratingValue: 2,
    title: `Amazing...`,
    type: `apartment`,
  },
];

const nerbyOffers = [
  {
    amenities: [`Air conditioning`, `Laptop friendly workspace`],
    bedroomsCount: 3,
    city: `Paris`,
    cityCords: [48.85661, 2.351499],
    cityZoom: 13,
    cords: [48.87961000000001, 2.353499],
    costValue: 332,
    description: `Template`,
    isFavorite: true,
    isPremium: false,
    maxGuestsCount: 1,
    offerId: 1,
    offerZoom: 1,
    owner: {
      avatarPath: `img/avatar.jpg`,
      isSuper: true,
      ownerId: 1,
      ownerName: `Boris`
    },
    photoPaths: [`https://`],
    previewImage: `https://`,
    ratingValue: 1,
    title: `Amazing...`,
    type: `apartment`,
  },
  {
    amenities: [`Air conditioning`, `Laptop friendly workspace`],
    bedroomsCount: 3,
    city: `Paris`,
    cityCords: [48.85661, 2.351499],
    cityZoom: 13,
    cords: [48.87961000000001, 2.353499],
    costValue: 332,
    description: `Template`,
    isFavorite: true,
    isPremium: false,
    maxGuestsCount: 2,
    offerId: 2,
    offerZoom: 2,
    owner: {
      avatarPath: `img/avatar.jpg`,
      isSuper: true,
      ownerId: 2,
      ownerName: `Boris`
    },
    photoPaths: [`https://`],
    previewImage: `https://`,
    ratingValue: 2,
    title: `Amazing...`,
    type: `apartment`,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(getData(void 0, {})).toEqual({
    offers: [],
    currentOffer: null,
    nerbyOffers: [],
  });
});

it(`Reducer should update offer by load offers`, () => {
  expect(getData({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  })).toEqual({
    offers,
  });
});

it(`Reducer should update nerby offer by load nerby offers`, () => {
  expect(getData({
    nerbyOffers: [],
  }, {
    type: ActionType.GET_NERBY_OFFERS,
    payload: nerbyOffers,
  })).toEqual({
    nerbyOffers,
  });
});

it(`Reducer should update favorites offer by load favorites offers`, () => {
  expect(getData({
    favoriteOffers: []
  }, {
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers
  })).toEqual({
    favoriteOffers: offers
  });
});

it(`Reducer should download offer`, () => {
  expect(getData({
    currentOffer: null,
  }, {
    type: ActionType.DOWNLOAD_OFFER,
    payload: offers[0]
  })).toEqual({
    currentOffer: offers[0]
  });
});

it(`Reducer should update offer`, () => {
  expect(getData({
    offers: [{offerId: 1, isFavorite: false}, {offerId: 2, isFavorite: false}],
    currentOffer: {offerId: 1, isFavorite: false},
    nerbyOffers: [{offerId: 1, isFavorite: false}, {offerId: 2, isFavorite: false}],
  }, {
    type: ActionType.UPDATE_OFFER,
    payload: {offerId: 1, isFavorite: true},
  })).toEqual({
    offers: [{offerId: 1, isFavorite: true}, {offerId: 2, isFavorite: false}],
    currentOffer: {offerId: 1, isFavorite: true},
    nerbyOffers: [{offerId: 1, isFavorite: true}, {offerId: 2, isFavorite: false}],
  });
});

it(`Reducer should delete offer from favorites list and update offer in offers, nerbyOffers and currentOffer`, () => {
  expect(getData({
    offers: [{offerId: 1, isFavorite: true, city: `Paris`}, {offerId: 2, isFavorite: false, city: `Paris`}],
    currentOffer: {offerId: 1, isFavorite: true, city: `Paris`},
    nerbyOffers: [{offerId: 1, isFavorite: true, city: `Paris`}, {offerId: 2, isFavorite: false, city: `Paris`}],
    favoriteOffers: {
      Paris: [{offerId: 1, isFavorite: true}],
      offersCount: 1
    }
  }, {
    type: ActionType.DELETE_OFFER_FROM_FAVORITES,
    payload: {offerId: 1, isFavorite: false, city: `Paris`},
  })).toEqual({
    offers: [{offerId: 1, isFavorite: false, city: `Paris`}, {offerId: 2, isFavorite: false, city: `Paris`}],
    currentOffer: {offerId: 1, isFavorite: false, city: `Paris`},
    nerbyOffers: [{offerId: 1, isFavorite: false, city: `Paris`}, {offerId: 2, isFavorite: false, city: `Paris`}],
    favoriteOffers: {
      Paris: [],
      offersCount: 0
    }
  });
});
