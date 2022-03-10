import React from "react";
const Header=()=>{
    return (
        <>
            <header>
                <section className="container main-hero-container">
                <div className="row">
                <div classname="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
                    <h1 className="display-2">
                        Online payment Made<br/>Easy for you.
                    </h1>
                    <p className="main-hero-para">Lorem ipsum dolor sit amet, consectetur adip</p>
                    <h3>Get early access for you</h3>
                    <div classname="input-group mt-3">
                    <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                  <div className="input-group-button">Get it now</div>
                    </div>
                </div>
                </div>
                </section>
            </header>
        </>
    );
};
export default Header;