import React from 'react'
import '../styles/Section4a.css';
import { GoDotFill } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import user from "../assets/user.png";

const Section4a = () => {
    return (
        <>
            <div className="section4a">
                <div className="section4a1">
                    <p className="contacted">
                        <GoDotFill />
                        <span>Contacted</span>
                    </p>
                    <p className="pending-action">
                        <IoMdInformationCircleOutline size={18} />
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
        </>
    )
}

export default Section4a