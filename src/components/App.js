import React, {useState} from 'react';
import Header from './ui/Header'
import Footer from './ui/Footer'
import Landing from './Landing'
import Services from './Services'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './ui/Theme'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path='/' render={(props) => <Landing {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/services' render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/service1' component={()=> <div>placeholder component</div>}/>
          <Route exact path='/service2' component={()=> <div>placeholder component</div>}/>
          <Route exact path='/service3' component={()=> <div>placeholder component</div>}/>
          <Route exact path='/herbz' component={()=> <div>herbz</div>}/>
          <Route exact path='/about' component={()=> <div>about</div>}/>
          <Route exact path='/contact' component={()=> <div>contact</div>}/>
          <Route exact path='/consultation' component={()=> <div>consult</div>}/>
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
