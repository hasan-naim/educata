import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function CatagorieSec() {
    return (
        <>
            <section className="py-5 catagorie-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/web-development"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <CgWebsite />
                                </div>
                                <div className="text">
                                    <span>Web Development</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/web-development"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <CgWebsite />
                                </div>
                                <div className="text">
                                    <span>Web Development</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/web-development"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <CgWebsite />
                                </div>
                                <div className="text">
                                    <span>Web Development</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/web-development"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <CgWebsite />
                                </div>
                                <div className="text">
                                    <span>Web Development</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 pb-3">
                            <Link
                                to="/courses/web-development"
                                className="card-catagories d-flex flex-column p-3 d-block"
                            >
                                <div className="icon">
                                    <CgWebsite />
                                </div>
                                <div className="text">
                                    <span>Web Development</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CatagorieSec;
