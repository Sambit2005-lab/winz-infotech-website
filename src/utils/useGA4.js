// src/hooks/useGA4.ts (or .js if you're not using TypeScript)
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-9955LW454F";

const useGA4 = () => {
    useEffect(() => {
        if (!GA_MEASUREMENT_ID) {
            console.warn("GA4 Measurement ID is not set.");
            return;
        }

        // Load gtag script
        const script1 = document.createElement("script");
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script1.async = true;
        document.head.appendChild(script1);

        // Initialize GA
        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
        `;
        document.head.appendChild(script2);
    }, []);
};

export default useGA4;
