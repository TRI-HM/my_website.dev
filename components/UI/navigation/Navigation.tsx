import NavigateItem from "./navigateItem/_NavigateItem";

const navigationItems = [
  { href: "#", label: "Information" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Log out" },
];

const Navigation = () => {
  return (
    <nav className="container mx-auto bg-white/90 p-4 min-h-[60px] rounded-b-4xl">
      <ul className="flex gap-4 items-center justify-center">
        {navigationItems.map((item) => (
          <NavigateItem key={item.label} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
