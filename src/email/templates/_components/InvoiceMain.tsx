import { Column, Img, Row, Section, Text } from "@react-email/components";
import React from "react";

import TailwindWrapper from "./tailwindWrapper";

const InvoiceMain: React.FC = () => {
  return (
    <TailwindWrapper>
      <Section>
        {/* first image */}
        <Row className="h-[178px] w-full">
          <Column className="flex w-full items-center justify-center">
            <Img
              src="/images/invoicePic.jpg"
              alt=""
              className="h-[178px] w-[178px]"
            />
          </Column>
        </Row>

        <Row className="mt-[56px] w-full">
          <Column className="flex w-full items-center justify-center">
            <Text className="text-center font-sans text-[24px] font-semibold">
              Invoice
            </Text>
          </Column>
        </Row>

        <Row className="mt-[56px] w-full">
          {/* Name */}
          <Column className="h-[22px] w-full">
            <Text className="font-sans text-[18px] font-semibold">
              Hi John Doe,
            </Text>
          </Column>
        </Row>

        <Row className="mt-[32px] w-full">
          <Column className="h-[22px]">
            <Text className="color-##111111 font-sans text-[16px] font-normal leading-[19.36px]">
              We hope you are doing well. Thank you for your recent purchase
              from Boilerplate. Please find your invoice attached to this email.
            </Text>
          </Column>
        </Row>
      </Section>
    </TailwindWrapper>
  );
};

export default InvoiceMain;
