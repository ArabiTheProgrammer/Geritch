import React from 'react'
import Container from './layer/Container'
import { Link } from 'react-router-dom'
import Geritch2 from '../assets/Geritch2.png'
import Spoon from '../assets/Spoon.png'
import Line2 from '../assets/Line2.png'
import Images from './layer/Images'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";;

const Footer = () => {
  return (
    <footer className="footer mt-[1100px]">
      <Container className="relative">
        <div className="Newsletter bg-[#0C0C0C] border border-[#dcca8733] w-[1300px] h-[442px] absolute left-[150px] top-[-33.5%] text-center flex flex-col items-center">
            <div className="ml-[90px]">
                <h3 className="text-[#FFFFFF] font-Cormo font-bold text-[23px] text-center lg:mt-[64px] mt-[32px]">Newsletter</h3>
                <Images className="py-[8px] ml-[47%]" href="/" src={Spoon} alt="Spoon.png"/>
                <h1 className="text-[#DCCA87] pb-[24px] font-Cormo font-semibold lg:text-[64px] text-[32px]">Subscribe to Our Newsletter</h1>
                <p className="text-[#FFFFFF] font-Open pb-[64px]">And never miss latest Updates!</p>
            </div>
                <div className="inputfield">
                    <form>
                        <input className="lg:w-[635px] w-[300px] py-[8px] lg:pl-[18.94px] pl-[9.94px] bg-transparent border font-Cormo border-[#F5EFDB] lg:py-[16px] text-[#AAAA]" type="email" placeholder="Email Address"/>
                        <button className="font-Cormo text-base text-[#0C0C0C] font-bold py-[8px] lg:ml-[32px] ml-[16px] px-[32px] bg-[#DCCA87]">Subscribe</button>
                    </form>
                </div>
        </div>
        <div className="Scroll absolute right-[0] lg:top-[168px] top-20">
            <Images className="pb-[8px]" href="/" src={Line2} alt="Line.png"/>
        </div>
        <div className="text absolute left-[99%] lg:top-[237px] top-32">
            <p className="text-[#DCCA87] font-Cormo font-bold ">TOP</p>
        </div>
        <div className="flex font-Cormo text-center flex-wrap justify-between">
            <div className="text w-[507px] lg:mt-[374px] mt-[184px]">
                <ul>
                  <h3 className='font-Cormo lg:text-[32px] text-[16px] lg:leading-9 leading-5 text-[#F5EFDB] lg:pb-6 pb-3'>Contact Us</h3>
                  <li>
                    <Link to="/">
                      <p className='font-Open lg:text-base text-center text-sm lg:leading-7 leading-5 text-[#AAAAAA]'>
                        9 W 53rd St, New York, NY 10019, USA
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className='font-Open lg:text-base text-center mt-[8px] text-sm lg:leading-7 leading-5 text-[#AAAAAA]'>
                        +1 212-344-1230                  
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className='font-Open lg:text-base text-center text-sm lg:leading-7 leading-5 text-[#AAAAAA]'>
                        +1 212-555-1230
                      </p>
                    </Link>
                  </li>
                </ul>
            </div>
            <div className="text w-[507px] lg:mt-[349px] mt-[167]">
                <ul className="flex flex-col items-center">
                    <Images className="lg:pb-8 pb-4" href="/" src={Geritch2} alt="Geritch2.png"/>
                    <li className="pb-[16px]">
                        <Link to="/">
                           <p className='font-Open text-base leading-7 text-[#AAAAAA]'>"The best way to find yourself is to lose yourself in the <br/> service of others.”</p>
                        </Link>
                    </li>
                    <li>
                        <Images href="/" src={Spoon} alt="Spoon.png" />
                    </li>
                    <li className="text-[#F5EFDB] flex gap-x-[16px] pt-[16px]">
                        <Link to="/">
                          <FaFacebookF/>
                        </Link>

                        <Link to="/">
                          <TfiTwitter/>
                        </Link>                        

                        <Link to="/">
                          <FaInstagram/>                                               
                        </Link>
                    </li>
                </ul>                   
            </div>
            <div className="text w-[507px] lg:mt-[374px] mt-[184px]">
                <h3 className='lg:text-[25px] text-lg font-Cormo lg:leading-9 leading-5 text-[#F5EFDB] lg:pb-6 pb-3'>Working Hours</h3>
                <ul>
                    <li>
                        <Link>
                          <p className='font-Open text-base leading-7 text-[#AAAAAA]'>Monday-Friday: <br/>
                          08:00 am -12:00 am</p>
                        </Link>
                    </li>
                    <li>
                        <Link>
                          <p className='font-Open text-base leading-7 mt-[8px] text-[#AAAAAA]'>Saturday-Sunday: <br/>
                          07:00am -11:00 pm</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
            <div className="copyright font-Open lg:pt-[80px] pt-[40px] flex justify-center text-center">
                <p className="text-[#AAAAAA]">2021 Gerícht. All Rights reserved.</p>
            </div>
      </Container>
    </footer>
  )
}

export default Footer
