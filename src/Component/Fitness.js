import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Fitness = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-blog-api-w9jg.onrender.com/Api/Fitness")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="Latest">Fitness Article </h1>
      <div className="Fitness">
        <div className="Adver">
          <div className="Articlelist">
            {data
              .filter((item) => item.id >= 43 && item.id <= 51)
              .map((item, index) => {
                return (
                  <div key={index}>
                    <NavLink to={`/Navigate/${item.id}`}>
                      <div className="Article Article2Respo">
                        <img
                          className="FitnessimageAll"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="text  textFitness">
                          <h2>{item.title}</h2>
                          <p>{item.text.slice(0, 80)}</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="Advlatest">
          <div>
            <h1 className="Latest">Top Post</h1>
            <div>
              {data
                .filter((item) => item.id >= 51 && item.id <= 51)
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <NavLink to={`/Navigate/${item.id}`}>
                        <div className="Article AllOne ">
                          <img
                            className="singleImageForAll"
                            src={item.image}
                            alt="Not Found"
                          />
                          <div className="Articletext Allone1">
                            <h2>{item.text.slice(0, 30)}</h2>
                            <h1>{index + 1}</h1>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
            {data
              .filter((item) => item.id >= 42 && item.id <= 50)
              .map((item, index) => {
                return (
                  <div key={index} className="toppostdiv">
                    <NavLink to={`/Navigate/${item.id}`}>
                      <div className="Article Article2Respo">
                        <img
                          className="FitnessImgRes"
                          src={item.image}
                          alt="Not Found"
                          height="100px"
                          width="200px"
                        />
                        <div className=" Allone1">
                          <h2>{item.title}</h2>
                          <h3>{item.text.slice(0, 60)}</h3>
                        </div>
                        <div className="number">
                          <h1>{index + 2}</h1>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            <div className=" Advertisement Advertisementnew">
              <h1>{"Please  for Advertisement"}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fitness;
