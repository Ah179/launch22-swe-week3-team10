import { Link, useLocation } from 'react-router-dom';
import { Button, Typography, AppBar, Grid, Toolbar } from '@mui/material';

const Navbar = props => {
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<Grid container spacing="2" justifyContent="center">
						<Grid item xs="auto">
							<Typography variant="h4" align="left">Bookly</Typography>
						</Grid>
						<Grid item xs={10}>
							<nav>
								<Button
									variant={useLocation().pathname==='/' ? 'contained' : 'text'}
									component={Link}
									to='/'
								>
									Books	
								</Button>
								<Button
									variant={useLocation().pathname === '/cart' ? 'contained' : 'text'}
									component={Link}
									to='/cart'
								>
									Cart
								</Button>
							</nav>
						</Grid>
						<Grid item xs></Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;