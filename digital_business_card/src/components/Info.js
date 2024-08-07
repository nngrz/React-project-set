import React from "react";

export default function Info() {
    return (
        <div className="info--container">
            <img src="../images/profile.jpg" className="info--image" />
            <h1 className="info--name">Ningrui Zhang</h1>
            <p className="info--role"> Frontend Developer</p>
            <p className="info--website">nngrz</p>
            <div className="info--buttons">
                <button className="btn--email"><i className="fa fa-envelope"></i> Email</button>
                <button className="btn--linkedin"><i className="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i>LinkedIn</button>
            </div>
        </div>
    )
}
