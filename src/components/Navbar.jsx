import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'

const Navbar=()=>{
    return (
        <div>
            <div>
                <h1 className='flex justify-between items-center h-20'>BEACHES.</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>

                
            </ul>
            <div className='flex'>
                <BiSearch />
                <BsPerson />
            </div>
         
        </div>
    )
}
export default Navbar