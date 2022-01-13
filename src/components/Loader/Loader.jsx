import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";

const override = css`
	display: block;
	margin: 0 auto;
`;

export default function Loader() {
	return (
		<div>
			<GridLoader css={override} size={25} color={"#3f51b5"} />
		</div>
	);
}
