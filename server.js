var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  url = 'http://www.imdb.com/title/tt1229340/';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = { title : "", release : "", rating : ""};

      $('.title_wrapper').filter(function(){
        var data = $(this);
        title = data.children().first().text().trim();
        release = data.children().last().children().last().text().trim();

        json.title = title;
        json.release = release;
      })

      $('.ratingValue').filter(function(){
        var data = $(this);
        rating = data.text().trim();

        json.rating = rating;
      })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })
})


app.get('/jadwal-pramek-dari-balapan', function(req, res){
  url = 'http://www.prameks.com/solo-jogja-dari-stasiun-solo-balapan.html';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rows = []
      $('#tab_1_2 div table tr').map(function(indexRow, row){
        console.log($(row))
        cols = []
        $(row).children().map(function(indexCol, col) {
          console.log($(col))
          cols.push($(col).text().trim())
        })
        rows.push(cols.join(' | '))
      });
    }

    fs.writeFile('output.txt', rows.join('\r\n'), function(err){
      console.log('File successfully written! - Check your project directory for the output.txt file');
    })

    res.send(rows.join('<br/>'))
  })
})

app.get('/jadwal-pramek-dari-purwosari', function(req, res){
  url = 'http://www.prameks.com/solo-jogja-dari-stasiun-purwosari.html';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rows = []
      $('#tab_1_2 div table tr').map(function(indexRow, row){
        console.log($(row))
        cols = []
        $(row).children().map(function(indexCol, col) {
          console.log($(col))
          cols.push($(col).text().trim())
        })
        rows.push(cols.join(' | '))
      });
    }

    fs.writeFile('output.txt', rows.join('\r\n'), function(err){
      console.log('File successfully written! - Check your project directory for the output.txt file');
    })

    res.send(rows.join('\n'))
  })
})

app.get('/jadwal-pramek-dari-klaten', function(req, res){
  url = 'http://www.prameks.com/dari-stasiun-klaten.html';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rows = []
      $('#tab_1_2 div table tr').map(function(indexRow, row){
        console.log($(row))
        cols = []
        $(row).children().map(function(indexCol, col) {
          console.log($(col))
          cols.push($(col).text().trim())
        })
        rows.push(cols.join(' | '))
      });
    }

    fs.writeFile('output.txt', rows.join('\r\n'), function(err){
      console.log('File successfully written! - Check your project directory for the output.txt file');
    })

    res.send(rows.join('\n'))
  })
})

app.get('/jadwal-pramek-dari-maguwo', function(req, res){
  url = 'http://www.prameks.com/dari-stasiun-maguwo.html';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rows = []
      $('#tab_1_2 div table tr').map(function(indexRow, row){
        console.log($(row))
        cols = []
        $(row).children().map(function(indexCol, col) {
          console.log($(col))
          cols.push($(col).text().trim())
        })
        rows.push(cols.join(' | '))
      });
    }

    fs.writeFile('output.txt', rows.join('\r\n'), function(err){
      console.log('File successfully written! - Check your project directory for the output.txt file');
    })

    res.send(rows.join('\n'))
  })
})

app.get('/jadwal-pramek-dari-lempuyangan', function(req, res){
  url = 'http://www.prameks.com/dari-stasiun-lempuyangan.html';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rows = []
      $('#tab_1_2 div table tr').map(function(indexRow, row){
        console.log($(row))
        cols = []
        $(row).children().map(function(indexCol, col) {
          console.log($(col))
          cols.push($(col).text().trim())
        })
        rows.push(cols.join(' | '))
      });
    }

    fs.writeFile('output.txt', rows.join('\r\n'), function(err){
      console.log('File successfully written! - Check your project directory for the output.txt file');
    })

    res.send(rows.join('\n'))
  })
})

app.get('/jadwal-pramek-dari-tugu', function(req, res){
  url = 'http://www.prameks.com/dari-stasiun-tugu-yogyakarta.html';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rows = []
      $('#tab_1_2 div table tr').map(function(indexRow, row){
        console.log($(row))
        cols = []
        $(row).children().map(function(indexCol, col) {
          console.log($(col))
          cols.push($(col).text().trim())
        })
        rows.push(cols.join(' | '))
      });
    }

    fs.writeFile('output.txt', rows.join('\r\n'), function(err){
      console.log('File successfully written! - Check your project directory for the output.txt file');
    })

    res.send(rows.join('\n'))
  })
})

app.get('/jadwal-pramek-dari-kutoarjo', function(req, res){
  url = 'http://www.prameks.com/dari-stasiun-kutoarjo.html';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rows = []
      $('#tab_1_2 div table tr').map(function(indexRow, row){
        console.log($(row))
        cols = []
        $(row).children().map(function(indexCol, col) {
          console.log($(col))
          cols.push($(col).text().trim())
        })
        rows.push(cols.join(' | '))
      });
    }

    fs.writeFile('output.txt', rows.join('\r\n'), function(err){
      console.log('File successfully written! - Check your project directory for the output.txt file');
    })

    res.send(rows.join('\n'))
  })
})



app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
