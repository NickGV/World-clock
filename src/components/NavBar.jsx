export const NavBar = ({ setSetshowPage }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0  text-white z-10 bg-custom-dark-blue">
      <ul className="flex justify-around">
        <li className="hover:text-orange-600 hover:scale-110 cursor-pointer p-4" onClick={() => setSetshowPage("search")}>Search</li>
        <li className="hover:text-orange-600 hover:scale-110 cursor-pointer p-4" onClick={() => setSetshowPage("clocks")}>clocks</li>
      </ul>
    </nav>
  );
};
