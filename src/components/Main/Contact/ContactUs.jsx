import React from "react";

function ContactUs() {
  return (
    <article className="w-full md:max-w-[1170px]">
      <h1 className="text-h1">Contact us</h1>
      <h2 className="text-center">
        Contact us anytime, we are ready to help you!
      </h2>
      <form className="flex flex-col">
        <div className="flex flex-col justify-between md:flex-row md:gap-[30px]">
          <section className="flex w-full flex-col">
            <label className="label-input">Full Name</label>
            <input
              type="text"
              className="text-input"
              placeholder="Enter your full name"
            />
          </section>
          <section className="flex w-full flex-col">
            <label className="label-input">Email</label>
            <input
              type="email"
              className="text-input"
              placeholder="Enter your full name"
            />
          </section>
        </div>

        <label className="label-input">Subject</label>
        <input
          type="text"
          className="text-input"
          placeholder="Enter your full name"
        />
        <label className="label-input">Message</label>
        <textarea
          className="h-[180px] w-full rounded-[33px] border-[1px] border-[#9E9E9E] py-[18px] px-[25px] md:h-[180px]"
          placeholder="Enter your full name"
        />
        <section className="flex justify-center">
          <button className="red-btn">Send message</button>
        </section>
      </form>
    </article>
  );
}

export default ContactUs;
