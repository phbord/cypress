import React from 'react'

const Modal = ({id, isModalOpen, hideModal, children}) => {// exampleModal
  return (
    <>
      {
        isModalOpen && (
          <>
            <div className="modal fade show d-block" 
                  id={id} 
                  tabIndex="-1" 
                  aria-labelledby="exampleModalLabel" 
                  aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" 
                            id="btn-close-cross"
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close" 
                            onClick={() => hideModal()}></button>
                  </div>
                  <div className="modal-body">
                    {children}
                  </div>
                  <div className="modal-footer">
                    <button type="button" 
                            id="btn-close"
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal" 
                            onClick={() => hideModal()}>Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="modal-backdrop" className="modal-backdrop fade show"></div>
          </>
        )
      }
    </>
  )
}

export default Modal