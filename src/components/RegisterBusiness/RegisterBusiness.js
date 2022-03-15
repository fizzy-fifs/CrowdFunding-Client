import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import registerABusinessApiCall from "../../apiCalls/registerABusinessApiCall";

function RegisterBusiness() {
  const [modalState, setModalState] = useState(false);
  const [business, setBusiness] = useState({})
  const [files, setFiles] = useState([])

  const submit = async (event) => {
    event.preventDefault();
    let user = localStorage.getItem('signedInUser');

    console.log(user)
    console.log(user.id)
    
    const formData = new FormData(event.target);

    formData.set("name", formData.get("businessName"));
    formData.set('user', user.id);
    formData.set("description", formData.get("description"));
    // formData.set('bankAccount', {name: "Fifolu"});

    for (let i = 0; i < files.length; i++) {
			formData.append(`images[${i}]`, files[i]);
		}

		for (var pair of formData.entries()) {
			console.log(pair[0] + ', ' + pair[1]);
		}

    // let bankAccount = {}
    // business.owner = user;
    // // business.images = files;
    // business.bankAccount = bankAccount;
    // let businessJson = JSON.stringify(business)
    // let imagesJson = JSON.stringify(files)

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
        // appElement={el}
      >
        <form onSubmit={submit}>
          <label>
            <input
              type="text"
              placeholder="What is the name of your business"
              name="businessName"
              // onChange={(e) => setBusiness({ ...business, name: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            <textarea
              name="description"
              placeholder="Describe the nature of your business"
              style={{ height: 150 }}
              // onChange={(e) => setBusiness({ ...business, description: e.target.value })}
              required
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
          </label><br/>
          <input type="submit" value="Submit" />

        </form>
      </Modal>
    </div>
  );
}

export default RegisterBusiness;
