var cheerio = require('cheerio');
var request = require('request');

request({
    headers:{
        'Cookie':'hasCookie=true'
    },
    url:'https://codequiz.azurewebsites.net/',
    method: 'GET',
    }, (error, res, html) => {
        if (!error && res.statusCode === 200) {
        const $ = cheerio.load(html);
        const table = $('table');
        const navBIN = table.find('td').eq(1);
        const navBM7 = table.find('td').eq(6);
        const navBEQ = table.find('td').eq(11);
        const navBFUTURE = table.find('td').eq(16);

        if(process.argv[2] === 'B-INCOMESSG')
            console.log(navBIN.html());
        
        else if(process.argv[2] === 'BM70SSF')
            console.log(navBM7.html());
        
        else if(process.argv[2] === 'BEQSSF')
            console.log(navBEQ.html());

        else if(process.argv[2] === 'B-FUTURESSG')
            console.log(navBFUTURE.html());
        
        else console.log('FUND NOT FOUND');
        }
  }
);
