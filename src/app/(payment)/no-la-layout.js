import Script from "next/script";

import Navbar from "@/components/Navbar";
import "../style.css"; 
import Footer from "@/components/Footer";
 
export const metadata = {
  title: "XMR Swap - Payment",
  description: "Exchange your coins",
};

export default function PaymentLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`payment`}> 
      {/* <body className={`payment`}>  */}

                  {children}  
 


          <Script src="/js/jquery-3.6.3.js" strategy="lazyOnload" />
          <Script src="/js/script.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}
