import { strict as assert } from 'assert';

import micro_blog from "../src/micro_blog.js";
import micro_blog_follows from '../src/micro_blog_follows.js';

const user_1 = 'Crawford';
const user_2 = 'User2';
const user_3 = 'User3';

describe('Follows', function() {
    before(function() {
        micro_blog.addUser(user_1);
        micro_blog.addUser(user_2);
        micro_blog.addUser(user_3);
        micro_blog_follows.initialize([user_1, user_2, user_3]);

        micro_blog_follows.addFollow(user_1, user_2);
        micro_blog_follows.addFollow(user_1, user_3);
        micro_blog_follows.addFollow(user_2, user_1);
        micro_blog_follows.addFollow(user_2, user_3);
        micro_blog_follows.addFollow(user_3, user_1);
    });
  
    describe('getSharedFollows', function () {
        const expected_shared_follows = ["Crawford"];

        it('return an array of messages', function () {
            const follows = micro_blog_follows.getSharedFollows(user_2, user_3);
            assert.deepEqual(follows, expected_shared_follows);
        });
    });
});

afterEach(function() {
    //micro_blog.deleteAllUsers();
});