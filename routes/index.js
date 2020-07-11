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
          statue: $(this).find("span.before").text().replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' ),
          date: $(this).find("span.livedate").text()
      };
    });

    const data = {covid: ulList.filter(n => n.title)};
    return res.json(data);
  })
});

module.exports = router;