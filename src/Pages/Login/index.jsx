import './styles.css'

export default function Login(){
    return (
        <div className="login_body">
            <div className="login_container">
                <div className="slogan_container">
                    <img
                        src="/Images/logo.svg"
                        alt="Think&Share slogan"
                        width={200}
                        height={146} />
                    {/* <span> lugar para compartilhar o que pensa e aprender com quem também</span> */}
                </div>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="Email ou Telefone" />
                    <input type="password" name="senha" id="senha" placeholder="senha" />
                </form>
                <a className="login_buttom"  href={"/"}>Login</a>
                <a className="login_cad" href={"/cadastro"}>Crie uma conta</a>
            </div>
        </div>
    );
}
