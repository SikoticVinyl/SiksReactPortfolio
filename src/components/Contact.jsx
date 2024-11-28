import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Sparkles } from './Sparkles';
import { Meteors } from './Meteors';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateField = (fieldName, value) => {
    let errors = {...formErrors};

    switch (fieldName) {
      case 'name':
        errors.name = value.trim() ? '' : 'Name is required';
        break;
      case 'email':
        if (!value) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Invalid email address';
        } else {
          errors.email = '';
        }
        break;
      case 'subject':
        errors.subject = value.trim() ? '' : 'Subject is required';
        break;
      case 'message':
        errors.message = value.trim() ? '' : 'Message is required';
        break;
      default:
        break;
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate all fields
    let errors = {};
    Object.keys(formData).forEach(key => {
      errors = { ...errors, ...validateField(key, formData[key]) };
    });

    setFormErrors(errors);

    if (Object.values(errors).every(error => !error)) {
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
        
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        console.error('Failed to send email:', error);
        setSubmitStatus('error');
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Sparkles particleColor="#FFFFFF" particleCount={200} minSize={1} maxSize={3} />
      <Meteors meteorColor="#8B5CF6" meteorCount={15} />

      <div className="absolute inset-0 overflow-auto">
        <div className="relative z-10 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-lg text-purple-300">Let's create something amazing together</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:contact@example.com" className="text-purple-300 hover:text-purple-400 transition-colors">
                      vinylwebdevelopment@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-purple-300">Utah</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-purple-300">Available upon request</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-white font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/SikoticVinyl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/danafulmerdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Your message..."
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full px-6 py-3 rounded-lg text-white font-medium
                        transition-all duration-200 ease-in-out
                        ${isSubmitting 
                          ? 'bg-purple-700 cursor-not-allowed opacity-70' 
                          : 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/25'
                        }
                      `}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-500 bg-opacity-20 text-green-400">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500 bg-opacity-20 text-red-400">
                      Failed to send message. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;