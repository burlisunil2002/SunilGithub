import './App.css';
import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateComponent from './components/UpdateComponent';

function App() {
  return (
    <div>
     <Router>
      <HeaderComponent/>
      <div className="container">
        <Routes>
            <Route exact path="/" element={<ListEmployeeComponent/>}></Route>
            <Route path="/fetch" element={<ListEmployeeComponent/>}></Route>
            <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
            <Route path="/update/:id" element={<UpdateComponent/>}></Route>
        </Routes>
      </div>

      <FooterComponent/>
    
    </Router> 

    </div>
  );
}
export default App;