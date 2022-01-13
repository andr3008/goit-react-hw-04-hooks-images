import PropTypes from "prop-types";
import errorImage from "./errorImage.jpg";
import { Div, P } from "./ErrorView.styled";

export default function ErrorView({ texterror }) {
	return (
		<Div role="error">
			<P text={texterror}>{texterror}</P>
			<img src={errorImage} width="500" alt="error" />
		</Div>
	);
}
ErrorView.propTypes = {
	texterror: PropTypes.string.isRequired,
};
