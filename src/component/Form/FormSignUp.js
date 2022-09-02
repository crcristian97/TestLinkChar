import React, {useState, useEffect} from 'react';
import '../Form/Form.css';
import {gsap} from 'gsap';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const FormSignup = ({ submitForm }) => {
  //use gsap for animation
  const timeline = gsap.timeline({
    defaults: {opacity:0, y:50, duration:1}

  });

  useEffect(() => {
    const Titulo = document.querySelectorAll('.Titulo');
    const Titulo2 = document.querySelectorAll('.Titulo2');
    timeline
    .from(Titulo, { x:50, stragger: 0.3})
    .from(Titulo2, 
        { x:-50,y:50, duration: 1, stragger: 0.3}, "-=1.3");
}, []);

//Validaciones del formulario 
const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (  
      <>
        <>
          <Formik
            initialValues={{
              nombre: "",
              correo: "",
              password: ""
            }}
            validate={(valores)=>{
              let errores ={};

              //Validacion Nombre
              if(!valores.nombre){             
                  errores.nombre = "Porfavor ingresa un nombre"
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                  errores.nombre = "El nombre solo puede contener letras y espacios"
              }

              //Validacion Correo
              if(!valores.correo){             
                 errores.correo = "Porfavor ingresa un correo electronico"
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                 errores.correo = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo"
              }
              
              //Validacion contrasenia
              if(!valores.password){             
                  errores.password = "Porfavor ingresa un contrasena"
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.password)) {
                  errores.nombre = "La contrasenia solo puede contener letras"
              }

              return errores;
            }}

            
            onSubmit={(valores, {resetForm})=>{
                  resetForm(valores);
                  cambiarFormularioEnviado(true);
                  setTimeout(()=>cambiarFormularioEnviado(false), 5000)
              }}
            >

            {({ errors })=> (
              <Form action=""  className="formulario">            
                <div>
                    <label htmlFor="nombre" className="Titulo">Nombre</label>
                    <Field
                      type="text"
                      name="nombre"
                      id="nombre"
                      placeholder="Nombre"
                      className="Titulo2"
                    />
                  <ErrorMessage name="nombre" component={()=>(<div className='error'>{errors.nombre}</div>)}/>               
                </div>
      
              <div>
                 <label htmlFor="correo" className="Titulo">Correo</label>
                    <Field
                      type="text"
                      id="correo"
                      name="correo"
                      placeholder="Correo"
                      className="Titulo2"
                    />
                  <ErrorMessage name="correo" component={()=>(<div className='error'>{errors.correo}</div>)}/>
                </div>
              <div>
                <label htmlFor="password" className="Titulo">Contrasenia</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Contrasenia"
                      className="Titulo2"
                    />
                  <ErrorMessage name="password" component={()=>(<div className='error'>{errors.password}</div>)}/>
              </div>     
              <button type="submit" className="Titulo" onClick={ () => {window.location.href = "/Home"}}>Enviar</button>
              {formularioEnviado && <p className="exito">Formulario enviado con exito </p>}
            </Form>
            )}    
          </Formik>       
        </>
      </>
    );
  };

export default FormSignup;