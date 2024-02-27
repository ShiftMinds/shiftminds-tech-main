<template>
  <div class="container" id="services-overview">
    <div class="row g-2 g-lg-3 m-5">
      <div class="section-title text-center">
        <h2 class="w-75 mx-auto mb-3 mb-md-4">{{ services.title }}</h2>
      </div>

      <div
        class="col-md-6 col-lg-4"
        v-for="(item, index) in services.items"
        :key="index"
      >
        <div class="card h-100">
          <div class="hexagon" id="hexagon"></div>

          <div
            class="card-body d-flex flex-column justify-content-between p-4 p-lg-5"
          >
            <div class="d-block">
              <h5 class="fw-bold mb-3 mb-md-4">{{ item.title }}</h5>
              <p class="mb-3 mb-md-4 mb-lg-5">
                {{ item.description ?? "" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "@/assets/css/home.css";
import { reactive } from "vue";

const services = reactive({
  title: "Data Analytics Services",
  items: [
    {
      title: "DATA WAREHOUSING",
      description:
        "Our data warehousing services help you collect, store, and manage large volumes of structured and unstructured data from various sources. We design and implement scalable and secure data warehouse solutions tailored to your specific business needs.",
    },
    {
      title: "MACHINE LEARNING",
      description:
        "Our machine learning services help you leverage the power of artificial intelligence to analyze large datasets, identify patterns, and make predictions. We develop custom machine learning models and algorithms tailored to your unique business challenges.",
    },
    {
      title: "DATA VISUALIZATION",
      description:
        "We create interactive and engaging data visualizations to help you better understand your data and make informed decisions. Our data visualization experts use cutting-edge tools and techniques to present complex data in a clear and compelling way.",
    },
    {
      title: "PREDICTIVE ANALYTICS",
      description:
        "We provide predictive analytics services to help you forecast future trends, identify opportunities, and mitigate risks. Our experts use advanced statistical techniques and machine learning algorithms to analyze historical data and generate actionable insights.",
    },
  ],
});
</script>

<style scoped>
.consulting-container {
  background-color: #f2f2f2;
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.consulting-text {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}
.consulting-subtitle {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}
.consulting-list {
  margin-top: 2rem;
}
</style>
