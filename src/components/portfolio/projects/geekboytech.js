import React from 'react';
import { Icon } from 'antd'

const  GeekBoyTech = () => {
  return    <div className=' card  shadow container  text-center u1'>
      <img className=' card    i1' src='geekboytech.gif' alt=''/>
      <div className='container text-center  '>
      <h1 className='v1'>GeekBoy.tech</h1>
        <hr />

        <a   href='https://geekboy.tech'  className='shadow p2' >View Live</a>

        <div className='l3'>
            <span  className='container   col-xm l1'>
             <i className='fa fa-calendar-check' style={{ marginRight: '10px', color: ' '}}></i>
             First Released
            </span>
            <span  className='container   col-xm l1' style={{  fontWeight:'bold' }}>
            4 Nov 2019
             </span>
<div className='container  l2 n1'><i className='fa fa-github' style={{ fontSize: '14px', marginRight:'2px'}}/>Private Repository</div>
        </div>

        <div className='r11 col'>
        <h6>Technologies Used</h6>
        TEAM PROJECT
        <br />
        <Icon type="lock"  style={{ fontSize:20 }}/>
        </div>

      </div>
    </div>

}
export default GeekBoyTech;
