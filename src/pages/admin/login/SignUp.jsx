import React, { useState } from 'react'
import { GiThreeLeaves } from "react-icons/gi"
import { MdLogin } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import bglogin from "../../../assets/Admin/bg.jpg"
import axios from "axios"
function SignUp() {
    var [Username, setUsername] = useState('')
    var [Password, setPassword] = useState('')
    async function signup() {
        if (Username.trim() === "") {
            alert("fill the UserName")
            return false
        }
        if (Password.trim() === "") {
            alert("fill the Password")
            return false
        }
        const response = await axios.post('http://localhost:3030/admin/signup', { Username, Password });
        console.log(response)
    }
    return (
        <div className='w-full h-screen md:bg-cover bg-no-repeat loginstyle' style={{backgroundImage:`url(${bglogin})`}}>
            <div className=' w-[100vw] flex items-center justify-evenly md:justify-end h-[100vh]'>
                <div className='md:mr-10 lg:mr-24  bg-opacity-25 backdrop-blur-4 backdrop-opacity-25 rounded-10 shadow-3xl border border-green-900 border-opacity-20 h-[80vh] w-[80vw]  md:w-[45vw] lg:w-[30vw] md:h-[80vh] lg:h-[75vh] rounded-lg '>
                    <h1 className='text-black pt-10 text-xl md:text-2xl flex justify-center gap-2  w-full'>Welcome to <span className='text-primary gap-2 flex items-center  font-semibold'>Thaaragai<GiThreeLeaves /></span></h1>
                    <h5 className='flex items-center justify-center  mt-8 font-semibold text-lg md:text-2xl tracking-[10px]'>SIGN UP <span className='text-xl md:text-2xl text-primary'><MdLogin /></span></h5>
                    <div className='mt-8'>
                        <form className='flex flex-col gap-2'>
                            <div className='p-3 flex flex-col gap-2'>
                                <label className='font-semibold md:text-xl' htmlFor='username'>Username</label>
                                <div className=' bg-opacity-15 shadow rounded backdrop-blur-8.5 rounded-10 w-full h-12 p-4 border-none outline-none flex items-center gap-1'>
                                    <AiOutlineUser className='text-primary text-xl' />
                                    <input type='text' placeholder='Enter Username' className='border-none outline-none bg-transparent w-full' value={Username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div className='p-3 flex flex-col gap-2'>
                                <label className='font-semibold  md:text-xl' htmlFor='username'>Password</label>
                                <div className='bg-opacity-15 shadow rounded backdrop-blur-8.5 rounded-10 w-full h-12 p-4 border-none outline-none flex items-center gap-1'>
                                    <RiLockPasswordLine className='text-primary text-xl' />
                                    <input type='text' placeholder='Enter Password' className='border-none outline-none bg-transparent w-full' value={Password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className='mt-8 text-center'>
                                    <button className='bg-primary transition-all duration-500 hover:bg-primary hover:text-[white] bg-opacity-60 p-2 px-10 rounded  md:text-xl lg:px-20' type='button' onClick={signup}>SignUp</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp