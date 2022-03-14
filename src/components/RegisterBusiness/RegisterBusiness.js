import axios from "axios";
import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import registerABusinessApiCall from "../../apiCalls/registerABusinessApiCall";

function RegisterBusiness() {
  const [modalState, setModalState] = useState(false);

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
        <form onSubmit={registerABusinessApiCall(event)}>
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
