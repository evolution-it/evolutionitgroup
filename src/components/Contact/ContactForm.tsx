"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import validator from "validator";

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

  const [formValid, setFormValid] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fd = Object.assign({ ...formData, [name]: value });
    const isValidForm = handleValidation(fd);
    setFormValid(isValidForm);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleValidation = (fd: any): boolean => {
    let isValid = true;

    const isValidPhoneNumber = validator.isMobilePhone(fd.number);
    const isValidEmail = validator.isEmail(fd.email);

    if (fd.name.length <= 3) {
      isValid = false;
    }
    if (fd.email.length <= 0 || !isValidEmail) {
      isValid = false;
    }
    if (fd.number.length <= 0 || !isValidPhoneNumber) {
      isValid = false;
    }

    if (fd.subject.length <= 3) {
      isValid = false;
    }
    if (fd.message.length <= 24) {
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Sending Message");
    // Handle form submission logic here
    const res = await fetch("/api/contact", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setButtonText("Send Message");
    } else {
      setFormSent(true);
    }
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
              <Image
                src={contactImg}
                alt="image"
                width={685}
                height={458}
                priority={false}
              />
            </div>

            {formSent ? (
              <div className="col-lg-6 col-md-12 text-center">
                <h2 className="pt-5">Thanks for getting in touch.</h2>
                <div>We&apos;ll get back to you soon.</div>
                <div>
                  <Link className="btn btn-primary mt-3" href="/">
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
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
                      <button
                        type="submit"
                        className={`btn btn-primary${
                          formValid ? "" : " disabled"
                        }`}
                        disabled={!formValid}
                      >
                        {buttonText}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
