import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';

import customscripts from './scripts/customscripts';
import Header_Navbar from './common/header';
import Main from './common/main';

const App = () => (
    <Router>
        <div>
            <customscripts></customscripts>
            <Header_Navbar></Header_Navbar>
            <Main></Main>
        </div>
    </Router>
)

export default App;