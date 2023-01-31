import React from "react";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/groups.png";
import Market from "../../assets/marketplace.png";
import Watch from "../../assets/watch.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/videos.png";
import Messages from "../../assets/messages.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import Fund from "../../assets/fundraiser.png";
import "./leftBar.scss";
const LeftBar = () => {
  return (
    <aside className="aside-container">
      <section className="menu">
        <ul className="menu-section">
          <li className="menu-section__user">
            <img
              src="https://images.pexels.com/photos/7884720/pexels-photo-7884720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <span>John Doe</span>
          </li>
          <li className="menu-section__item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </li>
          <li className="menu-section__item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </li>
          <li className="menu-section__item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </li>
          <li className="menu-section__item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </li>
          <li className="menu-section__item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </li>
        </ul>
      </section>
      <hr />
      <section className="shortcuts">
        <header className="shortcuts-section__header">Your shortcuts</header>
        <ul className="shortcuts-section">
          <li className="shortcuts-section__item">
            <img src={Events} alt="" />
            <span>Events</span>
          </li>
          <li className="shortcuts-section__item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </li>
          <li className="shortcuts-section__item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </li>
          <li className="shortcuts-section__item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </li>
          <li className="shortcuts-section__item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </li>
        </ul>
      </section>
      <hr />
      <section className="others">
        <header className="others-section__header">Others</header>
        <ul className="others-section">
          <li className="others-section__item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </li>
          <li className="others-section__item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </li>
          <li className="others-section__item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </li>
        </ul>
      </section>
      <hr />
    </aside>
  );
};

export default LeftBar;
