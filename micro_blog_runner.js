import micro_blog from "./micro_blog.js";

micro_blog.addUser('Crawford');
micro_blog.addMessage('Crawford', 'New Micro Blog');
micro_blog.addMessage('Crawford', 'New Micro Blog 2');

micro_blog.addUser('User2');
micro_blog.addMessage('User2', 'New Micro Blog');

const messages = micro_blog.getMessages('Crawford');
const all_messages = micro_blog.getAllMessages();

console.log(messages);
console.log(all_messages);