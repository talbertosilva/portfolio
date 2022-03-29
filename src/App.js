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
      <section id='works'><Works url='https://talbertosilva.github.io/weather-app/' img='weather.png' name='Weather' flappy={false} react={true} api={true}/></section>
      <section><Works url='https://talbertosilva.github.io/to-do/' img='todo.png' name='To-do' react={true} flappy={false} api={false}/></section>
      <section><Works url='https://talbertosilva.github.io/calculator' img='calculadora.png' name='Calculator' flappy={false} react={true} api={false}/></section>
      <section><Works url='https://talbertosilva.github.io/FlappyNose/' img='flappy.png' name='Flappy Nose' flappy={true} react={false} /></section>
      <section className='four'><Contact /></section>
    </div>
  );
}

export default App;