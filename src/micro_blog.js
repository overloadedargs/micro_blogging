// addUser(name) // void
// addMessage(name, message) // void
// getMessages(name) // string[]
// getAllMessages() // string[]
const users = {
  names: [],
  
  get all() {
    return this.names;
  }
};

let messages = new Map();

const addUser = (name) => {
  users.names.push(name);
  removeDuplicates();
};

const deleteUser = (name) => {
  removeUser(name);
  removeMessages(name);
};

const removeUser = (name) => {
  const index = users.names.indexOf(name);
  users.names.splice(index, 1);
};

const getUsers = () => {
  return users.all;
};

const addMessage = (name, message) => {
  const message_lister = new MessageListInitializer(messages);
  let messages_list = message_lister.messageList(name);
  messages_list.push(message);
  messages.set(name, messages_list);
};

const getMessages = (name) => {
  return messages.get(name) || [];
};

const getAllMessages = () => {
  return [...messages.values()];
};

const deleteAllMessages = () => {
  messages = new Map();
}

const deleteAllUsers = () => {
  users = {
    names: [],
  
    get all() {
      return this.names;
    }
  };
}

const removeMessages = (name) => {
  messages.delete(name);
}

const removeDuplicates = () => {
  let count = users.names.length;

  for (var i = 0; i < count; i = i + 1) {
    for (var j = i + 1; j < count; j = j + 1) {
      if (users.names[i] === users.names[j] && i !== j) {
        removeUser(users.names[j]);
      }
    }
  }
}

class MessageListInitializer {
  #messages;

  constructor(messages) {
    this.#messages = messages;
  }

  messageList = (name) => {
    return messages.get(name) || []
  }
}

const micro_blog = {
    addUser,
    getUsers,
    deleteUser,
    deleteAllUsers,
    addMessage,
    getMessages,
    getAllMessages,
    deleteAllMessages,
}

export default micro_blog;
