import React, { useState } from 'react';
import voucher from './Image/Voucher.png';

const Msme = () => {
  const [payload, setPayload] = useState({
    businessName: '',
    email: '',
    country: '',
    surname: '',
    otherNames: '',
    phoneNumber: '',
    countryCode: '',
    password: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayload({payload, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://api.voucherpay.online/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: "no-cors",
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponseMessage('An error occurred while processing your request.');
      });
  };

  return (
    <div className='App'>
      <div className='msme'>
        <img src={voucher} alt="" />
        <h1>Welcome To VoucherPay</h1>
        <p className='one'>Register or Create An Account To start Accepting Payment with voucherpay.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Business Name
            <input type="text" name="businessName" value={payload.businessName} onChange={handleChange} placeholder='Business name'/>
          </label>
          <label htmlFor="">
            Country
            <input type="text" name="country" value={payload.country} onChange={handleChange} placeholder='Enter your country name'/>
          </label>
          <label htmlFor="">
            Surname
            <input type="text" name="surname" value={payload.surname} onChange={handleChange} placeholder='Surname'/>
          </label>
          <label htmlFor="">
            Other Name
            <input type="text" name="otherNames" value={payload.otherNames} onChange={handleChange} placeholder='other name'/>
          </label>
          <label htmlFor="">
            Email Address
            <input type="email" name="email" value={payload.email} onChange={handleChange} placeholder='Enter your email address'/>
          </label>
          <label htmlFor="">
            Phone Number
            <input type="number" name="phoneNumber" value={payload.phoneNumber} onChange={handleChange} />
          </label>
          <label htmlFor="">
            Password
            <input type="password" name="password" value={payload.password} onChange={handleChange} placeholder='Input a password'/>
          </label>
          <label htmlFor="">
            Confirm Password
            <input type="password" name="confirmPassword" value={payload.confirmPassword} onChange={handleChange} placeholder='Confirm your password'/>
          </label>
          <p>By Signing Up Means You Agree To Our <span>Terms Of Services</span></p>
          <button type="submit">Create Account</button>
          <p className='para'>Already have an account? <span>Sign in</span></p>
        </form>
        {responseMessage && 
            <p>{responseMessage}</p>
        }
      </div>
    </div>
  )
}

export default Msme;
