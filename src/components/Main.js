import React from "react";
import "../styles/Main.css";
import { MdOutlineAddBox } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { MdRefresh } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { PiChats } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoTimeOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdCall, MdOutlineMail } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

import user from "../assets/user.png";

const Main = () => {
  return (
    <>
      <div className="section1">
        <p className="breadcrumb">
          Dashboard &nbsp; / &nbsp; Lead &nbsp; / &nbsp;
          <span style={{ color: "#171717", fontWeight: "600"}}>LE-010071</span>
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
          <div className="section4a">
            <div className="section4a1">
              <p className="contacted">
                <GoDotFill />
                <span>Contacted</span>
              </p>
              <p className="pending-action">
                <IoMdInformationCircleOutline size={18}/>
                <span>Pending Action</span>
              </p>
            </div>

            <div className="section4a2">
              <p>Mamta Naik</p>
              <div className="create-btns">
                <button className="create-btn" style={{ backgroundColor: "#EDFFF0", color: "#46B359" }}>
                  Create Account
                </button>
                <button className="create-btn" style={{ backgroundColor: "#FFF9E6", color: "#FDD24F" }}>
                  Create Contact
                </button>
              </div>
            </div>

            <div className="section4a3">
              <img src={user} alt="profile-img" />
              <span style={{ marginBottom: '20px' }}>Aniruddh Naidu</span>
            </div>

            <div className="section4a4">
              <div className="details-container">
                <p className="detail">Basic Details</p>
                <p className="detail">Account Details</p>
                <p className="detail">Lead Details</p>
                <p className="detail">Team</p>
                <p className="detail">Other Contacts</p>
              </div>
            </div>

            <div className="section4a5">
              <div className="other-contacts-header">
                <div className="other-contacts-column">
                  <label>Account</label>
                  <select className="dropdown">
                    <option>Select Option</option>
                  </select>
                </div>
                <div className="other-contacts-column">
                  <label>Contact</label>
                  <div className="contact-input">
                    <select className="dropdown">
                      <option>Select Option <span></span></option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="contact-list">
                <div className="contact-item">
                  <div>
                    <p className="contact-name">Pranab Biyani</p>
                    <p className="contact-designation">Associate Vp</p>
                  </div>
                  <p className="contact-role">Sales Head</p>
                </div>
                <div className="contact-item">
                  <div>
                    <p className="contact-name">Nayan Johal</p>
                    <p className="contact-designation">Associate Vp</p>
                  </div>
                  <p className="contact-role">Sales Head</p>
                </div>
              </div>
            </div>
          </div>



          <div className="section4b">

            <div className="section4b1">
              <div className="details-container">
                <p className="detail">Activity</p>
                <p className="detail">Actionables</p>
                <p className="detail">Tasks</p>
                <p className="detail">Note & File</p>
              </div>
            </div>

            <div class="section4b2">
              <div class="button">
                <span class="section4b-icon grey-bg"><FiPhoneCall /></span>
                <span class="label">Log a Call</span>
              </div>
              <div class="button active">
                <span class="section4b-icon pink-bg"><PiChats /></span>
                <span class="label">Email</span>
              </div>
              <div class="button">
                <span class="section4b-icon grey-bg"><HiOutlineLightBulb /></span>
                <span class="label">Event</span>
              </div>
            </div>

            <div className="section4b3">
              <div className="section4b3-row">
                <div className="section4b3-row-column">
                  <label>Subject</label>
                  <input className="dropdown" placeholder="Input Text" />
                </div>
                <div className="section4b3-row-column">
                  <label>Add People</label>
                  <input className="dropdown" placeholder="Input Text" />
                </div>
              </div>
              <div className="section4b3-row">
                <div className="section4b3-row-column">
                  <label>Due Date</label>
                  <input className="dropdown" />
                </div>
                <div className="section4b3-row-column">
                  <label>Due Time</label>
                  <input className="dropdown" />
                </div>
              </div>
              <div className="section4b3-row">
                <div className="section4b3-row-column" style={{ width: '93%' }}>
                  <label>Description</label>
                  <textarea className="dropdown" /><span></span>
                </div>
              </div>
            </div>

            <div className="add-team-member">
              <p><IoMdAdd size={25} /><span>Add Team Member</span></p>
              <button className="submit-btn">Submit</button>
            </div>

          </div>

          <div className="section4c">
            <div className="section4c1">
              <div className="details-container">
                <p className="stage-history">Stage History</p>
              </div>
            </div>

            <div className="timeline">
              <h3>August 2024</h3>
              <div className="timeline-item">
                <div className="timeline-date">28/08</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-type">Team</span>
                    <span className="timeline-time">| 09:00am</span>
                  </div>
                  <p>Created Jiya Gopal</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">28/08</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-type">Team</span>
                    <span className="timeline-time">| 10:00am</span>
                  </div>
                  <p>Assigned to Aniruddh Naidu</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">28/08</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-type">Event</span>
                    <span className="timeline-time">| 12:00pm</span>
                  </div>
                  <p>Arrange a Call</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">28/08</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-type">Lead Update</span>
                    <span className="timeline-time">| 04:00pm</span>
                  </div>
                  <p>Marked as Contacted</p>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div className="section4d">
        <div className="upcoming-container">
      <div className="upcoming-header">
        <h3>Upcoming & Overdue</h3>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="upcoming-cards">
        {/* Card 1 */}
        <div className="card">
          <div className="card-header">
            <FiPhoneCall className="card-icon" color="#42B055"/>
            <span>Arrange a Call</span>
          </div>
          <div className="card-body">
            <div className="time-info">
              <span>Start</span>
              <p><IoCalendarClearOutline /> 27/08/2024</p>
              <p><AiOutlineClockCircle /> 12:00pm</p>
            </div>
            <div className="time-info">
              <span>End</span>
              <p><IoCalendarClearOutline /> 27/08/2024</p>
              <p><AiOutlineClockCircle /> 01:00pm</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-header">
            <PiChats className="card-icon" color="#F88F15"/>
            <span>Follow Up Email</span>
          </div>
          <div className="card-body">
            <div className="time-info">
              <span>Start</span>
              <p><IoCalendarClearOutline /> 27/08/2024</p>
              <p><AiOutlineClockCircle /> 02:00pm</p>
            </div>
            <div className="time-info">
              <span>End</span>
              <p><IoCalendarClearOutline /> 27/08/2024</p>
              <p><AiOutlineClockCircle />03:00pm</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-header">
            <FiPhoneCall className="card-icon" color='#42B055'/>
            <span>Arrange a Call</span>
          </div>
          <div className="card-body">
            <div className="time-info">
              <span>Start</span>
              <p><IoCalendarClearOutline /> 28/08/2024</p>
              <p><AiOutlineClockCircle /> 10:00am</p>
            </div>
            <div className="time-info">
              <span>End</span>
              <p><IoCalendarClearOutline /> 28/08/2024</p>
              <p><AiOutlineClockCircle /> 10:30am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default Main;
