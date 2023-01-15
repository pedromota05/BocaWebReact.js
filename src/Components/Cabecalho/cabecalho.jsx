export const Cabecalho =({busca, buscaODA, lista}) => {
  var logoboca=require('./img/logo.png');
  var perfil_pedro=require('./img/img_Pedro.jpg');

  //Imagens Carousel
  var prof_boca=require('./img/bocaweb.PNG');
  var introducao=require('./img/ad_blog.jpg');
  var historia=require('./img/12.png');
  var crianca=require('./img/crianca.png');
  var netflix=require('./img/netflix.jpg');
  var isolamento=require('./img/isolamento.jpg');
    return(
        <div>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>

        {/*HTML - Sidebar/Navbar*/}
        <div id="sidebar-menu" className="sidebar">
        <div className="logo-details">
          <img src={logoboca} alt="Logo BocaWeb" />
          <span className="logo_name">BocaWeb</span>
        </div>
          <ul className="nav-links">
            <li>
              <a href="#!" className="active">
                <i className="fas fa-info-circle"></i>
                <span className="links_name">Sobre o BocaWeb</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-box' ></i>
                <span className="links_name">Produtos</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-pie-chart-alt-2' ></i>
                <span className="links_name">Estatísticas</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-user' ></i>
                <span className="links_name">Team</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-message' ></i>
                <span className="links_name">Mensagens</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-heart' ></i>
                <span className="links_name">Favoritos</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className='bx bx-cog' ></i>
                <span className="links_name">Configurações</span>
              </a>
            </li>
            <li className="log_out">
              <a href="#!">
                <i className='bx bx-log-out'></i>
                <span className="links_name">Log out</span>
              </a>
            </li>
          </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i id='sidebarBtn-menu' className='bx bx-menu sidebarBtn' onClick={() => {let sidebar = document.querySelector(".sidebar"); 
            let sidebarBtn = document.querySelector(".sidebarBtn"); sidebar.classList.toggle("active");
              if(sidebar.classList.contains("active")){ sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right"); }else{
              sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");}}}></i>
            <span className="dashboard">BocaWeb Front</span>
          </div>
          <div className="search-box">
            <input name="busca" type="text" className="form-control" value={busca} placeholder="Pesquise uma ODA" aria-label="Search" aria-describedby="search-addon1" onChange={buscaODA}></input>
            <i className='bx bx-search' ></i>
          </div>
          <div className="profile-details">
            <img src={perfil_pedro} alt="Imagem Pedro Mota"/>
            <span className="admin_name">Pedro Mota</span>
            <i className='bx bx-chevron-down'></i>
          </div>
        </nav>
      {/*Fim HTML - Sidebar/Navbar*/}

      {/*HTML - Carousel*/}
      <div className="container container-carousell">
        <div className="row">
            <div className="col-12 pb-5">
                <section className="row">
                    <div className="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                        <div id="featured" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                            <ol className="carousel-indicators top-indicator">
                                <li type="button" data-bs-target="#featured" data-bs-slide-to="0" className="active"></li>
                                <li type="button" data-bs-target="#featured" data-bs-slide-to="1"></li>
                            </ol>
                            
                            <div className="carousel-inner bg-shadow">
                                <div className="carousel-item active">
                                    <div className="card border-0 rounded-0 text-light overflow zoom">
                                        <div className="position-relative">
                                            <div className="ratio_left-cover-1 image-wrapper">
                                                <a href="#!">
                                                    <img className="img-fluid w-100 images-carousel" src={prof_boca} alt="Professor Ricardo apresentando o projeto BocaWeb"/>
                                                </a>
                                            </div>
                                            <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                <div className="news-meta">
                                                    <span className="news-author">by <a className="text-white font-weight-bold" href="#!">BocaWeb</a></span>
                                                    <span className="news-date">Oct 18, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="carousel-item">
                                    <div className="card border-0 rounded-0 text-light overflow zoom">
                                        <div className="position-relative">
                                            <div className="ratio_left-cover-1 image-wrapper">
                                                <a href="#!">
                                                    <img className="img-fluid w-100 images-carousel" src={introducao} alt="something"/>
                                                </a>
                                            </div>
                                            <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                <div className="news-meta text-black">
                                                    <span className="news-author">by <a className="text-black font-weight-bold" href="#!">BocaWeb</a></span>
                                                    <span className="news-date">Oct 18, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#featured" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#featured" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                        <div className="row">
                            <div className="col-6 pb-1 pt-0 pr-1">
                                <div className="card border-0 rounded-0 text-white overflow zoom">
                                    <div className="position-relative">
                                        <div className="ratio_right-cover-2 image-wrapper">
                                            <a href="#!">
                                                <img className="img-fluid images-lateral" src={historia} alt="something"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                            <a className="p-1 badge rounded-0 text-decoration-none text-background" href="#!">CinemaCego</a>

                                            <a href="https://www.cinemacego.com/contacao-de-historia-com-audiodescricao/" className="text-decoration-none">
                                                <h2 className="h5 text-white my-1">Contação de História com Audiodescrição</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-6 pb-1 pl-1 pt-0">
                                <div className="card border-0 rounded-0 text-white overflow zoom">
                                    <div className="position-relative">
                                        <div className="ratio_right-cover-2 image-wrapper">
                                            <a href="#!">
                                                <img className="img-fluid images-lateral" src={crianca} alt="something"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                            <a className="p-1 badge rounded-0 text-decoration-none text-background" href="#!">CinemaCego</a>
                                            <a href="https://www.cinemacego.com/audiodescricao-para-criancas/" className="text-decoration-none">
                                                <h2 className="h5 text-white my-1">Audiodescrição para crianças</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-6 pb-1 pr-1 pt-1">
                                <div className="card border-0 rounded-0 text-white overflow zoom">
                                    <div className="position-relative">
                                        <div className="ratio_right-cover-2 image-wrapper">
                                            <a href="#!">
                                                <img className="img-fluid images-lateral" src={netflix} alt="something"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                            <a className="p-1 badge rounded-0 text-decoration-none text-background" href="#!">CinemaCego</a>
                                            <a href="https://www.cinemacego.com/como-habilitar-a-ad-na-netflix/" className="text-decoration-none">
                                                <h2 className="h5 text-white my-1">Como habilitar Audiodescrição na Netflix</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-6 pb-1 pl-1 pt-1">
                                <div className="card border-0 rounded-0 text-white overflow zoom">
                                    <div className="position-relative">
                                        <div className="ratio_right-cover-2 image-wrapper">
                                            <a href="#!">
                                                <img className="img-fluid images-lateral" src={isolamento} alt="something"/>
                                            </a>
                                        </div>
                                        <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                            <a className="p-1 badge rounded-0 text-decoration-none text-background" href="#!">CinemaCego</a>
                                            <a href="https://www.cinemacego.com/o-isolamento-e-as-pessoas-com-deficiencia/" className="text-decoration-none">
                                                <h2 className="h5 text-white my-1">O isolamento e as pessoas com deficiência</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
      {/*Fim HTML - Carousel*/}

              {/*HTML - Lista*/}
                <div>
                  <div className='lista'>
                    <section className="py-5">
                      <div className="container">
                        <div className="row">
                          <p className="totalObjeto">{lista.length} Objetos Cadastrados </p>
                            {lista.map(oda => (
                              <div key={oda._id} className="col-lg-6 mx-auto" style={{marginBottom: '50px'}}>
                                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded h-100">
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
            {/*Fim HTML - Lista*/}

          {/*HTML - Footer*/}
          <footer>
           <div className="footer-wrap">
              <div className="container first_class">
                 <div className="row">
                    <div className="col-md-4 col-sm-6">
                       <h3>Seja um colaborador do BocaWeb</h3>
                       <p>Informe o seu e-mail para entrar em contato com a nossa equipe.</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <form className="newsletter d-flex">
                       <input className="form-control" type="text" placeholder="E-mail"/>
                          <a className="newsletter_submit_btn" href="http://www.bocaweb.com.br/contato" target="_blank" rel="noreferrer"><i className="fa fa-paper-plane"></i></a>
                    </form>
                    </div>
                    <div className="col-md-4 col-sm-6">
                       <div className="col-md-12">
                          <div className="standard_social_links">
                             <div>
                             <li className="round-btn btn-facebook"><a href="https://www.facebook.com/ifms.dr" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i> </a></li>
                         <li className="round-btn btn-linkedin"><a href="https://www.linkedin.com/company/instituto-federal-de-educa%C3%A7%C3%A3o-ci%C3%AAncia-e-tecnologia-de-mato-grosso-do-sul./" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i> </a></li>
                         <li className="round-btn btn-twitter"><a href="https://twitter.com/ifms" target="_blank" rel="noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i> </a></li>
                         <li className="round-btn btn-instagram"><a href="https://www.instagram.com/ifmsdourados/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i> </a></li>
                         <li className="round-btn btn-whatsapp"><a href="http://www.bocaweb.com.br/" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i> </a></li>
                         <li className="round-btn btn-envelop"><a href="mailto:ricardo.nascimento@ifms.edu.br" target="_blank" rel="noreferrer"><i className="fa fa-envelope" aria-hidden="true"></i> </a></li>
                             </div>
                          </div>   
                       </div>
                    </div>
                 </div>
              </div>

              <div className="second_class">
                 <div className="container second_class_bdr">
                 <div className="row">
                    <div>
                       <div className="footer-logo d-flex justify-content-center"><img src={logoboca} alt="logo BocaWeb"/>
                       </div>
                       <p className="d-flex justify-content-center">IFMS Dourados – Trabalho de Frameworks2 – Guilherme Sampaio e Pedro Mota.</p>
                    </div>
                 </div>
              </div>
              </div>
              
              <div className="row">
                 <div className="container-fluid">
                 <div className="copyright"> © 2022 Copyright 2019 - 2022 | BocaWeb - Desenvolvido por Ricardo Nascimento - UFGD / IFMS - Todos os direitos reservados</div>
                 </div>
              </div>
           </div>
           </footer>
        {/*Fim HTML - Footer*/}
      </section>
      
      </div>
    )
}