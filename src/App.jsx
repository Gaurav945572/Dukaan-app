import { useState } from 'react';
import './App.css';
import { Sidebar} from './components/Sidebar'
import {Navbar} from "./components/Navbar"
import { AsideItems } from './components/AsideItems';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Sidebar/>
      <AsideItems></AsideItems>
    </>
  );
}

export default App;
