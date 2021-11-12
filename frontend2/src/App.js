import React, {useMemo} from 'react'
// import styled from 'styled-components'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
// import { Route, Redirect, Routes, BrowserRouter } from 'react-router-dom'

// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import


import MedptPage from "./medpt/MedptPage";
import MsgPage from "./message/MsgPage"
import NewsPage from "./news/NewsPage"
import LoginPage from "./user/1-login/LoginPage"

function App() {
  return (
  <BrowserRouter>
    <Switch>
    {/* <Routes> */}
    {/* <div className="App">
      <MedptTable/>
    </div> */}
    <Route exact path='/medpts' component={MedptPage}/>
    <Route exact path='/message' component={MsgPage}/>
    <Route exact path='/news' component={NewsPage}/>
    <Route exact path='/user' component={LoginPage}/>
    </Switch>
    {/* </Routes> */}
  </BrowserRouter>
  );
}

export default App;
