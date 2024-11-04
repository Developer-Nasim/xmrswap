import Image from "next/image"; 
import CopyToClipboard from "@/components/CopyToClipboard";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="exchange">
    <CopyToClipboard/>  

        <Navbar/>
          <section className="main">
      <div className="container">
        <h1 className="main_tittle translate" data-key="translate_5">Exchange your <span>crypto</span> <br/> to <span>XMR</span> safety</h1>
        <div className="main_rect">
          <Image width={11} height={12} src="/img/main_rect_decor.svg" alt="" className="main_rect_left_top"/>
          <Image width={12} height={11} src="/img/main_rect_decor.svg" alt="" className="main_rect_right_top"/>
          <div className="main_rect_content">
            <div className="main_rect_up">
              <div className="main_rect_up_item">
                <div className="main_rect_up_item_content">
                  <div className="main_rect_up_item_items">
                    <div className="main_rect_up_item_left">
                      <p className="main_rect_up_item_left_tittle translate" data-key="translate_6">You send</p>
                      <div className="main_rect_up_item_left_items">
                        <span className="main_rect_up_item_left_items_coin" id="select_teg">BTC</span>

                        <input type="text" placeholder="0.00" maxLength="20" className="main_rect_up_item_left_items_input" id="input_minmax"/>
                      </div>
                    </div>
                    <div className="main_rect_up_item_right">
                      <div className="main_rect_up_item_right_rect" id="select_coin">
                        <div className="main_rect_up_item_right_content">
                          <p className="main_rect_up_item_right_rect_coin" id="select_update"><Image width={24} height={24} src="/img/btc.svg" alt="" id="select_coin_icon"/>Bitcoin</p>
                          <Image width={24} height={24} src="/img/main_right_arrow.svg" alt="" className="main_rect_up_item_right_rect_arrow"/>
                        </div>
                      </div>
                      <div className="main_rect_up_item_right_select">
                          <ul className="main_rect_up_item_right_select_coins">
                            <li className="main_rect_up_item_right_select_coin"><Image width={24} height={24} src="/img/btc.svg" alt=""/>Bitcoin <span>(BTC)</span></li>
                            <li className="main_rect_up_item_right_select_coin"><Image width={24} height={24} src="/img/eth.svg" alt=""/>Ethereum <span>(ETH)</span></li>
                            <li className="main_rect_up_item_right_select_coin"><Image width={24} height={24} src="/img/ltc.svg" alt=""/>Litecoin <span>(LTC)</span></li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <p className="main_rect_up_item_maxmin translate" data-key="translate_7"><Image width={14} height={14} src="/img/main_info.svg" alt=""/>Minimum / Maximum amount - 0.003 / 300 <span id="select_teg_minmax">BTC</span></p>
                </div>
              </div>
              <div className="main_rect_up_item">
                  <div className="main_rect_up_item_center">
                    <Image width={42} height={42} src="/img/main_arrow.png" alt="" className="main_rect_up_item_center_arrow"/>
                  </div>
              </div>
              <div className="main_rect_up_item">
                <div className="main_rect_up_item_content">
                  <div className="main_rect_up_item_items">
                    <div className="main_rect_up_item_left">
                      <p className="main_rect_up_item_left_tittle translate" data-key="translate_8">You’il receive</p>
                      <div className="main_rect_up_item_left_items">
                          <p className="main_rect_up_item_left_items_coin">XMR</p>
                          <input type="text" placeholder="0.00" maxLength="20" disabled className="main_rect_up_item_left_items_input" />
                      </div>

                
                      
                    </div>
                    <div className="main_rect_up_item_right">
                      <div className="main_rect_up_item_right_rect">
                        <div className="main_rect_up_item_right_content">
                          <p className="main_rect_up_item_right_rect_coin"><Image width={24} height={24} src="/img/monero.svg" alt=""/>Monero</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_rect_adress">
              <div className="main_rect_adress_rect">
                <div className="main_rect_adress_rect_content">
                  <div className="main_rect_adress_rect_items">
                    <div className="main_rect_adress_rect_item">
                      <p className="main_rect_adress_rect_item_tittle translate" data-key="translate_9">Your XMR address</p>
                      <textarea placeholder="Enter address" className="main_rect_adress_rect_item_input " rows="3" id="addressInput"></textarea>
                    </div>
                    <div className="main_rect_adress_rect_item">
                      <p className="main_rect_adress_rect_item_info translate" data-key="translate_13">Carefully check <br/> your XMR address</p>
                    </div>
                  </div>
                  <p className=" main_rect_up_item_maxmin_error" id="adress_format"><Image width={14} height={14} src="/img/main_info_error.svg" alt=""/>Invalid format address</p>
                </div>
              </div>
            </div>
            <div className="main_rect_bottom">
              <div className="main_rect_bottom_items">
                <div className="main_rect_bottom_item">
                  <div className="main_rect_bottom_item_content">
                    <p className="main_rect_bottom_item_tittle translate" data-key="translate_10">Comission</p>
                    <p className="main_rect_bottom_item_text">-</p>
                  </div>
                </div>
                <div className="main_rect_bottom_item">
                  <div className="main_rect_bottom_item_content">
                    <p className="main_rect_bottom_item_tittle translate" data-key="translate_11">Exchange time</p>
                    <div className="main_rect_bottom_item_range">
                      {/* <!-- <input type="range" className="main_rect_bottom_item_range_input"> --> */}
                      <div className="main_rect_bottom_item_range_main">
                        <p className="main_rect_bottom_item_range_tittle value" >12H</p>
                        <Image width={24} height={24} src="/img/main_right_arrow.svg" alt="" className="main_rect_bottom_item_range_arrow"/>
                      </div>
                      <div className="main_rect_bottom_item_range_time">
                        <div className="main_rect_bottom_item_range_time_rect">
                          <div className="main_rect_bottom_item_range_time_rect_container">
                            <p className="main_rect_bottom_item_range_time_rect_tittle value" >12H</p>

                            <div className="main_rect_bottom_item_range_time_slider">
                              <input type="range" min="0" max="24" id="rangeInput"/>
                                <div className="main_rect_bottom_item_range_time_slider_bottom">
                                  <p className="main_rect_bottom_item_range_time_slider_bittom_text">Min.</p>
                                  <p className="main_rect_bottom_item_range_time_slider_bittom_text">Max.</p>
                                </div>

                            </div>
                            
                        
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="main_rect_button translate" data-key="translate_12" id="checkAddress">Exchange</button>
          </div>
          <Image width={12} height={11} src="/img/main_rect_decor.svg" alt="" className="main_rect_left_bottom"/>
          <Image width={11} height={12} src="/img/main_rect_decor.svg" alt="" className="main_rect_right_bottom"/>
        </div>
      </div>  
 
          </section>
        <Footer/>
    </main>
  );
}
