/**
 * Created by Nick on 2017-09-23.
 */
const $ = require('cheerio');
const rp = require('request-promise');
const lib = require('../../../lib');
const tcLib = require('./tclib');

async function tc(ctx, next) {
    let origin = 'http://www.tuicool.com';
    let resBody = await rp('http://www.tuicool.com/ah/20?lang=0').then((body) => {
        return body;
    });
    let lists = $(resBody).find('#list_article').children();
    let tcLists = tcLib.parseList(lists);
    console.log('tcLists', tcLists);
    let arr = lib.listToArr(tcLists);
    ctx.body = {
        postLists:arr
    }
}

module.exports.register = (router) => {
    router.get('/tc', tc);
};