var searchYouTube = ({key, max, query}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': key, 
      'maxResults': max,
      'part': 'snippet',
      'q': query,
      'type': 'video',
      'videoEmbeddable': 'true'
    },
    success: ({items}) => {
      console.log('youtube: Got the Data', items);
      callback(items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('youtube: Failed to get data', data);
    }
  });
};

window.searchYouTube = _.debounce(searchYouTube, 500);
