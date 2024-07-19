import { Column, Row, Section, Text } from "@react-email/components";
import React from "react";

import TailwindWrapper from "./tailwindWrapper";

const PaymentDetails: React.FC = () => {
  return (
    <TailwindWrapper>
      <Section className="mt-[26px]">
        <Row className="w-full">
          <Row>
            <Column>
              <Text className="font-sans text-[18px] font-semibold">
                Payment Details
              </Text>
            </Column>
          </Row>

          <Row>
            <Column>
              <Text className="font-sans text-[16px] font-normal">
                Please ensure to pay into this account within two days from
                today.
              </Text>
            </Column>
          </Row>
        </Row>

        {/* 1st row */}
        <Section className="w-full rounded-[8px] bg-[#F6F8FB] px-[24px]">
          <Row
            style={{
              borderBottom: "1px solid",
              borderColor: "var(--border)",
            }}
            className="w-full"
          >
            <Column>
              <Text
                style={{
                  color: "var(--foreground)",
                }}
                className="text-[16px] font-normal leading-[19.36px]"
              >
                Amount
              </Text>
            </Column>

            <Column className="text-right">
              <Text
                style={{}}
                className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]"
              >
                $352
              </Text>
            </Column>
          </Row>

          {/* 2nd row */}
          <Row
            style={{ borderBottom: "1px solid rgba(203, 213, 225, 0.3)" }}
            className="w-full"
          >
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                Payment Method
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                Bank
              </Text>
            </Column>
          </Row>

          {/* 3rd row */}
          <Row
            style={{ borderBottom: "1px solid rgba(203, 213, 225, 0.3)" }}
            className="w-full"
          >
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                Bank Name
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                United Bank of Africa
              </Text>
            </Column>
          </Row>

          {/* 4th row */}
          <Row
            style={{ borderBottom: "1px solid rgba(203, 213, 225, 0.3)" }}
            className="w-full"
          >
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                Account Number
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                2108689490
              </Text>
            </Column>
          </Row>

          {/* 5th row */}
          <Row
            style={{ borderBottom: "1px solid rgba(203, 213, 225, 0.3)" }}
            className="w-full"
          >
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                Account Name
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                John Doe
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
    </TailwindWrapper>
  );
};

export default PaymentDetails;
