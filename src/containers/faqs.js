import React from "react";
import faqsData from "../fixtures/faq.json";
import { Accordion } from "../components";

const FaqsContainer = () => {
  console.log(faqsData);
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => {
        return (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>
              <span>{item.body}</span>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default FaqsContainer;
