export const NavBar = ({ setSetshowPage }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0  text-white p-4">
      <ul className="flex justify-around">
        <li onClick={() => setSetshowPage("search")}>Search</li>
        <li onClick={() => setSetshowPage("clocks")}>clocks</li>
      </ul>
    </nav>
  );
};
