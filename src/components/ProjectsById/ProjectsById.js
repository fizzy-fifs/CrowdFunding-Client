import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import MapContainer from "../Map/MapContainer";
import ProgressBar from "../ProgressBar/ProgressBar";

function ProjectsById(props) {
  const projects = JSON.parse(localStorage.getItem("projects")) || "";
  const cookie = new Cookies();
  const user = cookie.get("signedInUser") || "";
  const [amount, setAmount] = useState("");

  const donate = (projectId, amount, userId) => {
    if (user === "") {
      return (window.location.href = "/signin");
    }
    window.location.href = `https://fundedlocal-server.herokuapp.com/api/v1.0/payments/${projectId}&${amount}&${userId}`;
  };

  return (
    <div className="max-w-[1200px] m-auto bg-green-50">
      {projects
        .filter((project) => project.id === props.projectId)
        .map((filteredProject) => (
          <div>
            <div
              id="default-carousel"
              className="relative"
              data-carousel={
                filteredProject.images.length === 1 ? "static" : "slide"
              }
            >
              <div className="overflow-hidden relative h-[70vh]">
                {[
                  ...filteredProject.images,
                  ...filteredProject.images,
                  ...filteredProject.images,
                ].map((image) => (
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item
                  >
                    <img
                      src={image}
                      className="block object-contain bg-black h-full absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt="..."
                    />
                  </div>
                ))}
              </div>
              <div className="flex absolute w-full bg-[#fffb] backdrop-blur-sm bottom-0 z-50 flex-col items-start px-4 py-2">
                <h1 className="selectedProjectTitle">
                  {filteredProject.title}
                </h1>

                <h6 className="bg-green-500 px-2 py-1  text-white font-medium">
                  {filteredProject.category}
                </h6>
                {/* <h5 className='eachProjectAmountRaised'>Raised: ${project.amountRaised}</h5> */}
                <div>
                  Goal:{" "}
                  <span className="text-green-500 font-medium text-lg">
                    ${filteredProject.goal}
                  </span>
                </div>
                <div className="text-left overflow-hidden">
                  Percentage Raised:{" "}
                  <span className="text-green-500 font-medium text-lg">
                  {(filteredProject.amountRaised / filteredProject.goal) * 100}%
                    <ProgressBar
                      width={300}
                      percent={filteredProject.amountRaised / filteredProject.goal}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 py-7 text-left">
              <h4 className="text-green-500">Description</h4>
              <p>{filteredProject.description}</p>
            </div>

            <MapContainer
              lat={filteredProject.latitude}
              lng={filteredProject.longitude}
            />
            <div className="p-4 bg-white w-full">
              <div>How much would you like to donate?</div>
              <div className="flex flex-row justify-center mt-3">
                <input
                  type="number"
                  id="amount"
                  placeholder="$0.00"
                  required
                  className="form-input w-[200px]"
                  onChange={(e) => setAmount(e.target.value)}
                />

                <button
                  className="form-btn w-[100px] ml-5 h-fit"
                  onClick={() => donate(filteredProject.id, amount, user.id)}
                >
                  Donate!
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProjectsById;
