import React from 'react'
import '../styles/Section4d.css';
import { FiPhoneCall } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiChats } from "react-icons/pi";

const Section4d = () => {
  return (
    <>
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
                      <FiPhoneCall className="card-icon" color="#42B055" />
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
                      <PiChats className="card-icon" color="#F88F15" />
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
                      <FiPhoneCall className="card-icon" color='#42B055' />
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
    </>
  )
}

export default Section4d