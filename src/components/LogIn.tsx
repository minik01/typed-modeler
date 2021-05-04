import React, {useRef} from "react";
import {auth} from "../firebaseSetup";
import {Button, Col, Container, Form} from "react-bootstrap";

export function LogIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            );
        } catch (error) {
            console.error(error);
        }
    };

    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            );
        } catch (error) {
            console.error(error);
        }
    };


    return (<Container style={{maxWidth: "500px"}} fluid>
        <Form className="mt-4">
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="email"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                />
            </Form.Group>
            <Form.Row>
                <Col xs={6}>
                    <Button onClick={createAccount} type="button" block>
                        Sign Up
                    </Button>
                </Col>
                <Col xs={6}>
                    <Button
                        onClick={signIn}
                        type="button"
                        variant="secondary"
                        block
                    >
                        Sign In
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    </Container>);
}
