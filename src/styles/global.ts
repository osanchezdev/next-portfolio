import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { device } from "./mediaQueries";

export const GlobalStyles = createGlobalStyle`
	${normalize()}
	
	body {
		font-family: ${({ theme }) => theme.font}, sans-serif;
		color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    line-height: 1.6;
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
`;
