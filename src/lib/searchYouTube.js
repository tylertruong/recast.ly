var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': options.key, 
      'maxResults': options.max,
      'part': 'snippet',
      'q': options.query,
      'type': 'video',
      'videoEmbeddable': 'true',
      'autoplay': options.autoplay},
    success: data => {
      console.log('youtube: Got the Data', data);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('youtube: Failed to get data', data);
    }
  });
};

window.searchYouTube = _.debounce(searchYouTube, 500);
