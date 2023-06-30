import React, { Component } from "react";
// import styled from "styled-components";
import Navstyle from "./Navbar.module.css";

// const Nav = styled.div`
//     height: 70px;
//     background: linear-gradient(to right, purple, red);
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     position: relative;

// `;

// const Title = styled.div`
//     font-size: 30px;
//     color: #fff;
//     font-weight: 600;
//     font-family: "Montserrat", sans-serif;
//     text-transform: uppercase;
//     margin-left: 20px;
// `;

// const CartIconContainer = styled.div`
//     position: relative;
//     cursor: "pointer";
// `;

// const CartIcon = styled.img`
//     height: 48px;
//     margin-right: 20px;
// `;

// const CartCount = styled.span`
//     background: ${(props) => props.color};
//     border-radius: 50%;
//     padding: 4px 8px;
//     position: absolute;
//     right: 10px;
//     top: -5px;
//     font-size: 12px;
//     visibility: ${(props) => props.show?"visible": "hidden"};
// `;

// class Navbar extends Component {

//     render() {

//         return (
//             <Nav>
//                 <Title>Movie-App</Title>
//                 <CartIconContainer>
//                     <CartIcon                        
//                         src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
//                         alt="cart-icon"
//                     />
//                     <CartCount color="gold" show={false}>3</CartCount>
//                 </CartIconContainer>
//             </Nav>
//         );
//     }
// }

class Navbar extends Component {

    render() {
        const {cartCount} = this.props;
        return (
            <div className={Navstyle.navbar}>
                <div className={Navstyle.title}>BINGE-FLIX</div>
                <div className={Navstyle.carticoncontainer}>
                    <img className={Navstyle.carticon}                        
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                        alt="cart-icon"
                    />
                    <div className={Navstyle.cartcount}>{cartCount}</div>
                </div>
            </div>
        );
    }
}

// incline styling 
// const styles = {
//     nav: {
//         height: 70,
//         background: "#4267b2",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "relative",
//     },
//     title: {
//         fontSize: 30,
//         color: "#fff",
//         fontWeight: 600,
//         fontFamily: '"Montserrat", sans-serif',
//         textTransform: "uppercase",
//         marginLeft: 20
//     },
//     cartIconContainer: {
//         position: "relative",
//         cursor: "pointer",
//     },
//     cartIcon: {
//         height: 48,
//         marginRight: 20,
//     },
//     cartCount: {
//         background: "orange",
//         borderRadius: "50%",
//         padding: "4px 8px",
//         position: "absolute",
//         right: 10,
//         top: -5,
//         fontSize: 12,
//     },
// };

export default Navbar;