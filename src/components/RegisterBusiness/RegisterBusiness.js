import axios from "axios";
import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";

function RegisterBusiness() {
  const [modalState, setModalState] = useState(false);

  const submit = async (event) => {
    event.preventDefault();

    let user = JSON.parse(localStorage.getItem("signedInUser"));

    const formData = new FormData(event.target);

    formData.set("name", formData.get("businessName"));
    formData.set("description", formData.get("description"));

    await axios
    .post('https://fundedlocal-server.herokuapp.com/api/v1.0/businesses/newbusiness', formData, {
			headers: { 'content-type': 'multipart/form-data' }
      }
    ).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("business", JSON.parse(res.data))
      }
    })
  };

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
        <form onSubmit={submit}>
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
        </form>
      </Modal>
    </div>
  );
}

export default RegisterBusiness;
