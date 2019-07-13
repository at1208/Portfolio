import React from 'react';

const SearchBar = () => {
  return    <div className='col-lg-3 shadow container  text-center u1 o5'>
                  <img className='   i1' src='searchbar.gif' alt=''/>
                  <div className='container text-center  k1'>
                   <h1 className='v1'>SearchBar</h1>
                     <hr />
                     <div className='shadow p2 o5'>
                    <a href='https://searchkaro.netlify.com'>Preview</a>
                     </div>
                     <div className='container'>
                         <span  className='container shadow col-xm l1'>
                          <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
                          First Released
                         </span>
                         <span  className='container shadow col-xm l1' style={{  fontWeight:'bold' }}>
                         18 May 2019
                          </span>
                            <div className='container shadow l2 n1'> <i className='fa fa-github' style={{ fontSize: '14px'}}/> <a href='https://github.com/at1208/SearchBar'>https://github.com/at1208/SearchBar</a> </div>
                     </div>

                     <div className='r11 col'>
                     <h6>Technologies Used</h6>
                     <span className='shadow container r104 '> React</span>
                     <span className='shadow container r104'> unsplash Api</span>
                     <span className='shadow container r104'> Css</span>

                     </div>

                  </div>
                </div>

}
export default SearchBar;
