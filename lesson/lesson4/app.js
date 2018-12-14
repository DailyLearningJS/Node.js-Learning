var eventproxy = require('eventproxy')
var superagent = require('superagent')
var cheerio = require('cheerio')

var url = require('url')
var cnodeUrl = 'https://cnodejs.org'

superagent.get(cnodeUrl).end(function(err, res){
    debugger
    if(err){
        return console.log(err)
    }
    var topicUrls = []
    var $ = cheerio.load(res.text)

    $('#topic_list .topic_title').each(function(idx, element){
        var $element = $(element)
        var href = url.resolve(cnodeUrl, $element.attr('href'))
        topicUrls.push(href)
    })

    console.log(topicUrls)
})