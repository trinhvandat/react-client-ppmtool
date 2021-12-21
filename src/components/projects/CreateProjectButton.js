import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/addProject" className="btn btn-primary btn-info">Create new project</Link>
        </React.Fragment>
    );
}  

export default CreateProjectButton;