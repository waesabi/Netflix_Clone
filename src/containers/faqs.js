import React from "react";
import faqsData from "../fixtures/faq.json";
import { Accordion } from "../components";

const FaqsContainer = () => {
  console.log(faqsData);
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    </Accordion>
  );
};

export default FaqsContainer;
