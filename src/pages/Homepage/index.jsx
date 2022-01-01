import React from 'react'

export const Homepage = () => {
    return (
        <container>
   {/* Header start  */}
  <div className="w-full  h-20 bg-darkbrown flex justify-between items-center fixed ">
    <div className="text-white text-xl ml-10 ">
      <img src="images/primelogo.svg" alt="logo" className="mr-2 h-10 w-32 "/>
    </div>
    <div className="flex mr-10">
      <div className="text-white flex ">
        <img src="images/logo.svg" alt="logo" className="mr-2 "/>
       <span className="font-thin">EN</span> <i className="fa fa-caret-down text-slate-500 text-xl mt-1 ml-2"></i>
      </div>
      <div className="text-white ml-5 font-thin ">
      Sign In
      </div>
    </div>
  </div>
   {/* Header end  */}
  <div className="pt-16 ">
  <div  className="bg-[url('amazonimage.jpg')] lg:w-full sm:w-full h-[33rem] pt-20 ">
    <div className="ml-10 pt-20 pl-12">
          <h1 className="text-white text-4xl t ">Welcome to Prime Video</h1>
          <p className="text-white pt-8 text-xl font-extralight" >Join Prime to watch the latest movies, TV shows and <br/>award-winning Amazon Originals</p>
           <div className="h-14 w-64 bg-blue mt-14 text-center pt-3 rounded text-white text-lg cursor-pointer ">
              <span> Sign in to join Prime</span>
          </div>
    </div>
  </div>
  </div>
  

<div className=" flex justify-between flex-col lg:flex-row">
  <div className="ml-10 mt-10 ">
  <div>
    <span className="text-5xl font-light sm:text-center ">Your favorite channels all <br/> in one place</span>
  </div>
   <div className="pt-8">
    <span className="text-2xl font-light ">With Prime Video Channels, find shows and <br/> movies from your favorite channels all in one <br/> place. Enjoy with an add-on subscription to <br/>Channels of your choice</span>
  </div>
  </div>
  {/* cards  */}
  <div className="mr-20 sm:items-center">
  <div className="flex mt-4 ml-4 flex-col lg:flex-row ">
    <div className="mr-2"><img src="images/cardimage.jpg" alt="card" className="h-32 w-48"/> </div>
    <div className="mr-2"><img src="images/discoverycard.jpg" alt="card" className="h-32 w-48"/> </div>
    <div> <img src="images/erosnowcard.jpg" alt="card" className="h-32 w-48"/></div>  
  </div>

  <div className="flex mt-2 ml-4 flex-col lg:flex-row ">
    <div className="mr-2"><img src="images/hoicimage.jpg" alt="card" className="h-32 w-48"/> </div>
    <div className="mr-2"><img src="images/Docubayimage.jpg" alt="card" className="h-32 w-48"/> </div>
    <div> <img src="images/ShortsTVimage.jpg" alt="card" className="h-32 w-48"/></div>  
  </div>
 
  <div className="flex mt-2 ml-4 flex-col lg:flex-row ">
    <div className="mr-2"><img src="images/Mubiimage.jpg" alt="card" className="h-32 w-48"/> </div>
    <div className="mr-2"><img src="images/MANORAMAMAX.jpg" alt="card" className="h-32 w-48"/> </div>
  </div>
</div>
</div>

<div className="mt-3">
  <div  className="bg-[url('memberimage.jpg')] w-full h-[33rem] pt-20  ">
    <div className="ml-10  pl-12">
          <h1 className="text-white text-4xl ">One membership, many <br/> benefits</h1>
          <p className="text-white pt-8 text-xl font-extralight" >Your Prime membership now also includes ad-free <br/> music along with unlimited free, fast delivery on eligible <br/> items, exclusive access to deals & more.</p>
           <div className="h-14 w-64 bg-blue mt-14 text-center pt-3 rounded text-white text-lg cursor-pointer  ">
              <span> Get started</span>
          </div>
    </div>
  </div>

  <div  className="bg-[url('remoteimage.jpg')] w-full h-[33rem] ">
    <div className=" pt-20  float-right mr-10">
          <h1 className="text-white text-4xl sm:items-center sm:text-2xl ">Even better with Fire TV <br/> Stick</h1>
          <p className="text-white pt-8 text-xl font-extralight" >The biggest movies and TV shows are always better on <br/> a big screen. Simply plug in your Amazon Fire TV Stick <br/> and stream on any HDTV. Press the voice button on the <br/> remote and say the name of the title you want to watch <br/> to find it in seconds.</p>
           <div className="h-14 w-64 bg-blue mt-14 text-center pt-3 rounded text-white text-lg cursor-pointer sm:items-center ">
              <span> Get started</span>
     </div>
    </div>
  </div>

</div>

<div className="flex justify-around mt-20 flex-col lg:flex-row  ">
  <div className="ml-5 ">
    <img src="images/watchanywhereimage.png" alt="watch" className="ml-10 "/>
    <div className="mt-5">  <h1 className="text-4xl text-center">Watch anywhere</h1> </div>
    <div className="mt-5"><p className="text-2xl text-center font-light tracking-tight">Enjoy from the web or with the Prime <br/>Video app on your phone, tablet, or <br/> select Smart TVs — on up to 3 devices at once.</p></div>
  </div>

  <div className="ml-5">
    <img src="images/goimage.jpg" alt="watch" className="ml-10"/>
    <div className="mt-5">  <h1 className="text-4xl text-center">Download and go</h1> </div>
    <div className="mt-5"><p className="text-2xl text-center font-light">Watch offline on the Prime Video app <br/> when you download titles to your <br/> iPhone, iPad, Tablet, or Android device.</p></div>
  </div>

  <div className="ml-5">
    <img src="images/datasaver.png" alt="watch" className="ml-10"/>
    <div className="mt-5">  <h1 className="text-4xl text-center">Data saver</h1> </div>
    <div className="mt-5 "><p className="text-2xl text-center font-light ">Control data usage while downloading <br/> and watching videos on select phones <br/> or tablets..</p></div>
  </div>
</div>

<div  className="bg-[url('familyimage.jpg')] w-full h-[33rem] pt-20 mt-10 ">
  <div className="ml-10  pl-12">
        <h1 className="text-white text-4xl ">Family Friendly</h1>
        <p className="text-white pt-8 text-xl font-extralight" >With easy to use Parental Controls and a dedicated kids <br/> page, enjoy secure, ad-free kids  entertainment. Kids can <br/>enjoy  popular TV shows like Peppa Pig, Powerpuff Girls, <br/> and Chhota Bheem.shows like Peppa Pig, Powerpuff Girls, <br/> and Chhota Bheem..</p>
         <div className="h-14 w-64 bg-blue mt-14 text-center pt-3 rounded text-white text-lg cursor-pointer ">
            <span> Get started</span>
   </div>
  </div>
</div>
<div className="h-32 w-full bg-darkbrown pt-5">
  <div className=" flex justify-center"> <img src="images/amazonvideo.png" alt="amazon" className=""/> </div>

  <div className="flex justify-center flex-col sm:flex-row ">
  <div><p className="text-blue">Terms and Privacy Notice</p></div>
  <div><p className="text-blue">Send us feedback</p></div>
  <div><p className="text-blue">Help</p></div>
  <div><p className="text-white"> © 1996-2021, Amazon.com, Inc. or its affiliates</p></div>
</div>
</div>

</container>

    )
}
