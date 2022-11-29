import React from 'react'
import "./appbar.scss" 

const Appbar = () => {
  return (
    <div className='appbar'>
        <div className="wrapper">
            <div className="searchbar">
                <input type="text" placeholder="Search" />
                <img className='search-icon icon' src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="Search" />
            </div>
            <div className="items">
                <img className='icon' src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" alt="Notifications" /><span className="counter">2</span>
                <img className='icon' src="https://cdn-icons-png.flaticon.com/128/6048/6048872.png" alt="Darkmode" />
                <img className='icon avatar' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt=" Avatar" />
            </div>
        </div>
    </div>
  )
}

export default Appbar