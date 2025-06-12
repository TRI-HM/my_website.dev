"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBox, FiFileText, FiSettings } from "react-icons/fi";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: <FiHome size={20} /> },
  { href: "/admin/products", label: "Sản phẩm", icon: <FiBox size={20} /> },
  { href: "/admin/blogs", label: "Bài viết", icon: <FiFileText size={20} /> },
  { href: "/admin/settings", label: "Cài đặt", icon: <FiSettings size={20} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="group fixed left-0 top-0 z-50 h-screen w-20 overflow-hidden text-white transition-all duration-300 hover:w-64">
      <div className="flex h-16 items-center justify-center border-b border-gray-700">
        <span className="text-xl font-bold">🧊</span>
      </div>
      <nav className="mt-4 flex flex-col space-y-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center space-x-4 rounded-md p-3 text-sm hover:bg-gray-700 transition-colors ${
              pathname.startsWith(item.href) ? "bg-gray-700 font-semibold" : ""
            }`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
              {item.icon}
            </div>
            <span className="whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
