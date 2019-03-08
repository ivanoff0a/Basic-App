import React, { Component } from 'react';

export default class GalleryCard extends Component{
    render() {
        return(
            <div className="col-md-4 col-sm-6 col-md-3 col-lg-3 bag__container">
                <div className="card bag__item">
                    <img src={this.props.data.pic} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.brand}</h5>
                        <p className="card-text">Saddle Dior Oblique</p>
                        <a href="#" className="btn btn-primary">Show</a>
                    </div>
                </div>
            </div>
        )
    }
}
