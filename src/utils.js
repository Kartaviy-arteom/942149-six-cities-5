export const adaptOfferToClient = (receivedOffer) => {
  const adaptedOffer = Object.assign(
      {},
      receivedOffer,
      {
        offerId: receivedOffer.id,
        previewImage: receivedOffer.preview_image,
        city: receivedOffer.city.name,
        cityCords: [receivedOffer.city.location.latitude, receivedOffer.city.location.latitude.longitude],
        cityZoom: receivedOffer.city.location.zoom,
        photoPaths: receivedOffer.images,
        isFavorite: receivedOffer.is_favorite,
        isPremium: receivedOffer.is_premium,
        ratingValue: receivedOffer.rating,
        bedroomsCount: receivedOffer.bedrooms,
        maxGuestsCount: receivedOffer.max_adults,
        costValue: receivedOffer.price,
        amenities: receivedOffer.goods,
        owner: {
          ownerId: receivedOffer.host.id,
          avatarPath: receivedOffer.host.avatar_url,
          ownerName: receivedOffer.host.name,
          isSuper: receivedOffer.host.is_pro
        },
        cords: [receivedOffer.location.latitude, receivedOffer.location.longitude],
        offerZoom: receivedOffer.location.zoom,
      }
  );

  return adaptedOffer;
};

export const adaptCommentToClient = (comment) => {
  const adaptedComment = Object.assign(
    {},
    comment,
    {
      commentId: comment.id,
      commentatorId: comment.user.id,
      isCommentatorPro: comment.user.is_pro,
      name: comment.user.name,
      avatarPath: comment.user.avatar_url,
      reviewText: comment.comment,
    }
  );

  return adaptedComment;
}
