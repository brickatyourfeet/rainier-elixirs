import React, {useState} from 'react';
import Header from './ui/Header'
import Footer from './ui/Footer'
import Landing from './Landing'
import Services from './Services'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3';
import About from './About'
import Contact from './Contact'
import Herbz from './Herbz'
import Consultation from './Consultation'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './ui/Theme'


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0) 
  const [bgImgNum, setBgImgNum] = useState(0)
  const [bgImg00000, setBgImg00000] = useState('background0')
  //set state for background image based on uselocation hook?

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path='/' render={(props) => <Landing {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum} bgImgNum={bgImg00000}/>}/>
          <Route exact path='/services' render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
          <Route exact path='/service1' render={(props) => <Service1 {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
          <Route exact path='/service2' render={(props)=> <Service2 {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
          <Route exact path='/service3' render={(props)=> <Service3 {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
          <Route exact path='/herbz' render={(props)=> <Herbz {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
          <Route exact path='/about' render={(props)=> <About {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
          <Route exact path='/contact' render={(props)=> <Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
          <Route exact path='/consultation' render={(props)=> <Consultation {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} setBgImgNum={setBgImgNum}/>}/>
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
