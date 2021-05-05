import React, {useRef, useState} from "react";
import {auth} from "../firebaseSetup";
import {Button, Col, Container, Form} from "react-bootstrap";
import {AnimatePresence, motion} from "framer-motion";

export function LogIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errorMsg, setErrorMsg] = useState('');


    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(
                emailRef.current!.value,
                passwordRef.current!.value
            );
        } catch (error) {
            console.error(error);
            setErrorMsg(error.message);
            setTimeout(() => setErrorMsg(''), 2000);
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
            setErrorMsg(error.message);
            setTimeout(() => setErrorMsg(''), 2000);
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

            <AnimatePresence>
                {errorMsg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: {duration: 3} }}
                        className="alert alert-danger" role="alert">{errorMsg}
                    </motion.div>
                )}
            </AnimatePresence>
        </Form>
    </Container>);
}
