import React from 'react'
import { Link } from 'react-router-dom'
import LearnProtect from './LearnProtect'

export default function Home() {
    let userName = localStorage.getItem('name')
    return (
        <>
            <div>
            {userName}
        </div>
            <div className="home-container mt-3 vh-100" >
                <div className="row flex-grow-1" >
                    <div className="fw-bold text-center fs-1 text-logo-gradient typed-out" style={{ marginTop: "130px", fontSize: "45px" }} to="/Home">SafeZone</div>
                </div>
                <div className="row mt-3 flex-grow-1">
                    <div className="fw-bold text-center" style={{ fontSize: "70px" }} to="/Home">Real Alerts and Response</div>
                </div>
                <div className="row mt-3 flex-grow-1">
                    <div className="fw-bold text-center" style={{ fontSize: "35px" }} to="/Home">Know Weather Forecasts and Disaster Alerts</div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <Link className="border-0 w-25 text-center fw-bold shadow getinfobtn" style={{ fontSize: "20px" }} to="/Login">Get info by Your Location</Link>
                </div>
                <div className="row text-center" style={{ marginLeft: "400px", marginTop: "40px", marginRight: "400px" }} >
                    <div className="col-4" style={{ borderRight: "2px solid #000" }}>
                        <div className="fs-5" to="/Home">Weather Alerts</div>
                    </div>
                    <div className="col-4" style={{ borderRight: "2px solid #000" }}>
                        <div className="fs-5" to="/Home">Forecasts</div>
                    </div>
                    <div className="col-4">
                        <div className="fs-5" to="/Home">Community</div>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <div className="home-container">
                        <div className="fw-bold pt-5 text-center fs-1 text-logo-gradient" style={{ marginTop: "10px", fontSize: "45px" }}><h2>Emergency Sources</h2></div>
                        <div className="row">
                            <div className="col-12 col-md-6 text-center mb-2">
                                <a href="tel:108">
                                    <button id="disaster-btn" className="btn btn-lg w-100 py-3">
                                        Disaster Management Services - 108
                                    </button>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 text-center mb-2">
                                <a href="tel:9540161344">
                                    <button id="air-ambulance-btn" className="btn btn-lg w-100 py-3">
                                        Air Ambulance - 9540161344
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="row mb-3 d-block justify-content-center">
                            <a href="tel:01126701728">
                                <button id="ndma-btn" className="btn btn-lg w-100 py-3">
                                    Disaster Management N.D.M.A - 011-26701728-1078
                                </button>
                            </a>
                        </div>
                        <div className="row mb-3 d-block justify-content-center">
                            <a href="tel:01124363260">
                                <button id="ndrf-btn" className="btn btn-lg w-100 py-3">
                                    EARTHQUAKE / FLOOD / DISASTER N.D.R.F - 011-24363260
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="home-container" style={{ height: "500px" }}>
                        <div className="row twitter-container">
                            <div className="fw-bold pt-4 text-center" style={{ fontSize: "30px" }}>Twitter</div>
                            <div className="fw-bold pt-2 pb-3 text-center" style={{ fontSize: "15px" }}>INDIAN METROPLITIAN DEPARTMENT</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <LearnProtect />
            </div>
        </>
    )
}
