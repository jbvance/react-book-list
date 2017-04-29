import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookDetail extends Component {
  render(){
    //Redux fires reducers initially during setup before activeBook is changed
    //from null. So, return early if this is the case.
    if (!this.props.book){
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}


function mapStateToProps(state){
  //Whatever is returned from here will show up as props in BookList
  return {
    book: state.activeBook // sets  props.book = state.activeBook via connect below
  };
}



//Promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps)(BookDetail);
