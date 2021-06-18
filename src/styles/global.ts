
import { normalize } from "polished";
import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	${normalize}
	
	body {
		font-family: ${({theme}) => theme.font}, sans-serif;
		color: ${({ theme }) => theme.colors.text};
		background: ${({ theme }) => theme.colors.neutral_primary};
	}
	link {
		color: ${({ theme }) => theme.colors.link};
	}
`
