import React, { Component } from 'react';
import './contact.css'
import Flash from 'react-reveal/Flash';
import { Input, Select, Icon, Button  } from 'antd';
import 'antd/dist/antd.css';
const { TextArea } = Input;





class Contact extends Component {

  state = {
   emailID: '',
   subject: '',
   message: '',
   status: null,
  }

  onSendMail = (e) => {
    e.preventDefault()

    fetch(`https://amantiwari.herokuapp.com/${this.state.emailID}/${this.state.subject}/${this.state.message}`)
      .then( result => this.setState({ status: result.status }))
      .catch(err => console.log(err))
  }

  render(){

    if(this.state.status === 404){
      return <div  className='container'>
      <div className='container col-md-7   g114'>
      <div className='text-center container-fluid g103 col-md-7 '>
        <Flash>
      <h1 className='g100'>Wanna Work Together ?</h1>
        </Flash>

       <div className='container col-md-10'>
          <div style={{ marginBottom: 16 }}>
            <Input addonBefore="Email ID" placeholder='Your Email ID' onChange = { e => this.setState({ emailID: e.target.value })} value={this.state.emailID}/>
          </div>
          <div style={{ marginBottom: 16 }}>
            <Input addonBefore="Subject" placeholder='Enter Subject' onChange = { e => this.setState({ subject: e.target.value })} value={this.state.subject}/>
          </div>


          <div style={{ marginBottom: 16 }}>
            <TextArea rows={4} placeholder='Type your message here ...' onChange = { e => this.setState({ message: e.target.value })} value={this.state.message}/>
          </div>
          </div>

          <div style={{ marginBottom: 16 }}>
           <Button type="primary" onClick={this.onSendMail}>Send me</Button>
          </div>


          <div className='g113'><Icon className='g112' type="close-circle" theme="twoTone" twoToneColor="red" /> Message is not sent</div>

     </div>
       </div>
             </div>
    }

    if(this.state.status === 400){

          return<div  className='container '>
           <div className='container col-md-7   g114'>
          <div className='text-center container-fluid g103 col-md-7 '>
            <Flash>
          <h1 className='g100'>Wanna Work Together ?</h1>
            </Flash>

           <div className='container col-md-10'>
              <div style={{ marginBottom: 16 }}>
                <Input addonBefore="Email ID" placeholder='Your Email ID' onChange = { e => this.setState({ emailID: e.target.value })} value={this.state.emailID}/>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Input addonBefore="Subject" placeholder='Enter Subject' onChange = { e => this.setState({ subject: e.target.value })} value={this.state.subject}/>
              </div>


              <div style={{ marginBottom: 16 }}>
                <TextArea rows={4} placeholder='Type your message here ...' onChange = { e => this.setState({ message: e.target.value })} value={this.state.message}/>
              </div>
              </div>

              <div style={{ marginBottom: 16 }}>
               <Button type="primary" onClick={this.onSendMail}>Send me</Button>
              </div>
<div><Icon className='g112' type="close-circle" theme="twoTone" twoToneColor="#52c41a" /> Message is not sent</div>
           </div>
   </div>
                 </div>
    }

    if(this.state.status === 200){
          return <div className='container text-center g111'>    <Icon type="check-circle" className='g112' theme="twoTone" twoToneColor="#52c41a" /> Message sent</div>
    }

    console.log(this.state.status)
    return <div className='container'>
    <div className='container col-md-7    g114'>
    <div className='text-center container-fluid g103 col-md-7 '>
      <Flash>
    <h1 className='g100'>Wanna Work Together ?</h1>
      </Flash>

     <div className='container col-md-10'>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="Email ID" placeholder='Your Email ID' onChange = { e => this.setState({ emailID: e.target.value })} value={this.state.emailID}/>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="Subject" placeholder='Enter Subject' onChange = { e => this.setState({ subject: e.target.value })} value={this.state.subject}/>
        </div>


        <div style={{ marginBottom: 16 }}>
          <TextArea rows={4} placeholder='Type your message here ...' onChange = { e => this.setState({ message: e.target.value })} value={this.state.message}/>
        </div>
        </div>

        <div style={{ marginBottom: 16 }}>
         <Button type="primary" onClick={this.onSendMail}> Send me</Button>
        </div>



     </div>
     </div>
           </div>
  }

}
export default Contact;
