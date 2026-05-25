'use client'

import { useEffect } from 'react'

export default function ScrollToBottom() {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'auto', // change to 'smooth' if you want animation
    })
  }, [])

  return null
}