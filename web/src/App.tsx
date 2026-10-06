import type { Invoice } from './invoiceType.ts';
import InvoiceTable from './invoiceTable.tsx';
import { useState, useEffect } from 'react';

export default function App() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getInvoices() {
            try {
                const response = await fetch('/api/invoices');
                if (!response.ok) {
                    setError(`Não foi possível carregar as faturas. Status: ${response.status}`);
                }
                const datas = await response.json();
                setInvoices(datas);

            } catch (error) { 
                setError(`Não foi possível carregar as faturas.`);
            }
            setLoading(false);
        }
        
        getInvoices();
    }, []);

    if (loading) return <p>Carregando faturas...</p>;
    if (error) return <p>{error}</p>;

    
    return  <InvoiceTable invoices = {invoices}/>;
}
