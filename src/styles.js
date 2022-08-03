import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // for 16:9 aspect ration
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));