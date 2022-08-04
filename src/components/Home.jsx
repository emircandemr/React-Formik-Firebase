import React from 'react'
import { useSelector } from 'react-redux'
import { logOut } from './fire'
import {logout as logoutReducer} from "../store/authReducer"
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';



function Home() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)

    const handleLogout = async () => {

        await logOut()
        dispatch(logoutReducer())
        navigate("/" , {
            replace : true
          })
    }   

    return (
    <div className="w-full h-full flex flex-col justify-center rounded-xl items-center bg-white">
        <div className='text-3xl text-indigo-900 font-bold mb-5 '>
          Hello! <span className='text-indigo-500'> {user.email} </span> 
        </div>
        <div>
        <button href="#" className="flex items-center text-base justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-[#050e1d] hover:bg-indigo-800" onClick={handleLogout}> Log out </button>
        </div>
    </div>
  )
}

export default Home