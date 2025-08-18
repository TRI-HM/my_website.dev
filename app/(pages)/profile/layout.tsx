import React from "react";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-6">
      <Navigation />
      <main className="pt-20">{children}</main>
      <ScrollToTop />
      <footer className="mt-12 text-center text-gray-600">
        © {new Date().getFullYear()} Huynh Minh Tri. All rights reserved.
      </footer>
    </section>
  );
}
