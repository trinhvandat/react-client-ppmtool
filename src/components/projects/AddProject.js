import React, { Component } from 'react'

export default class AddProject extends Component {

    constructor(){
        super()

        this.state = {
            projectName: "",
            projectIdentifier: "",
            description: "",
            startDate: "",
            endDate: ""
        };

        this.onchange = this.onchange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onchange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        console.log(newProject);
    }

    render() {
        return (
            <div class="project">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 m-auto">
                        <h5 class="display-4 text-center">Create new Project form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg " placeholder="Project Name"
                                name="projectName" value={this.state.projectName}
                                onChange={this.onchange}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg" placeholder="Unique Project ID"
                                name="projectIdentifier" value={this.state.projectIdentifier}
                                onChange={this.onchange}/>
                            </div>
    
    
                            <div class="form-group">
                                <textarea class="form-control form-control-lg" placeholder="Project Description"
                                name="description" value={this.state.description}
                                onChange={this.onchange}></textarea>
                            </div>
                            <h6>Start Date</h6>
                            <div class="form-group">
                                <input type="date" class="form-control form-control-lg" name="startDate" 
                                name="startDate" value={this.state.startDate}
                                onChange={this.onchange}/>
                            </div>
                            <h6>Estimated End Date</h6>
                            <div class="form-group">
                                <input type="date" class="form-control form-control-lg" name="endDate"
                                name="endDate" value={this.state.endDate}
                                onChange={this.onchange}/>
                            </div>
    
                            <input type="submit" class="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );   
    }
}