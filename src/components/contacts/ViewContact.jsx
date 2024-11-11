import { Link, useParams } from "react-router-dom";
import { CYAN, CURRENTLINE, PURPLE } from "../../helpers/Colors";

const ViewContact = ({ contacts, groups }) => {
  const { contactId } = useParams(); // from route in app.js
  const contact = contacts[contactId - 1];
  const group = groups[contact.groupid - 1];
  // console.log("contactId");
  // console.log(contactId);
  // console.log("contact");
  // console.log(contact);

  return (
    <>
      <p>viewContact</p>
      <section className="view-contact-intro p3">
        <div className="container">
          <div className="row my-2 text-center">
            <p className="h3 fw-bold" style={{ color: CYAN }}>
              اطلاعات مخاطب
            </p>
          </div>
        </div>
      </section>
      <hr style={{ backgroundColor: CYAN }} />
      <section className="view-contact mt-e">
        <div
          className="container p-2"
          style={{ borderRadius: "1em", backgroundColor: CURRENTLINE }}
        >
          <div className="row align-items-center">
            <div className="col-md-3">
              <img
                src={contact.photo}
                alt={contact.fullname}
                className="img-fluid rounded"
                style={{ border: `1px solid ${PURPLE}` }}
              />
            </div>
            <div className="col-md-9">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوادگی:{" "}
                  <span className="fw-bold">{contact.fullname}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  شماره موبایل:{" "}
                  <span className="fw-bold"> {contact.mobile} </span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  ایمیل: <span className="fw-bold">{contact.email} </span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  شغل: <span className="fw-bold"> {contact.job} </span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  گروه: <span className="fw-bold">{group.name}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-my-2">
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link
                className="btn"
                style={{ backgroundColor: PURPLE }}
                to="/contacts"
              >
                برگشت به صفحه ی اصلی
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewContact;
