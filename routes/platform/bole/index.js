/**
 * Created by Nick on 2017-11-14.
 */
const $ = require('cheerio');
const rp = require('request-promise');
const lib = require('../../../lib');

async function bole(ctx, next) {
    const { page } = ctx.query;
    let origin = 'http://web.jobbole.com';
    let resBody = await rp(`http://web.jobbole.com/all-posts/page/${page}/`).then((body) => {
        return body;
    });
    let lists = $(resBody).find('#archive').children();
    // let tcLists = tcLib.parseList(lists);
    const articleList = lists.map((index, item) => {
        const imgUrlObj = $(item).find('.floated-thumb>.post-thumb>a>img');
        const aObj = $(item).find('.floated-thumb>.post-thumb>a');
        const time = $(item).find('.floated-thumb>.post-meta>p:first-child').text();
        console.log('aObj', aObj);
        const imgUrl = imgUrlObj.attr('src');
        const articleTitle = aObj.attr('title');
        const articleLink = aObj.attr('href');
        return {
            imgUrl,
            articleTitle: time,
            articleLink,
        }
    })
    
    let arr = lib.listToArr(articleList);
    ctx.body = {
        postLists:arr
    }
}

module.exports.register = (router) => {
    router.get('/bole', bole);
};