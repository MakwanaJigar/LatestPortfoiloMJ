import React, { useState } from "react";

function Contact() {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmitForm = () => {
    const formData = `
      Name: ${name}
      Phone Number: ${phone}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;
    
    // Display the message in an alert
    alert(formData);
    setName('')
    setPhone('')
    setEmail('')
    setSubject('')
    setMessage('')

  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#212428",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px", // Add padding for responsiveness
      }}
    >
      <div className="conntenair" style={{ width: "100%", maxWidth: "1200px", display: "flex", justifyContent: "space-between" }}>
        {/* myInfo */}
        <div
          className="myInfo shadow"
          style={{
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#212428",
            borderRadius: 20,
            padding: "30px",
            marginBottom: "20px", // Add margin bottom for responsiveness
          }}
        >
          <h1 style={{ fontWeight: "bold", color: "#FFF", marginBottom: "10%" }}>
            Jigar Makwana
          </h1>

          <p style={{ fontWeight: "bold", color: "#FFF", marginBottom: "10%" }}>
            Web & Mobile App Developer
          </p>

          <h6 style={{ fontWeight: "bold", color: "#FFF", marginBottom: "10%" }}>
            I am available for freelance work. Connect with me via and call in
            to my account.{" "}
          </h6>

          <p style={{ fontWeight: "bold", color: "#FFF", marginBottom: "10%" }}>
            Phone:{" "}
            <a href="tel:+918511721552" style={{ textDecoration: "none", color: "#FFF" }}>
              +91 8511721552
            </a>
          </p>
          <p style={{ fontWeight: "bold", color: "#FFF", marginBottom: "10%" }}>
            Email:{" "}
            <a href="mailto:jigar317.certification@gmail.com" style={{ textDecoration: "none", color: "#FFF" }}>
              jigar317.certification@gmail.com
            </a>
          </p>

          <h4 style={{ fontWeight: "bold", color: "#FFF", marginBottom: "10%" }}>
            FIND WITH ME
          </h4>

          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "10%",
            }}
          >
            <div
              className="Insta shadow"
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <i className="fa fa-instagram text-light"></i>
            </div>

            <div
              className="Insta shadow"
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <i className="fa fa-facebook text-light"></i>
            </div>

            <div
              className="Insta shadow"
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <i className="fa fa-linkedin text-light"></i>
            </div>
          </div>
        </div>

        {/* contactForm */}
        <div
          className="contactForm shadow"
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#212428",
            borderRadius: 20,
            padding: "30px",
          }}
        >
          <div className="inputFields">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div className="name" style={{ width: '48%' }}>
                <p style={{ color: "white" }}>YOUR NAME</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ backgroundColor: '#191B1E', height: '50px', width: '100%', border: 'none', color: 'white' }} />
              </div>

              <div className="number" style={{ width: '48%' }}>
                <p style={{ color: "white" }}>PHONE NUMBER</p>
                <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} style={{ backgroundColor: '#191B1E', height: '50px', width: '100%', border: 'none', color: 'white' }} />
              </div>
            </div>

            <div className="email" style={{ marginBottom: '20px' }}>
              <p style={{ color: "white" }}>EMAIL</p>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: '#191B1E', height: '50px', width: '100%', border: 'none', color: 'white' }} />
            </div>

            <div className="SUBJECT" style={{ marginBottom: '20px' }}>
              <p style={{ color: "white" }}>SUBJECT</p>
              <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} style={{ backgroundColor: '#191B1E', height: '50px', width: '100%', border: 'none', color: 'white' }} />
            </div>

            <div className="YOUR MESSAGE" style={{ marginBottom: '20px' }}>
              <p style={{ color: "white" }}>YOUR MESSAGE</p>
              <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} style={{ backgroundColor: '#191B1E', height: '200px', width: '100%', border: 'none', color: 'white' }} />
            </div>

            <div style={{ width: '100%' }}>
              <button className="YOUR MESSAGE" style={{ backgroundColor: '#191B1E', height: '50px', width: '100%', border: 'none', color: 'white' }} onClick={handleSubmitForm}>SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
