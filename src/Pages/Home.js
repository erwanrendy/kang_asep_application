import React from 'react'
import {useState, useEffect} from 'react';
// useState, berfungsi untuk penampungan data/variable/apapun yg akan diisi didalamnya dengan tipe data apapun
// useEffect, berfungsi untuk merubah atau memberi effect pada kode, yg tidak memiliki fungsi utama didalam kode tersebut
import LandingComponents from '../Components/LandingPage/index';

function HomePage() {
    const [myName, setMyName]= useState('bramjo')
    // setMyName disini berfungsi untuk menggantikan 'bramjo' atau mengisi ( '...')
    const [alamat, setAlamat]= useState('bintaro')
    const [jenisSayur, setJenisSayur]= useState ('kangkung')
    useEffect(()=>
        myName.length !== 0 ? console.log("a") : console.log("b")
    )
    return (
    <div>THIS IS THE HOME PAGE
        <LandingComponents name={myName}/> 
            <input type='text' className='text' placeholder='masukan nama anda!' 
                onChange={(e)=>setMyName(e.target.value)}>
            </input>

        <LandingComponents address={alamat}/>
            <input type='text' className='text' placeholder='masukan alamat anda'
                onChange={(e)=>setAlamat(e.target.value)}>
            </input>

        <LandingComponents typeOfVegatables={jenisSayur}/>
            <input type='text' className='text' placeholder='masukan jenis sayur'
                onChange={(e)=>setJenisSayur(e.target.value)}>
            </input>
    </div>
    )
}

export default HomePage;
// jika function huruf paling depan adalah 'kapital' maka untuk menampilkan component, jika
// function tetap berhuruf kecil dipaling depan maka itu adalah function untuk membuat logic
