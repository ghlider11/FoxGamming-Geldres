import { Link } from "react-router-dom"
import { Button, Carousel, Card } from 'react-bootstrap';

const Home = () => (
    <>

        <Card>
            <Card.Body>Bienvenidos a Fox Gamming <Link to={`/productos`}><Button variant="outline-dark">Ver Productos</Button></Link></Card.Body>
        </Card>

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="c3.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tecnología</h3>
                    <p>Laptops y Computadoras para cada necesidad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="c2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Tecnología</h3>
                    <p>Laptops y Computadoras para cada necesidad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="c1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Tecnología</h3>
                    <p>Laptops y Computadoras para cada necesidad.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
)

export default Home
