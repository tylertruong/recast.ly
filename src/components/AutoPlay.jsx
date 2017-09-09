var AutoPlay = props => {

  return (
  <div className="video-player">
    AUTOPLAY 
    <button className="autoplaybutton" onClick={() => props.onAutoPlayClick()}>
      {props.autoplay ? 'ON' : 'OFF'}
    </button>
  </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
AutoPlay.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.AutoPlay = AutoPlay;
