import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import Cookies from "universal-cookie";
import listAProjectApiCall from "../../apiCalls/listAProjectApiCall";
import RegisterBusiness from "../RegisterBusiness/RegisterBusiness";

function ListAProject() {
  const [modalState, setModalState] = useState(false);
  const [files, setFiles] = useState([]);
  const [address, setAddress] = useState({});

  let cookies = new Cookies();
  let user = cookies.get("signedInUser");
  let myBusinesses = JSON.parse(localStorage.getItem("myBusinesses")) || "";

  const x = () => {
    
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
    formData.set("businessId", myBusinesses.id);
    formData.set('address', addressJson)

    for (let i = 0; i < files.length; i++) {
      formData.append("images[]", files[i]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    await listAProjectApiCall(formData, addressJson);
    window.location.reload();
  };

  {
    if (myBusinesses == "") {
      return (
        <h1 className="NoBusiness">
          Please Register A Business First <RegisterBusiness />
        </h1>
      );
    } else {
      return (
        <div className="ListAProject">
          <button
            className="ListAProjectButton"
            onClick={() => setModalState(true)}
          >
            List A Project
          </button>

          <Modal
            className="ListAProjectModal"
            isOpen={modalState}
            onRequestClose={() => setModalState(false)}
          >
            <form onSubmit={(event) => submit(event)}>
              <label>
                <input
                  type="text"
                  placeholder="Enter A Project Title"
                  name="projectTitle"
                  required
                />
              </label>
              <br />
              <label>
                <select name="category">
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
              </label>
              <br />
              <label>
                <textarea
                  name="description"
                  placeholder="Give a brief description of your project"
                  style={{ height: 150 }}
                  required
                />
              </label>
              <br />
              <label>
                {" "}
                $
                <input
                  type="text"
                  placeholder="How much would you like to raise"
                  name="goal"
                  required
                />
              </label>
              <br />
              <label>
                End Date<br></br>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  pattern="^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$"
                  title="DD/MM/YYYY"
                  name="endDate"
                  required
                />
              </label>

              <label>
                <select>
                  <option default>Link with relevant business</option>
                  <option value={myBusinesses.id} name="associatedBusiness">
                    {myBusinesses.name}
                  </option>
                  {/* { myBusinesses.forEach((business) => {
                    return (
                      <option id={business.id} name="associatedBusiness">
                        {business.name}
                      </option>
                    );
                  })}{" "} */}
                  required
                </select>
              </label>

              <label>
                <input
                  type="file"
                  placeholder="Upload Multimedia"
                  name="images"
                  onChange={(event) => setFiles([...files, event.target.files])}
                  multiple
                  required
                />
              </label>
              <br />
              <div className="enterAddress">
                <label>
                  <input
                    type="text"
                    placeholder="Address Line1"
                    name="line1"
                    onChange={(event) =>
                      setAddress({ ...address, line1: event.target.value })
                    }
                    required
                  />

                  <input
                    type="text"
                    placeholder="Address Line2"
                    name="line2"
                    onChange={(event) =>
                      setAddress({ ...address, line2: event.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={(event) =>
                      setAddress({ ...address, city: event.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    onChange={(event) =>
                      setAddress({ ...address, state: event.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={(event) =>
                      setAddress({ ...address, country: event.target.value })
                    }
                    required
                  />

                  <input
                    type="text"
                    placeholder="Postal Code"
                    name="postalCode"
                    onChange={(event) =>
                      setAddress({ ...address, postalCode: event.target.value })
                    }
                  />
                </label>
              </div>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </Modal>
        </div>
      );
    }
  }
}

export default ListAProject;
