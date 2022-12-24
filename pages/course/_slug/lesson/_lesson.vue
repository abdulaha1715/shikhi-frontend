<template>
    <section class="course_start_page_area">
        <div class="container">
            <div class="row g-0">
                <!-- <pre>
                    {{ course.course_lessons }}
                </pre> -->
                <div class="col-md-4">
                    <p class="mt-3 mx-3">Course Content</p>
                </div>
                <div class="col-md-8">
                    <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive"
                        aria-atomic="true">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="toast-body">
                                <span>Laravel - Basic project development</span>
                            </div>
                            <span class="toast-text ms-5">Your progress: 0 of 38 (0%)</span>

                            <div class="toast-btn ms-auto">
                                <a class=" me-2 m-auto">Mark As Complete</a>

                            </div>
                            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                aria-label="Close"></button>

                        </div>
                    </div>
                </div>


                <div class="col-md-4">
                    <div class="course_info_accordion">
                        <ul class="p-3">
                            <li v-for="lesson in course.course_lessons" :key="course.course_lessons.lesson_id" class="tutor-course-content-list-item" :class="$route.params.lesson == lesson.lesson_slug ? 'current_lesson' : ''">
                                <div class="tutor-d-flex tutor-align-center">
                                    
                                    <NuxtLink v-if="lesson.visiblity != 'private'" :to="lesson.lesson_slug">
                                        <p class="tutor-course-content-list-item-title text-dark">
                                            <span class="tutor-course-content-list-item-icon tutor-icon-brand-youtube-bold tutor-mr-12"><i class="bi bi-youtube"></i></span>
                                            {{ lesson.lesson_name }}
                                        </p>
                                    </NuxtLink>

                                    <p v-else class="tutor-course-content-list-item-title text-secondary">
                                        <span class="tutor-course-content-list-item-icon tutor-icon-brand-youtube-bold tutor-mr-12"><i class="bi bi-youtube"></i></span>
                                        {{ lesson.lesson_name }}
                                    </p>
                                </div>

                                <div>
                                    <!-- <span class="tutor-course-content-list-item-duration tutor-fs-7 tutor-color-muted"> 09:18</span> -->
                                    <span v-if="lesson.visiblity == 'private'" class="tutor-course-content-list-item-status tutor-icon-lock-line tutor-color-muted tutor-ml-20" area-hidden="true"><i class="bi bi-lock"></i></span>
                                </div>
                            </li>
                            <li class="tutor-course-content-list-item">
                                <div class="tutor-d-flex tutor-align-center">
                                    <span
                                        class="tutor-course-content-list-item-icon tutor-icon-brand-youtube-bold tutor-mr-12"><i
                                            class="bi bi-youtube"></i></span>
                                        <p class="tutor-course-content-list-item-title text-dark">
                                            
                                        </p>
                                    <p class="tutor-course-content-list-item-title text-secondary">
                                        
                                    </p>
                                </div>

                                <div>
                                    <span class="tutor-course-content-list-item-duration tutor-fs-7 tutor-color-muted">
                                    </span>
                                    <span
                                        class="tutor-course-content-list-item-status tutor-icon-lock-line tutor-color-muted tutor-ml-20"
                                        area-hidden="true"><i class="bi bi-lock"></i></span>
                                </div>

                            </li>
                        </ul>

                    </div>

                </div>
                <div class="col-md-8">
                    <div class="youtube_embed">
                        <iframe width="" height="500" style="width: 100%;"
                            src="https://www.youtube.com/embed/rjEUK2CbA74?list=RDrjEUK2CbA74"
                            title="Muhammad Al-Muqit - Ma A'dalak (Lyric Video) | (محمد المقيط - ما أعدلك (كلمات"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>

                    <div class="single_page_tabs mt-5 text-center">
                        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                                    aria-selected="true">Overview</button>
                            </li>
                            <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane" type="button" role="tab"
                                    aria-controls="profile-tab-pane" aria-selected="false">Excercise</button>
                            </li> -->
                        </ul>
                        <div class="tab-content p-3" id="myTabContent">
                            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                aria-labelledby="home-tab" tabindex="0" v-html="">
                            </div>
                            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                                tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores modi
                                quibusdam debitis nesciunt blanditiis. Eius iste recusandae accusantium necessitatibus sit
                                doloribus ex voluptas amet. Consectetur, et debitis? Eligendi, dolorum.</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { count } from 'console'

export default {
    data() {
        return {
            course: [],
            lesson: {},
        }
    },
    created() {
        this.getCourse()
        this.getLesson()
    },
    methods: {
        /**
         * Course data
         */
        async getCourse() {
            const response = await this.$axios.get('/course/' + this.$route.params.slug)
            this.course    = response.data.data
        },

        /**
         * Course Lesson data
         */
        async getLesson() {
            const response = await this.$axios.get(this.$route.path)
            this.lesson    = response.data.data
        },

    }
}
</script>

<style scoped>
.current_lesson{
    background: rgb(42, 147, 165);
    color:#fff
}
.current_lesson a p{
    color:#fff !important
}
li.tutor-course-content-list-item.current_lesson:hover {
    background: rgb(42, 147, 165);
    cursor: pointer;
}
li.tutor-course-content-list-item {
    padding: 4px 10px 4px 10px;
}
.tutor-align-center p {
    font-size: 1rem;
    padding: 4px 10px 4px 4px;
    margin: 0;
}
.tutor-align-center p i {
    margin: 0 5px 0 0;
    padding: 0;
}

</style>