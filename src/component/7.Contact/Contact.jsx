import { useState } from 'react';
// import emailjs from 'emailjs-com';
import "./Contact.css";
import mailbox from '../../assets/mailbox.png';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    // .sendForm('service_0fee8ne', 'template_sboujkh',   formData,
    //     "RdLVOq2DY3eAiTCXX")
    //     .then(
    //       (response) => {
    //         console.log("Message sent successfully!", response.status, response.text);
    //         alert("Message sent successfully!");
    //         setFormData({ name: "", email: "", message: "" }); // مسح الحقول بعد الإرسال
    //       },
    //       (err) => {
    //         console.log("Failed to send message.", err);
    //         alert("Failed to send message. Please try again.");
    //       }
    //     );
    console.log('Form Data:', formData);
  };

  return (
    <>

      <h2 className='text-center fw-bold mb-5' style={{ color: '#603F26',marginTop:'10%' }}>Let's Get In Touch</h2>
      <div style={{ padding:'1% 0'}}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12 order-1 order-lg-2 text-center'>
              <img className='w-50 mailbox' src={mailbox} alt={mailbox} />
            </div>
            <div className='col-lg-6 col-md-12 order-2 order-lg-1'>
              <form onSubmit={handleSubmit}>
                <input
                  className='form-control shadow mb-4'
                  type='text'
                  placeholder='Enter Your Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className='form-control shadow mb-4'
                  type='email'
                  placeholder='Enter Your Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className='form-control shadow mb-4'
                  placeholder='Enter Your Message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </form>
              <div className='text-center '>
                <button className='bt shadow fw-bold mb-2 w-25 py-2 rounded'style={{color:'#603F26'}} type='submit'>
                  Send Msg
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}