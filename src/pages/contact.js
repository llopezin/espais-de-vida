import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import ContactForm from "../components/molecules/ContactForm/ContactForm";
import BasicPageLayout from "../templates/BasicPageLayout";

export default function Contact() {
  return (
    <BasicPageLayout>
      <SectionHeading text="Contacto" />
      <ContactForm />
    </BasicPageLayout>
  );
}
