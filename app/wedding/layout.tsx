"use client";
// src/app/wedding/layout.tsx
export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-rose-50 container font-serif">{children}</body>
    </html>
  );
}
