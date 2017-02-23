var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    //data: ,
    type: 'GET',
    dataType: 'json',
    videoEmbeddable: true,
    key: JSON.stringify(options.key),
    q: JSON.stringify(options.query),
    maxResults: JSON.stringify(options.max),
    success: JSON.stringify(callback.done()),
  });

  //options:
    //query - searching string
    //max - default to 5
    //key - authorized youtube API key

  //restrictions - GET embeddable videos only
};

window.searchYouTube = searchYouTube;
