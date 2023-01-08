const Nav = ({ className, item }) => {
  return (
    <li className={className} title={item.title}>
      <a href={item.link}>{item.icon}</a>
    </li>
  );
};

export default Nav;
