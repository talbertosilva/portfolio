import { Router } from 'react-router-dom';
import './App.css'

import { Cursor } from './Cursor';
import { Hero } from './Hero';
import { Info } from './Info';
import { Menu } from './Menu';

function App() {
  return (
    <div className='container'>
      <Cursor />
      <Menu />
      <section className='one'><Hero /></section>
      <section className='two'><Info /></section>
    </div>
  );
}

export default App;