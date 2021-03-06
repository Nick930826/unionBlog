/**
 * Created by Nick on 2017-11-14.
 */
const $ = require('cheerio');
const rp = require('request-promise');
const lib = require('../../../lib');

async function toutiao(ctx, next) {
    const { page } = ctx.query;
    let origin = 'https://toutiao.io';
    let resBody = await rp(`https://toutiao.io/c/fe?page=${page}`).then((body) => {
        return body;
    });
    let lists = $(resBody).find('.posts').children();
    // let tcLists = tcLib.parseList(lists);
    const articleList = lists.map((index, item) => {
        const imgUrlObj = $(item).find('.user-avatar a img');
        const imgUrl = imgUrlObj.attr('src');
        const articleTitle = $(item).find('.title>a').text();
        const articleLink = origin + $(item).find('.title>a').attr('href');
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
    router.get('/toutiao', toutiao);
};