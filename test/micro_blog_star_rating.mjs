import { strict as assert } from 'assert';

import micro_blog from "../src/micro_blog.js";
import star_rating from '../src/star_rating.js';

const user_1 = 'Crawford';
const user_2 = 'User2';
const user_3 = 'User3';

describe('Rating', function() {
    before(function() {
        micro_blog.addUser(user_1);
        micro_blog.addUser(user_2);
        micro_blog.addUser(user_3);
      
        micro_blog.addMessage(user_1, 'New Micro Blog');
        micro_blog.addMessage(user_1, 'New Micro Blog 2');

        micro_blog.addMessage(user_2, 'New Micro Blog from User 2');
        micro_blog.addMessage(user_3, 'New Micro Blog from User 3');

        star_rating.initialize(micro_blog.getAllMessages());
        star_rating.addRating(1, 1);
        star_rating.addRating(2, 2);
        star_rating.addRating(3, 2);
        star_rating.addRating(1, 2);
        star_rating.addRating(1, 1);
        star_rating.addRating(5, 1);
    });
  
    describe('getRating()', function () {
        const expected_ratings = [1, 1, 5]; // ratings for message_id 1 from users

        it('return an array of messages', function () {
            const ratings = star_rating.getRating(1);
            assert.deepEqual(ratings, expected_ratings); // deepEqual because equal compares object
        });
    });
});

describe('Ratings Over', function () {
    before(function() {
        micro_blog.addUser(user_1);
        micro_blog.addUser(user_2);
        micro_blog.addUser(user_3);
      
        micro_blog.addMessage(user_1, 'New Micro Blog');
        micro_blog.addMessage(user_1, 'New Micro Blog 2');

        micro_blog.addMessage(user_2, 'New Micro Blog from User 2');
        micro_blog.addMessage(user_3, 'New Micro Blog from User 3');
    });

    describe('getAllRatingsOver()', function () {
    
        before(function() {            
            star_rating.initialize(micro_blog.getAllMessages());
            star_rating.addRating(1, 1);
            star_rating.addRating(2, 2);
            star_rating.addRating(3, 2);
            star_rating.addRating(1, 2);
            star_rating.addRating(1, 1);
            star_rating.addRating(5, 1); // different below
        });

        // need to always return array
        const expected_ratings = [{ "message": [ "New Micro Blog from User 2"], "rating": [1, 1, 5]}];

        it('return an array of messages', function () {
            const ratings = star_rating.getAllRatingsOver(3);
            assert.deepEqual(ratings, expected_ratings); // deepEqual because equal compares object
        });
    });

    describe('getAllRatings() with no ratings over 3', function () {
        before(function() {            
            star_rating.initialize(micro_blog.getAllMessages());
            star_rating.addRating(1, 1);
            star_rating.addRating(2, 2);
            star_rating.addRating(3, 2);
            star_rating.addRating(1, 2);
            star_rating.addRating(1, 1);
            star_rating.addRating(2, 1);
        });
        const expected_ratings = [];

        it('return an array of messages', function () {
            const ratings = star_rating.getAllRatingsOver(3);
            assert.deepEqual(ratings, expected_ratings); // deepEqual because equal compares object
        });
    });
});

afterEach(function() {
    micro_blog.deleteAllMessages();
});