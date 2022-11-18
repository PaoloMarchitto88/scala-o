import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success p-4">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#"><i className="bi bi-house"/>{' '}Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#"><i className="bi bi-chat"/>{' '}Comunicazioni</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#"><i className="bi bi-card-checklist"/>{' '}Votazioni</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#"><i
                            className="bi bi-bookmark-x"/>{' '}Scadenze</a>
                    </li>
                </ul>
            </div>
            <div className={'justify-content-end'}>
                <a href={'#'} className={'nav-link text-white'}><i className="bi bi-person"></i>Profilo</a>
            </div>
        </nav>
    );
};

export default Header;
