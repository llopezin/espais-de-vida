import React, { useRef } from "react";
import PropTypes from "prop-types";
import * as style from "./ContactForm.module.scss";
import Textarea from "../../atoms/Textarea/Textarea";

const ContactForm = () => {
  return (
    <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {};
