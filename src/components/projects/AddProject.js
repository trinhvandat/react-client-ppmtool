import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { createProject } from "../../actions/projectActions";

class AddProject extends Component {

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
        };
        this.props.createProject(newProject);
    }

    render() {
        return (
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create new Project form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " placeholder="Project Name"
                                name="projectName" value={this.state.projectName}
                                onChange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                                name="projectIdentifier" value={this.state.projectIdentifier}
                                onChange={this.onchange}/>
                            </div>
    
    
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Project Description"
                                name="description" value={this.state.description}
                                onChange={this.onchange}></textarea>
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="startDate" 
                                name="startDate" value={this.state.startDate}
                                onChange={this.onchange}/>
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="endDate"
                                name="endDate" value={this.state.endDate}
                                onChange={this.onchange}/>
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );   
    }
}

AddProject.propTypes = {
    createProject: PropTypes.func.isRequired
}

export default connect(null, { createProject }) (AddProject);