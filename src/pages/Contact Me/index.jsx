import React,{ useState } from 'react';
import Pageheader from '../../components/Pageheader';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import "./style.scss";
import { Animate } from "react-simple-animate";
export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to server or display a message
    console.log(formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  return (
    <section>
      <Pageheader
      headerText="Contact Me"
      icon = {<BsFillEnvelopeFill size={40} />}
      />
      <Animate
       play
       duration={1.2}
       delay={0.7}
       start={{
         transform: "translateY(350px)",
       }}
       end={{
         transform: "translatey(0px)",
       }}
      >
      <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </Animate>
    </section>
  )
}
