import Image from "next/image"; 
import Link from "next/link";
import React from 'react'

const Navbar = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header_items">
          <div className="header_item">
            <div className="header_item_items">
              <Link href="/" className="header_item_logo"><Image width={23} height={23} src="/img/header_logo.svg" alt=""/>XmrSwap</Link>
              <div className="header_item_info translate" data-key="translate_1">Reserve <Image width={24} height={24} src="/img/monero.svg" alt=""/> <span>0 </span> XMR</div>
              <div className="header_item_info translate" data-key="translate_2">24h volume:  <Image width={24} height={24} src="/img/monero.svg" alt=""/><span>0 </span> XMR</div>
            </div>
          </div>
          <div className="header_item">
            <ul className="header_item_navs">
              <li className="header_item_nav translate" data-key="translate_3"><Link href="/">Contacts</Link></li>
              <li className="header_item_nav translate" data-key="translate_4"><Link href="/">FAQ</Link></li>
            </ul>
            <p className="header_item_lang" >EN <Image width={24} height={24} src="/img/lang_en.svg" alt=""/></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
