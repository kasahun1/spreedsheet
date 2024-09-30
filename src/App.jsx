import React from 'react';
import './App.css'

function App() {
  const handlePost = async () => {
    event.preventDefault();
    const date = new Date()
    const inputValue = {
      'Name': event.target.username.value,
      'Email': event.target.email.value,
      'Message': event.target.message.value,
      'Created At': date.toLocaleString(),
    }

    const APP_ID = 'AKfycbwb8jRuILJd-k9uH75L5HoPvMbgw57fvrahVHXx3Td155SfIHP0H1M5x_g6lV0d-eSlsQ'
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`
    const formData = new FormData()
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key])
    })
    try {
       const res = await fetch(baseURL, {
        method: 'POST',
        body: formData,
       })
      if(res.ok){
        console.log('Request was successful:', res);
      }else{
        console.log('Request Failed:', res);        
      }
    }catch(e){
      console.error('Error during fetch:', e);
    }
  }

  return (
    <div className='flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-100'>
      <form onSubmit={handlePost} className='w-full max-w-md bg-white p-8 rounded-lg shadow-md flex flex-col gap-4'>
        <input type="text" name='username' placeholder='Enter name' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type="text" name='email' placeholder='Enter Email' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type="text" name='message' placeholder='Enter your message' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button className='w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300'>submit</button>
      </form>
    </div>
  )
}

export default App
