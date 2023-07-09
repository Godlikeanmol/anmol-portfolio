import './App.css';
import {  Brand, Navbar, Cta, Feature } from './components';
import {Blog,Footer, Header, Possibility, WhatGPT3} from './containers';
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <WhatGPT3/>
      <Blog/>
      <Possibility/>
      <Brand/>
      <Feature/>
      {/* <Cta/> */}
      <Footer/>
    </>
  );
}

export default App;
