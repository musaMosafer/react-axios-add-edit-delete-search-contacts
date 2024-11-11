import { Link } from "react-router-dom";
import { COMMENT, GREEN, PURPLE } from "../../helpers/Colors";
import { useEffect } from "react";

const AddContact = ({
  newContact,
  setNewContact,
  onChangeSetNewContact,
  onSubmitForm,
  groups,
  contacts,
}) => {
  useEffect(() => {
    const defaultGroupId = +groups[0].id;
    setNewContact({ ...newContact, groupid: defaultGroupId });

    const lastContactId = +contacts[contacts.length - 1].id;
    setNewContact({ ...newContact, id: lastContactId + 1 });
  }, []); // run once in mount

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
              <form onSubmit={onSubmitForm}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullname"
                    className="form-control"
                    placeholder="نام و نام خانوادگی"
                    required=""
                    value={newContact.fullname}
                    onChange={onChangeSetNewContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="photo"
                    type="text"
                    className="form-control"
                    placeholder=" آدرس تصویر "
                    required=""
                    value={newContact.photo}
                    onChange={onChangeSetNewContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="mobile"
                    type="text"
                    className="form-control"
                    placeholder=" شماره موبایل"
                    required=""
                    value={newContact.mobile}
                    onChange={onChangeSetNewContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder=" آدرس ایمیل"
                    required=""
                    value={newContact.email}
                    onChange={onChangeSetNewContact}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="job"
                    type="text"
                    className="form-control"
                    placeholder=" شغل "
                    required=""
                    value={newContact.job}
                    onChange={onChangeSetNewContact}
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
                  <input
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: PURPLE }}
                    value={"ساخت مخاطب"}
                  />
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

export default AddContact;
