import InvoiceRow from "./InvoiceRow.tsx";
import type { Invoice } from "./invoiceType.ts";

interface InvoiceTableProps {
  invoices: Invoice[];
  edit(invoice: Invoice): void;
}

export default function InvoiceTable(props: InvoiceTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Valor</th>
          <th className="numeric-date">Data Emissão</th>
          <th className="numeric-date">Data Vencimento</th>
          <th>Situação</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.invoices.map((invoice) => (
          <InvoiceRow invoice={invoice} key={invoice.id} edit={props.edit} />
        ))}
      </tbody>
    </table>
  );
}
