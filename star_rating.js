// addRating
// getRating
// getAllRatingsBy

const messageRatings = {
  messages: [],
  ratings: [],

  get all() {
    return messages.map((messages, index) => ({...messages, ...ratings, index}));
  }
};

const initialize = (messages) => {
  messageRatings.messages = messages;
}

const addRating = (rating, messageId) => {
  messageRatings.ratings[messageId] = rating;
}

const getRating = (messageId) => {
  return messageRatings.ratings[messageId];
}

const getAllRatings = (atleastStars) => {
  let rated_messages = [];

  for (let i = 0; i < messageRatings.messages.length; i++) {
    if (messageRatings.ratings[i] >= atleastStars) {
      rated_messages.push({message: messageRatings.messages[i], rating: messageRatings.ratings[i]})
    }
  }
  return rated_messages;
}

const star_rating = {
  initialize: initialize,
  addRating: addRating,
  getRating: getRating,
  getAllRatings: getAllRatings
}

export default star_rating;