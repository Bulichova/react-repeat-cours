import React from 'react'
import logo_white from '../images/logo-white.png'
import logo_black from '../images/logo-black.png'

// function Logo({ color }) {
  //   if (color === 'white') {
  //     return <img src={logo_white} alt="logo_white" />
  //   }
  //   if (color === 'black') {
  //     return <img src={logo_black} alt="logo_black" />
  //   } else {
  //     return <img src={logo_black} alt="logo_black" />
  //   }
//   const logo = color === 'white' ? logo_white : logo_black
//   return <img src={logo} alt="logo" />
//   // return (
//   //     <>
//   //     {color === 'white' ? (
//   //             return <img src={logo_white} alt="logo_white" />

//   //     ): (
//   //             return <img src={logo_black} alt="logo_black" />

//   //     )}
//   //     </>
//   // )
// }

export const Logo = ({color})=><img src={color === 'white' ? logo_white : logo_black} alt="logo" />

// export default Logo 
