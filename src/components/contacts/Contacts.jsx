import { PINK } from "../../helpers/Colors";

import { Link } from "react-router-dom";

import Contact from "./Contact";
import Loading from "../Loading";

const Contacts = ({ loading, contacts, onDeleteContact }) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <Link
                  className="btn mx-2"
                  style={{ backgroundColor: PINK }}
                  to="/contacts/add"
                >
                  ساخت مخاطب جدید<i className="fa fa-plus-circle mx-2"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          {loading ? (
            <Loading />
          ) : (
            contacts.map((c) => {
              return (
                <div className="col-md-6" key={c.id}>
                  <Contact
                    contact={c}
                    removeContact={() => onDeleteContact(c.id)}
                  />
                </div>
              );
            })
          )}
        </div>
      </section>
      {/* <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <Link
                  className="btn mx-2"
                  style={{ backgroundColor: PINK }}
                  to="/contacts/testapp"
                >
                  test<i className="fa fa-plus-circle mx-2"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Contacts;
