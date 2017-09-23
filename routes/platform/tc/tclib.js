/**
 * Created by Nick on 2017-09-23.
 */

'use strict';

let $ = require('cheerio');

exports.parseList = function (lists) {
    let origin = 'http://www.tuicool.com';

    let tcLists = lists.map((index, item) => {
        const imgUrlObj = $(item).find('.article_thumb_image img');
        const imgUrl = imgUrlObj.attr('src');
        const articleObj = $(item).find('.title a');
        const articleLink = origin + articleObj.attr('href');
        const articleTitle = articleObj.attr('title');
        const author = $(item).find('.tip>span').first().text();
        const time = $(item).find('.tip>span').last().text();
        return {
            imgUrl: imgUrl,
            articleLink: articleLink,
            articleTitle: articleTitle,
            author: author,
            time: time
        };
    });
    return tcLists;  
};
