import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Modalwindow } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onToggleModal, largeImageURL }) {
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	const handleKeyDown = (e) => {
		if (e.code === "Escape" || e.currentTarget === e.target) {
			onToggleModal();
		}
	};

	return createPortal(
		<Backdrop onClick={handleKeyDown}>
			<Modalwindow>
				<img src={largeImageURL} alt="largeImage" />
			</Modalwindow>
		</Backdrop>,
		modalRoot
	);
}
Modal.propTypes = {
	onToggleModal: PropTypes.func.isRequired,
};
