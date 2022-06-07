import { teal } from '@mui/material/colors';
import { Card, CardContent, CardMedia, Typography, Button} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const ProductCard = (props) => {
    


    return(
        <div style={{padding: '50px'}}>
            <Card variant='elevation' 
            onClick={props.onClick}
            style={{
                display: 'inline-block',
                width: '350px',
                height: '700px',
                margin: 'auto',
                backgroundColor: teal[100],
                float: 'left',
            }}
            
            sx={{
                ':hover': {
                    boxShadow: 20,
                     // theme.shadows[20]
                  },
                   cursor:  'pointer'
            }}>
            <CardMedia
                component='img'
                image={props.book.image_url}
                />               
                <CardContent>
                    
                    <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', }}
display='inline' variant='h4'style={{fontWeight: 'bold', }}>
                        {props.book.title}                       
                    </Typography>

                    <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', }}
display='inline' variant='h4'>
                        {props.book.authors[0].name}                       
                    </Typography>
                    
                    <div style={{float: 'inline-start', marginTop: '15px'}}>
                        <IconButton size='large' style={{float: 'left', }}><ShoppingCartIcon style={{transform: 'scale(2,2)'}} /></IconButton>
                        <Typography  sx={{display:'inline', float: 'right', fontSize: '1.99rem'}}>{props.book.price}</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductCard;