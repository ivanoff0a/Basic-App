import React, { Component } from 'react';
import ModalCard from '../ModalCard/ModalCard.jsx';


export default class Gallery extends Component {
    render() {
        return(
            <>
                <div className='btn-container'>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Purchase your bag
                    </button>
                </div>
                <ModalCard bags={this.props.bags}/>
            </>
        )
    }
}