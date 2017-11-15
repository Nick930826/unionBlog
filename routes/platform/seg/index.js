/**
 * Created by Nick on 2017-11-14.
 */
const $ = require('cheerio');
const rp = require('request-promise');
const lib = require('../../../lib');

async function seg(ctx, next) {
    const { page } = ctx.query;
    let origin = 'https://segmentfault.com';
    let resBody = await rp(`https://segmentfault.com/t/javascript/blogs?page=${page}`).then((body) => {
        return body;
    });
    let lists = $(resBody).find('.stream-list').children();
    // let tcLists = tcLib.parseList(lists);
    const articleList = lists.map((index, item) => {
        const imgUrlObj = $(item).find('.stream-list__item .summary .author li a img');
        const imgUrl = imgUrlObj.attr('src');
        const articleTitle = $(item).find('.stream-list__item>.summary>.title>a').text();
        const articleLink = origin + $(item).find('.stream-list__item>.summary>.title>a').attr('href');
        const author = imgUrlObj.attr('alt');
        return {
            imgUrl,
            articleTitle,
            articleLink,
            author
        }
    })
    
    let arr = lib.listToArr(articleList);
    ctx.body = {
        postLists:arr
    }
}

module.exports.register = (router) => {
    router.get('/seg', seg);
};