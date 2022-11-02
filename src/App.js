import Home from './Home';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Create from './Create';
import Edit from './Edit'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/edit' element={<Edit />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
