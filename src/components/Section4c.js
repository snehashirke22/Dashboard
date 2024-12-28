import React from 'react'
import '../styles/Section4c.css'

const Section4c = () => {
    return (
        <>

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
        </>
    )
}

export default Section4c