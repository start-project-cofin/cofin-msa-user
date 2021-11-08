import React from 'react'
import styled from 'styled-components'
import { Router, Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import { ContentMsg } from './message';
import { MedptMod } from './medpt';
import { News } from './news';
import { UserMain } from './user';

const App=()=> {
  return (  <BrowserRouter>
<Layout>
</Layout>

<AppBody>
<Switch>
{/* <Route exact path='/' component = { CofinHomepage }/>
<Redirect from='/home' to = { '/' }/> */}

{/* <Route exact path='/freeboardpage' component = { FreeBoardpage }/>
<Route exact path='/write' component = { Writepage }/>
<Route exact path='/localmap' component = { LocalMapPage }/>
<Route exact path='/worldmap' component = { WorldMap }/>
<Route exact path='/checkup' component = { CheckUp }/>
<Route exact path='/vaccineresult' component = { VaccineResult }/> */}

<Route exact path='/medpts' component= { MedptMod }/>
<Route exact path='/messagelist' component= { ContentMsg }/>
<Route exact path='/newslist' component= { News }/>
<Route exact path='/userpage' component= { UserMain }/>


</Switch>
</AppBody>
{/* <FootLayout><CofinHomeMenu/></FootLayout> */}
</BrowserRouter>
  );
}

export default App;

const Layout = styled.div`
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 20px;
  flex-flow: row wrap;
`
const AppBody = styled.div`
    display: inline-block;
    justify-content: center;
    width: 80%;
`
const FootLayout = styled.div`
    display: inline-block;
    width: 20%;
    position: fixed;
`
