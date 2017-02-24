class App extends React.Component { 
  constructor(props) {
    super(props);
    this.onTitleClicked = this.onTitleClicked.bind(this); 
    this.invokeSearchYouTube = this.invokeSearchYouTube.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      current: window.exampleVideoData[0],
      list: [],
      clicked: false,
      input: '' 
    };
  }

  componentDidMount() { 
    this.invokeSearchYouTube();
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.invokeSearchYouTube(this.state.input);
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
      query: (string || 'smoothiethecat'),
      max: 5,
      key: window.YOUTUBE_API_KEY 
    };

    this.props.searchYouTube(options, (videos) => 
      this.setState({
        current: videos[0],
        list: videos
      })
    );
  }

  render() {
    return (
      <div>
        <Nav onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.input}/>
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

