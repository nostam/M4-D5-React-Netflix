import React from 'react';
import Video from "../Video/soi.mp4"

function Videoo() {
    return (
        <>
            <div style={{ position: "absolute", top: 0 + "vh", width: 100 + "vw", height: 95 + "vh", overflow: "hidden" }}>
                <video id="trailer" width="100%" height="auto" style={{ objectFit: "cover" }} autoPlay muted className="d-flex">
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
        </>
    );
}

export default Videoo;