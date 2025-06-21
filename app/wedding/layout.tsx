"use client";
// src/app/wedding/layout.tsx
export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-rose-50 font-serif">{children}</body>
    </html>
  );
}
