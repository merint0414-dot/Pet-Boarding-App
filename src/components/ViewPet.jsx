import axios from "axios"
import React, { useEffect, useState } from "react"
import NavigationBar from "./NavigationBar"

const ViewPet = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-pet")

            .then((response) => {

                changeData(response.data)

            })

            .catch((error) => {

                console.log(error)

            })

    }

    useEffect(() => {

        fetchData()

    }, [])

    return (

        <div>
            <NavigationBar/>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">

                        <h3>View All Pets</h3>

                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped">

                                <thead className="table-dark">

                                    <tr>

                                        <th>Booking ID</th>
                                        <th>Pet Name</th>
                                        <th>Pet Type</th>
                                        <th>Breed</th>
                                        <th>Age</th>
                                        <th>Weight</th>
                                        <th>Vaccination</th>
                                        <th>Owner</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Check In</th>
                                        <th>Check Out</th>
                                        <th>Kennel No</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        data.map((value, index) => (

                                            <tr key={index}>

                                                <td>{value.bookingId}</td>
                                                <td>{value.petName}</td>
                                                <td>{value.petType}</td>
                                                <td>{value.breed}</td>
                                                <td>{value.age}</td>
                                                <td>{value.weight}</td>
                                                <td>{value.vaccinationStatus}</td>
                                                <td>{value.ownerName}</td>
                                                <td>{value.ownerPhone}</td>
                                                <td>{value.ownerEmail}</td>
                                                <td>{value.checkInDate}</td>
                                                <td>{value.checkOutDate}</td>
                                                <td>{value.kennelNumber}</td>

                                            </tr>

                                        ))

                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ViewPet