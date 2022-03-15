import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import registerABusinessApiCall from "../../apiCalls/registerABusinessApiCall";

function RegisterBusiness() {
  const [modalState, setModalState] = useState(false);
  const [files, setFiles] = useState([])

  const submit = async (event) => {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("signedInUser"));
    const formData = new FormData(event.target);

    formData.set("name", formData.get("businessName"));
    formData.set("description", formData.get("description"));
    formData.set('owner', user)

    for (let i = 0; i < files.length; i++) {
      formData.append("images[]", files[i])
    }

    registerABusinessApiCall(formData)
  }

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
        <form onSubmit={submit()}>
          <label>
            <input
              type="text"
              placeholder="What is the name of your business"
              name="businessName"
            />
          </label>
          <br />
          <label>
            <textarea
              name="description"
              placeholder="Describe the nature of your business"
              style={{ height: 150 }}
            />
          </label>
          <br/>

          <label>
            <input
              type="file"
              placeholder="Upload Multimedia"
              name="images"
              onChange={(event) => setFiles([ ...files, event.target.files])}
            />
          </label>

        </form>
      </Modal>
    </div>
  );
}

export default RegisterBusiness;
