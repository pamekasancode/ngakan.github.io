Vue.component("navbar", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="#"><img src="assets/icon.png"/></a>
          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link to="/" class="nav-link">Home</router-link>
              <router-link to="/Menu" class="nav-link">Menu</router-link>
              <router-link to="/About" class="nav-link">About</router-link>
            </div>
          </div>
        </div>
    </nav>
  `
})

const Home = {
  props: ["makanan", "cari"],
  template: `
    <div>
      <div class="search">
        <div class="container">
          <input v-on:keyup="cari" type="search" placeholder="Cari Makanan">
        </div>
      </div>
      <div class="home">
        <div class="container">
          <h4>Makanan Terlaris</h4>
          <div class="row">
            <div v-for="food in makanan" class="col-6 col-lg-3">
              <div v-if="food.rate > 7" class="food">
                <img v-bind:src="food.photo" class="photo" />
                <h5 class="name">{{food.name}}</h5>
                <p class="description">{{food.desc.substring(0, 18)+".."}}</p>
                <h4 class="price">{{food.price}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

const listMenu = {
  props: ["makanan", "cari"],
  template: `
    <div>
      <div class="search">
        <div class="container">
          <input v-on:keyup="cari" type="search" placeholder="Cari Makanan">
        </div>
      </div>
      <div class="menu">
        <div class="container">
          <h4>Daftar Menu: </h4>
          <div class="row">
            <div v-for="food in makanan" class="col-sm-6">
              <div class="food">
                <img v-bind:src="food.photo" class="photo" />
                <div class="info-menu">
                  <h5 class="name">{{food.name}}</h5>
                  <p class="description">{{food.desc}}</p>
                  <p class="rate">Rating: {{food.rate}}</p>
                  <h4 class="price">{{food.price}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

const About = {
  template: `
    <div>
      <div class="about">
        <div class="container">
          <h4>About</h4>
          <p>Website ngakan adalah website mini Project menu makanan pada Restoran ataupun Cafe. Website ini dibangun menggunakan Vue Js dan Bootstrap. </p>
        </div>
      </div>
    </div>
  `
}

const notFound = {
  template: `
    <div>
      <div class="notfound">
        <img src="assets/icon.png">
        <h3>Halaman Yang Anda Telusuri Tidak Ada</h3>
      </div>
    </div>
  `
}
