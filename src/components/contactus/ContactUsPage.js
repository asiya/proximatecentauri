import React from 'react';
import axios from 'axios';
//eslint-disable-next-line
const validEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const validateForm = (errors) => {
  let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
 
};

const reseterror = {
  errors: {
    fullName: '',
    email: '',
    phno: '',
    msg:''
  }

}

const resetformdata = {  
    fullName: '',
    email: '',
    phno: '',
    msg:'',  
    
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formdata:{
        fullName: null,
        email: null,
        phno: null,
        msg:null,
      },
     
      errors: {
        fullName: '',
        email: '',
        phno: '',
        msg:''
      },

      formmsg:{
        success:'',
        error:''
      }
    };
  }
  

  handleChange = (field) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    let fields = this.state.formdata;
    fields[field] = event.target.value;
    this.setState({errors, reseterror});
    this.setState({fields});

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'phno': 
        errors.phno = 
          value.length < 8
            ? 'Phone No must be at least 8 characters long!'
            : '';
        break;
        case 'msg': 
        errors.msg = '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }  

  handleSubmit = (event) => {
    event.preventDefault();   
    const { name, value } = event.target; 
    let errors = this.state.errors;    
    let formdata = this.state.formdata;
    let formmsg= this.state.formmsg;
    if(!this.state.formdata.fullName || !this.state.formdata.email || !this.state.formdata.phno ||!this.state.formdata.msg){
    if(!this.state.formdata.fullName){
      errors.fullName = 'required';
      this.setState({errors, ['fullName']: 'required'});
    } if(!this.state.formdata.email){
      errors.email = 'required';
      this.setState({errors, ['email']: 'required'});
    } if(!this.state.formdata.phno){
      errors.phno = 'required';
      this.setState({errors, ['phno']: 'required'});
    } if(!this.state.formdata.msg){
      errors.msg = 'required';
      this.setState({errors, ['msg']: 'required'});
    }
  }
    else{
    if(validateForm(this.state.errors)) {
      console.info('Valid Form');
      axios.post(process.env.API_URL+'/contactus',this.state.formdata)
      .then(res => { console.log("result",res);})
      .then(
        (result) => {         
          this.setState({formdata:{fullName:'',email:'',phno:'',msg:''}});
          this.setState({formmsg:{success:'Thank you for contacting us'}});
          setTimeout(()=>{this.setState({formmsg:{success:''}})},3000);
        },
       
        (error) => {
          this.setState({formmsg:{error:'There was a problem while submitting. Please try again'}});
          console.log("error",error);
          setTimeout(()=>{this.setState({formmsg:{error:''}})},3000);        
        }
      )
    }else{
      console.error('Invalid Form')
    }
  }
  }

  render() {
    const {errors} = this.state;
    const {formdata} = this.state;
    const {formmsg} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            {formmsg.success}
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' value={this.state.formdata.fullName} onChange={this.handleChange.bind(this, "fullName")} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' value={this.state.formdata["email"]} onChange={this.handleChange.bind(this, "email")} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='phno'>
              <label htmlFor="phno">Phone No</label>
              <input type='text' name='phno' value={this.state.formdata["phno"]} onChange={this.handleChange.bind(this, "phno")} noValidate />
              {errors.phno.length > 0 && 
                <span className='error'>{errors.phno}</span>}
            </div>
            <div className='msg'>
              <label htmlFor="msg">Message</label>
              <textarea name='msg' value={this.state.formdata["msg"]} onChange={this.handleChange.bind(this, "msg")} noValidate ></textarea>
              {errors.msg.length > 0 && 
                <span className='error'>{errors.msg}</span>}
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}