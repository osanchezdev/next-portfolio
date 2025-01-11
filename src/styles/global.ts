import { createGlobalStyle,  } from "styled-components"
import {
  linearGradient,
  normalize,
} from "polished"
import { device } from "./mediaQueries"

export const GlobalStyles = createGlobalStyle`
	${normalize()}
	:root {
		--background: #ffffff;
		--foreground: #171717;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--background: #0a0a0a;
			--foreground: #ededed;
		}
	}

	@media (prefers-color-scheme: dark) {
		html {
			color-scheme: dark;
		}
	}

	* {
		user-select: none;
			-webkit-touch-callout:none;                /* prevent callout to copy image, etc when tap to hold */
			-webkit-text-size-adjust:none;             /* prevent webkit from resizing text to fit */
			-webkit-tap-highlight-color:rgba(0,0,0,0); /* prevent tap highlight color / shadow */
			-webkit-user-select:none;                  /* prevent copy paste, to allow, change 'none' to 'text' */
	}
	
	body {
		max-width: 100vw;
		overflow-x: hidden;
		font-family: ${({ theme }) => theme.font}, sans-serif;
		color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
		${({ theme }) =>
      linearGradient({
        colorStops: [theme.colors.bg1, theme.colors.bg2],
        toDirection: "to right",
        fallback: theme.colors.bg1,
      })};

		@media ${device.mobileS} {
			font-size:16px;
		}
		@media ${device.tablet} {
			font-size: 18px;
		}
		@media ${device.laptop} {
			font-size: 24px;
		}
	}

	h1, h2, h3, h4, h5, h6, p, span {
		margin-top: 0;
		transition: all 100ms ease;
    line-height: 1.6;
	}

	@media ${device.mobileS}{
		h1 { font-size: 3rem;}
		h2 { font-size: 2.3rem; }
		h3 { font-size: 2rem; }
		h4 { font-size: 1.5rem; }
		h5 { font-size: 1rem; }
		p { font-size: 1.3rem; }
	}

	@media ${device.tablet}{
		h1 { font-size: 3rem;}
		h2 { font-size: 2.5rem; }
		h3 { font-size: 2rem; }
		h4 { font-size: 1.5rem; }
		h5 { font-size: 1rem; }
		p { font-size: 1.4rem; }
	}

	@media ${device.laptop}{
		h1 { font-size: 4rem;}
		h2 { font-size: 3.5rem; }
		h3 { font-size: 3rem; }
		h4 { font-size: 2.5rem; }
		h5 { font-size: 2rem; }
		p { font-size: 1.6rem; }
	}

	@media ${device.laptopL}{
		h1 { font-size: 4rem;}
		h2 { font-size: 3.5rem; }
		h3 { font-size: 3rem; }
		h4 { font-size: 2.5rem; }
		h5 { font-size: 2rem; }
		p { font-size: 2rem; }
	}

	a {
		color: ${({ theme }) => theme.colors.text};3
		transition: color 300ms ease;
	}
	a:hover {
		color: ${({ theme }) => theme.colors.primary};
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
