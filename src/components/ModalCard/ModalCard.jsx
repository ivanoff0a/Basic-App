import React, { Component } from 'react';


export default class ModalCard extends Component {
    render() {
        return(
            <>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Order confirmation</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img className="modal-img" src='https://pp.userapi.com/c7007/v7007416/6b39d/ccboMsiNnjs.jpg'/>
                                <h5>Saddle Dior Oblique Black</h5>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary">Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}