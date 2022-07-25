// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingComponents from './src/Components';
import About from './src/Pages/About';
import History from './Pages/History';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Error from './Pages/Error';


function App() {
  return (
    <router>
      <routes>
        <route path='/' element={<Home />} />
        <route path='/about' element={<About />} />
        <route path='/history' element={<History />} />
        <route path='/home' element={<Home />} />
        <route path='/profile' element={<Profile />} /> 
        <route path='*' element={<err />} />  
      </routes>
    </router>
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