import { useState } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import CreaTuCv from './pages/CreaTuCv'
import Login from './pages/Login'

function App() {

  
  if ( localStorage.getItem('session') ) {
    var x = JSON.parse( localStorage.getItem('session') )
    var c_status = x.logged_in,
        c_user = x.userID
  } else {
    var c_status = '',
        c_user = ''
  }

  const [isLogged, setIsLogged] = useState( c_status )
  const [userId, setUserId ] = useState( c_user )


  if ( isLogged == true ) {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
         <Switch>
           <Route exact path="/crea-tu-cv">
             <CreaTuCv userID={userId} />
           </Route>
           <Route exact path="/plantillas">
             <h1>plantillas</h1>
           </Route>
           <Route component={Home}></Route>
         </Switch>
        </BrowserRouter>
  
      </div>
    )
  } else {
    return (
      <div className="App">
        <Login setIsLogged={setIsLogged} setUserId={setUserId} />
      </div>
    )
  }

}

export default App