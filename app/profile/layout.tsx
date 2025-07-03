import React from "react";
import Navigation from "./components/Navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-6">
      <Navigation />
      <main>{children}</main>
    </section>
  );
}
