import React, { useState } from "react"
import Layout from '../components/layout'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        const name = e?.target?.name;
        const value = e?.target?.value;

        if (name === 'name') {
            setName(value);
        }
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'subject') {
            setSubject(value);
        }
        if (name === 'message') {
            setMessage(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const state = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        fetch('/', {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...state})
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    };
    
    return <Layout>
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-desc">Questions, comments, jobs, projects, whatever. Give me a shout.</p>
        <div className="contact-form">
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={(e) => handleSubmit(e)}>
        <input type="hidden" name="sams-form" value="contact" />
                <label>
                    Name
                <input type="text" name="name" id="name" onChange={(e) => handleInput(e)}/>
                </label>
                <label>
                    Email
                <input type="email" name="email" id="email" onChange={(e) => handleInput(e)}/>
                </label>
                <label>
                    Subject
                <input type="text" name="subject" id="subject" onChange={(e) => handleInput(e)}/>
                </label>
                <label>
                    Message
                <textarea name="message" id="message" rows="5" onChange={(e) => handleInput(e)} />
                </label>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </Layout>
}

export default Contact
