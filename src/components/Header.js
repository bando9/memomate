import { GiNotebook } from "react-icons/gi";
import { CiLight, CiDark } from "react-icons/ci";

const Header = () => {
  return (
    <div class="header">
      <div class="logo">
        <GiNotebook />
        <span class="text-logo">MemoMate</span>
      </div>
      <CiDark className="toggle-icon light" size="2em" />
    </div>
  );
};

export default Header;
