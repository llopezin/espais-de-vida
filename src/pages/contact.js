import React from "react";
import ContactForm from "../components/molecules/ContactForm/ContactForm";
import BasicPageLayout from "../templates/BasicPageLayout";

export default function Contact() {
  return (
    <BasicPageLayout>
      <h1>Contact</h1>
      <section>
        <ContactForm />
      </section>
    </BasicPageLayout>
  );
}
