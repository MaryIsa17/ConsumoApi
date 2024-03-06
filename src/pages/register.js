import { data } from "jquery";
import React from "react";
import { useForm} from 'react-hook-form';{/*se debe instalar: npm install react-hook-form*/}

const Register = () => {
    const {register, handleSubmint, watch, formState: {errors}} = useForm();

    const onSubmit =data => {
        console.log(data);
    }
    return (
        <section className="bg-light">
            <div className="container">
                <h1>View Register</h1>
                <form onSubmit={handleSubmint(onSubmit)}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Apellido</label>
                                <input type="text" />
                            </div>
                        </div>              
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-success">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;