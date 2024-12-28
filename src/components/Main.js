import React from "react";
import "../styles/Main.css";
import { MdOutlineAddBox } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { MdRefresh } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import Section4a from "./Section4a";
import Section4b from "./Section4b";
import Section4c from "./Section4c";
import Section4d from "./Section4d";

const Main = () => {
  return (
    <>
      <div className="section1">
        <p className="breadcrumb">
          Dashboard &nbsp; / &nbsp; Lead &nbsp; / &nbsp;
          <span style={{ color: "#171717", fontWeight: "600" }}>LE-010071</span>
        </p>

        <div className="section2">
          <h1>LE-010071</h1>
          <div className="section2-icons">
            <MdOutlineAddBox className="section2-icon" />
            <BsPersonPlus className="section2-icon" />
            <TbListDetails className="section2-icon" />
            <MdRefresh className="section2-icon" />
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="status-container">
          <p className="status-box" style={{ backgroundColor: "#FFE9D2", color: "#F88F14" }}>
            New
          </p>
          <p className="status-box">Contacted</p>
          <p className="status-box">Nurturing</p>
          <p className="status-box">Qualified</p>
          <p className="status-box">Unqualified</p>
        </div>
        <div className="section3-btn">
          <button className="mark-btn">
            <IoCheckmarkSharp />
            <span>Mark as Converted</span>
          </button>
        </div>
      </div>

      <div className="main-container">
        <div className="section4">
          <Section4a />
          <Section4b />
          <Section4c />
        </div>
        <Section4d />





      </div>
    </>
  );
};

export default Main;
