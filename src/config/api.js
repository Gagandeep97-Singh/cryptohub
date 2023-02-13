export const CoinList ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

  
  export const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'bc145f787cmshc6be479a09555b2p112f75jsn222924337038',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };
  
  fetch('https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));