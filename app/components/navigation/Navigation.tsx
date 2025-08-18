import NavigateItem from "@/app/components/navigation/navigateItem/_NavigateItem";

const navigationItems = [
  { href: "#", label: "Thông tin cá nhân" },
  { href: "#", label: "Đổi mật khẩu" },
  { href: "#", label: "Đăng xuất" },
];

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-500 h-16 z-50 border-4 border-yellow-400">
      <div className="bg-green-500 h-full w-full">
        <ul className="flex justify-around items-center h-full">
          {navigationItems.map((item) => (
            <NavigateItem
              key={item.label}
              href={item.href}
              label={item.label}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
