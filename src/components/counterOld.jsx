import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
    tags:  [] //["tag1", "tag2", "tag3"],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p> there are no tags !</p>;
    return (
      <ul> { this.state.tags.map((tag) => ( <li key={tag}> {tag} </li> ))} </ul>
    );
  }
  render() {
    return <React.Fragment>
        { this.state.tags.length === 0 && <>please create tas</>}
        { this.renderTags()}
    </React.Fragment>;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
 
export default Counter;