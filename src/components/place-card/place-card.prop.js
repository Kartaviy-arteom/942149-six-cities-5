import PropTypes from "prop-types";

export default PropTypes.shape({
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  photoPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  costValue: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  cords: PropTypes.arrayOf(PropTypes.number).isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxGuestsCount: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  cityCords: PropTypes.arrayOf(PropTypes.number).isRequired,
  cityZoom: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    ownerId: PropTypes.number.isRequired,
    avatarPath: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }),
  offerZoom: PropTypes.number.isRequired,

}).isRequired;
