import './App.css';
import {Features,Footer,Blog,Possibility,WhatGPT3,Header} from './container'
import { Article,Brand,Cta, Navbar } from './components';
function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>

  );
}

export default App;
