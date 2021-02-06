import React from "react";
import faqsData from "../fixtures/faq.json";
import { Accordion, OptForm } from "../components";

const FaqsContainer = () => {
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
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to creeate or restart your membership{" "}
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
