class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {},
      videos: [],
      autoplay: false,
    };
  }

  componentDidMount() {
    this.props.searchYouTube({query: 'kittens', max: '5', key: window.YOUTUBE_API_KEY}, data => this.setState({videos: data, video: data[0]}));
  }

  onVideoClick(event) {
    this.setState({
      video: event
    });
  }
  
  onAutoPlayClick(event) {
    this.setState({
      autoplay: !this.state.autoplay
    });
  }
  onKey(event) {
    this.props.searchYouTube({query: event, max: '5', key: window.YOUTUBE_API_KEY}, data => this.setState({videos: data, video: data[0]}));
  }

  render() {
    return (
      <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search onChange={(event) => this.onKey(event)} />
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video={this.state.video} autoplay={this.state.autoplay} />
              <AutoPlay video={this.state.video} autoplay={this.state.autoplay} onAutoPlayClick={() => this.onAutoPlayClick()}/>
            </div>
            <div className="col-md-5">
              <VideoList videos={this.state.videos} onClick={(event) => this.onVideoClick(event)}/>
            </div>
          </div>
       </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
