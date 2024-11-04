import Link from 'next/link'
import Image from "next/image"; 
import React from 'react'

const Footer = () => {
  return (
    <section className="footer">
  <div className="container">
    <div className="footer_items">
      <div className="footer_item">
        <Link href="/" className="footer_item_logo"><Image width={23} height={23} src="/img/footer_logo.svg" alt="" /> XmrSwap</Link>
        <p className="footer_item_logo_tittle">Monero exchange</p>
        <p className="footer_item_copy">Copyright ©2024, xmrswap <br/>
          All Rights Reserved</p>
      </div>
      <div className="footer_item">
        <p className="footer_item_tittle">Contacts</p>
        <ul className="footer_item_navs">
          <li className="footer_item_nav_tittle">Telegram bot</li>
          <li className="footer_item_nav"><Link href="t.me/mixmrbot">t.me/mixmrbot</Link></li>
          <li className="footer_item_nav_tittle">Support</li>
          <li className="footer_item_nav"><Link href="t.me/mixmrbot">t.me/mixmrsup</Link></li>
        </ul>
      </div>
      <div className="footer_item">
        <p className="footer_item_tittle">Links</p>
        <ul className="footer_item_navs">
          <li className="footer_item_nav_tittle">Clean link</li>
          <li className="footer_item_nav"><Link href="mixmr.io">mixmr.io</Link></li>
          <li className="footer_item_nav_tittle">Onion link</li>
          <li className="footer_item_nav"><Link href="ssdjkj2kjkdjkfj2kj.onion">ssdjkj2kjkdjkfj2kj.onion</Link></li>
        </ul>
      </div>
      <div className="footer_item">
        <p className="footer_item_tittle">Other</p>
        <ul className="footer_item_navs">
          <li className="footer_item_nav_tittle">Our Signature</li>
          <li className="footer_item_nav footer_item_nav_copy" id="text-to-copy">1mixmrQDbGL</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default Footer
