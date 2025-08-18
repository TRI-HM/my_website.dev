import NavigateItem from "../../../components/navigation/navigateItem/_NavigateItem";

const navigationItems = [
  { href: "#", label: "Thông tin cá nhân" },
  { href: "#", label: "Đổi mật khẩu" },
  { href: "#", label: "Đăng xuất" },
];

const Navigation = () => {
  return (
    <nav className="container mx-auto rounded-b-3xl fixed top-0 left-0 right-0 bg-blue-500 shadow-xl z-50">
      <ul className="flex flex-row justify-around p-4">
        {navigationItems.map((item) => (
          <NavigateItem key={item.label} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
