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


function History() {
    const [name, setName]= useState('')
    // setName disini berfungsi untuk menggantikan 'bramjo' atau mengisi ( '...')
    const [alamat, setAlamat]= useState('')
    const [jenisSayur, setJenisSayur]= useState ('')

    function isiNama(e) {
        setName(e.target.value) 
    }

    function isiAlamat(e) {
        setAlamat(e.target.value)
    }


    function pilihSayur(e) {
        setJenisSayur(e.target.value)
    }

    return (
        <div class='card'>
            <h1>history Page</h1>
            <br></br>

            <div>
            <p>Isi Nama Anda: 
                <input type='text' 
                placeholder='isi nama anda!'
                onChange={isiNama}/> </p>
            </div>
            <p>{name}</p>

            <div>
                <p>Isi Alamat Anda: 
                <input type='text'
                placeholder='isi alamat anda!'
                onChange={isiAlamat}/></p>
            </div>
            <p>{alamat}</p>

            <div>
                <p>Isi Jenis Sayur Anda:
                <input type='text'
                placeholder='isi jenis sayur anda!'
                onChange={pilihSayur}/>
                </p>
            </div>
            <p>{jenisSayur}</p>

            <button className="border rounded rounded-full px-4 bg-blue-200 text-red-900">SUBMIT</button>

        </div>
    )
    
}

export default History;
// jika function huruf paling depan adalah 'kapital' maka untuk menampilkan component, jika
// function tetap berhuruf kecil dipaling depan maka itu adalah function untuk membuat logic
