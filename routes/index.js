var express = require('express');
var router = express.Router();
const axios = require("axios");
const cheerio = require('cheerio');

router.get('/status.json', function(req, res, next) {
  let url = 'http://ncov.mohw.go.kr/';
  
  axios.get(url).then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.liveNum ul.liveNum li");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find("strong").text(),
          num: $(this).find("span.num").text().replace(/[^0-9]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          statue: $(this).find("span.before").text().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' )
      };
    });

    const data = {covid: ulList.filter(n => n.title)};
    return res.json(data);
  })
});

router.get('/all-status.json', function(req, res, next) {
  let url = 'https://www.worldometers.info/coronavirus/';
  
  axios.get(url).then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div#maincounter-wrap");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find("h1").text(),
          num: $(this).find("div.maincounter-number span").text().replace(/[^0-9]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      };
    });

    const data = {allcovid: ulList.filter(n => n.title)};
    return res.json(data);
  })
});

router.get('/emergency.json', function(req, res, next) {
  let url = 'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EA%B8%B4%EA%B8%89%EC%9E%AC%EB%82%9C%EB%AC%B8%EC%9E%90';
  
  axios.get(url).then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("ul.msg_list_timeline li.today div.msg_timeline");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find("em.area_name").text(),
          date: $(this).find("time").text(),
          msg: $(this).find("span.dsc._text").text()
      };
    });

    const data = {emergency: ulList.filter(n => n.title)};
    return res.json(data);
  })
});

module.exports = router;