import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Header } from './_components';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Header/>
      </div>
      <div className='main'>

      </div>
      <div className='footer'>

      </div>

    </div>
  );
}

export default App;
