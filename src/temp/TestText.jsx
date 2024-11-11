import TestForm from "./TestForm";

import { useState, useEffect } from "react";

const TestText = () => {
  console.log("TestText");

  const [getcontacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts([
      {
        id: "1",
        groupid: "4",
      },
    ]);
  }, []);

  const jsonString = JSON.stringify(getcontacts);
  return (
    <div>
      <p className="link-light">TestText</p>
      <TestForm jjson={jsonString} />
      <h2>json</h2>
      <h2 className="link-light">{jsonString}</h2>
    </div>
  );
};

export default TestText;
