import React, { useState } from 'react';

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
      <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          {formErrors.name && <p className="mt-2 text-sm text-red-600">{formErrors.name}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          {formErrors.email && <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-4 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-32"></textarea>
          {formErrors.message && <p className="mt-2 text-sm text-red-600">{formErrors.message}</p>}
        </div>
        <button type="submit" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
