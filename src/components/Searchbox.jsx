import { PURPLE } from "../helpers/Colors";

const Searchbox = ({ searchWord, setSearchWord, onChangeSearchWord }) => {
  return (
    <div className="input-group mx-2 w-75" dir="ltr">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fa fa-search"></i>
      </span>
      <input
        dir="rtl"
        type="text"
        className="form-control"
        placeholder="جستجوی مخاطب"
        aria-label="search"
        aria-describedby="basi-addon1"
        value={searchWord}
        onChange={(e) => onChangeSearchWord(e)}
      />
    </div>
  );
};

export default Searchbox;
