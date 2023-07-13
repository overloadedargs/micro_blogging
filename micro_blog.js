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
};

const getUsers = () => {
  return users.all;
}

const addMessage = (name, message) => {
  const message_lister = new MessageListInitializer(messages);
  let messages_list = message_lister.messageList(name);
  messages_list.push(message);
  messages.set(name, messages_list);
};

const getMessages = (name) => {
  return messages.get(name);
};

const getAllMessages = () => {
  return [...messages.values()];
};

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
    addUser: addUser,
    getUsers: getUsers,
    addMessage: addMessage,
    getMessages: getMessages,
    getAllMessages: getAllMessages
}

export default micro_blog;
