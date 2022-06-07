import { Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const theme = createTheme({
	palette: {
		navbutton: {
			main: teal[100],
		}
	}
})

const Error = props => {
	document.title = 'Error 404 - Bookly';
	
	return (
		<>
		 	<ThemeProvider theme={theme}>
			 	<Typography variant="h5" sx={{ mt: 1 }}>Error 404</Typography>
				<Typography variant="h4">That page doesn't exist!</Typography>
				<Typography variant="subtitle1" sx={{ m: 2 }}>Perhaps try not to walk and read?</Typography>
				<Button
					variant="contained"
					color="navbutton"
					component={Link}
					to='/'
				>
					Go to Books	
				</Button>
			</ThemeProvider>
		</>
	);
};

export default Error;