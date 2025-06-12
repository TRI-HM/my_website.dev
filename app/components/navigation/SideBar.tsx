"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin/products", label: "Sản phẩm" },
  { href: "/admin/blogs", label: "Bài viết" },
  { href: "/admin/settings", label: "Cài đặt" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white shadow-lg">
      <div className="p-6 text-2xl font-bold">Admin</div>
      <nav className="flex flex-col space-y-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-4 py-2 text-sm hover:bg-gray-700 ${pathname.startsWith(
              item.href
            )} bg-gray-700 font-semibold`}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
