import { strict as assert } from 'assert';

import micro_blog from "../src/micro_blog.js";

const user_1 = 'Crawford';
const user_2 = 'User2';
const user_3 = 'User3';

describe('Users', function() {
    before(function() {
      micro_blog.addUser(user_1);
      micro_blog.addUser(user_2);
      micro_blog.addUser(user_3);
    });
  
    describe('getUsers', function () {
        const expected_users = ["Crawford", "User2", "User3"];

        it('return an array of messages', function () {
            const users = micro_blog.getUsers();
            assert.deepEqual(users, expected_users); // deepEqual because equal compares object
        });
    });
});

afterEach(function() {
    micro_blog.deleteAllMessages();
});