import './App.css';
import {Features,Footer,Blog,Possibility,WhatGPT3,Header} from './container'
import { Article,Brand,Cta, Navbar } from './components';

function App() {
  return (
    <div className='App  gradient__bg'>
      <div >
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Article/>
      <Possibility/>
      <Cta/>
      <Blog/>  
      <Footer/>
    </div>

  ); 
}

export default App;
