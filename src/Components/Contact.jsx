import React from "react";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import ChatIcon from '../assests/png/message-chat-circle.svg'
import PinIcon from '../assests/png/marker-pin-02.svg'
import Phone from '../assests/png/phone.svg'

function Contact() {
    const image_source = 'https://s3-alpha-sig.figma.com/img/5085/6092/72bc333fd2cf140e3924551db44a310d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1L1El0LyYWpNhFLEv3fb2fsbyhn4KinBL~rDAFWpRa~IPBhVIu5uK-8AigRKywHVhPOz-Ajfagpfu1NE6uT8GdPrbVtEUrRuAEusCWAmDmEAwkPlQfbClZgebvgBfAcWOyAB-TG8K~RZmm606ArOWVvReDV~XUVypiHISwIp5kzZH-Cj46MsWkGXUTzGIdCL6bi8oK4LP1xdIssyV9qG7urSzC0bcoO5P2iQJ4SM~Gd1ZqsHPCen5ksiHC3467pABRTBltVw5Z7U-P9yzHZliaoSLwFE1vDcMuxJTZOmEsyZ4WJDsVGWXxgXNUF3b8RV~jLdIUNCUhHZpS4NQqn9A__'
    const input_style = "outline-none py-2 px-3 border rounded-md mt-1"
    return (
        <div className="inter relative top-[80px] md:top-[108px]"> 
            {/* header section */}
            <section className="flex flex-row md:flex-row">
                <article className="md:w-1/2">
                    <img
                        src={image_source}
                        alt=""
                    />
                </article>

                <article className="p-10 md:p-20 md:w-1/2">
                    <p className="text-3xl md:text-4xl font-bold">
                        We'd love to learn more about you and what we can design and build together.
                    </p>

                    <form action="" className="flex flex-col gap-6 mt-10">
                        {/* first row in form */}
                        <article className="flex justify-between">
                            <div>
                                <label htmlFor="first_name" className="block">First Name</label>
                                <input type="text" name="first_name" placeholder="First Name" className={input_style} />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block">Last Name</label>
                                <input type="text" name="last_name" placeholder="Last Name" className={input_style} />
                            </div>
                        </article>

                        {/* second row in form */}
                        <div>
                            <label htmlFor="email" className="block">Email</label>
                            <input type="email" name="email" placeholder="you@company.com" className={`${input_style} w-full`} />
                        </div>

                        {/* third row in form */}
                        <article>
                            <label htmlFor="phone" className="block">Phone Number</label>
                            <div className="flex">
                                <select
                                    name="country_code"
                                    id="country_code"
                                    className={`${input_style} border-r-0 rounded-r-none`}
                                >
                                    <option value="NGN">NGN</option>
                                    <option value="GHS">GHS</option>
                                    <option value="USD">USD</option>
                                </select>
                                <input
                                    type="number"
                                    name="phone"
                                    pattern="numeric"
                                    placeholder="+234 (555) 000-0000"
                                    className={`${input_style} w-full border-l-0 rounded-l-none`}
                                />
                            </div>
                        </article>

                        {/* fourth row in form */}
                        <div>
                            <label htmlFor="message" className="block">Message</label>
                            <textarea name="message" placeholder="Leave us a message..." id="message" cols="30" rows="5" className={`${input_style} w-full`}></textarea>
                        </div>

                        {/* fifth row in form */}
                        <article>
                            <label htmlFor="services" className="block">Services</label>
                            <section className="grid grid-cols-2 gap-2 mt-2">
                                <div className="flex gap-3">
                                    <input type="checkbox" name="website_design" id="" />
                                    <label htmlFor="website_design" className="block">Website Design</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="digital_marketing" id="" />
                                    <label htmlFor="digital_marketing" className="block">Digital Marketing</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="ux_design" id="" />
                                    <label htmlFor="ux_design" className="block">UX Design</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="mobile_app" id="" />
                                    <label htmlFor="mobile_app" className="block">Mobile App Development</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="user_research" id="" />
                                    <label htmlFor="user_research" className="block">User Research</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="other" id="" />
                                    <label htmlFor="other" className="block">Other</label>
                                </div>
                            </section>
                        </article>

                        {/* submit button */}
                        <button className="w-full bg-[#1F3AE3] rounded-md py-2 text-white">
                            Submit
                        </button>
                        
                    </form>
                </article>
            </section>

            
            {/* contact info */}
            <section className="p-10 md:p-20">
                <div className="text-center flex flex-col gap-2">
                    <p className="text-xs text-[#1F3AE3]">Contact Us</p>
                    <p className="font-semibold text-2xl">Let's design and build a project together</p>
                </div>

                <div className="flex justify-between mt-5">
                    <ContactInfo icon={ChatIcon} title='Chat to support' text='We’re here to help.' address='support@untitledui.com' />

                    <ContactInfo icon={PinIcon} title='Visit Us' text='Visit our office HQ.' address='100 Smith Street Collingwood VIC 3066 AU' />

                    <ContactInfo icon={Phone} title='Call Us' text='Mon-Fri from 8am to 5pm.' address='+1 (555) 000-0000' />
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Contact;