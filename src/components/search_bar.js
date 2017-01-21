// search youtube api with text
import React, { Component } from 'react';
//  this syntax is equal to
//    const Component = React.Component
//     just syntactic sugar

// functional component
// const SearchBar = () => {
//   return <input />;
// };

// class component, better if you need more functionallity
class SearchBar extends Component {
  // class is a plain JS object in this case with Reacts default  stuff
  //
  constructor(props){
    super(props);
// initialize state
    this.state = { term: ''};
  }

  render() {
    // in React EVERY CLASS must HAVE A RENDER funcion
    // define methods for a class (ES6)
    // maniplate the state . Must use 'setState'
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value) }
        />
       </div>
      );
    // NEVER use 'this.state.term =  ....' !!!!! ALWAYS use setState
  }
  // event handler feel free to name it appropriatly
  // onInputChange(event) {
  //   // when ever input changes, do this
  //   console.log(event.target.value);
  // }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
