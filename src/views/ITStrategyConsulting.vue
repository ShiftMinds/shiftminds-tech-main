<template>
    <div class="container" id="services-overview">
        <div class="row g-2 g-lg-3 m-5">
            <div class="section-title text-center">
                <h2 class="w-75 mx-auto mb-3 mb-md-4">{{ header.title }}</h2>
                <p class="w-50 mx-auto mb-0">{{ header.description }}</p>
            </div>

            <div class="section-title text-center">
                <h1 class="mb-3 mb-md-4">
                    <span class="text-primary">{{ services.title }}</span>
                </h1>
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
import { reactive, ref } from 'vue'

const header = reactive({
    title: 'IT Strategy Consulting',
    description:
        'ShiftMinds Technology Solutions offers a comprehensive range of IT strategy consulting services to help businesses understand the role of technology in achieving their strategic goals. We work with our clients to develop a customized IT strategy that aligns with their business objectives.Our experienced consultants have a deep understanding of various industries and technology trends, allowing them to provide valuable insights and recommendations to help your organization make informed decisions.',
})

const services = reactive({
    title: 'OUR IT STRATEGY CONSULTING SERVICES INCLUDE:',
    items: [
        {
            title: 'Technology assessment and roadmap development',
            description: '',
        },
        {
            title: 'IT governance and organizational design',
            description: '',
        },
        {
            title: 'Business process optimization and automation',
            description: '',
        },
        {
            title: 'Enterprise architecture and solution design',
            description: '',
        },
        {
            title: 'IT risk management and security',
            description: '',
        },
        {
            title: 'Technology vendor selection and management',
            description: '',
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
