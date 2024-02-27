<template>
    <div class="container" id="services-overview">
        <div class="row g-2 g-lg-3 m-5">
            <div class="section-title text-center">
                <h2 class="w-75 mx-auto mb-3 mb-md-4">{{ services.title }}</h2>
            </div>

            <div class="col-md-6 col-lg-4" v-for="(item, index) in services.items" :key="index">
                <div class="card h-100">
                    <div class="hexagon" id="hexagon"></div>

                    <div class="card-body d-flex flex-column justify-content-between p-4 p-lg-5">
                        <div class="d-block">
                            <h5 class="fw-bold mb-3 mb-md-4">{{ item.title }}</h5>
                            <p class="mb-3 mb-md-4 mb-lg-5">
                                {{ item.description ?? '' }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/assets/css/home.css'
import { reactive } from 'vue'

const services = reactive({
    title: 'Software Development Services',
    items: [
        {
            title: 'CUSTOM APPLICATION DEVELOPMENT',
            description:
                'Our custom application development services help you create tailor-made software solutions that meet your unique business needs. We ensure seamless integration with existing systems and processes, resulting in improved efficiency and productivity.',
        },
        {
            title: 'E-COMMERCE DEVELOPMENT',
            description:
                'We create e-commerce solutions that enable businesses to sell their products online, providing a seamless shopping experience for customers. Our services include platform selection, payment gateway integration, and user-friendly design.',
        },
        {
            title: 'WEBSITE DESIGN & DEVELOPMENT',
            description:
                'Our team creates visually appealing and user-friendly websites that effectively communicate your brand and engage your audience. We use the latest technologies and best practices to deliver responsive and accessible web solutions.',
        },
        {
            title: 'CMS DEVELOPMENT',
            description:
                'Our CMS development services help you create powerful content management systems that allow you to manage and update your website content effortlessly. We work with popular platforms like WordPress, Drupal, and Joomla to deliver custom solutions.',
        },
        {
            title: 'MOBILE APP DEVELOPMENT',
            description:
                'We build custom mobile apps for iOS and Android platforms, providing users with a seamless and engaging experience on their devices. Our expertise in native and cross-platform development ensures high-quality mobile solutions.',
        },
    ],
})
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
