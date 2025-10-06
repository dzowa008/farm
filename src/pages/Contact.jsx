import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BrandStrip from '../components/BrandStrip';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        bg="/about.jpg"
        badge="Agrimo"
        titleLine1="Contact Us"
        titleLine2=""
        subtitle=""
        ctaLabel=""
      />

      
      <section className="bg-[#F6F7EE] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FiMail size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Mail us 24/7</h3>
                <p className="text-sm text-gray-600 mt-2">phone@agrimo.com<br />jobneed@agrimo.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FiPhone size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Call us 24/7</h3>
                <p className="text-sm text-gray-600 mt-2">Phone: (+01) 345 - 5678<br />Mobile: (+01) 345 - 9236</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                <FiMapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Our Locations</h3>
                <p className="text-sm text-gray-600 mt-2">4019 12th Ave, SE, Abuja.<br />99999, USA mainly city.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="/contact.jpg" alt="Contact" className="w-full h-[420px] object-cover rounded-2xl" />
          </div>
          <div className="bg-[#F6F7EE] rounded-2xl p-6 md:p-8">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-green-900 border border-green-900/20 bg-white/70">Get In Contact Us</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mt-4">Have any Questions? Get in Touch!</h2>
            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500" />
              <input type="text" placeholder="Phone Number" className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500" />
              <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2" />
              <input type="text" placeholder="Subject" className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2" />
              <textarea placeholder="Message" rows="5" className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"></textarea>
              <button type="submit" className="inline-flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 md:col-span-2">
                Send Message <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Logos strip */}
      <BrandStrip />

      {/* Map */}
      <section className="bg-white pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.719430293599!2d7.4951!3d9.072264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4cb3a4c6d9%3A0x26d6a7f2c0a1d8!2sAbuja!5e0!3m2!1sen!2sng!4v1696520000000!5m2!1sen!2sng"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
