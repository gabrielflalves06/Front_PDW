import './styles.css'
export default function CriarPost({closeModal}) {

    const fecharModal = () => {
        closeModal(); // Chama a função para fechar o modal
    };
    return (
        <section className="EstiloPost">
            <div className="titulo">
                <input type="text" name="titulo" id="titulo" placeholder="Adicione o título aqui" />
            </div>
            <div className="conteudo">
                <input type="text" name="conteudo" id="conteudo" placeholder="Adicione o conteúdo do que deseja compartilhar aqui" />
            </div>
            <div className="arquivo">
                <input type="file" id="arquivoInput" />
                <label htmlFor="arquivoInput">Upload de arquivos aqui<img src="/Images/nuvem.svg" /></label>
            </div>
            <div className="botoes">
                <button className="criar"/* href="" */>Criar<img src="/Images/lapis.svg" /></button>
                <button className="cancelar" onClick={fecharModal}>Cancelar<img src="/Images/cancelar.svg" /></button>
            </div>
        </section>
    )
}