import micro_blog from "./src/micro_blog.js";
import micro_blog_follows from './src/micro_blog_follows.js';
import star_rating from './src/star_rating.js';

const user_1 = 'Crawford';
const user_2 = 'User2';
const user_3 = 'User3';

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

const users = micro_blog.getUsers();
console.log(users);

micro_blog_follows.initialize(users);
micro_blog_follows.addFollow(user_1, user_2);
micro_blog_follows.addFollow(user_1, user_3);
micro_blog_follows.addFollow(user_2, user_1);
micro_blog_follows.addFollow(user_2, user_3);
micro_blog_follows.addFollow(user_3, user_1);
const follows = micro_blog_follows.listFollows();

const follow_messages = micro_blog_follows.getMessagesFromFollows(user_1, micro_blog);

console.log(follows);
console.log(follow_messages);

const shared_follows = micro_blog_follows.getSharedFollows(user_3, user_2);
console.log(shared_follows);

const shared_follows_2 = micro_blog_follows.getSharedFollows(user_1, user_2);
console.log(shared_follows_2);

const similar_users = micro_blog_follows.getSimilarUsers(user_1, 1)
console.log(similar_users);

micro_blog.deleteUser(user_1);

const empty_messages = micro_blog.getMessages(user_1);
console.log(empty_messages);

const some_messages = micro_blog.getMessages(user_2);
console.log(some_messages);

// Trying to add a duplicate user name
const user_4 = 'User2';
micro_blog.addUser(user_4);

const user_2_messages = micro_blog.getMessages(user_4);
console.log(user_2_messages);

const userList = micro_blog.getUsers();
console.log(userList);

star_rating.initialize(all_messages);
star_rating.addRating(1, 1);
star_rating.addRating(2, 2);
star_rating.addRating(3, 2);
star_rating.addRating(1, 2);
star_rating.addRating(1, 1);
star_rating.addRating(5, 1);
console.log(star_rating.getRating(1));
console.log(star_rating.getAllRatingsOver(3));

console.log(star_rating.allRatings());