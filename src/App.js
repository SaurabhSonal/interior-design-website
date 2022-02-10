import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// npm add react-router-dom
// or use npm install react-router-dom.
// run line 2 in the termimal to write the line 1.

import Home from "./Pages/Home";
import About from "./Pages/About";
import Navigation from "./Components/Navigation";
import ContactUs from "./Pages/ContactUs";
const App =()=> {
  return (
    <>
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* "routing a page in your website" in this way
          i.e first import the broweserRouter as Router, Route, Routes.
          second open Router then Routes the Route the path
          NOTE THAT:-Dont forget to import the pages the youre including in the path. */}
          <Route path="/About" element={<About/>}></Route>
          <Route path="/ContactUs" element={<ContactUs/>}></Route>

        </Routes>
      </Router>
    </>
  )
}
export default App;
