import React, { useEffect, useState } from 'react'
import "./pages/Loging.css"
import { useNavigate } from 'react-router-dom'
import { userPost } from '../app/slices/user'
import { useDispatch } from 'react-redux'

const Loging = () => {
    let usedis = useDispatch()

    let [userData,SetUserData] = useState({
        email:"",
        password:""
    })
    
    let subinHadn = (e) =>{
        let name = e.target.name
        let value = e.target.value
        SetUserData(pre=>{
            return {...pre,[name]:value}
        })
        console.log(userData)
    }


    let postData = async (data)=>{
        let res = await fetch("http://localhost:4000/v1/auth",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })

        let newR = await res.json()
        localStorage.setItem("token",newR.token)
        usedis(userPost({token:newR.token}))
    }
    
    let subimHan = e =>{
        e.preventDefault()
        postData(userData)
    }

  return (
    <div id='Loging' onSubmit={subimHan}>
        <form >
            <h1>LOGING</h1>
            <div className='userData'>
                <div className='userDiv'>
                    <h3>Email</h3>
                    <input type="text" name='email' onInput={subinHadn} />
                </div>
                <div className='userDiv'>
                    <h3>Password</h3>
                    <input type="text" name='password' onInput={subinHadn} />
                </div>
            </div>
            <button>Loging</button>
        </form>
    </div>
  )
}

export default Loging