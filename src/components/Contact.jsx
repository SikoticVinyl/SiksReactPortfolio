import React, { useState } from 'react';
import PanelsBlank from '../assets/Panels_Blank.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errors = {...formErrors};

    switch (fieldName) {
      case 'name':
        errors.name = value ? '' : 'Name is required';
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
      case 'message':
        errors.message = value ? '' : 'Message is required';
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields on submit
    Object.keys(formData).forEach(key => validateField(key, formData[key]));

    if (Object.keys(formErrors).every((key) => !formErrors[key])) {
      console.log("Form submitted", formData);
      // Submit form logic here
    }
  };

  return (
    <section className="contact py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-dark-purple bg-opacity-40 rounded-lg p-6">
          <div className="flex flex-col items-center space-y-4 mb-8">
            <h2 className="text-light-pink text-3xl md:text-5xl font-bold text-center">Contact Me</h2>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold text-light-pink">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              {formErrors.name && <p className="mt-2 text-sm text-red-600">{formErrors.name}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-light-pink">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              {formErrors.email && <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold text-light-pink">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-32"></textarea>
              {formErrors.message && <p className="mt-2 text-sm text-red-600">{formErrors.message}</p>}
            </div>
            <button type="submit" className="w-full bg-dark-purple hover:bg-blue-700 text-light-pink font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
