import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Technology = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-blog-api-w9jg.onrender.com/Api/Technology")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="Latest">Technology Article </h1>
      <div className="Technology">
        <div className="Adver">
          <div className="Articlelist">
            {data
              .filter((item) => item.id >= 30 && item.id <= 38)
              .map((item, index) => (
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
                        <p>{item.text.slice(0, 80)}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
          </div>
        </div>
        <div className="Advlatest">
          <div>
            <h1 className="Latest">Top Post</h1>
            <div>
              {data
                .filter((item) => item.id === 41)
                .map((item, index) => (
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
                          <h1>{index + 1}</h1>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                ))}
            </div>
            {data
              .filter((item) => item.id <= 40 && item.id >= 33)
              .map((item, index) => (
                <div key={index} className="toppostdiv">
                  <NavLink to={`/Navigate/${item.id}`}>
                    <div className="Article">
                      <img
                        className="underimg"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="Articletext">
                        <h2>{item.name}</h2>
                        <p>{item.text.slice(0, 80)}</p>
                      </div>
                      <div className="number">
                        <h1>{index + 2}</h1>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            <div className="Advertisement">
              <h1>{"Please for Advertisement"}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
