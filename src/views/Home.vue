<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <video loop muted autoplay preload="auto">
        <source src="@/assets/vid/hero-bg.mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="container">
        <div class="section-title text-center">
          <h2 class="w-75 mx-auto mb-3 mb-md-4">
            Is your business ready for the digital age?
          </h2>
          <p class="w-50 mx-auto mb-0">
            At ShiftMinds Technology Solutions, we believe that digital
            transformation is essential for businesses to thrive in today's
            rapidly evolving landscape.
          </p>
          <p></p>
          <p>
            We offer a range of services and solutions designed to help
            businesses harness the power of technology and stay ahead of the
            curve.
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <!-- <router-link class="nav-link" v-bind:to="{ name: 'Home', hash: '#request-quote' }">Contact</router-link> -->
          <a type="button" class="btn btn-primary btn-lg" href="#inquire"
            >Inquire Now</a
          >
        </div>
      </div>
    </section>

    <!-- Welcome Message Section -->
    <section class="welcome-message">
      <div class="container">
        <div class="row g-0">
          <div class="col-lg-10 mx-auto">
            <div class="position-relative">
              <div class="img-bg"></div>
              <div class="card-wrapper p-md-4 p-lg-5 mx-3 mx-md-0">
                <div class="card shadow">
                  <div class="card-body p-4 p-lg-5">
                    <h4 class="fw-bold text-dark mb-3 mb-md-4">
                      Welcome to ShiftMinds Technology Solutions
                    </h4>
                    <p>
                      Welcome to ShiftMinds Technology Solutions, where we
                      transform ideas into reality with innovative and
                      cutting-edge solutions. We are a team of experienced and
                      dedicated professionals who are committed to providing our
                      clients with exceptional services and products.
                    </p>
                    <p class="mb-0">
                      Our expertise spans across multiple domains, including
                      software development, artificial intelligence, machine
                      learning, blockchain, and cloud computing. We work with
                      small, medium, and large businesses, delivering custom
                      solutions tailored to their unique needs.
                    </p>
                    <p></p>
                    <p class="mb-0">
                      Our services are designed to help you maximize your
                      potential and achieve your business objectives. Whether
                      you need a robust web application, a mobile app, or a
                      comprehensive enterprise solution, we have the skills and
                      expertise to deliver.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview Section -->
    <section class="services-overview pb-0" id="services-overview">
      <div class="container">
        <div class="section-title text-center">
          <h1 class="mb-3 mb-md-4">
            <span class="text-primary">Services</span>
          </h1>
          <h2 class="w-75 mx-auto mb-3 mb-md-4">Our Business solutions</h2>
          <p class="w-50 mx-auto mb-0">
            At ShiftMinds Technology Solutions, we offer a wide range of
            services to help businesses succeed in the digital era.
          </p>
        </div>
        <div class="row g-2 g-lg-3">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div class="hexagon" id="hexagon"></div>

              <div
                class="card-body d-flex flex-column justify-content-between p-4 p-lg-5"
              >
                <div class="d-block">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    IT Strategy Consulting
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Our IT strategy consulting services are designed to help
                    businesses understand the role of technology in achieving
                    their strategic goals. We work with our clients to develop a
                    customized IT strategy that aligns with their business
                    objectives.
                  </p>
                </div>
                <div class="d-inline-block">
                  <!-- <a href="#">Learn More</a> -->
                  <router-link
                    to="/it-strategy-consulting"
                    class="btn btn-primary"
                    >Learn More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div
                class="card-body d-flex flex-column justify-content-between p-4 p-lg-5"
              >
                <div class="d-block">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Software Development
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Our software and systems development services include custom
                    software development, integration of third-party systems,
                    and maintenance and support of existing systems.
                  </p>
                </div>
                <div class="d-inline-block">
                  <!-- <a href="#">Learn More</a> -->
                  <router-link
                    to="/software-development"
                    class="btn btn-primary"
                    >Learn More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div
                class="card-body d-flex flex-column justify-content-between p-4 p-lg-5"
              >
                <div class="d-block">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Data Analytics & Business Intelligence
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Our data analytics services include data visualization,
                    machine learning, and business intelligence to help you
                    extract insights and make data-driven decisions.
                  </p>
                </div>
                <div class="d-inline-block">
                  <!-- <a href="#">Learn More</a> -->
                  <router-link to="/data-analytics" class="btn btn-primary"
                    >Learn More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div
                class="card-body d-flex flex-column justify-content-between p-4 p-lg-5"
              >
                <div class="d-block">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Cloud Migration & Management
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Our cloud computing services can help you migrate your
                    workloads and data to the cloud, choose the right cloud
                    platform for your needs, and optimize your cloud costs.
                  </p>
                </div>
                <div class="d-inline-block">
                  <!--<a href="#">Learn More</a></a>-->
                  <router-link to="/cloud-management" class="btn btn-primary"
                    >Learn More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div
                class="card-body d-flex flex-column justify-content-between p-4 p-lg-5"
              >
                <div class="d-block">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    Cybersecurity Solutions
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Our cybersecurity services include security audits,
                    penetration testing, and employee training to help you
                    protect your systems from cyber threats.
                  </p>
                </div>
                <div class="d-inline-block">
                  <!-- <a href="#">Learn More</a> -->
                  <router-link to="/cyber-security" class="btn btn-primary"
                    >Learn More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <div
                class="card-body d-flex flex-column justify-content-between p-4 p-lg-5"
              >
                <div class="-dblock">
                  <h5 class="text-dark fw-bold mb-3 mb-md-4">
                    IT Infrastructure & Network Design
                  </h5>
                  <p class="mb-3 mb-md-4 mb-lg-5">
                    Our IT Infrastructure Services provide comprehensive
                    solutions to ensure the reliability, performance, and
                    security of your organization's critical technology
                    infrastructure. We focus on delivering tailored services to
                    meet your specific needs, enabling your business to run
                    smoothly and efficiently.
                  </p>
                </div>
                <div class="d-inline-block">
                  <!-- <a href="#">Learn More</a> -->
                  <router-link to="/it-infrastructure" class="btn btn-primary"
                    >Learn More</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Request Quote Section -->
    <!-- <section id="request-quote" class="request-quote" > -->
    <section class="request-quote" id="inquire" ref="requestQuoteSection">
      <div class="container">
        <div class="section-title text-center">
          <h1 class="mb-3 mb-md-4">
            <span class="text-primary">Quotation</span>
          </h1>
          <h2 class="w-75 mx-auto mb-3 mb-md-4">Request a quote now</h2>
          <p class="w-50 mx-auto mb-0">
            Our services offer a comprehensive approach to bringing your ideas
            to life.
          </p>
          <p></p>
          <p>
            Whether you need a robust web application, a mobile app, or a
            comprehensive enterprise solution, we have the skills and expertise
            to deliver. Contact us today to learn more about our services and
            how we can help bring your ideas to life.
          </p>
        </div>
        <div class="row g-4 g-lg-0">
          <div class="col-lg-6">
            <div
              class="my-lg-5 me-lg-5"
              style="position: sticky; top: calc(86.5px + 3rem)"
            >
              <h4 class="text-dark fw-bold mb-3 mb-md-4">
                What will be the next step?
              </h4>
              <p class="mb-4 mb-lg-5">
                You're a few steps ahead to build your project.
              </p>
              <div class="d-flex flex-column gap-4 gap-lg-5">
                <div class="d-flex gap-4">
                  <div class="d-inline-block">
                    <div class="btn-icon btn-primary btn-icon rounded-circle">
                      <i class="far fa-file"></i>
                    </div>
                  </div>
                  <div class="d-block" style="margin-top: 0.65rem">
                    <h6 class="fw-bold text-dark mb-3">
                      <span class="text-muted">1.</span> We will prepare a
                      proposal
                    </h6>
                    <p class="mb-0">
                      Our team of experts will work with you to understand your
                      requirements and prepare a detailed proposal that outlines
                      our plan for bringing your idea to life. We will take into
                      consideration your unique needs and preferences to ensure
                      that the proposal is tailored to your business.
                    </p>
                  </div>
                </div>
                <div class="d-flex gap-4">
                  <div class="d-inline-block">
                    <div class="btn-icon btn-primary btn-icon rounded-circle">
                      <i class="fas fa-chalkboard"></i>
                    </div>
                  </div>
                  <div class="d-block" style="margin-top: 0.65rem">
                    <h6 class="fw-bold text-dark mb-3">
                      <span class="text-muted">2.</span> Together we discuss it
                    </h6>
                    <p class="mb-0">
                      Once you have reviewed and approved the proposal, we will
                      schedule a meeting to discuss the project in detail.
                      During this meeting, we will address any questions or
                      concerns you may have and work together to refine the
                      plan.
                    </p>
                  </div>
                </div>
                <div class="d-flex gap-4">
                  <div class="d-inline-block">
                    <div class="btn-icon btn-primary btn-icon rounded-circle">
                      <i class="fas fa-hammer"></i>
                    </div>
                  </div>
                  <div class="d-block" style="margin-top: 0.65rem">
                    <h6 class="fw-bold text-dark mb-3">
                      <span class="text-muted">3.</span> Lets start building
                    </h6>
                    <p class="mb-0">
                      With the plan in place and your approval secured, we will
                      begin building your project. Our team of skilled
                      professionals will work tirelessly to ensure that every
                      aspect of the project is executed to perfection. You can
                      rest assured that we will deliver a quality product that
                      meets your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body p-4 p-lg-5">
                <p class="mb-3 mb-md-4">
                  Kindly fill in the form below. All of the fields are required.
                </p>
                <form>
                  <input
                    type="text"
                    class="form-control form-control-lg mb-2 mb-md-3"
                    placeholder="Name"
                    v-model="user.name"
                  />
                  <div class="row g-2 g-md-3 mb-2 mb-md-3">
                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        placeholder="Email Address"
                        v-model="user.email"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Mobile Number"
                        v-model="user.contact"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    class="form-control form-control-lg mb-2 mb-md-3"
                    placeholder="Company"
                    v-model="user.company"
                  />

                  <textarea
                    class="form-control form-control-lg mb-3 mb-md-4"
                    cols="30"
                    rows="10"
                    v-model="user.messages"
                    placeholder="Message"
                  />

                  <button
                    type="button"
                    class="btn btn-primary btn-lg w-100"
                    @click="inquireUser()"
                    :disabled="loading"
                  >
                    {{ loading ? "Loading" : "Submit" }}
                  </button>
                  <p class="text-center small text-muted mt-3 mb-0">
                    By clicking the "Submit" button, you agree to the
                    <a href="#">Privacy Policy</a> and
                    <a href="#">Terms & Conditions</a> of ShiftMinds Technology
                    Solutions.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import "@/assets/css/home.css";
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const user = reactive({
  name: "",
  email: "",
  contact: "",
  company: "",
  messages: "",
});

const loading = ref(false);

async function inquireUser() {
  loading.value = true;
  try {
    await axios.post("https://shiftmindstech.vercel.app/api/api/inquire", user);

    console.log(user);

    loading.value = false;

    for (const key of Object.keys(user)) user[key] = "";

    Swal.fire({
      title: "Success!",
      text: "Inquiry successfuly sent",
      icon: "success",
    });
  } catch (error) {
    console.log(error);
  }
}
</script>
