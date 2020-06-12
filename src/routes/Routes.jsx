import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import PrivateRoutes from "./PrivateRoutes.jsx";
import firebase, { providers, firestore } from "../firebase";



const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    state = {
        user: null
    }

    signIn = () => {
        firebase
            .auth()
            .signInWithPopup(providers.google)
            .then(result => {
                this.setState({user: result.user});
                console.log(this.state.user)
                globalHistory.navigate("/private/mycabinet");
            })
            .catch(error => {
                console.log(error);
            })
    }

    signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({user: null});
                globalHistory.navigate("/google-books-react");
            })
    }

    render() {
        return (
            <Router>
                <Redirect noThrow from="/" to="home" />
                <Booklist path="home" bookData={this.props.bookData} user={this.state.user}/>
                <Login path="login" signIn={this.signIn} />
                <PrivateRoutes path="private" user={this.state.user}> 
                    <MyCab path="mycabinet" user={this.state.user}  signOut={this.signOut} />
                </PrivateRoutes> 
                <NotFound default />
            </Router>
        );
    }
}