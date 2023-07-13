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

const getSharedFollows = (name, other_name) => {
  return micro_blog_follows.getSharedFollows(name, other_name)
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

    listUserFollows = (name) => {
      return this.#follows[name].map(({ follow }) => follow);
    }

    // passing reference to micro_blog so we can look up meesages from all users
    // reduces memory and storing all messages in two locations, can be removed
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
    
    getSharedFollows = (name, other_name) => {
      let shared_follows = [];
      for (let [_, value] of Object.entries(this.#follows[name])) {
        const other_follows = this.listUserFollows(other_name);

        if (other_follows.includes(value.follow)) {
          shared_follows.push(value.follow)
        }
      }
      
      return shared_follows;
    }
}

const micro_blog = {
  initialize: initialize,
  addFollow: addFollow,
  listFollows: listFollows,
  getMessagesFromFollows: getMessagesFromFollows,
  getSharedFollows: getSharedFollows,
}

export default micro_blog;