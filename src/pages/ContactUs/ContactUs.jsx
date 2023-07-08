import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-page">
            <div className="form-container">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" id="first-name" placeholder="First Name"/>
                    <input type="text" id="last-name" placeholder="Last Name"/>
                    <textarea id="message" placeholder="Write your message here"/>
                </form>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;