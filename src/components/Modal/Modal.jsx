import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {

    componentDidMount() {
      console.log('first');
    };

    componentWillUnmount() {
        console.log('second');
    };

    render() {
        return (
            <div className={css.modalBackdrop}>
                <div className={css.modalContent}> {this.props.children} </div>
            </div>
        )
    }
}

export default Modal;