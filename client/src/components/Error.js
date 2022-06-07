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
	return (
		<>
		 	<ThemeProvider theme={theme}>
				<Typography variant="h4" sx={{ mt: 1 }}>You shouldn't walk and read.</Typography>
				<Typography variant="subtitle1">Error 404 - This page doesn't exist!</Typography>
				<Button
					variant="contained"
					color="navbutton"
					component={Link}
					to='/'
					sx={{ m: 1 }}
				>
					Go to Books	
				</Button>
			</ThemeProvider>
		</>
	);
};

export default Error;