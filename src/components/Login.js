import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { login, loginEmailPassword, loginGoogle } from '../actions/loginAction';
import { useForm } from '../hooks/useForm';

function Login() {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }

    const handleLoginGoogle = () => {
        dispatch(loginGoogle())
    }

    return (
        <div className="container-card">
            <Card>
                <Card.Body>
                    <Card.Title>Inicio de sesión</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Correo"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <div className="container-botom">
                            <Button variant="danger" type="submit">
                                Iniciar sesión
                            </Button>
                            <span> o </span>
                            <Button variant="outline-warning" type="submit" onClick={handleLoginGoogle}>
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </Button>
                            <hr />
                            <span>¿No tienes una cuenta? <Link to="/registro"> Registrate</Link></span>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;
