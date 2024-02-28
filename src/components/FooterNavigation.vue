<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <router-link to="/home" class="d-inline-block mb-4">
            <!-- <img
              src="@/assets/img/nsj-tech-logo-emblem.png"
              alt="NSJ Technologies Logo"
              class="footer-logo"
            /> -->
            <img
              src="@/assets/img/nsj-tech-logo-emblem.png"
              alt="NSJ Technologies Logo"
              class="footer-logo"
            />
          </router-link>
          <p class="fst-italic mb-4 mb-lg-5">
            Powered by Technology, Driven by Passion
          </p>
          <div class="d-flex gap-2">
            <a href="#" class="btn btn-dark btn-icon" title="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="btn btn-dark btn-icon" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="btn btn-dark btn-icon" title="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn btn-dark btn-icon" title="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-2">
          <h6 class="mb-4">ShiftMinds Technology Solutions</h6>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-4">
          <h6 class="mb-4">Get in Touch</h6>
          <ul>
            <li>
              <a href="#"
                >7A HAITI COR SOLIVEN ST GREENHEIGHTS SUBDIVISION PHASE 1
                CONCEPCION UNO MARIKINA CITY
              </a>
            </li>
            <li><a href="#">inquiry@shiftminds.com.ph </a></li>
            <li><a href="#">(02) 8810 8120</a></li>
            <li><a href="#">+639957634174</a></li>
          </ul>
        </div>
      </div>
      <div
        class="my-5"
        style="height: 1px; border-top: 2px solid #262831"
      ></div>
      <div
        class="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center gap-3 gap-lg-4"
      >
        <span>Copyright © {{ year }} ShiftMinds Technology Solutions</span>
        <div class="d-flex flex-column flex-lg-row gap-2 gap-lg-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterNavigation",
  data: () => ({
    year: "",
  }),
  mounted() {
    this.year = new Date().getFullYear();
  },
};
</script>
