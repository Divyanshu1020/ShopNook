import React from 'react'
import banner from '../../assets/banner.png'
import './Banner.css'
export default function Banner() {
    return (
        <div className='banner'>
            <div className="banner-container">
                <div className="text-contant">
                    <h1>SALES</h1>
                    <p>
                        Audio Tuned for Your Entertainment - Angled 53mm drivers have been tuned by HyperX audio engineers to provide the optimal listening experience that accents the dynamic sounds of gaming.
                    </p>
                    <div className="banner-btn">
                        <button className='v1'>READ MORE</button>
                        <button className='v2'>SHOP NOW</button>
                    </div>
                </div>
                <div className="banner-img">
                    <img className="banner-actImg" src={banner} alt="" />
                </div>
            </div>
        </div>
    )
}
