import './styles.css'

export default function CriarComu() {
    return (
        <div className="EstiloComu">
            <div className="primeira">
                <div className="arquivo">
                    <input type="file" id="arquivoInput" />
                    <label htmlFor="arquivoInput">Foto da comunidade<img src="/images/nuvem.svg" /></label>
                </div>
                <div className="titulo">
                    <input type="text" name="titulo" id="titulo" placeholder="Adicione o nome da comunidade" />
                </div>
            </div>
            <div className="conteudo">
                <input type="text" name="conteudo" id="conteudo" placeholder="Descrição da comunidade"/>
            </div>
            <div className="topico">
                <input type="text" name="email" id="conteudo" placeholder="Adicione tópicos" className="post_texto" />
            </div>
            <div className="botoes">
                <button className="criar" /* href="" */>Criar<img src="/images/lapis.svg" /></button>
                <button className="cancelar" /* href="" */>Cancelar<img src="/Images/cancelar.svg" /></button>
            </div>
        </div>
    )
}