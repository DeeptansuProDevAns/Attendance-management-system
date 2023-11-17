"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import "./page.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className="mainpage">
      <div className="bgblur">
        <div className="login">
          <button
            className="btn btn-danger btn-lg login"
            onClick={() => router.push("/login")}>
            Login
          </button>
        </div>
        <div className="heading">Welcome to our Website</div>
      </div>
    </div>
  );
}
