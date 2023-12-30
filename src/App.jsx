import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages

import AddStudent from './forms/add_students_form/add_students';
import FirstDetails from './forms/add_students_form/First_details';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change



  return (
    <>
      <Routes>
        <Route exact path="/" element={<FirstDetails />} />

      </Routes>
    </>
  );
}

export default App;