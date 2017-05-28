/**
 * Created by jeewendrakumar on 5/28/2017.
 */
import React from "react";

export default class Banner extends React.Component {
    render() {
        return (
            <div className="banner" style={{border: "1px solid red", textAlign: "center", color: "red"}}>
                <h5 className="text-center">Flat 20% off</h5>
            </div>
        );
    }
}