import { Column, Row, Section, Text } from "@react-email/components";
import React from "react";

import TailwindWrapper from "./tailwindWrapper";

const OrderSummary: React.FC = () => {
  return (
    <TailwindWrapper>
      <Section className="mt-[56px]">
        <Row className="w-full">
          <Column>
            <Text className="color-#0A0A0A font-sans text-[18px] font-semibold leading-[21.78px]">
              Order Summary
            </Text>
          </Column>
        </Row>

        {/* 1st row */}
        <Section className="mt-[16px] w-full rounded-[8px] bg-[#F6F8FB] p-[24px]">
          <Row className="w-full">
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                VAT
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                10%
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                $32
              </Text>
            </Column>
          </Row>

          {/* 2nd row */}
          <Row className="mt-[16px] w-full">
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                VAT
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                10%
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                $32
              </Text>
            </Column>
          </Row>

          {/* 3rd row */}
          <Row className="mt-[16px] w-full">
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                VAT
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                10%
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                $32
              </Text>
            </Column>
          </Row>

          {/* 4th row */}
          <Row className="mt-[16px] w-full">
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                TOTAL
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                100%
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                $352
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
    </TailwindWrapper>
  );
};

export default OrderSummary;
