'use client'
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import './page.css'

import CountdownTimer from "./count.js"

export default function page() {
return(
  <div>
    <CountdownTimer />
  </div>
)
}
