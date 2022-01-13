import PropTypes from "prop-types";
import { Li, Img } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({
	webformatURL,
	largeImageURL,
	tags,
	onOpenModal,
}) {
	return (
		<Li>
			<Img
				src={webformatURL}
				alt={tags}
				data-source={largeImageURL}
				onClick={onOpenModal}
			/>
		</Li>
	);
}
ImageGalleryItem.propTypes = {
	image: PropTypes.shape({
		webformatURL: PropTypes.string.isRequired,
		largeImageURL: PropTypes.string.isRequired,
		tags: PropTypes.string,
	}),
	onOpenModal: PropTypes.func.isRequired,
};
