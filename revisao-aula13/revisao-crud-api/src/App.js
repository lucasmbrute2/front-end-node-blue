import './App.scss';
import { Switch , Route } from "react-router-dom";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import Home from "./pages/Home/Home.js"
import addMovie from "./pages/addMovie/addMovie";
import MovieView from "./pages/MovieView/MovieView";
import movieEdit from "./pages/movieEdit/movieEdit"

function App() {
  return (
    
    <div className="App">
    <Header/>
      <Switch>
        <Route path="/" exact={true}component={Home}/>
        <Route path ="/add" component={addMovie}/>
        <Route path="/view/:id" component={MovieView}/>
        <Route path ='/edit/:id' component={movieEdit}/>
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
