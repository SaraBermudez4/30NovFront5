import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { register, registerEmailPassword } from '../actions/registerAction';
import { useForm } from '../hooks/useForm';

export const Registro = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const { nombre, email, pass1, pass2 } = values

    const handleSubmit = (e) => {
        e.preventDefault()

        if (pass1 === pass2) {
            dispatch(registerEmailPassword(email, pass1, nombre))
        } else {
            console.log('Las contraseñas no son iguales');
        }
        reset()
    }

    return (
        <div className="container-card">
            <Card>
                <Card.Body>
                    <Card.Title >Registro</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su correo"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="pass1"
                                value={pass1}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                            <Form.Label>Repita contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="pass2"
                                value={pass2}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <div className="container-botom">
                            <Button variant="danger" type="submit">
                                Registrarse
                            </Button>
                            <hr />
                            <span>¿Ya tienes una cuenta? <Link to="/"> Inicia sesión</Link></span>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div >
    )
}