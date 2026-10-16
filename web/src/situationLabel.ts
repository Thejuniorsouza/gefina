import type { InvoiceSituation } from "./invoiceType.ts";

export default function situationLabel(situation: InvoiceSituation): string {
  switch (situation) {
    case "paid": return "Pago";
    case "pending": return "Pendente";
    case "overdue": return "Atrasado";
    default: return "Desconhecido";
  }
}