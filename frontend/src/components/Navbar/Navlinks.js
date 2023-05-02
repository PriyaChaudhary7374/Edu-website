import { menuItems } from '../../menuItems';
import MenuItems from './MenuItems';
import "./Dropdown.css"
const Navlinks = () => {
  return (
    <>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Navlinks;