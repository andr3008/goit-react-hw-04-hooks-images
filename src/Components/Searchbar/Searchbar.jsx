import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { Form, Input, Button, Span, Div } from "./Searchbar.styled";

export default function Searchbar({ onSubmit }) {
	const [query, setQuery] = useState("");

	const onSearchQueryChange = (e) => {
		setQuery(e.currentTarget.value.toLowerCase());
	};
	const onHandleSubmit = (e) => {
		e.preventDefault();
		if (query.trim() === "") {
			return toast.error(" Please enter text!");
		}
		onSubmit(query);
		setQuery("");
	};
	return (
		<Div>
			<Form onSubmit={onHandleSubmit}>
				<Input
					type="text"
					value={query}
					placeholder=" Search images and photos"
					onChange={onSearchQueryChange}
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
Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
