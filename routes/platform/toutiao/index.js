/**
 * Created by Nick on 2017-09-24.
 */
const $ = require('cheerio');
const rp = require('request-promise');
const lib = require('../../../lib');

async function toutiao(ctx, next) {
    let origin = 'https://toutiao.io';
    let resBody = await rp('https://toutiao.io/c/fe').then((body) => {
        return body;
    });
    let lists = $(resBody).find('.posts').children();
    // let tcLists = tcLib.parseList(lists);
    const articleList = lists.map((index, item) => {
        const articleTitle = $(item).find('.title>a').text();
        const articleLink = origin + $(item).find('.title>a').attr('href');
        const author = $(item).find('.meta').text();
        return {
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