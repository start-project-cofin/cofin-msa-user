import React, {useMemo} from 'react'
// import styled from 'styled-components'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'

import MedptPage from "./medpt/MedptPage";
import MsgPage from "./message/MsgPage"
import NewsPage from "./news/NewsPage"
// import {} from "./user"

function App() {
  return (
  <BrowserRouter>
    <Switch>
    {/* <div className="App">
      <MedptTable/>
    </div> */}
    <Route exact path='/medpts' component={MedptPage}/>
    <Route exact path='/message' component={MsgPage}/>
    <Route exact path='/news' component={NewsPage}/>
    {/* <Route exact path='/' component={}/> */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;
