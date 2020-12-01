import React from 'react';
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './ui/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={()=> <div>home page</div>}/>
          <Route exact path='/services' component={()=> <div>services</div>}/>
          <Route exact path='/service1' component={()=> <div>placeholder component</div>}/>
          <Route exact path='/service2' component={()=> <div>placeholder component</div>}/>
          <Route exact path='/service3' component={()=> <div>placeholder component</div>}/>
          <Route exact path='/herbz' component={()=> <div>herbz</div>}/>
          <Route exact path='/about' component={()=> <div>about</div>}/>
          <Route exact path='/contact' component={()=> <div>contact</div>}/>
          <Route exact path='/consultation' component={()=> <div>estimate</div>}/>
        </Switch>
      </BrowserRouter>


    </ThemeProvider>
  );
}

export default App;
