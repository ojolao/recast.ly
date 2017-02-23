class App extends React.Component { 
  constructor(props) {
    super(props);
    this.onTitleClicked = this.onTitleClicked.bind(this); 
    this.state = {
      current: {props}, //zero here
      list: props,
      clicked: false
    };
  }

  onTitleClicked(e, props) {
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    });
    //we need to create some kind of logic that will transform the clicked video to an index and set it as the current (constructor)
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

