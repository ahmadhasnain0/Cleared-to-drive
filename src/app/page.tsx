"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import  "../style/page.css";
import Header from '@/components/header';
import OnlyPay from '@/components/onlypay';
import Featured from '@/components/featured';
import Militry from '@/components/militry';
export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <main  >
    <Header/>
    <OnlyPay/>
    <Featured />
    <Militry />
    </main>
  );
}
