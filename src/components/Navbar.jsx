import { BACKGROUND, PURPLE } from "../helpers/Colors";
import Searchbox from "./Searchbox";

const Navbar = ({ setSearchWord, searchWord, onChangeSearchWord }) => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fa fa-id-badge" style={{ color: PURPLE }}></i> وب
              اپلیکیشن مدیریت <span style={{ color: PURPLE }}>مخاطبین</span>
            </div>
          </div>
          <div className="col">
            <Searchbox
              onChangeSearchWord={onChangeSearchWord}
              searchWord={searchWord}
              setSearchWord={setSearchWord}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
