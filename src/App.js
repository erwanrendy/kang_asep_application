// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import History from './Pages/History';
import HomePage from './Pages/Home';
import Profile from './Pages/Profile';
import Error from './Pages/Error';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} >
        <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/history' element={<History />} />
          <Route path='/profile' element={<Profile />} /> 
          <Route path='*' element={<err />} />  
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>

// <Routes> dan <Route> adalah cara utama untuk merender sesuatu di React Router berdasarkan lokasi ini. 
// Anda dapat memikirkan tentang semacam <Route> seperti pernyataan if; jika jalurnya cocok dengan URL saat ini, itu akan membuat elemennya!
// Prop <Route caseSensitive> menentukan apakah pencocokan harus dilakukan dengan cara peka huruf besar/kecil (default ke false).
// Setiap kali lokasi berubah, <Routes> memeriksa semua elemen <Route> turunannya untuk menemukan kecocokan terbaik dan merender cabang UI tersebut. 
// Elemen <Routes> mungkin disarangkan untuk menunjukkan UI bertingkat, yang juga sesuai dengan jalur URL bertingkat. 
// Routes induk merender rute anak mereka dengan merender