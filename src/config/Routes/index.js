import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Home, Login, Product, ProductDetail, Register} from "../../pages"
function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/productdetail">
                    <ProductDetail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
