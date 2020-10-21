import React from 'react';
import './App.css';
import axios from 'axios';
import TestHook from './component/TestHook';
import HOCs from './component/HOCs';
import ButtonComponent from  './component/ButtonComponent';
import RenderProps from './component/RenderProps';

const TestHOCs = HOCs(ButtonComponent,'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-multiple-series-on-time-axis-data.json')
class App extends React.Component{
  render(){
    return (
      <div className="App">
          <p>Hook</p>
          <TestHook></TestHook>
          <p>HOCs</p>
          <TestHOCs></TestHOCs>
          <p>Render Props</p>
          <RenderProps>{(isLoading,clicked)=> <ButtonComponent isLoading={isLoading} clicked={clicked}></ButtonComponent>}</RenderProps>
      </div>
    );
  }
  
}

export default App;
