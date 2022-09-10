export const ListaOda = ({lista})=>{
    return(
        <div className = 'lista'>
        <p>{lista.length} lista </p>
        {lista.map(oda => (
          <div className='objetoOda' key={oda.id}>
            <h1>nome: {oda.nome}</h1>
            <p>usuario: {oda.usuario}</p>
            <p>descricao: {oda.descricao}</p>
            <p>data de inclusão: {oda.data_inclusao}</p>
            <p>palavras chave: {oda.palavras_chave}</p>
        </div>
        ) )}
      </div>
    )

}
