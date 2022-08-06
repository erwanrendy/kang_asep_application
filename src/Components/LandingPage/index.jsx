import React from 'react'

export default function LandingComponents({name, address, typeOfVegatables}) {

  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{typeOfVegatables}</p>
    </div>
  )
}



//! 'export default function' sama 'function' aja apa bedanya?
// kalo export default function itu buat ngambilnya via folder
// kalo function aja kita harus ngambil sampe filenya

// component adalah segala sesuatu yg dibutuh didalam pages,
// jika home/container adalah boxnya, component adalah barang yg ada didalamnya
// container,landingPage sama seperti HOME didalam page