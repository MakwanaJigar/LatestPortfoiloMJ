import React from "react";
import Insta from '../../Assest/Insta.png'
import eShoe from '../../Assest/eShop.png'
import ContactApp from '../../Assest/ContactApp.png'
import TextUtils from '../../Assest/TextUtils.png'
import Spotify from "../../Assest/Spotify.png";

function Portfolio() {
  return (
    <div style={{ height: "100%", backgroundColor: "#212428", width: "100vw" }}>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "#94113C" }}>
          VISIT MY PROJECTS AND KEEP YOUR FEEDBACK
        </p>
        <p style={{ color: "#C4CFDE", fontSize: "40px", fontWeight: "700" }}>
          My Projects
        </p>
      </div>

      {/* .................MAIN CONTENT START'S FORM HERE......... */}

      <div
        className="container-fluid"
        style={{
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "100vw",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 20,
        }}
      >
        {/* ...box section...... */}

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "50vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <img src={Spotify} style={{ alignSelf:'center',width:'50%'}} />
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3%",
              }}
            >
              <p style={{ color: "#801438" }}>Spotify</p>
              <div
                className=""
                style={{
                  color: "#C4CFDE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
               
              </div>
            </div>
            <p style={{ color: "#C4CFDE" }}>
              It is a music Application,<br/> 
              It's a Mobile Applications
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "50vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <img src={eShoe} style={{ alignSelf:'center',width:'50%',marginLeft:'50px'}} />
           
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3%",
              }}
            >
              <p style={{ color: "#801438" }}>eShop</p>
              <div
                className=""
                style={{
                  color: "#C4CFDE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
               
              </div>
            </div>
            <p style={{ color: "#C4CFDE" }}>
            It is an E-Commerce Application,<br/> 
              It's a Mobile Applications
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "50vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <img src={Insta} style={{ alignSelf:'center',width:'50%'}} />
            
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3%",
              }}
            >
              <p style={{ color: "#801438" }}>Instagram</p>
              <div
                className=""
                style={{
                  color: "#C4CFDE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
               
              </div>
            </div>
            <p style={{ color: "#C4CFDE" }}>
              Instagram UI in React-Native,<br/> 
              It's a Mobile Applications
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "50vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            
            <img src={ContactApp} style={{ alignSelf:'center',width:'50%'}} />
          
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3%",
              }}
            >
              <p style={{ color: "#801438" }}>ContactApp</p>
              <div
                className=""
                style={{
                  color: "#C4CFDE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
               
              </div>
            </div>
            <p style={{ color: "#C4CFDE" }}>
              ContactApp in ReactJS,<br/> 
              It's a Web Applications
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "50vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
           
            <img src={TextUtils} style={{ alignSelf:'center',width:'50%',marginLeft:'50px'}} />
            
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "3%",
              }}
            >
              <p style={{ color: "#801438" }}>TextUtils</p>
              <div
                className=""
                style={{
                  color: "#C4CFDE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
               
              </div>
            </div>
            <p style={{ color: "#C4CFDE" }}>
            TextUtils in ReactJS,<br/> 
              It's a Web Applications
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;
