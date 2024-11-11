import { COMMENT, GREEN, PURPLE } from "../../helpers/Colors";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditContact = ({
  contacts,
  groups,
  onSubmitEditContactForm,
  currentContact,
  setCurrentContact,
  SetEditedContact,
}) => {
  const { contactId } = useParams();

  useEffect(() => {
    setCurrentContact(contacts[contactId - 1]);
  }, []); // run once on mount

  return (
    <section className="p-3">
      <img
        src="/img/taking-notes.c6e7efe97c1eaa453b05.jpg"
        alt=""
        height="400px"
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "130px",
          left: "100px",
          opacity: "0.5",
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 fw-bold text-center" style={{ color: GREEN }}>
              ساخت مخاطب جدید
            </p>
          </div>
          <hr style={{ color: GREEN }} />
          <div className="row mt-5">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    placeholder="نام و نام خانوادگی"
                    required=""
                    value={currentContact.fullname}
                    onChange={SetEditedContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="photo"
                    type="text"
                    className="form-control"
                    placeholder=" آدرس تصویر "
                    required=""
                    value={currentContact.photo}
                    onChange={SetEditedContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="mobile"
                    type="text"
                    className="form-control"
                    placeholder=" شماره موبایل"
                    required=""
                    value={currentContact.mobile}
                    onChange={SetEditedContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder=" آدرس ایمیل"
                    required=""
                    value={currentContact.email}
                    onChange={SetEditedContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="job"
                    type="text"
                    className="form-control"
                    placeholder=" شغل "
                    required=""
                    value={currentContact.job}
                    onChange={SetEditedContact}
                  />
                </div>
                <div className="mb-2">
                  <select name="group" required="" className="form-control">
                    {/* <option value={""}>انتخاب گروه</option> */}
                    {groups.length > 0 &&
                      groups.map((group) => {
                        return (
                          <option key={group.id} value={group.id}>
                            {group.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="mb-2">
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: PURPLE }}
                    onClick={() =>
                      onSubmitEditContactForm(currentContact, currentContact.id)
                    }
                  >
                    ویرایش مخاطب
                  </button>
                  <Link
                    className="btn mx-2"
                    style={{ backgroundColor: COMMENT }}
                    to="/contacts"
                  >
                    انصراف
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditContact;
