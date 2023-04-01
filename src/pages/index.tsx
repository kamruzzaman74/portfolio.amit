import Head from 'next/head';

import {BsFillBrightnessLowFill} from "react-icons/bs";
import {FaTwitter,FaFacebookF,FaLinkedin} from "react-icons/fa";
import Image from "next/image"; 
import deved from '../pic/k.png';
import pit  from '../pic/t.jpg';
import pic  from '../pic/uu.jpg';

import pi from '../pic/d.jpg';
import p from '../pic/gk.jpg';
import {useState} from "react";





export default function Home() {

  const [darkMode, setDarkMode] =useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Nur afser Talukdar</title>
        
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" >
     <section  className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-rose-300 ">Developed by growMore19</h1>
        <ul className="flex items-center">

          <li>

            <BsFillBrightnessLowFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-rose-300"/>

          </li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 " href="#">Resume</a></li>
        </ul>


      </nav>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">Nur Afser Talukder</h2>
       <h3 className="text-2xl py-2 dark:text-red-600">content Writer.</h3>
       <p className="text-md py-5 leading-8 text-gray-800  md:text-xl max-w-lg mx-auto dark:text-yellow-600">
        Are you searching for someone who can turn your imagination into reality? Exactly!
         You hit right on the money.
        This is a suitable place for your hectic search for content writers.
      </p>


      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">

        <FaTwitter/>
        <a href="https://www.facebook.com/amit.talukder.397" className="bg-pink-600 hover:bg-red-600 active:bg-pink-700 "> <FaFacebookF/>   </a>
        

        <FaLinkedin/>
      </div>
      <div className="relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-120  mt-20 overflow-hidden md:h-96 md:w-96 ">

        <Image  src={deved} alt='/' objectFit='cover'/>
      </div>


     </section>

     <section>

      <div>
        <h3 className="text-3xl py-1 dark:text-emerald-600"> Services I offer </h3>
        <p className="text-md py-2 leadind-8 text-gray-800 dark:text-rose-300">
          Science the begining of my journey as a fe=rellencer as a content writer.
          I have done remote job for 

          <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">startup</span> and collaborated with 
          talanted people to create digital marketing for both business  and consumer use.
        </p>
      </div>

      <div className="lg:flex gap-10">
        <div className="   text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">

        
          <Image src={pit} alt='/'  className="relative mx-auto w-40 h-60 pt-10"/>


          
          
          <h3 className="text-lg font-medium pt-8 pb-2 dark:bg-white ">Beautifull design</h3>
          <p className="py-2 dark:bg-white">
          Design beautiful is a subjective term that can mean different things to different people. But, in general, it means creating something that is attractive, functional and user-friendly.
          </p>
          <h4 className="py-4 text-teal-600"> Design tool I use.</h4>
          <p className="text-gray-800 py-1">PHOTO SHOP</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>



        </div>
      
      <div>
        <div className="   text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">

        
          <Image src={pic} alt='/'  className="relative mx-auto w-40 h-60 pt-10"/>


          
          
          <h3 className="text-lg font-medium pt-8 pb-2 ">Beautifull design</h3>
          <p className="py-2">
          Design beautiful is a subjective term that can mean different things to different people. But, in general, it means creating something that is attractive, functional and user-friendly.
          </p>
          <h4 className="py-4 text-teal-600"> Design tool I use.</h4>
          <p className="text-gray-800 py-1">Canva</p>
          <p className="text-gray-800 py-1">Open AI</p>
          <p className="text-gray-800 py-1">DHALLI</p>



        </div>
        
      </div>
      </div>
     </section>
     <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-pink-600">Portfolio</h3>
        <p className="text-md py-2 leadind-8 text-gray-800 dark:text-rose-300">
          Science the begining of my journey as a fe=rellencer as a content writer.
          I have done remote job for 

          <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500">startup</span> and collaborated with 
          talanted people to create digital marketing for both business  and consumer use.
        </p>

      </div>
      <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flx1" >
          <Image src={pi} alt='/' className=" rounded-lg object-cover" 
         />
          </div>
          <div className="basis-1/3 flx1" >
          <Image src={p} alt='/' className=" rounded-lg object-cover"/>
       
      </div>
      </div>
     </section>


        
      </main>
      </div>
  )
}
