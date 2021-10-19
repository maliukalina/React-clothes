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

  

function App() {
  return (
    <Router>
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
        <NavLink exact to="/login">Login</NavLink>

      </nav>
    </header>
    <Switch>
    <Route path ='/clothes' component={Clothes} />
    <Route path ='/add' component={AddClothes} />
    <Route path = '/coffee' component={Coffee} />
    <Route exact path ='/login' component={Login} />
    <Route exact path ='/' component={Home} />
   

    </Switch>
    </Router>
  );
}

export default App;
