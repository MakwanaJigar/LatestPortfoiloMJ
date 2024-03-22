import React from "react";
import { Typewriter } from "react-simple-typewriter";
import HomeHero from '../../Assest/AI.gif'

function Home() {
  return (
    <div style={{ height: "88vh", backgroundColor: "#212428",alignItems:'center',justifyContent:'space-around',display:'flex', width:'100vw'}}>


      <div className="container row" style={{height:'80vh',width:'100%'}}>

        {/* ..........HOME PAGE TYPEWRITTER ........ */},
       
        <div className="col-7 " style={{alignSelf:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
          
             <h5 style={{color:'#FFF'}}>WELCOME TO MY WORLD</h5>
          <div className="d-flex" style={{columnGap:10}}>
          
            <h1 className="text-light"> Hi, I’m</h1>
            <h1 className="" style={{color:'#FF014F'}}>Jigar Makwana</h1>
          </div>
          <div className="">
            <h1 className="text-light fw-bold">
              a 
             
          <Typewriter
              words={["  Web Developer ", "  Mobile App Developer "]}
              loop
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={600}
              />
              </h1>
          </div>
          <div className="col-md-8">
            <h5 style={{color:'#f0f0f0'}}> 
            I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
            </h5>
          </div>


            {/* <div className="" >
              <p style={{color:'#f0f0f0'}}>FIND WITH ME</p>
            </div> */}
        <div className="d-flex col-12" style={{alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
          
          
          <div className="sociamedia" >    

            <div className="" style={{alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'row'}}>

              <div className="" style={{width:'5vw',height:'8vh',color:'#FFF',alignItems:'center',justifyContent:'center',display:'flex',boxShadow:'8px 8px  #25292D'}}>
                <i className="fa fa-facebook" style={{color:'#FFF'}}></i>
              </div>

              <div className="" style={{width:'5vw',height:'8vh',color:'#FFF',alignItems:'center',justifyContent:'center',display:'flex',boxShadow:'8px 8px  #25292D'}}>
                <i className="fa fa-twitter text-info"></i>
              </div>

              <div className="" style={{width:'5vw',height:'8vh',color:'#FFF',alignItems:'center',justifyContent:'center',display:'flex',boxShadow:'8px 8px  #25292D'}}>
                <i className="fa fa-linkedin"></i>
              </div>

            </div>

          </div>


          </div>

        </div>


        {/* .........HOME PAGE IMAGE SECTION.............. */}
        {/* <div className="row col-5 " style={{marginTop:'5%'}}> */}

          <div className="helloBox  col-12" style={{height:'70vh',width:'30vw',display:'flex',alignItems:'center',justifyContent:"center"}}>

            <img src={HomeHero} className="helloIMG" style={{width:'100%' ,height:'100%',zIndex:7,}}/>

          </div>

        {/* </div> */}
      
        
      </div>
    </div>
  );
}

export default Home;
