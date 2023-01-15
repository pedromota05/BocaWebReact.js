export const Carousel =() => {
    var introducao=require('./img/ad_blog.jpg');
    var significado=require('./img/significado.PNG');
    var tirinha=require('./img/tirinha.PNG');
      return(
          <html>
          <head>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
              <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          </head>
          <body>
              <div className="row d-flex justify-content-center">
                  <div id="myCarousel" className="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img width="100%" height="100%" src={introducao} className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Pegunta o conhecimento sobre audiodescrição"/>
                        </div>
  
                        <div className="carousel-item">
                          <img width="100%" height="100%" src={significado} className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Significa de audiodescrição"/>
                        </div>
  
                        <div className="carousel-item">
                          <img width="100%" height="100%" src={tirinha} className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" alt="Tirinha mostrando uma descrição da escola"/>
                        </div>
                      </div>
  
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
          </body>
          </html>
      )
  }