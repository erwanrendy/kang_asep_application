// import React from 'react'

// function History() {
//     return (
//     <div>THIS IS THE HISTORY PAGE
//     </div>
//     )
// }

// export default History;


// jika function huruf paling depan adalah 'kapital' maka untuk menampilkan sesuatu, jika
// function tetap berhuruf kecil dipaling depan maka itu adalah function untuk membuat logic
import React from 'react'
import {useState, useEffect} from 'react';
// useState, berfungsi untuk penampungan data/variable/apapun yg akan diisi didalamnya dengan tipe data apapun
// useEffect, berfungsi untuk merubah atau memberi effect pada kode, yg tidak memiliki fungsi utama didalam kode tersebut
import LandingComponents from '../Components/LandingPage/index';

function History() {
    const [myName, setMyName]= useState('   ....')
    // setMyName disini berfungsi untuk menggantikan 'bramjo' atau mengisi ( '...')
    const [alamat, setAlamat]= useState('   ....')
    const [jenisSayur, setJenisSayur]= useState ('   ....')

    useEffect (
        (myName) => {}
    )
    function isiNama(e) {
        setMyName(e.target.value)
    }

    useEffect (
        (alamat) => {}
    )
    function isiAlamat(e) {
        setAlamat(e.target.value)
    }

    useEffect (
        (jenisSayur) => {}
    )
    function pilihSayur(e) {
        setJenisSayur(e.target.value)
    }

    return (
        <div class='card'>
            <h1>history Page</h1>
            <br></br>

            <h1>Isi Nama Anda:
            <input type='text' 
                value={myName}
                onChange={isiNama}/>
            </h1>
        
            <h1>Isi Alamat Anda:
            <input type='text'
                value={alamat}
                onChange={isiAlamat}/>
            </h1>

            <h1>Isi Jenis Sayur Anda:
            <input type='text'
                value={jenisSayur}
                onChange={pilihSayur}/>
            </h1>
        </div>
    )
    
}

export default History;
// jika function huruf paling depan adalah 'kapital' maka untuk menampilkan component, jika
// function tetap berhuruf kecil dipaling depan maka itu adalah function untuk membuat logic
