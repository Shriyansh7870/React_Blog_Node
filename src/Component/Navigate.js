import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const { id } = useParams();

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get("https://react-blog-api-w9jg.onrender.com/Api/Navigate")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const itemId = parseInt(id);
      const selectedItem = data.find((item) => item.id === itemId);
      setSelectedItem(selectedItem);
      if (selectedItem) {
        const categorynew = selectedItem.category;
        const filteredRelatedItems = data
          .filter(
            (item) =>
              item.category === categorynew &&
              (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)
          )
          .slice(1, 4);
        setRelatedItems(filteredRelatedItems);
      }
    }
  }, [data]);

  return (
    <div>
      <div className="ParentTop">
        {selectedItem && (
          <div className="leftDetail">
            <div className="Like">
              <h2>
                <i className="fa-solid fa-thumbs-up"></i>
                LIKE...
              </h2>
              <h2>
                <i className="fa-solid fa-share-nodes"></i>SHARE...
              </h2>
            </div>
          </div>
        )}
        <div className="detail">
          {selectedItem && (
            <div>
              <h1>{selectedItem.name}</h1>
              <h1>{selectedItem.title}</h1>
              <div className="Profile">
                <div className="Prof">
                  <h4>
                    <i className="fa-solid fa-user">
                      <span className="small">Shriyansh kumar</span>
                    </i>
                  </h4>
                </div>
                <div className="icons">
                  <h2>
                    <a
                      href="https://www.instagram.com/shriyansh7870/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                  </h2>
                  <h2>
                    <a
                      href="https://github.com/Shriyansh7870"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>{" "}
                    </a>
                  </h2>
                  <h2>
                    <a
                      href="https://www.linkedin.com/in/shri7870/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </h2>
                </div>
              </div>
              <img
                className="NavigateImg"
                src={selectedItem.image}
                alt="not found"
                height="420px"
                width="550px"
              />
              <br />
              <p className="navtext">{selectedItem.text}</p>
              <p>{selectedItem.content}</p>
            </div>
          )}
        </div>
        <div className="rightDetails"></div>
      </div>
      <div className="LatestDiv navigateimg2">
        {relatedItems.map((item) => (
          <div key={item.id} className="HomeLatest">
            <NavLink to={`/Navigate/${item.id}`}>
              <img className="latestimage" src={item.image} alt="Not Found" />
              <div className="text">
                <h2>{item.title}</h2>
                <h2>{item.name}</h2>
                <p>{item.text.slice(0, 120)}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="back">
        <button className="backbutton" onClick={() => navi(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Navigate;
