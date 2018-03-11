import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return <div>No selected book.</div>
    }
    return (
      <div>
        <div>Title : {this.props.book.title}</div>
        <div>Pages : {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book:state.selectBook
  };
}

export default connect(mapStateToProps)(BookDetail);
