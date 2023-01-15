export const RodaPe =() => {
  var logoboca=require('./img/logo.png');
    return(
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        </head>
        <body>
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
                  <a className="newsletter_submit_btn" href="http://www.bocaweb.com.br/contato" target="_blank"><i className="fa fa-paper-plane"></i></a>
            </form>
            </div>
            <div className="col-md-4 col-sm-6">
               <div className="col-md-12">
                  <div className="standard_social_links">
                     <div>
                        <li className="round-btn btn-facebook"><a href="https://www.facebook.com/ifms.dr" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="round-btn btn-linkedin"><a href="https://www.linkedin.com/company/instituto-federal-de-educa%C3%A7%C3%A3o-ci%C3%AAncia-e-tecnologia-de-mato-grosso-do-sul./" target="_blank"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                        <li className="round-btn btn-twitter"><a href="https://twitter.com/ifms" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li className="round-btn btn-instagram"><a href="https://www.instagram.com/ifmsdourados/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                        <li className="round-btn btn-whatsapp"><a href="http://www.bocaweb.com.br/" target="_blank"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                        <li className="round-btn btn-envelop"><a href="mailto:ricardo.nascimento@ifms.edu.br" target="_blank"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
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
   </body>
    </html>
    )
}