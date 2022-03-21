import React from 'react'
import FooterCard from '../components/FooterCard'
import QrCode from "../assets/qr.png";
const Footer = () => {
  return (
    <div id="footer" className='bg-[#242424] w-full flex flex-col items-center'>
        <div className='w-4/5'>
            <div>
                <FooterCard />
                <FooterCard />
                <FooterCard />
            </div>
            <div>
              <div></div>
              <div></div>
              <img src={QrCode} alt="qr code"/>
            </div>
        </div>
        <div className='bg-[#2D2D2D] w-full flex items-center justify-center text-white py-4'>
            © Conceptualized, designed and developed by office bearers of Training and Placement Cell
        </div>
    </div>
  )
}

export default Footer