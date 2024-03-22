import React from "react";
import { useState } from "react";

function Resume() {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);

  // EDUCATION FUNCTION
  const handleEducation = () => {
    setEducation(true);
    setExperience(false);
    setSkills(false);
  };

  // EXPERIENCE FUNCTION
  const handleExperience = () => {
    setEducation(false);
    setExperience(true);
    setSkills(false);
  };

  // EXPERIENCE FUNCTION
  const handleSkills = () => {
    setEducation(false);
    setExperience(false);
    setSkills(true);
  };

  return (
    <div
      className=""
      style={{
        height: "100vh",
        backgroundColor: "#212428",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div
        className="shadow "
        style={{
          height: "10%",
          width: "100%",
          backgroundColor: "#212428",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "space-around",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="education"
          style={{ cursor: "pointer" }}
          onClick={handleEducation}
        >
          <h1
            style={{ color: education ? "brown" : "white", fontSize: "30px" }}
          >
            Education
          </h1>
        </div>
        <div
          className="experience"
          style={{ cursor: "pointer" }}
          onClick={handleExperience}
        >
          <h1
            style={{ color: experience ? "brown" : "white", fontSize: "30px" }}
          >
            Experience
          </h1>
        </div>
        <div
          className="skills"
          style={{ cursor: "pointer" }}
          onClick={handleSkills}
        >
          <h1
            style={{
              color: skills ? "brown" : "white",
              fontSize: "30px",
              zIndex: skills ? 2 : 0,
            }}
          >
            Skills
          </h1>
        </div>
      </div>

      {/* EDUCATION COMPONENT */}
      {education ? (
        <div
          className="mt-5"
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#212428",
          }}
        >
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
                height: "45vh",
                width: "35vw",
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
                <h3 style={{ color: "white" }}>
                  Diploma in Computer Engineering
                </h3>
                <p style={{ color: "#C4CFDE", fontSize: "14px" }}>
                  Ganpat University , Kherva
                </p>
                <p style={{ color: "#C4CFDE" }}>
                  Computer Engineering Diploma signifies mastery in programming,
                  hardware, and system design. It's a testament to expertise in
                  software development, networking, and digital systems. This
                  credential opens doors to careers in IT, electronics, and
                  technology innovation.
                </p>
              </div>
            </div>

            <div
              className="fisrtbox shadow-lg"
              style={{
                height: "45vh",
                width: "35vw",
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
                <h3 style={{ color: "white" }}>School </h3>
                <p style={{ color: "#C4CFDE", fontSize: "14px" }}>
                  Shri Sarvajanik Vidhyalaya , Mehsana
                </p>
                <p style={{ color: "#C4CFDE" }}>
                  "Completing my schooling journey at Shri Sarvajanik
                  Vidhyalaya, A chapter filled with memories, knowledge, and
                  milestones on display. Grateful for the nurturing environment
                  that paved the way."
                </p>
              </div>
            </div>

            <div
              className="fisrtbox shadow-lg"
              style={{
                height: "45vh",
                width: "35vw",
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
                <h3 style={{ color: "white" }}>Other Course </h3>
                <p style={{ color: "#C4CFDE", fontSize: "14px" }}>IANT</p>
                <p style={{ color: "#C4CFDE" }}>
                  "I have done my CHNA ( Computer hardware and Networking
                  Administrator" ) course from IANT (Institute of Advance
                  Network Technologies) , Mehsana.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* EXPERIENCE COMPONENT */}

      {experience ? (
        <div
          className="mt-2"
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#212428",
          }}
        >
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
                height: "45vh",
                width: "35vw",
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
                <h3 style={{ color: "white" }}>Jr. Web Developer</h3>
                <p style={{ color: "#C4CFDE", fontSize: "14px" }}>
                  Manami Solutions , Ahmedabad
                </p>
                <p style={{ color: "#C4CFDE" }}>
                  At Manami Solutions, I leverage React to build dynamic,
                  user-friendly web apps, emphasizing clean code and design.
                  Contributing to high-quality projects, I tackle challenges
                  creatively with my proficiency in React, driving innovation.
                  Committed to honing my skills, I dedicate myself to our
                  mission of web development excellence at Manami Solutions.
                </p>
              </div>
            </div>

            <div
              className="fisrtbox shadow-lg"
              style={{
                height: "45vh",
                width: "35vw",
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
                <h3 style={{ color: "white" }}>React-Native Developer</h3>
                <p style={{ color: "#C4CFDE", fontSize: "14px" }}>
                  BMCoder , Ahmedabad
                </p>
                <p style={{ color: "#C4CFDE" }}>
                  At BMCoder, I specialize in crafting Android-compatible apps
                  with React Native, ensuring seamless user experiences.
                  Leveraging React Native's power, I create dynamic, responsive
                  solutions for diverse devices. My expertise guarantees each
                  app exceeds user expectations, delivering top-notch
                  performance. Committed to innovation, I strive to push mobile
                  app development boundaries at BMCoder.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* SKILL COMPONENT */}
      {skills ? (
        <div
          className=""
          style={{ alignItems: "center", justifyContent: "space-evenly" ,display:'flex'}}
        >
          {/* WEB DEVELOPMENT SKILLS */}
          
          <div className="" style={{ width: "50%" ,alignItems:'center',justifyContent:'center'}}>
          <h3 style={{ color: "#FFF", fontWeight: "bold", marginBottom:'10%'}}>Development Skills</h3>
          
            {/* HTML */}
            <div className="HTML" style={{marginButtom:'10px'}}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "85%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>HTML</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>85%</p>
            </div>
            <div
              style={{
                width: "85%",
                height: "5px",
                background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>

            {/* CSS */}
            <div className="CSS" style={{marginButtom:'10px'}}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>CSS</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>80%</p>
            </div>
            <div
              style={{
                width: "80%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>

            {/* JAVASCRIP */}
            <div className="JS" style={{marginButtom:'10px'}}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "75%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>JavaScrip</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>75%</p>
            </div>
            <div
              style={{
                width: "75%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>


            {/* REACT JS */}
            <div className="REACT" style={{marginButtom:'10px'}}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "70%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>ReactJS</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>70%</p>
            </div>
            <div
              style={{
                width: "70%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>



                  {/* REACT-NATIVE */}
                  <div className="REACT-NATIVE" style={{marginButtom:'10px'}}>
                  <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "70%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>React-Native</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>70%</p>
            </div>
            <div
              style={{
                width: "70%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>



            {/* NODE JS */}
             <div className="NODE" style={{marginButtom:'10px'}}>

            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "50%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>NodeJS</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>50%</p>
            </div>
            <div
              style={{
                width: "50%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
</div> 



              {/* REDUX */}
              <div className="REDUX" style={{marginButtom:'10px'}}>
              <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "86%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>REDUX</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>75%</p>
            </div>
            <div
              style={{
                width: "75%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>



            {/* BOOTSTRAP */}
            <div className="BOOTSTRAP" style={{marginButtom:'10px'}}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "86%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>BOOTSTRAP</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>86%</p>
            </div>
            <div
              style={{
                width: "86%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>



            {/* TAILWIND */}
            <div className="TAILWIND" style={{marginButtom:'10px'}}>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "50%",
                marginBottom:'-10px'
              }}
            >
              <p style={{ color: "#FFF", fontWeight: "bold" }}>TAILWIND</p>
              <p style={{ color: "#FFF", fontWeight: "bold" }}>50%</p>
            </div>
            <div
              style={{
                width: "50%",
                height: "5px",
               background: 'radial-gradient(#8366BE, #EE6374)',
                borderRadius:10
              }}
            />
            </div>
          </div>


           

        </div>
      ) : null}
    </div>
  );
}

export default Resume;
