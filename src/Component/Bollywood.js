import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Bollywood = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://react-blog-api-w9jg.onrender.com/Api/Bollywood")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="Latest">Bollywood Article </h1>
      <div className="Bollywood">
        <div className="Adver ">
          <div className="Articlelist">
            {data
              .filter((item) => item.id >= 1 && item.id <= 10)
              .map((item, index) => {
                return (
                  <div key={index}>
                    <NavLink to={`/Navigate/${item.id}`}>
                      <div className="Article">
                        <img
                          className="FitnessimageAll"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="text">
                          <h2>{item.name}</h2>
                          <p>{item.text.slice(0, 80)}...</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
          <div className="Advlatest">
            <div>
              <h1 className="Latest">Top Post</h1>
              <div>
                {data
                  .filter((item) => item.id >= 2 && item.id <= 2)
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        <NavLink to={`/Navigate/${item.id}`}>
                          <div className="Article AllOne">
                            <img
                              className="singleImageForAll"
                              src={item.image}
                              alt="Not Found"
                            />
                            <div className="Articletext Allone1">
                              <h2>{item.text.slice(0, 60)}</h2>
                              {/* <h1>{index + 1}</h1> */}
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
              </div>
              {data
                .filter((item) => item.id >= 10 && item.id <= 16)
                .map((item, index) => {
                  return (
                    <div key={index} className="toppostdiv">
                      <NavLink to={`/Navigate/${item.id}`}>
                        <div className="Article Article2Respo">
                          <img
                            className="bollyimg"
                            src={item.image}
                            alt="Not Found"
                            height="130px"
                            width="200px"
                          />
                          <div className=" Allone1">
                            <h2>{item.name}</h2>
                            <p>{item.text.slice(0, 80)}</p>
                          </div>

                          <div className="number">
                            <h1>{index + 2}</h1>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              <div className="Advertisement">
                <h1>{"Please  for Advertisement"}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bollywood;
