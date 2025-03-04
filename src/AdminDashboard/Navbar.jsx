import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import dashboardLogo from "../assets/dashboardLogo.jpg"

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = async (e) => {
        Cookies.remove("token")
        navigate("/")
    }
    return (
        <div className='justify-end flex'>
            <div className='w-full flex m-5 mt-2 rounded-xl items-center justify-between border-2 bg-white border-green-600 p-2'>
                <div className='flex gap-4 items-center justify-center'>
                <img src={dashboardLogo} alt="" className='w-35'/>
                <h1 className='text-green-600 font-semibold text-3xl mx-4'>Admin Panel</h1>
                </div>
                <div>
                    <button className='btn bg-green-600 p-2 px-4 cursor-pointer  rounded-md text-white'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar