import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Navbar.css";
import { Dropdown, SplitButton } from "react-bootstrap";

const Navbar = () => {
  const pages = ["home", "contact"];
  const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            E-Commerce - React
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="shopping-cart-menu"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="link-to" to={`/${page}`}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
            <SplitButton
              variant="outline-secondary"
              title="PRODUCTS"
              id="segmented-button-dropdown-1"
              href={"/products"}
            >
              <Dropdown.Item href="/products/monitores">
                Monitores
              </Dropdown.Item>
              <Dropdown.Item href="/products/perifericos">
                Perisfericos
              </Dropdown.Item>
            </SplitButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <CartWidget />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", width: "100%" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {cartProducts.length !== 0 ? (
                cartProducts.map((cartProduct) => {
                  return (
                    <MenuItem
                      sx={{
                        width: "100%",
                        margin: 0,
                        padding: 1,
                        justifyContent: "space-around",
                      }}
                      key={cartProduct.id}
                      className="shopping-cart-menu-item"
                    >
                      <div className="shopping-cart-img-container">
                        <img src={`../images/${cartProduct.pictureUrl}`} />
                      </div>
                      <div className="shopping-cart-info-container">
                        <p>{cartProduct.title}</p>
                        <span>${cartProduct.price}</span>
                        <span>x{cartProduct.quantity}</span>
                      </div>
                      <div
                        className="shopping-cart-trash-icon"
                        onClick={() => deleteProduct(cartProduct)}
                      >
                        <DeleteIcon />
                      </div>
                    </MenuItem>
                  );
                })
              ) : (
                <Container className="empty-cart">
                  <p>El carrito se encuentra vacio</p>
                </Container>
              )}
              <Container>
                <hr></hr>
                <div className="shopping-cart-footer">
                  <p>Total:</p>
                  {cartProducts.length === 0 ? (
                    <span>$0</span>
                  ) : (
                    <span>${totalPrice}</span>
                  )}
                  {cartProducts.length !== 0 && (
                    <button className="btn btn-primary">
                      {" "}
                      <Link to="/cart">Checkout</Link>
                    </button>
                  )}
                </div>
              </Container>
            </Menu>
          </Box>
          <Box>
            <span className="span-qnt">{cartProducts.length}</span>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
