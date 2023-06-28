import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import Event from './Pages/Events/Event';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Gallery1 from './Components/Gallery/Gallery1';
import Gallery2 from './Components/Gallery/Gallery2';
import Gallery3 from './Components/Gallery/Gallery3';
import Gallery4 from './Components/Gallery/Gallery4';
import Gallery5 from './Components/Gallery/Gallery5';
import Gallery6 from './Components/Gallery/Gallery6';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='main'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/gallery-2011' element={<Gallery1 />} />
            <Route exact path='/gallery-2012' element={<Gallery2 />} />
            <Route exact path='/gallery-2014' element={<Gallery6 />} />
            <Route exact path='/gallery-2018' element={<Gallery3 />} />
            <Route exact path='/gallery-2019' element={<Gallery4 />} />
            <Route exact path='/gallery-Alumni' element={<Gallery5 />} />
            <Route exact path='/events' element={<Event />}></Route>
            <Route exact path='/registration' element={<Registration />}></Route>
            <Route exact path='/Contact' element={<Contact />}></Route>
          </Routes>
        </div>

        <div style={{ width: '100%' }}>

          <Footer />
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;

