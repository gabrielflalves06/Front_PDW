import "./styles.css"

export default function Cadastro(){
    return(
        <div className="cad_body">
            <div className="cad_container">
                <div className="slogan_container">
                    <img
                        src="/Images/logo.svg"
                        alt="Think&Share slogan"
                        width={200}
                        height={146} />
                </div>
                <form action="">
                    <input type="text" name="Nome" id="Nome" placeholder="Nome" />
                    <input type="email" name="email" id="email" placeholder="Email ou Telefone" />
                    <input type="password" name="senha" id="senha" placeholder="senha" />
                    <input type="password" name="senha" id="senha" placeholder="Confirmar senha" />

                </form>
                <a className="cad_buttom"  href={"/"}>Cadastro</a>
                <a className="cad_login" href={"/login"}>Já possui uma conta??</a>
            </div>
        </div>
    )
}