import React from 'react'
import Image from "next/image"; 
const CopyToClipboard = () => {
  return (
    <div className="copy">
        <p className="copy_text translate" data-key="translate_14"><Image width={20} height={20} src="/img/main_copy.svg" alt="" />Copied to clipboard!</p>
    </div>
  )
}

export default CopyToClipboard
