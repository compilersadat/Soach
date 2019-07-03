import React from "react";
import { MDBContainer, MDBIframe,MDBCol } from "mdbreact";

const IframePage = () => {
    return (
        <MDBCol md="12 mt-4 pt-5 px-0 mx-0" className="text-center" >
            <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg" />
        </MDBCol>
    );
}

export default IframePage;
