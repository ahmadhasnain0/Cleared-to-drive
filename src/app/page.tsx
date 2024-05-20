"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import  "../style/page.css";
import Header from '@/components/header';
export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <main  >
    <Header/>
    </main>
  );
}
