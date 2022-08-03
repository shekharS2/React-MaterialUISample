import './App.css';
import {
	Button,
	Typography,
	CssBaseline,
	AppBar,
	Toolbar,
	Container,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions
} 
from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { useStyles } from './styles';

function App() {
	const classes = useStyles();
	const cards = [
		{
			id: 1,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 2,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 3,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 4,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 5,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 6,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 7,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 8,
			img: 'https://source.unsplash.com/random'
		},
		{
			id: 9,
			img: 'https://source.unsplash.com/random'
		},
	];
	
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCameraIcon className={classes.icon} />
					<Typography variant="h6">
						Photo Album
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth="sm">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
							Photo Album
						</Typography>
						<Typography variant='h5' align='center' color='textSecondary' paragraph>
							Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
						</Typography>
						<div className={classes.button}>
							<Grid container spacing={2} justify="center" >
								<Grid item >
									<Button variant="contained" color="primary">See my photos</Button>
								</Grid>
								<Grid item >
									<Button variant="outlined" color="primary">Secondary action</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth="md" >
					<Grid container spacing={4}>
						{cards.map(card => (
							<Grid item key={card.id} xs={12} sm={6} md={4} >
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image={card.img}
										title="Image Title"
									/>
									<CardContent className={classes.cardContent} >
										<Typography gutterBottom variant="h5">
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small"color="primary">View</Button>
										<Button size="small"color="primary">Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography variant="h6" align='center' gutterBottom>
					Footer
				</Typography>	
				<Typography variant="subtitle1" align='center' color="textSecondary">
				Footer
					Something here to give the footer a purpose! Copyright © Your Website 2022.
				</Typography>	
			</footer>
		</>
	);
}

export default App;
