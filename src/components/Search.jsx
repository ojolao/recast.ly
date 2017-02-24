var Search = (props) => (
  <div className="search-bar form-inline">
    <form onSubmit={props.onSubmit}>
      <input className="form-control" type="text" onChange={props.onChange} value={props.value}/>
      <button className="btn hidden-sm-down" onSubmit={props.onChange}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
