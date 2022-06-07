import { Link, useLocation } from 'react-router-dom';
import { Button, Typography, AppBar } from '@mui/material';

const Navbar = props => {
	return (
		<>
			<AppBar position="static">
				<Typography variant="h4">Bookly</Typography>
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
			</AppBar>
		</>
	);
};

export default Navbar;