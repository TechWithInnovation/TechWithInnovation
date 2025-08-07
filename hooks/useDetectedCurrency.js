import { useEffect, useState } from "react";
import { currencyOptions } from "./currencyMap";

export const useDetectedCurrency = (defaultCurrency = "NGN") => {
    const [currency, setCurrency] = useState(defaultCurrency);

    useEffect(() => {
        const detectCurrency = async () => {
            try {
                const res = await fetch("https://ipwho.is/");
                const data = await res.json();

                if (data.success && data.country_code && currencyOptions[data.country_code]) {
                    setCurrency(currencyOptions[data.country_code]);
                } else {
                    setCurrency(defaultCurrency);
                }
            } catch (err) {
                console.error("Failed to detect currency:", err);
                setCurrency(defaultCurrency);
            }
        };

        detectCurrency();
    }, [defaultCurrency]);

    return currency;
};
