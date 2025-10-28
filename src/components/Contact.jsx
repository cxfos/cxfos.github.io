import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll use mailto as the form submission method
    // In production, you'd want to use a service like Formspree, EmailJS, or a backend API
    const mailtoLink = `mailto:cxfosfelipe@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('contact_subtitle')}
          </p>
        </div>

        {/* Content grid - form and info */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact_form_name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact_form_name_placeholder')}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-green-500 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:focus:ring-green-500/20 transition-all duration-300 outline-none"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact_form_email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact_form_email_placeholder')}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-green-500 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:focus:ring-green-500/20 transition-all duration-300 outline-none"
                />
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact_form_subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact_form_subject_placeholder')}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-green-500 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:focus:ring-green-500/20 transition-all duration-300 outline-none"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact_form_message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact_form_message_placeholder')}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-green-500 dark:focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:focus:ring-green-500/20 transition-all duration-300 outline-none resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full px-8 py-3 bg-green-500 dark:bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 dark:hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 inline-flex items-center justify-center"
              >
                <FiSend className="mr-2" size={18} />
                {t('contact_form_submit')}
              </button>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg">
                  <FiMail size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {t('contact_info_email')}
                  </p>
                  <a href="mailto:cxfosfelipe@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    cxfosfelipe@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg">
                  <FiMapPin size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {t('contact_info_location')}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    {t('contact_info_location_value')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg">
                  <FiClock size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {t('contact_info_availability')}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200">
                    {t('contact_info_availability_value')}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links section */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
                {t('contact_social_title')}
              </h3>
              <SocialLinks variant="contact" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;