import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${appointment})` }}>
            <div className='text-center py-16 '>
                <div>
                    <h3 className='text-primary text-center font-bold text-xl'>Contact Us</h3>
                    <h2 className='text-white font-bold text-3xl text-center'>Stay connected with us</h2>
                </div>

                <form className='mt-5'>
                    <input type="text" placeholder="Email Address" className="input input-bordered  w-full max-w-md" />
                    <br />
                    <input type="text" placeholder="Subject" className="input  input-bordered w-full max-w-md my-3" />
                    <br />
                    <textarea className="textarea w-full max-w-md" placeholder="Your message"></textarea>
                    <br />
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;