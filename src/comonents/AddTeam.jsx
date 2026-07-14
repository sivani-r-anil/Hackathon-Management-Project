import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddTeam = () => {

    const [input, changeInput] = useState(
        {
            teamId: "",
            teamName: "",
            leaderName: "",
            leaderEmail: "",
            leaderPhn: "",
            clgName: "",
            membersNo: "",
            title: "",
            statementTrack: "",
            technologyStack: "",
            mentorName: "",
            date: "",
            table: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }


    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-team", input).then(

            (response) => {
                console.log(response.data)
                alert("Team added successfully")
            }

        ).catch(

            (error) => {
                console.log(error.response)
                alert("Failed to add team")
            }
        )
    }

    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">
                            <h2 style={{ color: "#6A1B9A", textAlign: "center", fontFamily: "Poppins" }}>
                                💻 ADD TEAMS</h2>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Team Id</label>
                                    <input type="text" className="form-control" name="teamId" value={input.teamId} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Team Name</label>
                                    <input type="text" className="form-control" name="teamName" value={input.teamName} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Team Leader Name</label>
                                    <input type="text" className="form-control" name="leaderName" value={input.leaderName} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Leader Email</label>
                                    <input type="email" className="form-control" name="leaderEmail" value={input.leaderEmail} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Leader Phone</label>
                                    <input type="tel" className="form-control" name="leaderPhn" value={input.leaderPhn} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">College Name</label>
                                    <input type="text" className="form-control" name="clgName" value={input.clgName} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Number of Members</label>
                                    <input type="number" className="form-control" name="membersNo" value={input.membersNo} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Project Title</label>
                                    <input type="text" className="form-control" name="title" value={input.title} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Problem Statement Track</label>
                                    <input type="text" className="form-control" name="statementTrack" value={input.statementTrack} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label className="form-label">Technology Stack</label>
                                    <textarea cols="30" rows="3" className="form-control" name="technologyStack" value={input.technologyStack} onChange={inputHandler}></textarea>

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Mentor Name</label>
                                    <input type="text" className="form-control" name="mentorName" value={input.mentorName} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Registration Date</label>
                                    <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Table/Station Number</label>
                                    <input type="text" className="form-control" name="table" value={input.table} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-primary" onClick={readValue}>ADD</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddTeam