import React from "react"
import Layout from '../components/layout'

const Contact = () => (
    <Layout>
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-desc">Questions, comments, jobs, projects, whatever. Give me a shout.</p>
        <div className="contact-form">
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <label>
                    Name
                <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                <textarea name="message" id="message" rows="5" />
                </label>
                <div className="form-actions">
                    {/* <input type="reset" id="clear" value="Clear" /> */}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </Layout>

)

export default Contact
