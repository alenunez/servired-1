import React from "react"
import obj from '../css/styles.module.css'

export default function DetalleEnvioContent () { 
    console.log(obj);
        return (
        <>
        
             <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                        Dimensiones
                    </div>
                    <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Alto<input type="text" /> Ancho <input type="text" /> Peso <input type="text" /> Delicado <input type="radio" />
                        </blockquote>
                    </div>
            </div>
            
            <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                        Dirección de recogida
                    </div>
                    <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Direccion<input type="text" /> Barrio <input type="text" /> Ciudad <input type="text" /> Departamento <input type="text" />
                        </blockquote>
                    </div>
            </div>


            <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                        Direccion de Envio
                    </div>
                    <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Direccion <input type="text" /> Barrio <input type="text" /> Ciudad <input type="text" /> Departamento <input type="text" /><br/><br/> Nombre <input type="text" /> Documento <input type="text" />
                        </blockquote>
                    </div>
            </div>
            
            <button className={`${obj['btn']} ${obj['btn-secondary']}`}>Volver</button>
        </>
        );
    }