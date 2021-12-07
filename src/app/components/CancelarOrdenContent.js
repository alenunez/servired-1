import React from "react"
import obj from '../css/styles.module.css'
import obj2 from '../css/cancelarOrden.css'

export default function CancelarOrden () { 
    console.log(obj);
        return (
        <>

             <div className={`${obj['card']}`}>
                    <div className={`${obj['card-header']}`}>
                       <center>Detalle orden</center>
                    </div>
            </div>
            <form>
            <div className={`${obj['card-body']}`}>
                        <blockquote className={`${obj['blockquote mb-0']}`}>
                            Observacion<br/>

                           <center> <input type="textArea"  /></center>
                        </blockquote>
                    </div>           

            
          <center> <button className={`${obj['btn']} ${obj['btn-secondary']}`}>Cancelar orden</button></center>
          </form> 
        </>
        );
    }