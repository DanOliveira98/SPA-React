import Container from 'react-bootstrap/Container';
import {Image, Row} from "react-bootstrap";
import Fundo from "../../imagens/fundo.jpg";
import CardMedia from '@material-ui/core/CardMedia';
import NavBar from "../../componentes/navBar";
import CarrouselHome from "../../componentes/CarrouselHome";
function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <CarrouselHome>
                    </CarrouselHome>
                </Row>
            </Container>
        </div>



);
}

export default Home;