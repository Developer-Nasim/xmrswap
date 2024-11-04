import Script from "next/script";

import "./style.css";
 
export const metadata = {
  title: "XMR Swap - home",
  description: "Exchange your coins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      {/* <body className={`exchange`}> */}
      <body>
        
              {children}  

        <Script src="/js/jquery-3.6.3.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}
