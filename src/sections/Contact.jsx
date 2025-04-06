import React, { useRef, useState } from 'react'

const Contact = () => {

    const formRef = useRef();

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const [loading, setLoading] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // 模拟发送邮件
        setTimeout(() => {
            setLoading(false);
            formRef.current.reset();
            setForm({ name: '', email: '', message: '' });
        }, 2000);

    }

    return (
        <section className='c-space my-20' id='contact'>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input 
                            type="text"
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='ex. SunByte'
                             />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email Address</span>
                            <input 
                            type="email"
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='ex. 2683885184@qq.com'
                             />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <input 
                            type="message"
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Share your thoughts or inquiries...'
                             />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact