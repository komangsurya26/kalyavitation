"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NotFoundContent() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code") || "404";
  const message =
    searchParams.get("message") ||
    "Maaf, halaman yang anda cari tidak ditemukan.";
  const backUrl = searchParams.get("backUrl") || "/";
  const backLabel = searchParams.get("backLabel") || "Kembali ke Beranda";

  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">
            {code}
          </h1>
          <p className="text-gray-500">{message}</p>
        </div>
        <Link
          href={backUrl}
          className="inline-flex h-10 items-center bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90"
          prefetch={true}
        >
          {backLabel}
        </Link>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <NotFoundContent />
    </Suspense>
  );
}
