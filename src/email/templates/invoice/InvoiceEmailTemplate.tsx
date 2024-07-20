import { Body, Section } from "@react-email/components";

import InvoiceDetails from "../_components/InvoiceDetails";
import InvoiceMain from "../_components/InvoiceMain";
import OrderSummary from "../_components/OrderSummary";
import PaymentDetails from "../_components/paymentDetails";
import TailwindWrapper from "../_components/tailwindWrapper";
import TopBar from "../_components/TopBar";

// type InvoiceProperties = {
//   title: string;
//   Name: string;
//   Image: string;
//   invoiceDetails: string;
//   paymentDetails: string;
//   orderSummary: string;
//   payNowLink: string;
// };

export const InvoiceEmail = () => {
  return (
    <TailwindWrapper>
      <Body>
        <TopBar />

        <Section className="p-[56px]">
          <InvoiceMain />
          <InvoiceDetails />
          <OrderSummary />
          <PaymentDetails />
        </Section>
      </Body>
    </TailwindWrapper>
  );
};

export default InvoiceEmail;

//
