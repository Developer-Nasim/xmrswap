import Script from "next/script";

import Navbar from "@/components/Navbar";
import "../style.css"; 
import Footer from "@/components/Footer";
 
export const metadata = {
  title: "XMR Swap - Payment",
  description: "Exchange your coins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`payment`}> 

          <Navbar />
            <section className="main_payment">
                  {children}  
            </section>
          <Footer /> 







          <Script src="/js/jquery-3.6.3.js" strategy="lazyOnload" />
          <Script src="/js/script.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}
