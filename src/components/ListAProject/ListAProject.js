import axios from "axios";
import { React, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import listAProjectApiCall from "../../apiCalls/listAProjectApiCall";
import RegisterBusiness from "../RegisterBusiness/RegisterBusiness";

function ListAProject() {
  const [modalState, setModalState] = useState(false);

  let user = JSON.parse(localStorage.getItem("signedInUser"));

  const getBusinessId = (business) => {
    return business._id;
  }

  {
    if (user.businesses == null) {
      return (
        <h1 className="NoBusiness">
          Please Register A Business First <RegisterBusiness />
        </h1>
      );
    } else {
      return (
        <div className="ListAProject">
          <button className="ListAProjectButton" onClick={setModalState(true)}>
            List A Project
          </button>

          <Modal
            className="ListAProjectModal"
            isOpen={modalState}
            onRequestClose={() => setModalState(false)}
          >
            <form onSubmit={listAProjectApiCall(event)}>
              <label>
                <input
                  type="text"
                  placeholder="Enter A Project Title"
                  name="projectTitle"
                />
              </label>
              <br />
              <label>
                <select name="category">
                  <option default>Please select a relevant category</option>

                  <option name="Arts">Arts</option>
                  <option name="ComicsAndIllustration">
                    Comics &amp; Illustration
                  </option>
                  <option name="DesignAndTech">Design &amp; Tech</option>
                  <option name="Film">Film</option>
                  <option name="FoodAndCraft">Food &amp; Craft</option>
                  <option name="Games">Games</option>
                  <option name="Music">Music</option>
                </select>
              </label>
              <br />
              <label>
                <textarea
                  name="description"
                  placeholder="Give a brief description of your project"
                  style={{ height: 150 }}
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
                />
              </label>
              <br />
              <label>End Date<br></br>
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
                  {user.businesses.forEach(business => { return (
                    <option onSelect={getBusinessId(business)} name="associatedBusiness">{business.name}</option>
                  )})}
                </select>
              </label>
            </form>
          </Modal>
        </div>
      );
    }
  }
}

export default ListAProject;
