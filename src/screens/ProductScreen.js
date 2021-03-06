import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../comonents/Rating'
import products from '../products';
const ProductScreen = ({match}) => {
const product = products.find(p =>p._id === match.params.id)
    return (
        <div>
           <Link to="/" className="btn btn-dark my-3" >Go Back</Link>
           <Row>
            <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
            <ListGroup varient="flush">
           <ListGroup.Item>
            <h4>{product.name}</h4>
           </ListGroup.Item>
           <ListGroup.Item>
           <Rating value={product.rating} text={`${product.numReviews}reciews`} />
           </ListGroup.Item>
           <ListGroup.Item>
          Price: ${product.price}
           </ListGroup.Item>
           <ListGroup.Item>
            Description:{product.description}
           </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={3} >
            <Card>
                <ListGroup varient="flush">
               <ListGroup.Item>
                <Row >
                <Col>Price:</Col>
                <Col>
                <strong>${product.price}</strong>
                </Col>
                </Row> 
               </ListGroup.Item>
               <ListGroup.Item>
                <Row >
                <Col>Status:</Col>
                <Col>
                {product.countInStock >0 ? 'In Stock' :'Out of Stock'}
                </Col>
                </Row> 
               </ListGroup.Item>
               <ListGroup.Item>
                <Button className="btn-block" type="button"
                disabled={product.countInStock===0}
                >
                    Add to Card
                </Button>
               </ListGroup.Item>
                </ListGroup>
            
            </Card>
            </Col>
           </Row>
        </div>
    )
}

export default ProductScreen
