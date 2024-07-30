import React from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { addProductRequest } from "../redux/actions/Product-action";
import axios from "axios";

const ProductList = ({ products, noofProducts, addProductRequest }) => {
    
    const addHandler = (product) => {
        addProductRequest(product);
        console.log(`Added product ${product.name} to cart`);
        alert(`Added ${product.name} to cart`);

        axios.post('https://sample-2aa4b-default-rtdb.firebaseio.com/productList.json', product)
        .then(response => {
            console.log('Product added to Firebase', response.data);
        })
        .catch(error => {
            console.error('Error adding product to Firebase', error);
            alert('Failed to add product to Firebase. Please try again.');
        });
    };

    return (
        <MDBContainer fluid>
            <h2>Number of Products: {noofProducts}</h2>
            <MDBRow className="justify-content-center mb-0">
                {products.map((product) => (
                    <MDBCol md="12" xl="10" key={product.id} className="mb-3">
                        <MDBCard className="shadow-0 border rounded-3">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                        <MDBRipple
                                            rippleColor="light"
                                            rippleTag="div"
                                            className="bg-image rounded hover-zoom hover-overlay"
                                        >
                                            <MDBCardImage
                                                src={product.imageUrl}
                                                fluid
                                                className="w-100"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <h5>{product.name}</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                {[...Array(product.rating)].map((_, i) => (
                                                    <MDBIcon fas icon="star" key={i} />
                                                ))}
                                            </div>
                                            <span>{product.reviews}</span>
                                        </div>
                                        <div className="mt-1 mb-0 text-muted small">
                                            {product.features.map((feature, index) => (
                                                <React.Fragment key={index}>
                                                    <span>{feature}</span>
                                                    {index < product.features.length - 1 && <span className="text-primary"> • </span>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">{product.description}</p>
                                    </MDBCol>
                                    <MDBCol
                                        md="6"
                                        lg="3"
                                        className="border-sm-start-none border-start"
                                    >
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">${product.price}</h4>
                                            <span className="text-danger">
                                                <s>${product.originalPrice}</s>
                                            </span>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                            <MDBBtn
                                                outline
                                                color="primary"
                                                size="sm"
                                                className="mt-2"
                                                onClick={() => addHandler(product)}
                                            >
                                                Add to Cart
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
            <div>
                <MDBBtn onClick={() => window.location.href='/Cart'}>
                    Go to Cart
                </MDBBtn>
            </div>
        </MDBContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products || [],
        noofProducts: state.noofProducts || 0, 
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        addProductRequest: (product) => dispatch(addProductRequest(product)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
