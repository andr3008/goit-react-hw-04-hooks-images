import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import apiService from "./services/apiService";
import { Wrapper } from "./App.styled";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import ErrorView from "./components/ErrorView/ErrorView";

export default function App() {
	const [query, setQuery] = useState("");
	const [images, setImages] = useState([]);
	const [largeImageURL, setLargeImageURL] = useState("");
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleFormSubmit = (query) => {
		setQuery(query);
		setImages([]);
		setPage(1);
		setError(null);
	};

	useEffect(() => {
		if (!query) {
			return;
		}
		const searchImages = async () => {
			setIsLoading(true);
			try {
				const response = await apiService(query, page);
				setImages((prevImages) => [...prevImages, ...response]);
				if (response.length === 0) {
					setError(`No results for ${query}!`);
				}
			} catch (error) {
				setError("Something went wrong. Try again.");
			} finally {
				setIsLoading(false);
			}
		};
		searchImages();
	}, [page, query]);

	const onLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
		scrollPage();
	};
	const onOpenModal = (e) => {
		setLargeImageURL(e.target.dataset.source);
		toggleModal();
	};
	const toggleModal = () => {
		setShowModal((prevModal) => !prevModal);
	};
	const scrollPage = () => {
		setTimeout(() => {
			window.scrollBy({
				top: document.documentElement.clientHeight - 150,
				behavior: "smooth",
			});
		}, 1000);
	};
	const showLoadMoreButtonAndErrorText =
		!isLoading && images.length >= 12 && !error;
	const showErrorText = images.length > 0 && !error;
	return (
		<Wrapper>
			<Searchbar onSubmit={handleFormSubmit} />
			<Toaster />
			{error && <ErrorView texterror={error} />}
			{showErrorText && (
				<ImageGallery images={images} onOpenModal={onOpenModal} />
			)}
			{isLoading && <Loader />}
			{showLoadMoreButtonAndErrorText && <Button onLoadMore={onLoadMore} />}
			{showModal && (
				<Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
			)}
		</Wrapper>
	);
}
