var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', { videoEmbeddable: 'true',
    part: 'snippet',
    key: options.key,
    q: options.query,
    type: 'video',
    maxResults: options.max},
    // GET {base_URL}/search?part=snippet
    //                  &q=soccer
    //                  &key={YOUR_API_KEY}
    //data: ,
   function(data) { callback(data.items); }
  );

  //options:
    //query - searching string
    //max - default to 5
    //key - authorized youtube API key

  //restrictions - GET embeddable videos only
};

window.searchYouTube = searchYouTube;
