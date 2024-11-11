import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
// components
import Navbar from './components/Navbar';
import RedirectExample from './pages/RedirectExample';
import ProjectIndex from './pages/projects/Index';
import ProjectShow from './pages/projects/Show';

const App = (() => {
  return(
    <>
    <Router>
     <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"*"} element={<PageNotFound />}  />
        <Route path={"/redirect"} element={<RedirectExample />} />

        <Route path={"/projects"} element={<ProjectIndex/>} />
        <Route path={"/projects/:slug"} element={<ProjectShow/>} />

      </Routes>
    </Router>
    </>
  )
})

export default App;