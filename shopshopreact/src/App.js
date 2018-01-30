import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Categories from './Categories';
import { retrieveProductsCat } from "./store/catalog/actions";

class App extends Component {

  componentDidMount(){
    this.props.retrieveProductsCat();
  }

  render() {
    return (
      <div>
        <Categories />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    retrieveProductsCat: () => dispatch(retrieveProductsCat())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
