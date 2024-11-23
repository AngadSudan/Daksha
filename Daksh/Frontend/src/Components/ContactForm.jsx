import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import configure from '../Conf/configure';

const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    from_name: '',
    message: '',
    email: '',
    to_name: configure.RECIPIENTS_NAME,
    to_email: configure.RECIPIENTS_EMAIL
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        configure.SERVICE_ID,
        configure.TEMPLATE_ID,
        formData,
        configure.PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({
        from_name: '',
        message: '',
        email: '',
        to_name: configure.RECIPIENTS_NAME,
        to_email: configure.RECIPIENTS_EMAIL
      });
    } catch (error) {
      console.log(error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`w-full h-fit mt-8 my-auto mx-auto max-w-lg ${className}`}>
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">We'd love to hear from you. Send us a message!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Your message here..."
            />
          </div>
          {status.message && (
            <div
              className={`p-4 rounded-lg flex items-center space-x-2 ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}
            >
              {status.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span>{status.message}</span>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold 
                     hover:from-orange-600 hover:to-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
                     disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

