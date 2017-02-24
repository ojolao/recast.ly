class App extends React.Component { 
  constructor(props) {
    super(props);
    this.onTitleClicked = this.onTitleClicked.bind(this); 
    this.invokeSearchYouTube = this.invokeSearchYouTube.bind(this);
    this.invokeSearchYouTube(); //used to be window.searchYouTube();
    
    this.state = {
      current: window.exampleVideoData[0],
      list: window.exampleVideoData,
      clicked: false
    };
  }

  onTitleClicked(e, prop) {
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked,
      current: prop
    });
    //we need to create some kind of logic that will transform the clicked video to an index and set it as the current (constructor)
  }

  invokeSearchYouTube(string) {
    var options = {
      query: (string || 'anything'),
      max: 5,
      key: window.YOUTUBE_API_KEY 
    };

    window.searchYouTube(options, function(item) {  } );
  }

  render() {
    return (
      <div>
        <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/> 
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.list} click={this.onTitleClicked}/> 
          </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

