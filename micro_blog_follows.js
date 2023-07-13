// addFollow(name, nameToFollow) // void
// getMessagesFromFollows(name) // string[]

let micro_blog_follows;

const initialize = (names) => {
  micro_blog_follows = new MicroBlogFollows(names)
}

const addFollow = (name, nameToFollow) => {
  micro_blog_follows.addFollow(name, nameToFollow)
}

const listFollows = () => {
  return micro_blog_follows.listFollows();
}

const getMessagesFromFollows = (name, micro_blog) => {
  return micro_blog_follows.getMessagesFromFollows(name, micro_blog)
}

class MicroBlogFollows {
    #names;
    #follows;
  
    constructor(names) {
      this.#names = names;
      this.#follows = {};
    }

    get names() {
      return this.#names;
    }

    addFollow = (name, nameToFollow) => {
      const follows = this.#follows[name] || [];
      follows.push( { follow: nameToFollow }) 
      this.#follows[name] = follows;
    }

    listFollows = () => {
      return this.#follows;
    }

    // passing reference to micro_blog so we can look up meesages from all users
    // reduces memory and storign all messages in two locations, can be removed
    // for db, axios or e.g. firebase
    getMessagesFromFollows = (name, micro_blog) => {
      let follow_messages = [];

      this.#follows[name].forEach(followName => {
        const messages = micro_blog.getMessages(followName.follow.toString())
        if (messages !== undefined) {
          follow_messages.push(micro_blog.getMessages(followName.follow.toString()))
        }
      })

      return follow_messages;
    }
}

const micro_blog = {
  initialize: initialize,
  addFollow: addFollow,
  listFollows: listFollows,
  getMessagesFromFollows: getMessagesFromFollows
}

export default micro_blog;