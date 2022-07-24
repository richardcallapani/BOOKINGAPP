import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Contactanos y vive una gran aventura!</h1>
      <span className="mailDesc">escribe tu Email y te enviare toda la información</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Escribe tu correo aqui." />
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default MailList