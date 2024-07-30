import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { addProductRequest, removeProductRequest, setCartProducts } from "../redux/actions/Product-action";

const Cart = ({ cartProducts, addProductRequest, removeProductRequest, setCartProducts }) => {

    useEffect(() => {
        axios.get('https://sample-2aa4b-default-rtdb.firebaseio.com/productList.json')
            .then(response => {
                const fetchedProducts = Object.keys(response.data || {}).map(key => ({
                    id: key,
                    ...response.data[key]
                }));
                console.log('Fetched products from Firebase:', fetchedProducts);
                setCartProducts(fetchedProducts);
            })
            .catch(error => {
                console.error('Error fetching cart products from Firebase:', error);
            });
    }, [setCartProducts]);

    const addProductHandler = (product) => {
        addProductRequest(product);
        axios.post('https://sample-2aa4b-default-rtdb.firebaseio.com/productList.json', product)
        .then(response => {
            console.log('Product added to Firebase', response.data);
        })
        // console.log('Added product with ID: ${product.id} to Firebase');
    };

    const removeProductHandler = (product) => {
        removeProductRequest(product);

        axios.delete('https://sample-2aa4b-default-rtdb.firebaseio.com/productList.json', product.id);

        // axios.delete('https://sample-2aa4b-default-rtdb.firebaseio.com/productList.json', product)
        // .then(response => {
        //     console.log('Product deleted from Firebase', response.data);
        // })
        // console.log('Deleted product with ID: ${product.id} from Firebase');
    };

    
    
  
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Add form validation and payment processing logic here
        console.log('Processing payment...');
    };

    // Example data for demonstration
    const totalPrice = cartProducts.reduce((acc, product) => acc + product.price * (product.quantity || 1), 0);
    const finalTotal = totalPrice; // Adjust if you have discounts

    const buyHandler = () => {
        alert('Processing payment...');
        alert('Payment processed successfully!');
        // Clear cart products
        alert(finalTotal +'USD');
        axios.delete('https://sample-2aa4b-default-rtdb.firebaseio.com/productList.json')
        setCartProducts([]);
        
    }

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="h-100 py-5">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="text-black">
                                <MDBRow>
                                    <MDBCol lg="7" className="px-5 py-4">
                                        <MDBTypography tag="h3" className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                            Your products
                                        </MDBTypography>

                                        {cartProducts.map((product) => (
                                            <div key={product.id} className="d-flex align-items-center mb-5">
                                                <div className="flex-shrink-0">
                                                    <MDBCardImage
                                                        src={product.imageUrl}
                                                        fluid
                                                        style={{ width: "150px" }}
                                                        alt="Product image"
                                                    />
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <a href="#!" className="float-end text-black" onClick={() => removeProductHandler(product)}>
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                    <MDBTypography tag="h5" className="text-primary">
                                                        {product.name}
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                                                        Color: {product.color || "N/A"}
                                                    </MDBTypography>

                                                    <div className="d-flex align-items-center">
                                                        <p className="fw-bold mb-0 me-5 pe-3">${product.price}</p>

                                                        <div className="def-number-input number-input safari_only">
                                                            <button className="minus" onClick={() => removeProductHandler(product)}>-</button>
                                                            <input
                                                                className="quantity fw-bold text-black"
                                                                min={0}
                                                                value={product.quantity || 1}
                                                                type="number"
                                                                readOnly
                                                            />
                                                            <button className="plus" onClick={() => addProductHandler(product)}> +</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <hr
                                            className="mb-4"
                                            style={{
                                                height: "2px",
                                                backgroundColor: "#1266f1",
                                                opacity: 1,
                                            }}
                                        />

                                        
                                        <div
                                            className="d-flex justify-content-between p-2 mb-2"
                                            style={{ backgroundColor: "#e1f5fe" }}
                                        >
                                            <MDBTypography tag="h5" className="fw-bold mb-0">
                                                Total:
                                            </MDBTypography>
                                            <MDBTypography tag="h5" className="fw-bold mb-0">
                                                ${finalTotal}
                                            </MDBTypography>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="5" className="px-5 py-4">
                                        <MDBTypography
                                            tag="h3"
                                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                                        >
                                            Payment
                                        </MDBTypography>

                                        <form className="mb-5" onSubmit={handleSubmit}>
                                            <MDBInput
                                                className="mb-5"
                                                label="Card number"
                                                type="text"
                                                size="lg"
                                                // defaultValue="1234 5678 9012 3457"
                                                required
                                            />

                                            <MDBInput
                                                className="mb-5"
                                                label="Name on card"
                                                type="text"
                                                size="lg"
                                                // defaultValue="John Smith"
                                                required
                                            />

                                            <MDBRow>
                                                <MDBCol md="6" className="mb-5">
                                                    <MDBInput
                                                        className="mb-4"
                                                        label="Expiration"
                                                        type="text"
                                                        size="lg"
                                                        minLength="7"
                                                        maxLength="7"
                                                        // defaultValue="01/22"
                                                        placeholder="MM/YYYY"
                                                        required
                                                    />
                                                </MDBCol>
                                                <MDBCol md="6" className="mb-5">
                                                    <MDBInput
                                                        className="mb-4"
                                                        label="Cvv"
                                                        type="text"
                                                        size="lg"
                                                        minLength="3"
                                                        maxLength="3"
                                                        placeholder="&#9679;&#9679;&#9679;"
                                                        // defaultValue="&#9679;&#9679;&#9679;"
                                                        required
                                                    />
                                                </MDBCol>
                                            </MDBRow>

                                            <p className="mb-5">
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                                                <a href="#!"> obcaecati sapiente</a>.
                                            </p>

                                            <MDBBtn block size="lg" type="submit" onClick={buyHandler}>
                                                Buy now
                                            </MDBBtn>

                                            <MDBTypography
                                                tag="h5"
                                                className="fw-bold mb-5"
                                                style={{ position: "absolute", bottom: "0" }}
                                            >
                                                <a href="/ProductList">
                                                    <MDBIcon fas icon="angle-left me-2" ></MDBIcon> 
                                                    Back to shopping
                                                </a>
                                            </MDBTypography>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProducts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProductRequest: (product) => dispatch(addProductRequest(product)),
        removeProductRequest: (product) => dispatch(removeProductRequest(product)),
        setCartProducts: (products) => dispatch(setCartProducts(products)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

