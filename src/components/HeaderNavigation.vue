<template>
  <header class="header sticky-top bg-white">
    <div class="container">
      <nav class="navbar navbar-expand-xl py-0">
        <router-link to="/home">
          <div class="d-flex align-items-center">
            <img
              v-if="!is_theme_dark"
              src="@/assets/img/sm-logo1-emblem.png"
              alt="NSJ Technologies Logo"
              class="header-logo"
              style="margin-right: 10px"
            />
            <img
              v-else
              src="@/assets/img/nsj-tech-logo-emblem.png"
              alt="NSJ Technologies Logo -dark"
              class="header-logo-dark"
              style="margin-right: 10px"
            />
          </div>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home" role="button"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" role="button"
                >About</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#services-overview"
                @mouseover="is_services_dropdown_active = true"
                @mouseleave="is_services_dropdown_active = false"
                >Services</a
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                v-bind:to="{ name: 'Home', hash: '#request-quote' }"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
        <div class="d-flex gap-2">
          <a
            href="#"
            @click.prevent="toggleTheme()"
            class="btn btn-transparent btn-icon rounded-circle ms-3 ms-xl-5"
          >
            <transition name="rotate">
              <div
                v-if="is_theme_dark"
                class="d-flex align-items-center justify-content-center position-absolute top-0 end-0 bottom-0 start-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  style="width: 22.5px; height: 22.5px"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </div>
            </transition>
            <transition name="rotate">
              <div
                v-if="!is_theme_dark"
                class="d-flex align-items-center justify-content-center position-absolute top-0 end-0 bottom-0 start-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  style="width: 25.5px; height: 25.5px"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
            </transition>
          </a>
          <a
            href="#"
            @click.prevent="toggleMenu()"
            class="btn btn-transparent btn-icon rounded-circle d-flex d-xl-none"
          >
            <i v-if="is_menu_hidden" class="fas fa-bars"></i>
            <i v-else class="fas fa-times"></i>
          </a>
        </div>
      </nav>
    </div>

    <section
      :class="{ active: is_services_dropdown_active }"
      class="services-dropdown"
      style="max-height: calc(100vh - 90px); overflow-y: overlay"
      @mouseover="is_services_dropdown_active = true"
      @mouseleave="is_services_dropdown_active = false"
    >
      <div class="container">
        <div>
          <div class="row g-3 g-md-4 g-lg-5">
            <div class="col-6 col-md-4 col-lg-3">
              <div class="text-dark fw-bold mb-3">IT Strategy Consulting</div>
              <ul>
                <li><a href="#">IT Road Map Development</a></li>
                <li><a href="#">IT Governance</a></li>
                <li><a href="#">IT Performance Management</a></li>
                <li><a href="#">IT Service Management</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="text-dark fw-bold mb-3">Software Development</div>
              <ul>
                <li><a href="#">Custom Application Development</a></li>
                <li><a href="#">Website Design & Development</a></li>
                <li><a href="#">Mobile App Development</a></li>
                <li><a href="#">E-Commerce Development</a></li>
                <li><a href="#">CMS Development</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="text-dark fw-bold mb-3">
                Cloud Migration & Management
              </div>
              <ul>
                <li><a href="#">Cloud Migration</a></li>
                <li><a href="#">Cloud Optimization</a></li>
                <li><a href="#">Cloud Security</a></li>
                <li><a href="#">Cloud Governance</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="text-dark fw-bold mb-3">Cybersecurity Solutions</div>
              <ul>
                <li><a href="#">Vulnerability Assessments</a></li>
                <li><a href="#">Penetration Testing</a></li>
                <li><a href="#">Incident Response</a></li>
                <li><a href="#">Security Training</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="text-dark fw-bold mb-3">
                Data Analytics & Business Intelligence
              </div>
              <ul>
                <li><a href="#">Data Warehousing</a></li>
                <li><a href="#">Data Visualization</a></li>
                <li><a href="#">Machine Learning</a></li>
                <li><a href="#">Predictive Analytics</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="text-dark fw-bold mb-3">
                IT Infrastructure & Network Design
              </div>
              <ul>
                <li><a href="#">Network Design</a></li>
                <li><a href="#">Server & Storage Design</a></li>
                <li><a href="#">Virtualization</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <div class="text-dark fw-bold mb-3">Other Services</div>
              <ul>
                <li><a href="#">IT Support</a></li>
                <li><a href="#">Hardware Sales and Retailing</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="menu-backdrop"
      @click="toggleMenu()"
      :class="{ hidden: is_menu_hidden }"
    ></div>
    <div class="menu shadow bg-white" :class="{ hidden: is_menu_hidden }">
      <div class="sticky-top p-3 p-md-4">
        <div
          class="fw-bold d-flex justify-content-between align-items-center mb-0"
        >
          <h5 class="text-dark fw-bold mb-0">Menu</h5>
          <a
            href="#"
            role="button"
            class="btn btn-default btn-icon rounded-circle"
            @click.prevent="toggleMenu()"
            ><i class="fas fa-arrow-left text-dark"></i
          ></a>
        </div>
      </div>
      <div class="p-3 p-md-4">
        <div class="d-flex flex-column gap-2">
          <router-link to="/home" class="btn btn-default btn-lg"
            >Home</router-link
          >
          <router-link to="/about" class="btn btn-default btn-lg"
            >About</router-link
          >
          <a href="#" class="btn btn-default btn-lg">Services</a>
          <a
            class="btn btn-default btn-lg"
            href="#"
            @click="scrollToRequestQuote"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNavigation",
  data: () => ({
    is_menu_hidden: true,
    is_theme_dark: false,
    is_services_dropdown_active: false,
  }),
  mounted() {
    if (localStorage.getItem("_theme") === null) {
      localStorage.setItem("_theme", "light");
    } else {
      if (localStorage.getItem("_theme") == "light") {
        this.is_theme_dark = false;
        $("#app").removeClass("dark");
      } else {
        this.is_theme_dark = true;
        $("#app").addClass("dark");
      }
    }
  },
  watch: {
    is_menu_hidden(val) {
      if (val == true) {
        $("#body").removeClass("overflow-hidden");
      } else {
        $("#body").addClass("overflow-hidden");
      }
    },
    is_services_dropdown_active(val) {
      if (val != true) {
        $("#body").removeClass("overflow-hidden");
      } else {
        $("#body").addClass("overflow-hidden");
      }
    },
  },
  methods: {
    toggleTheme() {
      if (this.is_theme_dark == true) {
        localStorage.setItem("_theme", "light");
        $("#app").removeClass("dark");
        this.is_theme_dark = false;
      } else {
        localStorage.setItem("_theme", "dark");
        $("#app").addClass("dark");
        this.is_theme_dark = true;
      }
    },
    toggleMenu() {
      if (this.is_menu_hidden === false) {
        this.is_menu_hidden = true;
      } else {
        this.is_menu_hidden = false;
      }
    },
    scrollToRequestQuote() {
      // Get a reference to the Home.vue component
      const homeComponent = this.$root.$children.find(
        (component) => component.$options.name === "Home"
      );

      // Check if the Home.vue component exists
      if (homeComponent) {
        // Scroll to the "request-quote" section
        const requestQuoteSection =
          homeComponent.$el.querySelector("#request-quote");
        if (requestQuoteSection) {
          requestQuoteSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    goToRequestQuote() {
      this.$router.push({ name: "Home", hash: "#request-quote" });
    },
  },
};
</script>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: ease 0.5s;
}

.rotate-enter,
.rotate-leave-to {
  opacity: 0;
  transform: rotate(90deg);
}
</style>
