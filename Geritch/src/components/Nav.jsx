import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import Container from './layer/Container';
import Images from './layer/Images';
import List from './layer/List';
import Geritch from '../assets/Geritch.png'
import Line from '../assets/Line.png'

const Nav = () => {

    let [show, setShow] = useState(false);

    useEffect(() =>{
        function size(){
            if (window.innerWidth < 1024 ) {
                setShow(false);
            }else{
                setShow(true);
            }
        }

        size();

        window.addEventListener("resize", size);
    },[])


    let Restaurent = ()=>{
        setShow(!show);
    };

  return (
    <nav id="Nav" className=" bg-[#0C0B08] py-7">
      <Container className="flex items-center justify-between relative">
      <div className="logo lg:pl-0 pl-5">
            <Images href="/" src={Geritch} alt="Geritch.png"/>
           </div>
           
           
                <div className={`transition-all duration-700 py-7 z-10 lg:py-0 px-4 lg:ml-[271px] absolute left-0 top-full lg:static bg-[#0C0B08] lg:bg-transparent w-full flex justify-center ${ show ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className="flex items-center justify-center flex-wrap lg:flex-row gap-y-2 gap-x-[32px]">
                    <List href="/" text="Home" />
                    <List href="/" text="Pages" />
                    <List href="/" text="Contact us" />
                    <List href="/" text="Blog" />
                    <List href="/" text="Landing" />
                </ul>
                <div className="Login text-[#FFF] text-base flex items-center lg:ml-[271px] font-semibold cursor-pointer">
                  <p>Log in / registration</p>
                  <Images className="lg:px-[50px]" href="/" src={Line} alt="Line.png"/>
                  <p>Book Table</p>
               </div>
               </div>
            

                <FaBars onClick={Restaurent} className="cursor-pointer lg:hidden mr-5 text-[#FFF]" />
      </Container>
    </nav>
  )
}

export default Nav
