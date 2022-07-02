import React from 'react';
import CsslImg from '../assets/courses/css.jpg';
import HtmlImg from '../assets/courses/html.jpg';
import Card from './Card';

function CourseSec() {
    return (
        <div className="courses-section pt-5 pb-5">
            <div className="container">
                <h1 className="text-center hero-title mb-5">Courses</h1>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-flex pb-3 justify-content-center">
                        <Card
                            cardTitle="HTML Crash Course"
                            image={HtmlImg}
                            desc="In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners."
                            path="/courses/html-crash"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-flex pb-3  justify-content-center">
                        <Card
                            cardTitle="Css Crash Course"
                            image={CsslImg}
                            desc="In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners."
                            path="/courses/css-crash"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-flex pb-3 justify-content-center">
                        <Card
                            cardTitle="HTML Crash Course"
                            image={HtmlImg}
                            desc="In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners."
                            path="/courses/html-crash"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-flex pb-3 justify-content-center">
                        <Card
                            cardTitle="HTML Crash Course"
                            image={HtmlImg}
                            desc="In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners."
                            path="/courses/html-crash"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseSec;
