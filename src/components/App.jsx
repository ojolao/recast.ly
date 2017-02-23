class App extends React.Component { 
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      current: window.exampleVideoData[0],
      list: window.exampleVideoData,
      clicked: false
    };
    this.props.searchYouTube(); //this.render as a call?
  }
  onTitleClicked() {
    this.setState({
      clicked: !this.state.clicked
    });
    console.log('i\'ve been clicked!');
  }
  render() {
    return (
      <div>
        <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/> 
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.list}/> 
          </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

