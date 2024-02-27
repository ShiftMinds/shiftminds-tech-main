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
    title: 'Cyber Security Services',
    items: [
        {
            title: 'VULNERABILITY ASSESSMENTS',
            description:
                'Our vulnerability assessment services help you identify and prioritize security risks in your IT infrastructure. We use state-of-the-art tools and methodologies to detect vulnerabilities and provide actionable recommendations to strengthen your security posture.',
        },
        {
            title: 'INCIDENT RESPONSE',
            description:
                'We provide incident response services to help you effectively manage and recover from cybersecurity incidents. Our team of experts work closely with your organization to contain, investigate, and remediate security breaches, minimizing the impact on your business operations.',
        },
        {
            title: 'PENETRATION TESTING',
            description:
                'Our penetration testing services simulate real-world cyber attacks to identify weaknesses in your systems, networks, and applications. Our certified ethical hackers use advanced techniques to test your security defenses and provide a detailed report of findings and remediation guidance.',
        },
        {
            title: 'SECURITY TRAINING',
            description:
                'Our security training services help you develop a security-aware workforce capable of protecting your organization from cyber threats. We offer customized training programs covering topics such as phishing awareness, secure coding practices, and information security best practices.',
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
