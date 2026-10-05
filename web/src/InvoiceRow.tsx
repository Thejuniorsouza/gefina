import type { Invoice } from "./invoiceType.ts";
import statusLabel from "./statusLabel.ts";

interface InvoiceRowProps {
  invoice: Invoice;
}

export default function InvoiceRow(props: InvoiceRowProps) {
  return (
    <tr>
      <td>{props.invoice.customer.name}</td>
      <td>{props.invoice.amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
      <td>{new Date(props.invoice.issueDate).toLocaleDateString("pt-BR")}</td>
      <td>{new Date(props.invoice.dueDate).toLocaleDateString("pt-BR")}</td>
      <td>{statusLabel(props.invoice.status)}</td>
    </tr>
  );
}