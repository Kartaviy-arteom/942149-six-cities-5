import {applicationProcess} from "./application-process";
import {ActionType} from "../../action";
import {SortTypes, CITIES} from "../../../consts";

const offer = {
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
};

const review = {
  avatarPath: `img.jpg`,
  name: `John`,
  rating: 4,
  date: `2020-10-10T13:38:44.753Z`,
  reviewText: `very good`,
};

describe(`application process reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(applicationProcess(void 0, {})).toEqual({
      cities: CITIES,
      activeCity: CITIES[0],
      sortType: SortTypes.POPULAR,
      activeOffer: null,
    });
  });

  it(`Reducer should change city`, () => {
    expect(applicationProcess({
      activeCity: CITIES[0],
    }, {
      type: ActionType.CHANGE_CITY,
      payload: CITIES[1],
    })).toEqual({
      activeCity: CITIES[1],
    });
  });

  it(`Reducer should change sorttype`, () => {
    expect(applicationProcess({
      sortType: SortTypes.POPULAR,
    }, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortTypes.TOP_RATED,
    })).toEqual({
      sortType: SortTypes.TOP_RATED,
    });
  });

  it(`Reducer should change active offer when new offer hovered`, () => {
    expect(applicationProcess({
      activeOffer: null,
    }, {
      type: ActionType.GET_HOVERED_OFFER,
      payload: offer,
    })).toEqual({
      activeOffer: offer,
    });
  });

  it(`Reducer should get comments`, () => {
    expect(applicationProcess({
      activeOfferComments: [],
    }, {
      type: ActionType.GET_COMMENTS,
      payload: [review],
    })).toEqual({
      activeOfferComments: [review],
    });
  });
});
