import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewTeams = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-teams").then(

            (response) => {
                changeData(response.data)
            }

        ).catch(

            (error) => {
                console.log(error)
            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">
                            <h2 style={{ color: "#6A1B9A", textAlign: "center", fontFamily: "Poppins" }}>
                                💻 VIEW TEAMS</h2>

                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Team ID</th>
                                        <th scope="col">Team Name</th>
                                        <th scope="col">Team Leader Name</th>
                                        <th scope="col">Leader Email</th>
                                        <th scope="col">Leader Phone</th>
                                        <th scope="col">College Name</th>
                                        <th scope="col">Number of Members</th>
                                        <th scope="col">Project Title</th>
                                        <th scope="col">Problem Statement Track</th>
                                        <th scope="col">Technology Stack</th>
                                        <th scope="col">Mentor Name</th>
                                        <th scope="col">Registration Date</th>
                                        <th scope="col">Table/Station Number</th>



                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map(

                                        (data, index) => {
                                            return (
                                                <tr>
                                                    <td>{data.teamId}</td>
                                                    <td>{data.teamName}</td>
                                                    <td>{data.leaderName}</td>
                                                    <td>{data.leaderEmail}</td>
                                                    <td>{data.leaderPhn}</td>
                                                    <td>{data.clgName}</td>
                                                    <td>{data.membersNo}</td>
                                                    <td>{data.title}</td>
                                                    <td>{data.statementTrack}</td>
                                                    <td>{data.technologyStack}</td>
                                                    <td>{data.mentorName}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.table}</td>


                                                </tr>
                                            )
                                        }

                                    )}

                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewTeams