import React, { useEffect, useState } from "react";
import { getById } from '../../services/services';
import { Mailer } from 'nodemailer-react';

export const datamovie = (id) =>{
    const data = getById(id);
    return data;
}

const SendEmail = ({ match }) => {

    useEffect(() => {
        const fetchData = async () => {
            const data = await getById(match.params.id);
            setDataMovie(data);
        }
        fetchData();
    }, []);

    const [dataMovie, setDataMovie] = useState('');
    const [email, setEmail] = useState('');

   

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const transport = {
        host: 'smtp.example.com',
        secure: true,
        auth: { user: 'username', pass: 'password' },
    }

    const defaults = {
        from: "sender@server.com",
    }

    const Email = () => ({
        subject: 'string',
        body: 'ReactElement'
    })

    const WelcomeEmail = ({ firstName }) => ({
        subject: `👋 ${firstName}`,
        body: (
          <div>
            <p>Hello {firstName}!</p>
            <p>Hope you'll enjoy the package!</p>
          </div>
        )
      })

    const sendEmail = () => Mailer(
        { transport, defaults },
        { WelcomeEmail }
      )
   

   
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3>send email</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input value={email} onChange={onChangeEmail} id="input_email" type="email" data-length="10" />
                                <label for="input_email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input value={`titulo:${dataMovie.Title}`} id="input_text" type="text" data-length="10" />
                                <label for="input_text">Asunto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea value={`titulo:${dataMovie.Title},Fecha inicio: ${dataMovie.Released}, Imagen: ${dataMovie.Poster}`} id="textarea2" className="materialize-textarea" data-length="400" rows="10" cols="50">

                                </textarea>
                                <label for="textarea2">Cuerpo</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button onClick={() => sendEmail()} className="waves-effect waves-light btn">enviar email</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SendEmail;