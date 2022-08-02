import React from 'react'

export default function LandingComponents({name, alamat, jenisSayur}) {

  return (
    <div>
      <p>{name}</p>
      <p> {alamat}</p>
      <p> {jenisSayur}</p>
    </div>
  )
}



//! 'export default function' sama 'function' aja apa bedanya?
// kalo export default function itu buat ngambilnya via folder
// kalo function aja kita harus ngambil sampe filenya

// component adalah segala sesuatu yg dibutuh didalam pages,
// jika home/container adalah boxnya, component adalah barang yg ada didalamnya
// container,landingPage sama seperti HOME didalam page