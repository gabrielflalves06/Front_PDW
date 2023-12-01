import { useLocation } from 'react-router-dom';
import './styles.css'
export default function CriarPost({ closeModal }) {

    const location = useLocation();

    const isPaginaInicial = location.pathname === '/';
    const isOutraPagina = location.pathname === '/comentario';

    const fecharModal = () => {
        closeModal(); // Chama a função para fechar o modal
    };
    return (
        <section className="EstiloPost">
            <div className="titulo">
                {isPaginaInicial && (
                    <input type="text" name="titulo" id="titulo" placeholder="Adicione o título aqui" />
                )}
            </div>
            <div className="conteudo">
                {isPaginaInicial && (
                    <input type="text" name="conteudo" id="conteudo" placeholder="Adicione o conteúdo do que deseja compartilhar aqui" />
                )}

                {isOutraPagina && (
                    <input type="text" name="conteudo" id="conteudo" placeholder="Deixe seu comentario aqui" />
                )}
            </div>
            <div className="arquivo">
                <input type="file" id="arquivoInput" />
                <label htmlFor="arquivoInput">Upload de arquivos aqui<img src="/Images/nuvem.svg" /></label>
            </div>

            <div className="botoes">
                {isPaginaInicial && (
                    <button className="criar"/* href="" */>Criar<img src="/Images/lapis.svg" /></button>
                )}

                {isOutraPagina && (
                    <button className="criar"/* href="" */>Comentar<img src="/Images/lapis.svg" /></button>
                )}
                <button className="cancelar" onClick={fecharModal}>Cancelar<img src="/Images/cancelar.svg" /></button>
            </div>
        </section>
    )
}