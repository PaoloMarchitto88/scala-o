import React from 'react';
import {useNavigate} from "react-router";
import {URL_HOME, URL_REGISTRATI} from "../utility/constants/urlConstants";

const Login = () => {
    const navigate = useNavigate()

    const toRegistrati = (e) => {
        e.preventDefault()
        navigate(URL_REGISTRATI)
    }

    return (
        <>
            <div className={'row justify-content-center mt-5'}>
                <div className={'col-lg-4 col-sm-4'}>
                    <div className={'card'} style={{borderRadius: '2rem'}}>
                        <div className={'row mt-4 text-center'}>
                            <h3>Benvenuto</h3>
                            <small className="text-muted">Effettua la login per accedere al portale</small>
                        </div>
                        <div className={'card-body'}>
                            <div className={'col-lg-12 col-sm-12'}>
                                <div className={'form-floating mb-3'}>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="name@example.com"/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className={'col-lg-12 col-sm-12'}>
                                <div className={'form-floating mb-3'}>
                                    <input type="password" className="form-control" id="password"
                                           placeholder="password"/>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className={'row'}>
                                <p>Non sei registrato?{' '}
                                    <a
                                        href="#"
                                        onClick={(e) => toRegistrati(e)}
                                        className={'text-danger'}>
                                        Registrati
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className={'row text-center p-3 mb-4'}>
                            <div className={'col-lg-12 col-sm-12'}>
                                <button
                                    className={'btn btn-success btn-lg'}
                                    onClick={() => navigate(URL_HOME)}
                                >
                                    <i className="bi bi-box-arrow-in-right"/>
                                    {' '}Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
