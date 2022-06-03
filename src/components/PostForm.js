import React, { useState } from 'react'
import Axios from 'axios'

const PostForm = () => {
    const url = "https://localhost:8001/v1jobs/job"


    const [data, setData] = useState({
        jobtitle: "",
        location: "",
        experiencemin: "",
        experiencemax: "",
        jobDescription: "",
        category: "",
        funcArea: "",
        minYear: "",
        maxYear: ""
    })

    function submit(e) {
        e.preventDefault();
        //to post data on api
        Axios.post(url, {
            jobtitle: data.jobtitle,
            location: data.location,
            experiencemin: data.experiencemin,
            experiencemax: data.experiencemax,
            jobDescription: data.jobDescription,
            category: data.category,
            funcArea: data.funcArea,
            minYear: data.minYear,
            maxYear: data.maxYear

        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div className='container'>
            <div className='container m-3'>
                <h3>Basic Details</h3>
                <form onSubmit={(e) => submit(e)} class="needs-validation" novalidate >
                    <div class="col-md-6 mb-3">
                        <label for="validationTooltip01">Job Title*</label>
                        <input type="text" onChange={(e) => handle(e)} class="form-control" id="jobtitle" value={data.jobtitle} placeholder="Write a title that appropriately describes this job" required />
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationTooltip02">Location</label>
                        <input type="text" onChange={(e) => handle(e)} class="form-control" id="location" value={data.location} placeholder="Add location" required />
                        <div class="valid-tooltip">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="row">
                            <label for="validationTooltipUsername">Years of Experience</label>
                            <div className='col-md-4'>
                                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Min</label>
                                <select onChange={(e) => handle(e)} class="custom-select my-1 mr-sm-2" id="experiencemin" value={data.experiencemin}>
                                    <option selected>Select min</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Max</label>
                                <select onChange={(e) => handle(e)} class="custom-select my-1 mr-sm-2" id="experiencemax" value={data.experiencemax}>
                                    <option selected>Select max</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div class="col-md-6 mb-3">
                                <label for="exampleFormControlTextarea1">Job Description</label>
                                <textarea type="text" onChange={(e) => handle(e)} class="form-control" id="jobDescription" rows="3" value={data.jobDescription} placeholder="Describe the role" required />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className='container m-3'>
                <h3>Targeting</h3>
                <form>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip03">Category</label>
                            <select onChange={(e) => handle(e)} class="custom-select my-1 mr-sm-2" id="category" value={data.category} >
                                <option selected>Select</option>
                                <option value="1">Technology</option>
                                <option value="2">Management</option>
                                <option value="3">People</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip03">Functional Area</label>
                            <select onChange={(e) => handle(e)} class="custom-select my-1 mr-sm-2" id="funcArea" value={data.funcArea}>
                                <option selected>Select</option>
                                <option value="1">Technology</option>
                                <option value="2">Management</option>
                                <option value="3">People</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row">
                            <label for="validationTooltipUsername">Graduating Year</label>
                            <div className='col-md-4'>
                                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Min</label>
                                <select onChange={(e) => handle(e)} class="custom-select my-1 mr-sm-2" id="minYear" value={data.minYear}>
                                    <option selected>Select batch</option>
                                    <option value="1">2020</option>
                                    <option value="2">2021</option>
                                    <option value="3">2022</option>
                                </select>
                            </div>
                            <div className='col-md-4'>
                                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Max</label>
                                <select onChange={(e) => handle(e)} class="custom-select my-1 mr-sm-2" id="maxYear" value={data.maxYear}>
                                    <option selected>Select batch</option>
                                    <option value="1">2022</option>
                                    <option value="2">2023</option>
                                    <option value="3">2024</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success" type="submit">Post Job</button>
                </form>
            </div>
        </div >
    )
}

export default PostForm