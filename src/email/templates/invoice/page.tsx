import InvoiceEmail, {
  InvoiceProperties,
} from "~/email/templates/_components/InvoiceEmail";

const exampleNameTitleImage = {
  name: "John Doe",
  title: "Invoice",
  image: "/images/invoicePic.jpg",
};

const exampleInvoiceDetails = {
  invoiceNumber: "#EJ78465",
  issuedDate: "July 17, 2024",
  dueDate: "July 19, 2024",
};

const examplePaymentDetails = {
  amount: "$352",
  paymentMethod: "Bank",
  bankName: "United Bank of Africa",
  accountNumber: "2108689490",
  accountName: "Jane Doe",
  payNowLink: "https://example.com/pay-now",
};

const exampleOrderSummary = {
  items: [
    { name: "Item", quantity: "5", amount: "$200" },
    { name: "Item", quantity: "3", amount: "$120" },
  ],
  vatPercent: "10%",
  vatAmount: "$32",
  totalPercent: "100%",
  totalAmount: "$352",
};

const examplePayNowLink = {
  payNowLink: "/",
};

const invoiceData: InvoiceProperties = {
  title: exampleNameTitleImage,
  name: exampleNameTitleImage,
  image: exampleNameTitleImage,
  invoiceDetails: exampleInvoiceDetails,
  paymentDetails: examplePaymentDetails,
  orderSummary: exampleOrderSummary,
  payNowLink: examplePayNowLink,
};

const InvoiceEmailTemplate: React.FC = () => {
  return <InvoiceEmail {...invoiceData} />;
};

export default InvoiceEmailTemplate;
