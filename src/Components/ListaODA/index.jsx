export const ListaOda = ({lista})=>{
    return(
      <div>
          <div className='lista'>
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <p className="totalObjeto">{lista.length} Objetos Cadastrados </p>
                    {lista.map(oda => (
                      <div className="col-lg-6 mx-auto">
                        <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                          <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                            <div className='objetoOda' key={oda.id}>
                              <h1 className="titulo">Nome: {oda.nome}</h1>
                              <p className="usuario"><i className="fa fa-user"></i> <strong>Usuário:</strong> {oda.usuario}</p>
                              <p className="mb-0 mt-2 font-italic"><strong>Descrição:</strong> {oda.descricao}</p>
                              <footer className="pt-2 mt-2">
                                <p><strong>Data de inclusão:</strong> {oda.data_inclusao}</p>
                                <p><strong>Palavras chave:</strong> {oda.palavras_chave}</p>
                              </footer>
                            </div>
                        </blockquote>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </div>
      </div>
    )
}
