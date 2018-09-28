const SEARCH_URL = 'https://www.alphavantage.co/query';
const key= 'SADO5WAX1LE932KU';
let query;
let stockDataPerMonth = [100,150,312,105,111,201];
let stockMonth  = ['2018-09-27','2018-09-26','2018-09-25','2018-09-24','2018-09-23','2018-09-22'];

function callAPIForData(searchTerm, callback) {
  const query = {
    'function': 'TIME_SERIES_DAILY_ADJUSTED',
    'symbol': `${searchTerm}`,
    apikey: key
  }
  $.getJSON(SEARCH_URL, query, callback);
}

function renderResult(result) {
  return `
  `;
}

function storeDataFromAPI(data) {

 const stockInfoPerMonth = data['Time Series (Daily)'];
 stockMonth = Object.keys(stockInfoPerMonth);
 stockDataPerMonth = Object.keys(stockInfoPerMonth).map(function(objectKey, index) {
  return stockInfoPerMonth[objectKey]['5. adjusted close'];
});
 
 console.log(data);
 console.log(stockInfoPerMonth);
 console.log(stockMonth);
 console.log(stockDataPerMonth);
}


function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    callAPIForData(query, storeDataFromAPI);
  });
}

$(watchSubmit);
