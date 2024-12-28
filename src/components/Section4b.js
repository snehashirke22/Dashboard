import React from 'react'
import '../styles/Section4b.css'
import { FiPhoneCall } from "react-icons/fi";
import { PiChats } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";

const Section4b = () => {
    return (
        <>
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
        </>
    )
}

export default Section4b