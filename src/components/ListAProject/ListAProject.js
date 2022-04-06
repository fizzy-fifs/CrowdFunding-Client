import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import Cookies from "universal-cookie";
import listAProjectApiCall from "../../apiCalls/listAProjectApiCall";
import { FaTimes, FaPlus } from 'react-icons/fa';

function ListAProject() {
  const [modalState, setModalState] = useState(false);
  const [noBusinessModal, setNoBusinessModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [address, setAddress] = useState({});

  let cookies = new Cookies();
  let user = cookies.get("signedInUser") || "";
  let myBusinesses = JSON.parse(localStorage.getItem("myBusinesses")) || "";
  if (typeof myBusinesses === "object") myBusinesses = [myBusinesses];
  let myBusinessesLength = myBusinesses.length;

  const registerABusiness = () => {
    return (window.location.href = "/register-a-business");
  };

  const handleModalClose = () => {
    setNoBusinessModal(false)
  }

  const submit = async (event) => {
    event.preventDefault();

    let addressJson = JSON.stringify(address);

    const formData = new FormData(event.target);

    formData.set("title", formData.get("projectTitle"));
    formData.set("category", formData.get("category"));
    formData.set("description", formData.get("description"));
    formData.set("goal", formData.get("goal"));
    formData.set("endDate", formData.get("endDate"));
    formData.set("businessId", formData.get("business"));
    formData.set("address", addressJson);

    for (let i = 0; i < files.length; i++) {
      formData.append("images[]", files[i]);
    }
    await listAProjectApiCall(formData, addressJson);
    window.location.reload();
  };

  {
    {
      if (myBusinessesLength === 0)
        return (
          <div
            onClick={() => setNoBusinessModal(true)}
            className="w-fit px-3 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 hover:border-green-500 h-full flex flex-col justify-center"
          >
            <div className="font-medium text-gray-700">List A Project</div>
            <div className="flex justify-center items-center w-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >

            <Modal
              className="flex justify-center items-center w-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              isOpen={noBusinessModal}
              style
              onClose={() => handleModalClose}
              onRequestClose={() => setNoBusinessModal(false)}
            >
              <div className="flex flex-col text-left h-[500px] justify-center px-5 bg-gradient-to-br to-[#dff6f1] from-[#dff6f155]">
                <div className="max-w-[1080px] mx-auto">
                  <h1
                    className="NoBusiness text-7xl max-w-[50%] mb-3 cursor-pointer"
                    onClick={registerABusiness}
                  >
                    Click Here To Register A Business First
                  </h1>
                </div>
              </div>
            </Modal>
            </div>
          </div>
        );
    }
    return (
      <div
        onClick={() => setModalState(true)}
        className="w-fit px-3 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 hover:border-green-500 h-full flex flex-col justify-center"
      >
        <div className="font-medium text-gray-700">List A Project</div>

        <Modal
          className="flex justify-center items-center w-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          isOpen={modalState}
          onRequestClose={() => setModalState(false)}
        >
           {/* <header > */}
            {/* <FaTimes className="items-right text-center" style={{color: 'red', cursor: 'pointer', display: 'inline'}} onClick={() => setModalState(false)}  /> */}
          {/* </header> */}
          <div className="bg-white w-[80vw] flex flex-grow overflow-y-hidden h-[90vh] p-1 shadow-lg flex-col items-center rounded-md">
            <form
              className=" overflow-y-auto p-4"
              onSubmit={(event) => submit(event)}
            >
              <input
                className="form-input"
                type="text"
                placeholder="Enter A Project Title"
                name="projectTitle"
                required
              />

              <select name="category" className="form-input">
                <option default>Please select a relevant category</option>
                <option name="Arts">Arts</option>
                <option name="ComicsAndIllustration">
                  Comics And Illustration
                </option>
                <option name="DesignAndTech">Design And Tech</option>
                <option name="Film">Film</option>
                <option name="FoodAndCraft">Food And Craft</option>
                <option name="Games">Games</option>
                <option name="Music">Music</option> required
              </select>

              <textarea
                className="form-input h-[100px]"
                name="description"
                placeholder="Give a brief description of your project"
                required
              />

              <input
                className="form-input"
                type="text"
                placeholder="How much would you like to raise"
                name="goal"
                required
              />

              <label> End Date</label>
              <input
                className="form-input"
                type="text"
                placeholder="DD/MM/YYYY"
                pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
                title="DD/MM/YYYY"
                name="endDate"
                required
              />

              <select name="business" className="form-input">
                <option default>Link with relevant business</option>
                {myBusinesses.map((businesses) =>
                  businesses.map((business) => {
                    return (
                      <option
                        value={business.id}
                        key={business.id}
                        name="associatedBusiness"
                      >
                        {business.name}
                      </option>
                    );
                  })
                )}{" "}
                required
              </select>

              <input
                className="form-input"
                type="file"
                placeholder="Upload Multimedia"
                name="images"
                onChange={(event) => setFiles([...files, event.target.files])}
                multiple
                required
              />

              <br />
              <h6>Address</h6>

              <div className="enterAddress">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Address Line1"
                  name="line1"
                  onChange={(event) =>
                    setAddress({ ...address, line1: event.target.value })
                  }
                  required
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="Address Line2"
                  name="line2"
                  onChange={(event) =>
                    setAddress({ ...address, line2: event.target.value })
                  }
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={(event) =>
                    setAddress({ ...address, city: event.target.value })
                  }
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={(event) =>
                    setAddress({ ...address, state: event.target.value })
                  }
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="Country"
                  name="country"
                  onChange={(event) =>
                    setAddress({ ...address, country: event.target.value })
                  }
                  required
                />

                <input
                  className="form-input"
                  type="text"
                  placeholder="Postal Code"
                  name="postalCode"
                  onChange={(event) =>
                    setAddress({
                      ...address,
                      postalCode: event.target.value,
                    })
                  }
                />
              </div>

              <input className="form-btn w-full" type="submit" value="Submit" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ListAProject;
