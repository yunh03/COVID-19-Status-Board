var express = require('express');
var router = express.Router();
const axios = require("axios");
const cheerio = require('cheerio');

router.get('/status.json', function(req, res, next) {
  let url = 'https://search.daum.net/search?w=tot&DA=TCN&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EC%BD%94%EB%A1%9C%EB%82%9819';
  
  axios.get(url).then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div.wrap_info dl.info_condition");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find("dt.tit_info").text(),
          num: $(this).find("dd.num_info span").text(),
          statue: $(this).find("dd.increment_info").text()
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
          num: $(this).find("div.maincounter-number span").text()
      };
    });

    const data = {allcovid: ulList.filter(n => n.title)};
    return res.json(data);
  })
});

router.get('/emergency.json', function(req, res, next) {
  let url = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B8%B4%EA%B8%89%EC%9E%AC%EB%82%9C%EB%AC%B8%EC%9E%90&oquery=%EA%B8%B4%EA%B8%89%EC%9E%AC%EB%82%9C+%EB%AC%B8%EC%9E%90&tqi=iK3l3lprvhGssULUnjossssst7d-419737';
  
  axios.get(url).then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("ul.disaster_list li div.inner");
    $bodyList.each(function(i, elem) {
      ulList[i] = {
          title: $(this).find("div.disaster_info div.info_box strong.area").text(),
          date: $(this).find("div.disaster_info div.info_box span.date").text(),
          msg: $(this).find("p.disaster_text").text()
      };
    });

    const data = {emergency: ulList.filter(n => n.title)};
    return res.json(data);
  })
});

module.exports = router;