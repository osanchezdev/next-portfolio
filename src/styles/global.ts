import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	${normalize}
	
	* {
		font-family: ${({ theme }) => theme.font}, sans-serif;
		color: ${({ theme }) => theme.colors.text};
	}

	body {
		background: ${({ theme }) => theme.colors.neutral_primary};
	}
	h1, h2, h3, h4, h5, h6, p, span {
		transition: all 300ms ease;
	}

	link {
		color: ${({ theme }) => theme.colors.link};
	}
`;
