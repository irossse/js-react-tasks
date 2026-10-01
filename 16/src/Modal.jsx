import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class Modal extends React.Component {
    render() {
    const { isOpen, children } = this.props

    const className = cn('modal', {fade: isOpen, show: isOpen,})

    return (
      <div className={className} style={{ display: isOpen ? 'block' : 'none' }} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    )}}

    Modal.Header = class extends React.Component {
    render() {
    const { children, toggle }=this.props

    return (
      <div className="modal-header">
        
        <div className="modal-title">{children}</div>
        <button type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={toggle}
        />
      </div>
    )
  }
}


Modal.Body=({children})=>(
  <div className="modal-body">{children}</div>)

Modal.Footer=({children})=> (
  <div className="modal-footer">{children}</div>
)
export default Modal

// END
