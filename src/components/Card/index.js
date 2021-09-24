import Card from '@mui/material/Card';
import './CSS/style.css'

function MyCard(props) {
    return (
        <Card>
            {props.children}
        </Card>
    )
}

export default MyCard;