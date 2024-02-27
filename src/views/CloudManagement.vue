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
    title: 'Cloud Management Services',
    items: [
        {
            title: 'CLOUD MIGRATION',
            description:
                'Our cloud migration services help you seamlessly move your workloads and data to the cloud. We assess your existing infrastructure, develop a migration strategy, and manage the entire migration process to ensure a smooth transition.',
        },
        {
            title: 'CLOUD SECURITY',
            description:
                'Our cloud security services help you protect your cloud infrastructure from threats and vulnerabilities. We implement security best practices, conduct regular security assessments, and ensure compliance with industry standards and regulations.',
        },
        {
            title: 'CLOUD OPTIMIZATION',
            description:
                'We analyze your cloud infrastructure and applications to identify opportunities for cost savings and performance improvements. Our cloud optimization services include resource utilization monitoring, cost management, and performance tuning.',
        },
        {
            title: 'CLOUD GOVERNANCE',
            description:
                'We provide cloud governance services to help you establish and maintain control over your cloud environment. Our experts develop policies, processes, and procedures to ensure the efficient and secure use of cloud resources across your organization.',
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
