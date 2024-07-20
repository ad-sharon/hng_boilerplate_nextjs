import { Body, Section } from "@react-email/components";

import InvoiceDetails, {
  InvoiceDetailsProperties,
} from "~/email/templates/_components/InvoiceDetails";
import InvoiceMain, {
  InvoiceMainProperties,
} from "~/email/templates/_components/InvoiceMain";
import OrderSummary, {
  OrderSummaryProperties,
} from "~/email/templates/_components/OrderSummary";
import PaymentDetails, {
  PaymentDetailsProperties,
  PayNowLink,
} from "~/email/templates/_components/PaymentDetails";
import TailwindWrapper from "~/email/templates/_components/tailwindWrapper";

export interface InvoiceProperties {
  title: InvoiceMainProperties;
  name: InvoiceMainProperties;
  image: InvoiceMainProperties;
  invoiceDetails: InvoiceDetailsProperties;
  paymentDetails: PaymentDetailsProperties;
  orderSummary: OrderSummaryProperties;
  payNowLink: PayNowLink;
}

export const InvoiceEmail: React.FC<InvoiceProperties> = ({
  title,
  name,
  image,
  invoiceDetails,
  paymentDetails,
  orderSummary,
  payNowLink,
}: InvoiceProperties) => {
  return (
    <TailwindWrapper>
      <Body>
        <Section className="p-[56px]">
          <InvoiceMain {...name} {...title} {...image} />
          <InvoiceDetails {...invoiceDetails} />
          <OrderSummary {...orderSummary} />
          <PaymentDetails {...paymentDetails} {...payNowLink} />
        </Section>
      </Body>
    </TailwindWrapper>
  );
};

export default InvoiceEmail;
