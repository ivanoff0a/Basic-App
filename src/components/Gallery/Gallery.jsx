import React, { Component } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard.jsx'

export default class Gallery extends Component {
    render() {
        let bags = this.props.bags.map((bag, i) => {
            return(
                <GalleryCard key={i} data={bag}/>
            )
        })

        return(
            <>
                <h2>Gallery</h2>
                <div className="baglist__container row">
                    {bags}
                </div>
            </>
        )
    }
}