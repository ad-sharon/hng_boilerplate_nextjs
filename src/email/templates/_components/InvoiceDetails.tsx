import { Column, Row, Section, Text } from "@react-email/components";
import React from "react";

import TailwindWrapper from "~/email/templates/_components/tailwindWrapper";

export interface InvoiceDetailsProperties {
  invoiceNumber: string;
  issuedDate: string;
  dueDate: string;
}

const InvoiceDetails: React.FC<InvoiceDetailsProperties> = ({
  invoiceNumber,
  issuedDate,
  dueDate,
}) => {
  return (
    <TailwindWrapper>
      <Section className="mt-[56px]">
        <Row className="w-full">
          <Column>
            <Text className="color-#0A0A0A font-sans text-[18px] font-semibold leading-[21.78px]">
              Invoice Details
            </Text>
          </Column>
        </Row>

        {/* 1st row */}
        <Section className="mt-[16px] w-full rounded-[8px] bg-[#F6F8FB] p-[24px]">
          <Row className="w-full">
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                Invoice Number
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                {invoiceNumber}
              </Text>
            </Column>
          </Row>

          {/* 2nd row */}
          <Row className="border-b-1 border-#CBD5E1 mt-[16px] w-full">
            <Column className="border-b-1 border-#CBD5E1">
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                Date of Issue
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                {issuedDate}
              </Text>
            </Column>
          </Row>

          {/* 3rd row */}
          <Row className="mt-[16px] w-full">
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                Due Date
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                {dueDate}
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
    </TailwindWrapper>
  );
};

export default InvoiceDetails;
