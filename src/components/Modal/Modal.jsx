import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        console.log('first');
        window.addEventListener('keydown', this.hanpleKeydown);
    };

    componentWillUnmount() {
        console.log('second');
        window.removeEventListener('keydown', this.hanpleKeydown);
    };

    hanpleKeydown = e => {
        if (e.code === 'Escape') {
            console.log('first');
            this.props.onClose();
        }
    }

    hanpleClickOnBack = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className={css.modalBackdrop} onClick={this.hanpleClickOnBack}>
                <div className={css.modalContent}> {this.props.children} </div>
            </div>,
            modalRoot,
        )
    }
}

export default Modal;