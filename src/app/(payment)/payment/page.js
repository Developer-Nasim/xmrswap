import Image from "next/image"; 

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Payment() {
  return (
    <main className="payment"> 
  
        <Navbar />
          <section className="main_payment">
            <div className="container">
              <h1 className="main_payment_tittle translate" data-key="translate_5">Payment</h1>
              <h1 className="main_payment_subtittle translate" data-key="translate_6">Send funds to the <span>specified</span> address</h1>

              <div className="main_payment_rect">
                <div className="main_payment_rect_content">
                  <div className="main_payment_rect_up_items">
                    <div className="main_payment_rect_item">
                      <div className="main_payment_rect_item_qr">
                        <Image width={120} height={120} src="/img/payment/payment_qr.png" alt="" className="main_payment_rect_item_qr_image" />
                      </div>
                      <div className="main_payment_rect_item_tittle_rect">
                        <div className="main_payment_rect_item_tittle_rect_content">
                          <p className="main_payment_rect_item_tittle_tittle translate" data-key="translate_7">QR For payment</p>

                        </div>
                      </div>
                    </div>
                    <div className="main_payment_rect_item">
                      <div className="main_payment_rect_item_content">
                        <div className="main_payment_rect_item_up">
                          <div className="main_payment_rect_item_up_content">
                            <p className="main_payment_rect_item_up_order"><span className="translate" data-key="translate_8">Order</span> #1748295</p>
                            <button className="main_payment_rect_item_up_button translate" data-key="translate_9">Guranted letter</button>
                          </div>
                        </div>
                        <div className="main_payment_rect_item_texts">
                          <div className="main_payment_rect_item_texts_items">
                            <div className="main_payment_rect_item_texts_item">
                              <p className="main_payment_rect_item_texts_tittle translate" data-key="translate_10">Amount to send</p>
                              <p className="main_payment_rect_item_texts_text">0.02 ETH</p>
                            </div>
                            <div className="main_payment_rect_item_texts_item">
                              <p className="main_payment_rect_item_texts_tittle translate" data-key="translate_11">Wallet to send to</p>
                              <p className="main_payment_rect_item_texts_text">0x2587780e9ddddd295bbd0dbeeef2ed3f88faa12</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main_payment_rect_info_items">
                    <div className="main_payment_rect_info_item">
                      <div className="main_payment_rect_info_item_content">
                        <p className="main_payment_rect_info_item_tittle translate" data-key="translate_12">Order status</p>
                        <p className="main_payment_rect_info_item_status main_payment_rect_info_item_status_orange translate" data-key="translate_13">Waiting for payment</p>
                      </div>
                    </div>
                    <div className="main_payment_rect_info_item">
                      <div className="main_payment_rect_info_item_content">
                        <p className="main_payment_rect_info_item_tittle translate" data-key="translate_14">Remaining time</p>
                        <p className="main_payment_rect_info_item_time">71:31:8</p>
                      </div>
                    </div>
                    <div className="main_payment_rect_info_item">
                      <div className="main_payment_rect_info_item_content">
                        <p className="main_payment_rect_info_item_tittle translate" data-key="translate_15">Amount to receive</p>
                        <p className="main_payment_rect_info_item_price">200 XMR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main_payment_bottom">
                <div className="main_payment_bottom_items">
                  <div className="main_payment_bottom_item">
                    <div className="main_payment_bottom_item_content">
                      <p className="main_payment_bottom_item_tittle translate" data-key="translate_16">Your XMR address</p>
                      <p className="main_payment_bottom_item_text">42D1moCqNN8snGvgzCFBcVbFD9N57XPWyL8ERmRpN2q7XUt5FLZ9UEJJWq5uXqQ5zXaJY3HTSR2Uwt4PwiX1wFY1Qwi6meH</p>
                    </div>
                  </div>
                  <div className="main_payment_bottom_item">
                    <div className="main_payment_bottom_item_content">
                      <p className="main_payment_bottom_item_tittle translate" data-key="translate_17">Crypto</p>
                      <p className="main_payment_bottom_item_text"><Image width={24} height={24} src="/img/eth.svg" alt=""/> Eth</p>
                    </div>
                  </div>
                  <div className="main_payment_bottom_item">
                    <div className="main_payment_bottom_item_content">
                      <p className="main_payment_bottom_item_tittle translate" data-key="translate_18">Time</p>
                      <p className="main_payment_bottom_item_text">Instant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </section>
        <Footer /> 
 
    </main>
  );
}
