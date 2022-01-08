import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Ul } from "./ImageGallery.styled";

export default function ImageGallery({ images, onOpenModal }) {
	return (
		<Ul>
			{images.map(({ id, webformatURL, largeImageURL, tags }) => (
				<ImageGalleryItem
					key={id}
					webformatURL={webformatURL}
					largeImageURL={largeImageURL}
					tags={tags}
					onOpenModal={onOpenModal}
				/>
			))}
		</Ul>
	);
}
ImageGallery.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	),
};
