const AppartmentType = {
  APARTMENT: `Apartment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export default [
  {
    offerId: 1,
    photoPaths: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    title: `Beautiful & luxurious studio at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    isPremium: true,
    type: AppartmentType.APARTMENT,
    ratingValue: 3.1,
    bedroomsCount: 13,
    maxGuestsCount: 14,
    costValue: 100,
    amenities: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      avatarPath: `/img/avatar-chuck.jpg`,
      ownerName: `Carlos Ray "Chuck" Norris`,
      isSuper: true,
    },
    reviewIds: [1, 2, 3, 4],
    cords: [52.3909553943508, 4.85309666406198]
  },
  {
    offerId: 2,
    photoPaths: [`img/apartment-03.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    title: `Large Room In King's cross Regent's Canal Zone 1`,
    description: `King's Cross St Pancras Underground station links six London Underground lines – Circle, Piccadilly, Hammersmith & City, Northern, Metropolitan and Victoria. This makes it the biggest interchange on the London Underground, and one of the busiest. With direct access to all airports : Heathrow. Stansted. Luton. Gatwick. As well as the Eurostar going to Paris, Brussels and Amsterdam. Just seat back and relax. You don't need to change trains/buses with all your luggages.`,
    isPremium: true,
    type: AppartmentType.ROOM,
    ratingValue: 2.5,
    bedroomsCount: 2,
    maxGuestsCount: 1,
    costValue: 170,
    amenities: [`Wifi`, `Laptop-friendly workspace`, `Hair dryer`, `Essentials`, `Dryer`],
    owner: {
      avatarPath: `/img/avatar-angelina.jpg`,
      ownerName: `Michael Sylvester Gardenzio Stallone`,
      isSuper: true,
    },
    reviewIds: [5, 6],
    cords: [52.369553943508, 4.85309666406198]
  },
  {
    offerId: 3,
    photoPaths: [`img/apartment-02.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/apartment-01.jpg`],
    title: `Locke at Broken Wharf Micro Studio`,
    description: `To ensure the safety of all guests and our staff we request you practice social distancing during your stay. Our already rigorous health and safety measures now include: contactless check-in/check-out, a high-touch deep clean approach, no-contact cleans upon request, food delivery and a 24 hour window between guests in apartments. All our apartments are self-contained and fully equipped for in-room cooking. All restaurants and social spaces remain closed until further notice.`,
    isPremium: false,
    type: AppartmentType.HOUSE,
    ratingValue: 1.9,
    bedroomsCount: 1,
    maxGuestsCount: 12,
    costValue: 10,
    amenities: [`Elevator`, `Laptop-friendly workspace`, `Washer`, `Smoke alarm`, `Dryer`, `Kitchen`, `Gym`],
    owner: {
      avatarPath: `/img/avatar-angelina.jpg`,
      ownerName: `Michael Delaney Dowd Jr.`,
      isSuper: true,
    },
    reviewIds: [7],
    cords: [52.3909553943508, 4.929309666406198]
  },
  {
    offerId: 4,
    photoPaths: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    title: `Romantic Shepherds hut with stunning sunsets`,
    description: `Newly opened in August 2020 why not visit our hand crafted Shepherds Hut with views over the Northdowns. Fresh flowers, fluffy dressing gowns and a dip in your private wood fired hot tub under the stars makes the perfect get away. Or for colder months the log burning 'Hobbit' stove will make it all the more romantic.`,
    isPremium: false,
    type: AppartmentType.HOUSE,
    ratingValue: 5,
    bedroomsCount: 1,
    maxGuestsCount: 2,
    costValue: 10000,
    amenities: [`Elevator`, `Laptop-friendly workspace`, `Washer`, `Smoke alarm`, `Dryer`, `Kitchen`, `Gym`],
    owner: {
      avatarPath: `/img/avatar-angelina.jpg`,
      ownerName: `Mike "Iron Mike" Tyson`,
      isSuper: true,
    },
    reviewIds: [8, 9, 10],
    cords: [52.3809553943508, 4.939309666406198]
  },
];
