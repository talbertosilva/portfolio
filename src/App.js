import './App.css'
import { Contact } from './Contact';

import { Cursor } from './Cursor';
import { Hero } from './Hero';
import { Info } from './Info';
import { Menu } from './Menu';
import { Works } from './Works';

function App() {
  return (
    <div className='container'>
      <Cursor />
      <Menu />
      <section className='one'><Hero /></section>
      <section className='two'><Info /></section>
      <section id='works' className='three'><Works url='https://talbertosilva.github.io/weather-app/' img='weather.png' name='Weather' api={true}/></section>
      <section className='three'><Works url='https://talbertosilva.github.io/to-do/' img='todo.png' name='To-do' api={false}/></section>
      <section className='three'><Works url='https://talbertosilva.github.io/calculator' img='calculadora.png' name='Calculator' api={false}/></section>
      <section className='four'><Contact /></section>
    </div>
  );
}

export default App;