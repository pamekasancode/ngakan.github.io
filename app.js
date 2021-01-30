const routes = [
  {path: "/", component: Home},
  {path: "/menu", component: listMenu},
  {path: "/about", component: About},
  {path: "*", component: notFound}
]

const router = new VueRouter ({
  routes
})

const app = new Vue({
  el: "#app",
  router,
  components: {
    "home": Home,
    "list-menu": listMenu,
    "about": About,
    "notfound": notFound
  },
  data: {
    query: "",
    data: []
  },
  mounted() {
    fetch("db.json").then(r => r.json())
    .then(foods => {
      this.data = foods.data
    })
  },
  methods: {
    cari: function(e) {
      this.query = e.target.value
    }
  },
  computed: {
    cariMakanan: function() {
      return this.data.filter(food => {
        return food.name.includes(this.query)
      })
    }
  }
})
