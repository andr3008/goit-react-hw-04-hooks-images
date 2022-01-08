import PropTypes from "prop-types";
import { Component } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Modalwindow } from "./Modal.styled";
const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (e) => {
		if (e.code === "Escape") {
			this.props.onToggleModal();
		}
	};

	handleBackdropClick = (e) => {
		if (e.currentTarget === e.target) {
			this.props.onToggleModal();
		}
	};

	render() {
		const { largeImageURL } = this.props;

		return createPortal(
			<Backdrop onClick={this.handleBackdropClick}>
				<Modalwindow>
					<img src={largeImageURL} alt="largeImage" />
				</Modalwindow>
			</Backdrop>,
			modalRoot
		);
	}
}
Modal.propTypes = {
	onToggleModal: PropTypes.func.isRequired,
};
export default Modal;
