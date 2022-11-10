import React from "react";
import cars from "../innodeed-mycars-coding-test/public/api/cars.json";
// import "./Cars.css";
// import {} from "../innodeed-mycars-coding-test/docs/"

const Cars = () => {
  return (
    <>
      <div className="elements">
        {cars &&
          cars.map((ele) => {
            return (
              <div className="container">
                <div class="card">
                  <h3 className="body-type">{ele.bodyType}</h3>
                  <h3 className="modelName">{ele.modelName}</h3>
                  <h3 className="modelType">{ele.modelType}</h3>
                  <img src={ele.imageUrl} alt={ele.id} className="image" />
                  <div class="containers">
                    <h4>
                      <b className="learn">
                        LEARN{" "}
                        <svg
                          viewBox="0 0 11 11"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg"
                        >
                          <path
                            d="M2 1.5l4 4-4 4"
                            fill="none"
                            stroke="#1c6bba"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </b>
                      <b className="learn">
                        {" "}
                        SHOP{" "}
                        <svg
                          viewBox="0 0 11 11"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svg"
                        >
                          <path
                            d="M2 1.5l4 4-4 4"
                            fill="none"
                            stroke="#1c6bba"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </b>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Cars;
