import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Overview from './Components/Overview/Overview';
import Practises from './Components/Practises/Practises';
import Outcomes from './Components/Outcomes/Outcomes';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tab:["Overview","Top Practises","Outcomes"],
      selectedTab:"Overview"
    }
    this.handleTabClick=this.handleTabClick.bind(this);
  }
  handleTabClick(e){
    this.setState({
      selectedTab:e.target.id
    })
  }
  render() {
    var tabsHTML = this.state.tab.map(x => (<div className="cp" style={{ color: x == this.state.selectedTab?"#000":"" }} id={x} onClick={this.handleTabClick} key={x}>{x}</div>));
    var selectedTab=this.state.selectedTab;
    return (
      <div className="App">
        <Header/>
        <div className="tabs"  style={{padding:'20px 0px',backgroundColor:'#fbfbfb'}} >{tabsHTML}</div>
        {selectedTab =="Overview"?<Overview/>:''}
        {selectedTab == "Top Practises" ? <Practises /> : ""}
        {selectedTab == "Outcomes" ? <Outcomes /> : ""}
      </div>
    );
  }
}

export default App;
