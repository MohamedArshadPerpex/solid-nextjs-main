"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showServicesOptions, setShowServicesOptions] = useState(false); // State to manage Services options visibility
  const [showCoursesOptions, setShowCoursesOptions] = useState(false); // State to manage Courses options visibility

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      fullname,
      email,
      phone,
      product: selectedProduct,
      option: selectedOption,
      message
    };

    try {
      const response = await axios.post('https://sheet.best/api/sheets/a5efb62f-3d4a-4f0d-9a08-a61bdd070303', formData);

      if (response.status === 200) {
        alert('Message sent successfully!');
        // Optionally clear form fields after successful submission
        setFullname('');
        setEmail('');
        setPhone('');
        setSelectedProduct('');
        setSelectedOption('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setPhone(value);

    if (!validatePhone(value)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
    } else {
      setPhoneError('');
    }
  };

  const handleProductChange = (e) => {
    const { value } = e.target;
    setSelectedProduct(value);
    setSelectedOption('');
    setShowServicesOptions(value === 'Services'); // Show Services options if selected product is Services
    setShowCoursesOptions(value === 'Courses'); // Show Courses options if selected product is Courses
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMessage(`I want to know more about ${option}`); // Update message based on selected option

    // Close respective options list when an option is clicked
    if (selectedProduct === 'Services') {
      setShowServicesOptions(false);
    } else if (selectedProduct === 'Courses') {
      setShowCoursesOptions(false);
    }
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20 contact-form">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-2/3 lg:w-3/4 xl:p-15 contact-section"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2 section-heading" style={{
                marginTop: '29px',
              }}>
                Contact Us
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    required
                  />
                </div>
                {emailError && <p className="error">{emailError}</p>}
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    required
                  />
                  <div className="relative">
                    <select
                      style={{
                        width: '240px',
                        height: '50px'
                      }}
                      name="product"
                      value={selectedProduct}
                      onChange={handleProductChange}
                      className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                      required
                    >
                      <option value="" disabled>Select a product</option>
                      <option value="Services">Services</option>
                      <option value="Courses">Courses</option>
                      {/* Add more products as needed */}
                    </select>
                    {showServicesOptions && (
                      <ul className="absolute z-10 mt-1 py-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-black dark:border-strokedark">
                        <li
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 1' ? 'bg-gray-100 dark:bg-gray-800' : ''
                            }`}
                          onClick={() => handleOptionClick('Meet Your Staffing Needs')}
                        >
                          Meet Your Staffing Needs
                        </li>
                        <li
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 2' ? 'bg-gray-100 dark:bg-gray-800' : ''
                            }`}
                          onClick={() => handleOptionClick('Lets Crack the  CAC')}
                        >
                         Lets Crack the  CAC
                        </li>
                        <li
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 1' ? 'bg-gray-100 dark:bg-gray-800' : ''
                            }`}
                          onClick={() => handleOptionClick('Ignite Your Sales Engine')}
                        >
                         Ignite Your Sales Engine
                        </li>
                        <li
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 2' ? 'bg-gray-100 dark:bg-gray-800' : ''
                            }`}
                          onClick={() => handleOptionClick('Redesign Your Sales Funnel')}
                        >
                          Redesign Your Sales Funnel
                        </li><li
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 1' ? 'bg-gray-100 dark:bg-gray-800' : ''
                            }`}
                          onClick={() => handleOptionClick('Build Your Parallel Sales Team')}
                        >
                         Build Your Parallel Sales Team
                        </li>
                        <li
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 1' ? 'bg-gray-100 dark:bg-gray-800' : ''
                            }`}
                          onClick={() => handleOptionClick('Switch To Organic Marketing')}
                        >
                         Switch To Organic Marketing
                        </li>
                      </ul>
                    )}
                    {showCoursesOptions && (
                     <ul className="absolute z-10 mt-1 py-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-black dark:border-strokedark">
                     <li
                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 1' ? 'bg-gray-100 dark:bg-gray-800' : ''
                         }`}
                       onClick={() => handleOptionClick('Funtamentals Of Business Development')}
                     >
                       Funtamentals Of Business Development
                     </li>
                     <li
                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 2' ? 'bg-gray-100 dark:bg-gray-800' : ''
                         }`}
                       onClick={() => handleOptionClick('Outbound Training for Immediate Placement')}
                     >
                      Outbound Training for Immediate Placement
                     </li>
                     <li
                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 1' ? 'bg-gray-100 dark:bg-gray-800' : ''
                         }`}
                       onClick={() => handleOptionClick('Professional Certificate in Business Development and Entrepreneurship')}
                     >
                      Professional Certificate in Business Development and Entrepreneurship
                     </li>
                     <li
                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 2' ? 'bg-gray-100 dark:bg-gray-800' : ''
                         }`}
                       onClick={() => handleOptionClick('Foundational Kit for Startup founders')}
                     >
                       Foundational Kit for Startup founders
                     </li><li
                       className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedOption === 'Option 1' ? 'bg-gray-100 dark:bg-gray-800' : ''
                         }`}
                       onClick={() => handleOptionClick('LevelUP : Campus to Corporate')}
                     >
                       LevelUP : Campus to Corporate
                     </li>
                    
                   </ul>
                    )}
                  </div>
                </div>
                {phoneError && <p className="error">{phoneError}</p>}
                <div className="mb-11.5 flex textarea-section">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    required
                  ></textarea>

                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-1/3 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2" style={{
                marginTop: '38px',
              }}>
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white"
                  >
                  Our Location
                </h3>
                <p >AL Rahaba Arcade, Chalappuram, Calicut </p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white" >
                  Email Address
                </h3>
                <p>
                  <a href="info@perpex.com" >info@perpex.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white" >
                  Phone Number
                </h4>
                <p>
                  <a href="tel:+919745100036" >+91 9745 1000 36</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
