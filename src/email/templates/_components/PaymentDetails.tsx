import { Column, Row, Section, Text } from "@react-email/components";
import React from "react";

import CustomButton from "~/components/common/Button/button";
import TailwindWrapper from "~/email/templates/_components/tailwindWrapper";

export interface PaymentDetailsProperties {
  amount: string;
  paymentMethod: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export interface PayNowLink {
  payNowLink: string;
}

export interface PaymentDetailsProperties_
  extends PaymentDetailsProperties,
    PayNowLink {}

const PaymentDetails: React.FC<PaymentDetailsProperties_> = ({
  amount,
  paymentMethod,
  bankName,
  accountNumber,
  accountName,
  payNowLink,
}) => {
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
        <Section className="w-full rounded-[8px] bg-primary px-[24px]">
          <Row className="w-full border-border">
            <Column>
              <Text className="text-[16px] font-normal leading-[19.36px] text-foreground">
                Amount
              </Text>
            </Column>

            <Column className="text-right">
              <Text
                style={{}}
                className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]"
              >
                {amount}
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
                {paymentMethod}
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
                {bankName}
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
                {accountNumber}
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
                {accountName}
              </Text>
            </Column>
          </Row>

          <Row className="mt-[56px] w-full">
            <Column className="flex w-full items-center justify-center">
              <div className="flex items-center gap-4">
                <CustomButton variant="primary" href={payNowLink}>
                  Pay Now
                </CustomButton>
              </div>
            </Column>
          </Row>

          <Row className="mt-[56px] w-full">
            <Row>
              <Column>
                <Text className="font-sans text-[18px] font-semibold">
                  Have any questions about your order?
                </Text>
              </Column>
            </Row>

            <Row>
              <Column>
                <Text className="font-sans text-[16px] font-normal">
                  Give us a call at (+234)-456-7890 or Email us at
                  support@llaihng.com
                </Text>
              </Column>
            </Row>

            <Row className="mt-[56px]">
              <Column>
                <Text className="font-sans text-[18px] font-semibold">
                  Regards,
                  <Text>Boilerplate</Text>
                </Text>
              </Column>
            </Row>
          </Row>
        </Section>
      </Section>
    </TailwindWrapper>
  );
};

export default PaymentDetails;
