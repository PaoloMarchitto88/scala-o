import React, {useState} from 'react';
import {registraUtente} from "../firestore/utenteCrud";
import {URL_LOGIN} from "../utility/constants/urlConstants";
import {useNavigate} from "react-router";

const Registrati = () => {
    const [nome, setNome] = useState('')
    const [mostraPassword, setMostraPassword] = useState(false)
    const [mostraConfermaPassword, setMostraConfermaPassword] = useState(false)
    const navigate = useNavigate()

    const registrati = () => {
        const utente = {nome}
        registraUtente(utente)
    }

    return (
        <>
            <div className={'row justify-content-center mt-5'}>
                <div className={'card'} style={{width: '50rem'}}>
                    <h5 className={'card-title mt-4 text-center'}>Registrazione</h5>
                    <div className={'card-body'}>
                        <div className={'row justify-content-center'}>
                            <div className={'col-6'}>
                                <div className={'input-group mb-4'}>
                                    <input type="text" className="form-control form-control-lg" id="nome"
                                           placeholder="Nome"
                                           onChange={(e) => setNome(e.target.value)}/>

                                </div>
                            </div>
                            <div className={'col-6'}>
                                <div className={'input-group mb-4'}>
                                    <input type="text" className="form-control form-control-lg" id="cognome"
                                           placeholder="Cognome"/>

                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <div className={'input-group mb-4'}>
                                    <input
                                        type="number"
                                        min={0}
                                        className="form-control form-control-lg"
                                        id="interno"
                                        placeholder="Interno"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <div className={'input-group mb-4'}>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className={'col-6'}>
                                <div className={'input-group mb-4'}>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="confermaEmail"
                                        placeholder="Conferma email"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <div className={'input-group mb-4'}>
                                    <input
                                        type={mostraPassword ? 'text' : 'password'}
                                        className="form-control form-control-lg"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        id="button-addon1"
                                        onClick={() => setMostraPassword(!mostraPassword)}
                                    >
                                        <i className={mostraPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}/>
                                    </button>
                                </div>
                            </div>
                            <div className={'col-6'}>
                                <div className={'input-group mb-3'}>
                                    <input
                                        type={mostraConfermaPassword ? 'text' : 'password'}
                                        className="form-control form-control-lg"
                                        id="confermaPassword"
                                        placeholder="Conferma password"
                                    />
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        id="button-addon1"
                                        onClick={() => setMostraConfermaPassword(!mostraConfermaPassword)}
                                    >
                                        <i className={mostraConfermaPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}/>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={'row p-2 mb-4 justify-content-center'}>
                        <div className={'col-2'}>
                            <button className={'btn btn-success p-2'} onClick={() => registrati()}><i
                                className="bi bi-check-circle"/> Registrati
                            </button>
                        </div>
                        <div className={'col-2'}>
                            <button className={'btn btn-danger p-2'} onClick={() => navigate(URL_LOGIN)}><i
                                className="bi bi-dash-circle"/> Annulla
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registrati;
