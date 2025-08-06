import { useEffect, useState } from "react";

export function useExchangeRates(base = "USD") {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
        if (!res.ok) throw new Error("Failed to fetch exchange rates");
        const data = await res.json();
        setRates(data.rates);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [base]);

  return { rates, loading, error };
}
