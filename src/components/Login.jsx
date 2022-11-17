import React from 'react';
import {useNavigate} from "react-router";
import {URL_REGISTRATI} from "../utility/constants/urlConstants";

const Login = () => {
    const navigate = useNavigate()

    const toRegistrati = (e) => {
        e.preventDefault()
        navigate(URL_REGISTRATI)
    }

    return (
        <>
            <div className={'row justify-content-center mt-5'}>
                <div className={'card'} style={{width: '30rem'}}>
                    <h5 className={'card-title m-4 text-center'}>Login</h5>
                    <div className={'card-body'}>
                        <div className={'col-12'}>
                            <div className={'form-floating mb-3'}>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className={'col-12'}>
                            <div className={'form-floating mb-3'}>
                                <input type="password" className="form-control" id="password" placeholder="password"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className={'row'}>
                            <p>Non sei registrato? <a href="#" onClick={(e) => toRegistrati(e)}>Registrati</a></p>
                        </div>
                    </div>
                    <div className={'row p-2 mb-4'}>
                        <div className={'col-4'}>
                            <button className={'btn btn-primary'}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
