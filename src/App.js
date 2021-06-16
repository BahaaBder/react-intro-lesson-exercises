import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return (
    <div>
        <h1>Hello World</h1>
    </div>
    )
  }

  getMorningGreeting() {
    return <div>Good Morning</div>;
  }

  getEveningGreeting() {
    return <div>Good Evening</div>;
  }
  getGreeting(){
    console.log(new Date().getHours())
    if (new Date().getHours() > 12) {
      return this.getEveningGreeting();
    } else {
      return this.getMorningGreeting();
    }
  }
  runArray(companies){
    return (
      <ul>
        {companies.map(item => {
          return <li>{this.showCompany(item.name,item.revenue)}</li>;
        })}
      </ul>
    );
    
  }
  showCompany(name, revenue) {
    return (<div>
      <h5>name: {name} revenue: {revenue}</h5>
    </div>)
  }

  getClassName(temperature) {
          if(temperature<15){
            return(<div id="weatherBox" class="freezing">freezing</div>)
          }
          if(temperature>=15 &&temperature <=30 ){
            return(<div id="weatherBox" class="fair">fair</div>)
          }
          else{
            return(<div id="weatherBox" class="hell-scape">hell-scape</div>)
          }
  }

  render() {
  

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {this.getGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {this.runArray(companies)}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(34)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
