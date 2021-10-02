import React from 'react';
import Novel from './Novel.jpg';
import Avatar from './Avatar.png';
import './Baca.css';

function Baca() {
    return (
        <div>
            <div className="container3">
                <div className="baca">
                    <img src={Novel} alt="Novel" />
                
                </div>
                <div className="chat">
                    <div className="orang">
                        <div className="icon">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className="isi">
                            <h4>Person</h4>
                            <p>Isi chat dengan teman satu Room</p>
                        </div>
                    </div>
                    <div className="orang">
                        <div className="icon">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className="isi">
                            <h4>Person</h4>
                            <p>Isi chat dengan teman satu Room</p>
                        </div>
                    </div>
                    <div className="orang">
                        <div className="icon">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className="isi">
                            <h4>Person</h4>
                            <p>Isi chat dengan teman satu Room</p>
                        </div>
                    </div>
                    <div className="orang">
                        <div className="icon">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className="isi">
                            <h4>Person</h4>
                            <p>Isi chat dengan teman satu Room</p>
                        </div>
                    </div>
                    <div className="orang">
                        <div className="icon">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className="isi">
                            <h4>Person</h4>
                            <p>Isi chat dengan teman satu Room</p>
                        </div>
                    </div>
                    <div className="orang">
                        <div className="icon">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className="isi">
                            <h4>Person</h4>
                            <p>Isi chat dengan teman satu Room</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Baca