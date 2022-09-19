import { useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {

    const[submissionMsg, setSubmissionMsg] = useState("SUBMIT");
    const [formData,setFormData] = useState({name:"",email:"",subject:"",message:""})
    const [isSubmitted, setIsSumbitted] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSumbitted(false)
        setSubmissionMsg('LOADING')
        emailjs.sendForm('service_l1sewu2', 'template_rsz51h2', e.target, 'jv5AQfPht29K6kqFV')
        .then(res=>{
            setSubmissionMsg('ReSUBMIT')
            // alert("Your email was sent succuessfully.")
            setIsSumbitted(true);
        })
        .catch(err=>{
            setSubmissionMsg("Try Again")
            // alert("Sorry, we have some problems! please try again later.");
        }
        )
    }

    const handleFormData = ({target }) => {
        setFormData({...formData,[target.name]:target.value})
    }
        

    return ( 
        <section className="contact" id="contact">
            <header className="section-header">
                <h5 className='section-title'>CONTACT</h5>
                <h1>I'd Love To Hear From You.</h1>
                <p className="intro">If you have a work to be done, a service that i can provide for you, or just a question, don't hesitate and email me. I am ready for anything. </p>
            </header>
            <form onSubmit={sendEmail}>
                <input type="text" name="name" id="name" placeholder="Name" value={formData.name } onChange={handleFormData} required/>
                <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleFormData} required/>
                <input type="text" name="subject" id="subject" placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleFormData} 
                    required
                />
                <textarea name="message" id="message" cols="30" rows="10" placeholder="message" value={formData.message}
                    onChange={handleFormData} required
                ></textarea>
                {isSubmitted &&
                <p className="sent-email">Your Email was sent succuessfully!</p> 
                }
                <button type="submit" className="primary-btn submit" >
                    {submissionMsg}
                </button>
            </form >
            <aside className="contact-infos">
                <div className="info-container">
                    <i className="fas fa-map-marker-alt"></i>
                    <h5 className="info-title">WHERE TO FIND ME</h5>
                    <p className="info-text">benamari saleh street <br /> Ain Yagout, Batna, Algeria</p>
                </div>
                <div className="info-container">
                    <i className="fas fa-envelope"></i>
                    <h5 className="info-title">EMAIL ME AT</h5>
                    <p className="info-text">belloulaahmed7@gmaill.com</p>
                    
                </div>
                <div className="info-container">
                    <i className="fas fa-phone"></i>
                    <h5 className="info-title">CALL ME AT</h5>
                    <p className="info-text">(+213) 798 622 336</p>
                </div>

            </aside>
        </section>
     );
}

export default Contact;