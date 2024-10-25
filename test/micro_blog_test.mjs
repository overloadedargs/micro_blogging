import { strict as assert } from 'assert';

import micro_blog from "../src/micro_blog.js";

const user_1 = 'Crawford';
const user_2 = 'User2';
const user_3 = 'User3';

describe('Messages', function() {
  before(function() {
    micro_blog.addUser(user_1);
    micro_blog.addMessage(user_1, 'New Micro Blog');
    micro_blog.addMessage(user_1, 'New Micro Blog 2');
  });

  describe('getMessages', function () {
      const expected_messages = [ 'New Micro Blog', 'New Micro Blog 2' ];

      it('return an array of messages', function () {
        const messages = micro_blog.getMessages(user_1);
        assert.deepEqual(messages, expected_messages); // deepEqual because equal compares object
      });
  });
});

describe('All Messages', function() {
  before(function() {
      micro_blog.addUser(user_2);
      micro_blog.addMessage(user_2, 'New Micro Blog from User 2');

      micro_blog.addUser(user_3);
      micro_blog.addMessage(user_3, 'New Micro Blog from User 3');
  });

  describe('getAllMessages', function () {
      const expected_messages = [[ "New Micro Blog from User 2"], ["New Micro Blog from User 3"]]

      it('return an array of messages', function () {
        const messages = micro_blog.getAllMessages(user_1);
        assert.deepEqual(messages, expected_messages); // deepEqual because equal compares object
      });
  });
});

afterEach(function() {
  micro_blog.deleteAllMessages();
});