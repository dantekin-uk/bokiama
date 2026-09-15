import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Phone, Clock, Send, Building2, Globe } from 'lucide-react';
import healthImage from '../assets/life2.jpg';
import pill4Image from '../assets/pill4.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        data-hero
        className="relative mx-1 mt-1 overflow-hidden rounded-xl bg-neutral-900 py-8 shadow-2xl sm:rounded-2xl lg:py-12"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${pill4Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#061126]/95 via-[#061126]/72 to-[#061126]/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#061126]/80 via-transparent to-black/25" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-secondary/30 bg-secondary/10 blur-3xl" />

        <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-full min-h-[280px] flex-col justify-end pt-12 sm:pt-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="mb-2.5 max-w-3xl font-display text-lg font-bold leading-snug tracking-tight text-white sm:mb-3 sm:text-xl lg:text-2xl">
                <span className="bg-gradient-to-r from-neutral via-white/90 to-secondary bg-clip-text text-transparent">
                  Let's Start a Conversation.
                </span>
              </h1>
              <p className="mb-4 max-w-2xl font-sans text-xs leading-relaxed text-white/75 sm:mb-5 sm:text-sm">
                Whether you're exploring reinsurance solutions or seeking expert advisory, our team is ready to help you navigate complex risk challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-12 lg:gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1E3A8A 0.8px, transparent 0.8px)', backgroundSize: '16px 16px' }} />
                  <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
                  <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
                </div>

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                    <span className="h-px w-5 bg-gradient-to-r from-secondary to-primary" />
                    Get in Touch
                  </span>
                  <h2 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-2xl lg:leading-snug">
                    <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                      Send Us a Message
                    </span>
                  </h2>
                  <p className="mt-3.5 max-w-md font-sans text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-display text-xs font-semibold tracking-tight text-primary sm:text-sm">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-primary/10 bg-neutral/30 px-4 py-3 font-sans text-xs text-primary transition-all duration-300 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 sm:text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-display text-xs font-semibold tracking-tight text-primary sm:text-sm">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-primary/10 bg-neutral/30 px-4 py-3 font-sans text-xs text-primary transition-all duration-300 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 sm:text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="font-display text-xs font-semibold tracking-tight text-primary sm:text-sm">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-primary/10 bg-neutral/30 px-4 py-3 font-sans text-xs text-primary transition-all duration-300 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 sm:text-sm"
                        placeholder="Your Company Ltd"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="font-display text-xs font-semibold tracking-tight text-primary sm:text-sm">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-primary/10 bg-neutral/30 px-4 py-3 font-sans text-xs text-primary transition-all duration-300 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 sm:text-sm"
                      >
                        <option value="">Select a topic</option>
                        <option value="treaty">Treaty Reinsurance</option>
                        <option value="facultative">Facultative Reinsurance</option>
                        <option value="claims">Claims Consultancy</option>
                        <option value="advisory">General Advisory</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="font-display text-xs font-semibold tracking-tight text-primary sm:text-sm">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-xl border border-primary/10 bg-neutral/30 px-4 py-3 font-sans text-xs text-primary transition-all duration-300 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 sm:text-sm resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 font-display text-sm font-bold tracking-wide text-white shadow-lg shadow-secondary/30 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/40 sm:px-10"
                    >
                      Send Message
                      <Send size={16} />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="space-y-5">
                {/* Office Location Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1B3A] via-[#123A66] to-[#0F766E] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-8"
                >
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '14px 14px' }} />
                  <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                      <Building2 size={24} />
                    </div>
                    <h3 className="mb-3 font-display text-base font-bold text-white sm:text-lg">Our Office</h3>
                    <p className="font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
                      6th Floor, Prudential Building<br />
                      Wabera Street, Nairobi, Kenya<br />
                      Regional Hub for East African Operations
                    </p>
                  </div>
                </motion.div>

                {/* Contact Details Cards */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      title: 'Email Us',
                      content: 'info@scorelinereinsurance.com',
                      color: 'from-primary/10 to-secondary/10',
                      iconColor: 'text-primary',
                      hoverColor: 'group-hover:text-secondary'
                    },
                    {
                      icon: Phone,
                      title: 'Call Us',
                      content: '+254 724 473 073',
                      color: 'from-primary/10 to-secondary/10',
                      iconColor: 'text-primary',
                      hoverColor: 'group-hover:text-secondary'
                    },
                    {
                      icon: Clock,
                      title: 'Business Hours',
                      content: 'Mon - Fri: 8:00 AM - 5:00 PM EAT',
                      color: 'from-primary/10 to-secondary/10',
                      iconColor: 'text-primary',
                      hoverColor: 'group-hover:text-secondary'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                      className="group relative overflow-hidden rounded-xl border border-primary/5 bg-gradient-to-br from-white to-neutral/5 p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1.5px rgba(16, 185, 129, 0.3)' }} />
                      <div className="relative flex items-start gap-4">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.color} ${item.iconColor} transition-all duration-500 group-hover:rotate-6 group-hover:from-secondary group-hover:to-primary group-hover:text-white ${item.hoverColor}`}>
                          <item.icon size={18} />
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1 font-display text-xs font-semibold tracking-tight text-primary sm:text-sm transition-colors duration-300 group-hover:text-secondary">
                            {item.title}
                          </h4>
                          <p className="font-sans text-[11px] leading-relaxed text-slate-500 sm:text-xs transition-colors duration-300 group-hover:text-slate-700">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Global Presence Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8"
                >
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1E3A8A 0.8px, transparent 0.8px)', backgroundSize: '16px 16px' }} />
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:from-secondary group-hover:to-primary group-hover:text-white">
                      <Globe size={24} />
                    </div>
                    <h3 className="mb-3 font-display text-base font-bold text-primary sm:text-lg transition-colors duration-300 group-hover:text-secondary">
                      Global Reach
                    </h3>
                    <p className="font-sans text-xs leading-relaxed text-slate-500 sm:text-sm transition-colors duration-300 group-hover:text-slate-700">
                      While based in Nairobi, we serve clients across Africa with strategic partnerships extending to global reinsurance markets in London, Bermuda, and Singapore.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#050c18] via-[#1E3A8A] to-[#050c18] p-4 shadow-2xl sm:rounded-3xl sm:p-5 lg:p-6"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
              <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)' }} />
            </div>

            <div className="relative z-10">
              <div className="mb-4 flex flex-col items-center text-center sm:mb-5">
                <span className="inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[11px]">
                  <span className="h-px w-5 bg-secondary" />
                  Visit Us
                </span>
                <h2 className="mt-3 font-display text-base font-bold leading-snug tracking-tight text-white sm:text-lg lg:text-xl">
                  <span className="bg-gradient-to-r from-white via-white/95 to-secondary bg-clip-text text-transparent">
                    Find Our Nairobi Office
                  </span>
                </h2>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="aspect-[21/9] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8179242997447!2d36.82194631475493!3d-1.2863893359850626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22b4b5b67%3A0x2b8e8d8c8e8e8e8e!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Scoreline Reinsurance Nairobi Office Location"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
