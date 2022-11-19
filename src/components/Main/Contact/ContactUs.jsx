import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("This field is required!"),
  email: Yup.string()
    .email("The email address is invalid")
    .required("This field is required!"),
  subject: Yup.string().required("This field is required!"),
  message: Yup.string().required("This field is required!"),
});

function ContactUs({ contactUsRef }) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="text-h1">Contact us</h1>
      <h2 className="text-center">
        Contact us anytime, we are ready to help you!
      </h2>
      <article ref={contactUsRef} className="w-full md:max-w-[1170px]">
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
        >
          {({ handleChange, values, errors }) => (
            <Form className="flex flex-col">
              <div className="flex flex-col justify-between md:flex-row md:gap-[30px]">
                <section className="flex w-full flex-col">
                  <label className="label-input">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    className={
                      "text-input " + (!!errors.name && "border-[#FF5454]")
                    }
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <div className="text-error-input mt-[5px]">{errors.name}</div>
                </section>
                <section className="flex w-full flex-col">
                  <label className="label-input">Email</label>
                  <input
                    name="email"
                    type="text"
                    className={
                      "text-input " + (!!errors.email && "border-[#FF5454]")
                    }
                    placeholder="example@mail.com"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div className="text-error-input mt-[5px]">
                    {errors.email}
                  </div>
                </section>
              </div>

              <label className="label-input">Subject</label>
              <input
                name="subject"
                type="text"
                className={
                  "text-input " + (!!errors.name && "border-[#FF5454]")
                }
                placeholder="Type your subject here"
                onChange={handleChange}
                value={values.subject}
              />
              <div className="text-error-input mt-[5px]">{errors.subject}</div>
              <label className="label-input">Message</label>
              <textarea
                name="message"
                className={
                  "msg-error-input " + (!!errors.message && "border-[#FF5454]")
                }
                placeholder="Type your message here"
                onChange={handleChange}
                value={values.message}
              />
              <div className="text-error-input mt-[5px]">{errors.message}</div>
              <section className="flex justify-center">
                <button className="red-btn" type="submit">
                  Send message
                </button>
              </section>
            </Form>
          )}
        </Formik>
      </article>
    </>
  );
}

export default ContactUs;