'use client'
import { useRouter } from "next/navigation"
import React from "react"
import './page.css'

export default function page() {
    const router = useRouter()
    return (
        <div className="dashboardmainpage">
            <h2>DashBoard Page</h2>
            <br />
            <button onClick={() => router.push('/')}>Logout</button>
            <br />
            <button onClick={() => router.push('/dashboard/about')}>Go to about page</button>
            <br />
            <button onClick={() => router.push('/dashboard/profile')}>
                Go to about student page
            </button>
        </div>
    )
}
