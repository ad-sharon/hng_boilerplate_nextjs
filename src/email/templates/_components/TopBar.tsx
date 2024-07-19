import {
  Column,
  Container,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import "../../../app/globals.css";

import TailwindWrapper from "./tailwindWrapper";

const TopBar: React.FC = () => {
  return (
    <TailwindWrapper>
      <Section className="h-[122px] w-full bg-[#E1D6D666] text-[#121A26]">
        <Container className="h-[29px] max-w-[160px]">
          <Row className="flex gap-[10px]">
            <Column>
              <Img
                src="/images/invoiceLogo.jpg"
                alt="Logo"
                className="h-[18px] w-[18px]"
              />
            </Column>
            <Column>
              <Text className="w-full font-sans text-[24px] font-semibold">
                Boilerplate.
              </Text>
            </Column>
          </Row>
        </Container>
      </Section>
    </TailwindWrapper>
  );
};

export default TopBar;
