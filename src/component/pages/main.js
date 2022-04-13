 //  write logic of pages 
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Mintpage from "../Mintpage";
import First from "./firstpage";

export default function Direction() {
    return(<div>
            <Router>
      <div>
        <ul>
           
          <li>
            <Link to="/mintpage">Mintpage</Link>
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
        </ul>

        <Routes>
        <Route path="/" element={ <First/>}>
          </Route>
          <Route path="/mintpage" element={ <Mintpage/>}>
          </Route>

        </Routes>
      </div>
    </Router>
    </div>)
}







