import React from "react";
import Head from "../components/atoms/Head/Head";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import ContactForm from "../components/molecules/ContactForm/ContactForm";
import BasicPageLayout from "../templates/BasicPageLayout";

export default function Contact() {
  return (
    <>
      <Head title="Contacta" description="Cuéntame ¿En qué te puedo ayudar?" />
      <BasicPageLayout>
        <SectionHeading text="Contacto" />
        <ContactForm />
      </BasicPageLayout>
    </>
  );
}
