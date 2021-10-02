import React from 'react';
import komputer from './Komputer.svg';
import './Tampilanawal.css';

function Tampilanawal() {
    return (
        <div>
            <div className="container">
                <img src={komputer} alt="Komputer"/>
            </div>

            <div className="content">
                <h2>Selamat Datang di Pusat Komunikasi. Ada yang bisa saya bantu?</h2>
            </div>
        </div>
    )
}

export default Tampilanawal
