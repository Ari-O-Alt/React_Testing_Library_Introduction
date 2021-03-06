import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  /*  useEffect(async () => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=5");
    console.log(data);
    setFollowers(data.results);
  }; */

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const response = await axios.get("https://randomuser.me/api/?results=5");
      if (mounted) {
        setFollowers(response.data.results);
      }
    };

    fetchData();

    return () => (mounted = false);
  }, []);

  if (!followers) {
    return null;
  }

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div className="follower-item" key={index}>
            <img src={follower.picture.large} />
            <div
              className="followers-details"
              data-testid={`follower-item-${index}`}
            >
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
