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
    title: 'IT Infastructure Services',
    items: [
        {
            title: 'NETWORK DESIGN AND IMPLEMENTATION',
            description:
                'Our network design and implementation services help you build reliable, scalable, and secure network infrastructure. We work closely with your organization to understand your requirements and design a tailored network solution that meets your current and future needs.',
        },
        {
            title: 'IT SERVICE MANAGEMENT',
            description:
                'Our IT service management solutions help you streamline your IT processes, improve service delivery, and reduce operational costs. We implement best practices based on ITIL and other industry standards to provide a robust and efficient IT service management framework.',
        },
        {
            title: 'SERVER AND STORAGE MANAGEMENT',
            description:
                'We provide server and storage management services to ensure the optimal performance and availability of your critical IT infrastructure. Our team of experts monitors, manages, and maintains your servers and storage systems, ensuring they are up-to-date and secure.',
        },
        {
            title: 'BACKUP AND DISASTER RECOVERY',
            description:
                'Our backup and disaster recovery services protect your critical data and applications from data loss and system failures. We design and implement customized backup and disaster recovery plans to ensure business continuity and minimize downtime in the event of a disaster.',
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
