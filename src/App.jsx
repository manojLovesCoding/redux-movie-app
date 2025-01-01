import { Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home.jsx"
import Header from "./components/Header/Header.jsx"
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx"
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx"
import Footer from "./components/Footer/Footer.jsx"
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Header /> 
      <Routes> 
          <Route path='/' exact element={<Home/>} />
          <Route path='/movie/:imdbID' element={<MovieDetail/>} />   
          <Route path='*' element={<PageNotFound/>} />    
      </Routes>
      <Footer />
    </div>
  )
}

export default App
