"use client";
import "@styles/global.css";
import { Suspense } from "react";

export default function PodiumLayout({ children }: any) {
    return (
        <Suspense
            fallback={
                <div className='text-white'>Carregando...</div>
            }
        >
            {children}
        </Suspense>
    );
}
