import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import registerABusinessApiCall from "../../apiCalls/registerABusinessApiCall";
import SignIn from "../SignIn/SignIn";

function RegisterBusiness() {
  const [modalState, setModalState] = useState(false);
  const [files, setFiles] = useState([]);
  let cookies = new Cookies();
  let user = cookies.get("signedInUser") || "";

  const submit = async (event, user) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.set("name", formData.get("businessName"));
    formData.set("userId", user.id);
    formData.set("description", formData.get("description"));
    // formData.set('bankAccount', {name: "Fifolu"});

    for (let i = 0; i < files.length; i++) {
      formData.append(`images[${i}]`, files[i]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    await registerABusinessApiCall(formData);
    window.location.reload();
  };

  if (user === "") {
    return <SignIn />;
  } else {
    return (
      <div className="RegisterBusinessContainer">
        <div
          className="RegisterBusinessButton"
          onClick={() => setModalState(true)}
        >
          <button>Register a Business</button>
        </div>

        <Modal
          className="RegisterBusinessModal"
          isOpen={modalState}
          onRequestClose={() => setModalState(false)}
        >
          <form onSubmit={(event) => submit(event, user)}>
            <label>
              <input
                type="text"
                placeholder="What is the name of your business"
                name="businessName"
                required
              />
            </label>
            <br />
            <label>
              <textarea
                name="description"
                placeholder="Describe the nature of your business"
                style={{ height: 150 }}
                required
              />
            </label>
            <br />

            <label>
              <input
                type="file"
                multiple
                placeholder="Upload Multimedia"
                name="images"
                onChange={(event) => setFiles([...files, event.target.files])}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default RegisterBusiness;
