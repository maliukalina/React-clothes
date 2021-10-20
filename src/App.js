import {
  BrowserRouter as Router, 
  Switch,
  Route,
  NavLink} from 'react-router-dom'
  import Home from './components/Home';
  import AddClothes from './components/AddClothes';
  import Clothes from './components/Clothes';
  import Coffee from './components/coffee';
  import Login from './components/login';
  import {useState, createContext, useEffect} from 'react'
 
  
  export const AuthContext = createContext(null)

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    const oldUser = JSON.parse(localStorage.getItem("user"))
    setUser(oldUser)
  },[])
  return (
    <Router>
      <AuthContext.Provider value={{user, setUser}}>
    <header>
      <nav style ={{
        padding: '.3em', 
        backgroundColor:'pink', 
        display:'flex',
        justifyContent: 'space-between'}}>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/clothes">Clothes</NavLink>
        {/*<NavLink exact to="/add">Add</NavLink>*/}
        <NavLink exact to="/coffee">Coffee</NavLink>
        {/*<NavLink exact to="/login">Login</NavLink>*/}
        {user
        ? <NavLink exact to="/add">Add</NavLink>
        :<NavLink exact to="/login">Login</NavLink>
        }

      </nav>
    </header>
    <Switch>
    <Route path ='/clothes' component={Clothes} />
    <Route path ='/add'component={AddClothes} />
    <Route path = '/coffee' component={Coffee} />
    <Route exact path ='/login' component={Login} />
    <Route exact path ='/' component={Home} />
   
    </Switch>
    </AuthContext.Provider>
    </Router>
  );
}

export default App;
