import { Component } from "react";
import { Toaster } from "react-hot-toast";
import apiService from "./services/apiService";
import { Wrapper } from "./App.styled";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import Loader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import ErrorView from "./Components/ErrorView/ErrorView";

export default class App extends Component {
	state = {
		query: "",
		images: [],
		largeImageURL: "",
		page: "",
		error: null,
		isLoading: false,
		showModal: false,
	};
	handleFormSubmit = (query) => {
		this.setState({ query, images: [], page: 1, error: null });
	};
	async componentDidUpdate(_, prevState) {
		if (prevState.query !== this.state.query) {
			this.searchImages();
		}
	}
	searchImages = async () => {
		const { query, page } = this.state;
		this.toggleLoader();
		try {
			const response = await apiService(query, page);
			this.setState(({ images, page }) => ({
				images: [...images, ...response],
				page: page + 1,
			}));
			if (response.length === 0) {
				this.setState({ error: `No results for ${query}!` });
			}
		} catch (error) {
			this.setState({ error: "Something went wrong. Try again." });
		} finally {
			this.toggleLoader();
		}
	};
	onLoadMore = () => {
		this.searchImages();
		this.scrollPage();
	};
	onOpenModal = (e) => {
		this.setState({ largeImageURL: e.target.dataset.source });
		this.toggleModal();
	};
	toggleLoader = () => {
		this.setState(({ isLoading }) => ({
			isLoading: !isLoading,
		}));
	};
	toggleModal = () => {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
		}));
	};
	scrollPage = () => {
		setTimeout(() => {
			window.scrollBy({
				top: document.documentElement.clientHeight - 150,
				behavior: "smooth",
			});
		}, 1000);
	};
	render() {
		const { images, largeImageURL, isLoading, showModal, error } = this.state;
		return (
			<Wrapper>
				<Searchbar onSubmit={this.handleFormSubmit} />
				<Toaster />
				{error && <ErrorView texterror={error} />}
				{images.length > 0 && !error && (
					<ImageGallery images={images} onOpenModal={this.onOpenModal} />
				)}
				{isLoading && <Loader />}
				{!isLoading && images.length >= 12 && !error && (
					<Button onLoadMore={this.onLoadMore} />
				)}
				{showModal && (
					<Modal
						onToggleModal={this.toggleModal}
						largeImageURL={largeImageURL}
					/>
				)}
			</Wrapper>
		);
	}
}
