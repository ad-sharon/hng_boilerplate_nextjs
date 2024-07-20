import { Column, Row, Section, Text } from "@react-email/components";
import React from "react";

import TailwindWrapper from "~/email/templates/_components/tailwindWrapper";

interface OrderItem {
  name: string;
  quantity: string;
  amount: string;
}
export interface OrderSummaryProperties {
  items: OrderItem[];
  vatPercent: string;
  vatAmount: string;
  totalPercent: string;
  totalAmount: string;
}

const OrderSummary: React.FC<OrderSummaryProperties> = ({
  items,
  vatPercent,
  vatAmount,
  totalPercent,
  totalAmount,
}) => {
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
          {items.map((item, index) => (
            <Row key={index} className="w-full">
              <Column>
                <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                  {item.name}
                </Text>
              </Column>
              <Column className="text-right">
                <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                  {item.quantity}
                </Text>
              </Column>
              <Column className="text-right">
                <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                  {item.amount}
                </Text>
              </Column>
            </Row>
          ))}

          {/* 3rd row */}
          <Row className="mt-[16px] w-full">
            <Column>
              <Text className="color-#434343 font-sans text-[16px] font-normal leading-[19.36px]">
                VAT
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                {vatPercent}
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                {vatAmount}
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
                {totalPercent}
              </Text>
            </Column>
            <Column className="text-right">
              <Text className="color-#0A0A0A whitespace-nowrap font-sans text-[16px] font-semibold leading-[19.36px]">
                {totalAmount}
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>
    </TailwindWrapper>
  );
};

export default OrderSummary;
