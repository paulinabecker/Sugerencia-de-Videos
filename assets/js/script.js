const moduloVideos = (() => {
  const mostrarVideo = (url, id) =>
    document.getElementById(id).setAttribute("src", url);
  const insertarVideo = (url, id) => mostrarVideo(url, id);
  return {
    insertarVideo,
  };
})();

class Multimedia {
  constructor(url) {
    this._url = url;
  }

  getUrl = () => this._url;

  setInicioSeg = (nuevaUrl) => {
    this._url = nuevaUrl;
    return console.log(
      "Este método es para realizar un cambio en la URL del video"
    );
  };
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }

  playMultimedia = () => moduloVideos.insertarVideo(this.getUrl(), this._id);

  setInicio = (tiempo) => {
    const urlInicial = `${this.getUrl()}&start=${tiempo}`;
    this.setInicioSeg(urlInicial);
    return urlInicial;
  };
}


let musica = new Reproductor(
  "https://www.youtube.com/embed/rYrInAtoNZc?si=EbEpOOaKqHI6pRh2",
  "musica"
);

let pelicula = new Reproductor(
  "https://www.youtube.com/embed/qirF5zfSo2s?si=_rCTu49xOZOm8aO0",
  "peliculas"
);

let serie = new Reproductor(
  "https://www.youtube.com/embed/jDbk6bpgD2A?si=sTPZvhgwIOeG__qb",
  "series"
);


let iniciadorMusica = musica.setInicio("3657");
musica.playMultimedia();

let iniciadorPelicula = pelicula.setInicio("265");
pelicula.playMultimedia();

let iniciadorSerie = serie.setInicio("397");
serie.playMultimedia();
