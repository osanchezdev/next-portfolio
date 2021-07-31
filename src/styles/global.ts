import { normalize } from "polished"
import { createGlobalStyle } from "styled-components"
import { device } from "./mediaQueries"

export const GlobalStyles = createGlobalStyle`
	${normalize()}
	* {
		user-select: none;
	}
	
	body {
		font-family: ${({ theme }) => theme.font}, sans-serif;
		color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
		background: ${({ theme }) => theme.colors.neutral_primary};

		@media ${device.mobileS} {
			font-size:16px;
		}
		@media ${device.laptop} {
			font-size: 18px;
		}
		@media ${device.laptopL} {
			font-size: 20px;
		}
	}
	h1, h2, h3, h4, h5, h6, p, span {
		transition: all 100ms ease;
    line-height: 1.6;
	}
	
	h1 { font-size: 2.4rem;}
	h2 { font-size: 2rem; }
	h3 { font-size: 1.6rem; }
	h4 { font-size: 1.2rem; }
	h5 { font-size: 1rem; }

	@media ${device.mobileS}{
		h1 { font-size: 3rem;}
		h2 { font-size: 2.5rem; }
		h3 { font-size: 2rem; }
		h4 { font-size: 1.5rem; }
		h5 { font-size: 1rem; }
	}

	link {
		color: ${({ theme }) => theme.colors.link};
	}

	// Hack for autocomplete Chrome colors
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
			-webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
			-webkit-transition-delay: 9999s;
	}
`
