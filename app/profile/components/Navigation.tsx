import NavigateLink from "./navigateLink/_NavigateLink";

const navigationItems = [
  { href: "#", label: "Thông tin cá nhân" },
  { href: "#", label: "Đổi mật khẩu" },
  { href: "#", label: "Đăng xuất" },
];

const Navigation = () => {
  return (
    <div className="container rounded-b-3xl fixed bg-white/70 shadow-xl z-50">
      <ul className="flex flex-row justify-around p-4">
        {navigationItems.map((item) => (
          <NavigateLink key={item.label} href={item.href} label={item.label} />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
