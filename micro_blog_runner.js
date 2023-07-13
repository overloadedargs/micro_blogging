import micro_blog from "./micro_blog.js";
import micro_blog_follows from './micro_blog_follows.js'

const user_1 = 'Crawford';
const user_2 = 'User2';
const user_3 = 'User3'

micro_blog.addUser(user_1);
micro_blog.addMessage(user_1, 'New Micro Blog');
micro_blog.addMessage(user_1, 'New Micro Blog 2');

micro_blog.addUser(user_2);
micro_blog.addMessage(user_2, 'New Micro Blog from User 2');

micro_blog.addUser(user_3);
micro_blog.addMessage(user_3, 'New Micro Blog from User 3');

const messages = micro_blog.getMessages(user_1);
const all_messages = micro_blog.getAllMessages();

console.log(messages);
console.log(all_messages);

const users = micro_blog.getUsers;

micro_blog_follows.initialize(users);
micro_blog_follows.addFollow(user_1, user_2);
micro_blog_follows.addFollow(user_1, user_3);
micro_blog_follows.addFollow(user_2, user_1);
const follows = micro_blog_follows.listFollows();

const follow_messages = micro_blog_follows.getMessagesFromFollows(user_1, micro_blog)

console.log(follows);
console.log(follow_messages);