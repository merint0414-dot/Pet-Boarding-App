import axios from "axios"
import React, { useState } from "react"

const AddPet = () => {

    const [input, changeInput] = useState({

        bookingId: "",
        petName: "",
        petType: "",
        breed: "",
        age: "",
        weight: "",
        vaccinationStatus: "",
        ownerName: "",
        ownerPhone: "",
        ownerEmail: "",
        checkInDate: "",
        checkOutDate: "",
        kennelNumber: ""

    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const submitData = () => {

        axios.post("http://localhost:3000/add-pet", input)

            .then((response) => {

                setError(false)
                setMessage("Pet Added Successfully")

                changeInput({

                    bookingId: "",
                    petName: "",
                    petType: "",
                    breed: "",
                    age: "",
                    weight: "",
                    vaccinationStatus: "",
                    ownerName: "",
                    ownerPhone: "",
                    ownerEmail: "",
                    checkInDate: "",
                    checkOutDate: "",
                    kennelNumber: ""

                })

            })

            .catch(() => {

                setError(true)
                setMessage("Something went wrong")

            })

    }

    return (

        <div>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">

                        <h3>Add Pet</h3>

                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Booking ID</label>
                                <input type="text" 
                                className="form-control" 
                                name="bookingId" 
                                value={input.bookingId} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Pet Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="petName" 
                                value={input.petName} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Pet Type</label>
                                <input type="text" 
                                className="form-control" 
                                name="petType" 
                                value={input.petType} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Breed</label>
                                <input type="text" 
                                className="form-control" 
                                name="breed" 
                                value={input.breed} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Age</label>
                                <input type="text" 
                                className="form-control" 
                                name="age" 
                                value={input.age} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Weight (kg)</label>
                                <input type="text" 
                                className="form-control" 
                                name="weight" 
                                value={input.weight} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Vaccination Status</label>
                                <input type="text" 
                                className="form-control" 
                                name="vaccinationStatus" 
                                value={input.vaccinationStatus} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="ownerName" 
                                value={input.ownerName} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Phone</label>
                                <input type="text" 
                                className="form-control" 
                                name="ownerPhone" 
                                value={input.ownerPhone} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Email</label>
                                <input type="email" 
                                className="form-control" 
                                name="ownerEmail" 
                                value={input.ownerEmail} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Check In Date</label>
                                <input type="date" 
                                className="form-control" 
                                name="checkInDate" 
                                value={input.checkInDate} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Check Out Date</label>
                                <input type="date" 
                                className="form-control" 
                                name="checkOutDate" 
                                value={input.checkOutDate} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Kennel Number</label>
                                <input type="text" 
                                className="form-control" 
                                name="kennelNumber" 
                                value={input.kennelNumber} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-12 text-center">

                                <button className="btn btn-primary" onClick={submitData}>

                                    Add Pet

                                </button>

                            </div>

                            <div className="col-12 text-center">

                                <h5 className={error ? "text-danger" : "text-success"}>

                                    {message}

                                </h5>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AddPet