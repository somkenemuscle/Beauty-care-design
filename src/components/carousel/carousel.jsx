import React from 'react'
import bobieimg from '../../images/BOBIEBROWN.png'
import norepimg from '../../images/img.png'
import moisturizerimg from '../../images/moisturizer.png'


function carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={norepimg}
                        className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <img
                        src={bobieimg}
                        className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img
                        src={moisturizerimg}
                        className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default carousel