import React from 'react';

const Header = () => {
  const { textStyleA1 ,viewStyleA1 } = style;
  return <div style={ viewStyleA1 } >
            <div className='container'>
               <h1 className='text-center'>Aman Tiwari</h1>
            </div>
            <div>
               <img src='' alt='' />
            </div>
         </div>
}

const style= {
  textStyleA1:{
    fontSize:500,

  },
  viewStyleA1:{
    border:'2px solid black',


  },
  textStyleA2:''
}
export default Header;
