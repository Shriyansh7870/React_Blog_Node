import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-blog-api-w9jg.onrender.com/Api/Home")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Container">
      <div className="img">
        <div className="bigimg">
          <img
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?ssl=1&quality=80&w=f"
            alt="not found"
          />
        </div>
        <div className="smallimg">
          <img
            src="https://th-i.thgim.com/public/incoming/9nydeq/article67283889.ece/alternates/FREE_1200/20230907010L.jpg"
            alt="not found"
            height="200px"
            width="450px"
          />
          <img
            src="https://pbs.twimg.com/media/FgDsro7UUAAvTID?format=jpg&name=900x900"
            alt="not found"
            height="200px"
            width="550px"
          />
        </div>
      </div>

      <h1 className="Latest">The Latest</h1>
      <div className="LatestDiv">
        {data
          .filter((item) => item.id >= 2 && item.id <= 4)
          .map((item, index) => {
            return (
              <div key={index} className="HomeLatest">
                <NavLink to={`/Navigate/${item.id}`}>
                  <img
                    className="latestimage"
                    src={item.image}
                    alt="Not Found"
                  />
                  <div className="text4">
                    <h2>{item.name}</h2>
                    <p>{item.text.slice(0, 80)}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
      </div>
      <h1 className="NewLastest">The Latest Article</h1>
      <div className="Adver">
        <div className="Articlelist ">
          {data
            .filter((item) => item.id >= 12 && item.id <= 18)
            .map((item, index) => {
              return (
                <div key={index}>
                  <NavLink to={`/Navigate/${item.id}`}>
                    <div className="Article  NewResponsiveArticle">
                      <img
                        className="Latestimage"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="ArticelResponsivetext">
                        <h1>{item.name.slice(0, 20)}..</h1>
                        <p>{item.text.slice(0, 140)}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          <img
            className="divinner"
            src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?ssl=1&quality=80&w=f"
            alt="not found"
          />
        </div>
        <div className="Advlatest">
          <div>
            <h1 className="Latest">Top Post</h1>
            {data
              .filter((item) => item.id >= 25 && item.id <= 30)
              .map((item, index) => {
                return (
                  <div key={index}>
                    <NavLink to={`/Navigate/${item.id}`}>
                      <div className="Article">
                        <img
                          className="Latestimage2"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="text2">
                          <h3>{item.name.slice(0, 20)}..</h3>
                          <p>{item.text.slice(0, 140)}..</p>
                        </div>

                        <div className="number">
                          <h1>{index + 1}</h1>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
          </div>
          <div className="Advertisement">
            <h1>{"Please for Advertisement"}</h1>
          </div>
        </div>
      </div>

      <h1 className="Latest">Latest Stories</h1>
      <div className="LatestDiv">
        {data
          .filter((item) => item.id % 9 === 0 && item.id <= 35)
          .map((item, index) => {
            return (
              <div key={index} className="HomeLatest">
                <NavLink to={`/Navigate/${item.id}`}>
                  <img
                    className=" downImage"
                    src={item.image}
                    alt="Not Found"
                  />
                  <div className="text">
                    <h2>{item.name.slice(0, 14)}..</h2>
                    <p>{item.text.slice(0, 105)}..</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
