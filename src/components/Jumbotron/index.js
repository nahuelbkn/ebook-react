import React from "react";

export default class Jumbotron extends React.Component
{
    render()
    { 
        const { title, author } = this.props;
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{title}</h1>
                    <h2 className="lead">{author}</h2>
                </div>
            </div>
        )
    }
}