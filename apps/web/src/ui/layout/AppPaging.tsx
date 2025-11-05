"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function AppPaging() {
  const router = useRouter();
  const currentPage = Number(useSearchParams().get("page")) || 1;

  const changePage = (newPage: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());
    router.push(url.toString());
  };

  return (
    <div className="join">
      <button
        className="join-item btn"
        disabled={currentPage <= 1}
        onClick={() => changePage(currentPage - 1)}
      >
        «
      </button>
      <button className="join-item btn">Page {currentPage}</button>
      <button
        className="join-item btn"
        onClick={() => changePage(currentPage + 1)}
      >
        »
      </button>
    </div>
  );
}
