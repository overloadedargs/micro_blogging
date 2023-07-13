// addRating
// getRating
// getAllRatingsBy

const messageRatings = {
  messages: [],
  ratings: [],

  get all() {
    return this.messages.map((messages, id) => ({...this.ratings[id], id}));
  }
};

const initialize = (messages) => {
  messageRatings.messages = messages;
  for (let i = 0; i < messages.length; i++) {
    messageRatings.ratings[i] = [];
  }
}

const allRatings = () => {
  return messageRatings.all;
}

const addRating = (rating, messageId) => {
  messageRatings.ratings[messageId].push(rating);
}

const getRating = (messageId) => {
  return messageRatings.ratings[messageId];
}

const getAllRatingsOver = (atleastStars) => {
  let rated_messages = [];

  for (let i = 0; i < messageRatings.messages.length; i++) {
    if (messageRatings.ratings[i].some(el => el > atleastStars)) {
      rated_messages.push({message: messageRatings.messages[i], rating: messageRatings.ratings[i]})
    }
  }
  return rated_messages;
}

const star_rating = {
  initialize: initialize,
  addRating: addRating,
  getRating: getRating,
  allRatings: allRatings,
  getAllRatingsOver: getAllRatingsOver
}

export default star_rating;