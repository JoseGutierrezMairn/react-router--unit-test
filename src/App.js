import './App.css';
import { Checkbox } from './Checkbox';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Events, Contact, Oops404, Services, CompanyHistory, Locaiton } from './pages';

// https://api.github.com/users/JoseGutierrezMairn


function App() {

    return (
      <div>
        {/* <h1>Hello React Testing Library</h1>
        <Checkbox></Checkbox> */}
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} >
            <Route path='services' element={<Services />} />
            <Route path='history' element={<CompanyHistory />} />
            <Route path='location' element={<Locaiton />} />
          </Route>

          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Oops404 />} />
        </Routes>
      </div>
      );
  }


export default App;
