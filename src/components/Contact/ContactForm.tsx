"use client";

import React, { useState } from "react";
import Image from "next/image";

import contactImg from "/public/images/evolution-form-bg.png";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    agreeTerms: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title mb-0">
            <h2 className="pt-5">Get In Touch With Us</h2>
            <div className="bar"></div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 p-3">
              <Image src={contactImg} alt="image" width={685} height={458} />
            </div>

            <div className="col-lg-6 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        className="form-control"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
