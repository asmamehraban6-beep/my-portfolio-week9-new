import { useState } from "react";
import "./Contact.css";


function Contact() {

  const [message, setMessage] = useState(false);


  const handleSubmit = (e) => {

    e.preventDefault();

    setMessage(true);

  };


  return (

    <section id="contact" className="contact">

      <h2>
        Contact Me
      </h2>


      <p>
        Feel free to contact me for projects or collaborations.
      </p>


      <form onSubmit={handleSubmit} className="contact-form">


        <input
          type="text"
          placeholder="Your Name"
          required
        />


        <input
          type="email"
          placeholder="Your Email"
          required
        />


        <textarea
          placeholder="Your Message"
          required
        />


        <button type="submit">
          Send Message
        </button>


      </form>


      {message && (

        <p>
          ✅ Message sent successfully!
        </p>

      )}


      <div>

        <p>
          📧 Email: asmamehraban@gmail.com
        </p>


      </div>


    </section>

  );

}


export default Contact;