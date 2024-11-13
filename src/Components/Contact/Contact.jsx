import  { useRef} from 'react'
import emailjs from "@emailjs/browser";
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_x3qii7s", "template_f88m78d", form.current, {
          publicKey: "dwMA-9PZHdtTUnDDp",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
      );
      e.target.reset()
    };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          details below. Your feedback, questions, and suggestions are important
          to us as we continuously strive to deliver innovative and exceptional
          tech solutions. We look forward to partnering with you on your digital
          journey.
        </p>
      </div>
      <div className="contact-col">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" className='submit'>Send</button> 
    </form>
      </div>
    </div>
  );
}

export default Contact
