import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey,
    }).then(
      () => {
        setIsSubmitting(false);
        setIsSuccess(true);
        form.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      },
      (error) => {
        setIsSubmitting(false);
        console.error('FAILED...', error.text);
        alert('Failed to send message. Please check your .env configuration.');
      },
    );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-12 text-center text-white">
            <span className="text-primary">07.</span> Get In Touch
          </h2>

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
            
            <div className="w-full md:w-1/3 space-y-8">
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm currently looking for new opportunities as a Software Development Engineer. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-card flex items-center justify-center text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:vanapallijaswanth2005@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      vanapallijaswanth2005@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-card flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-400">+91 8179114025</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-card flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <form ref={form} onSubmit={sendEmail} className="glass-card p-8 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-gray-300 text-sm mb-2">Your Name</label>
                    <input type="text" name="user_name" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-gray-300 text-sm mb-2">Your Email</label>
                    <input type="email" name="user_email" required className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-300 text-sm mb-2">Message</label>
                  <textarea name="message" required rows="5" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Hello Jaswanth..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.3)] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : isSuccess ? (
                    <>Sent Successfully <CheckCircle size={20} /></>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
