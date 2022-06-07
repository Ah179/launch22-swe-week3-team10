import { Link, useLocation } from 'react-router-dom';
import { Button, Typography, AppBar, Grid, Toolbar } from '@mui/material';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BookIcon from '@mui/icons-material/Book';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const theme = createTheme({
	palette: {
		navbar: {
			main: teal[100]
		},
	}
})

const Navbar = props => {
	return (
		<>
		 	<ThemeProvider theme={theme}>
				<AppBar position="static" color="navbar">
					<Toolbar>
						<Grid container spacing="2" justifyContent="center">
							<Grid item xs="auto">
								<Typography variant="h4" align="left">Bookly</Typography>
							</Grid>
							<Grid item xs={10}>
								<nav>
									<Button
										variant={useLocation().pathname === '/' ? 'contained' : 'text'}
										component={Link}
										to='/'
										sx={{ mx: 1 }}
										startIcon={<BookIcon />}
									>
										Books	
									</Button>
									<Button
										variant={useLocation().pathname === '/cart' ? 'contained' : 'text'}
										component={Link}
										to='/cart'
										sx={{ mx: 1 }}
										startIcon={<ShoppingCartIcon />}
									>
										Cart
									</Button>
								</nav>
							</Grid>
							<Grid item xs></Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</>
	);
};

export default Navbar;