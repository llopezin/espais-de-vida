import React from "react";
import Button from "../../atoms/Button/Button";
import Section from "../../atoms/Section/Section";
import * as style from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <Section>
      <form
        className={style.contactForm}
        name="Contact Form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Tu nombre:</label>
          <input type="name" name="name" required />
          <span className={style.validation}></span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo@gmail.com"
            required
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            name="message"
            placeholder="Cuéntame ¿En qué te puedo ayudar?"
            required
          />
        </div>
        <Button className="secondary" type="submit">
          Enviar
        </Button>
      </form>
    </Section>
  );
};

export default ContactForm;

ContactForm.propTypes = {};
