var VideoPlayer = ({video, autoplay}) => {

  
  let videoID = ' ';
  let title = ' ';
  let description = ' ';
  let autoplayurl = '?autoplay=' + (autoplay ? 1 : 0);

  if (video.id) {
    videoID = video.id.videoId;
  } 

  if (video.snippet) {
    title = video.snippet.title;
    description = video.snippet.description;
  }

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + videoID + autoplayurl} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
