import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { Component } from "react";
import { Form, Input, Button, Span, Div } from "./Searchbar.styled";

export default class Searchbar extends Component {
	state = {
		query: "",
	};
	onSearchQueryChange = (e) => {
		this.setState({ query: e.currentTarget.value.toLowerCase() });
	};
	onHandleSubmit = (e) => {
		e.preventDefault();
		if (this.state.query.trim() === "") {
			return toast.error(" Please enter text!");
		}
		this.props.onSubmit(this.state.query);
		this.setState({ query: "" });
	};
	render() {
		return (
			<Div>
				<Form onSubmit={this.onHandleSubmit}>
					<Input
						type="text"
						value={this.state.query}
						placeholder=" Search images and photos"
						onChange={this.onSearchQueryChange}
					/>
					<Button type="submit">
						<Span>
							<BiSearch />
						</Span>
					</Button>
				</Form>
			</Div>
		);
	}
}
Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
