<template>
  <div>
    <section class="pt-5 pb-4">
        <div class="container">
            <div class="row">
                <pre>
                    <!-- {{ course }} -->
                </pre>
                <div class="tutor-course-ratings">
                    <div class="tutor-ratings">
                        <div class="tutor-ratings">
                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                        </div>
                        <div class="tutor-ratings-average">5.0</div>
                        <div class="tutor-ratings-count">({{ course.course_reviews?.length }})</div>
                    </div>
                </div>
                <h5 class="card-title mt-3 mb-3">{{ course.course_name }}</h5>
                <div class="single-page-tutor-meta mb-3">
                    <div class="d-inline">
                        <span class="tutor-meta-icon tutor-icon-user-line" area-hidden="true">Cagetory:</span>
                        <span class="tutor-meta-value">{{ course.course_category }}</span>
                    </div>

                    <div class="d-inline p-2 wishlist">
                        <span class="tutor-meta-icon tutor-icon-clock-line ml-3" area-hidden="true"><i class="bi bi-bookmark single-card-bookmark"></i></span>
                        <span class="tutor-meta-value"> Wishlist</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <!-- single page left side content start -->
                <div class="col-lg-8 left-tutor-col">
                    <div class="row">
						<img :src="course.course_thumb" :alt="course.course_name" srcset="" class="card-img-top" />
                    </div>
                    <div class="row single-tutor-info">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                    Course Info
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    Reviews
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div v-html="course.course_side_note"></div>
                                <div class="couse-content">
                                    <h4>Course Content</h4>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <h5>Accordion Item #1</h5>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <ul class="tutor-class-content-list">
                                                        <li class="tutor-course-content-list-item">
                                                            <div class="tutor-d-flex tutor-align-center">
                                                                <span class="tutor-course-content-list-item-icon tutor-icon-brand-youtube-bold tutor-mr-12"><i class="bi bi-youtube"></i></span>
                                                                <p class="tutor-course-content-list-item-title">
                                                                    1. How to use Vue (using the CDN)
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <span class="tutor-course-content-list-item-duration tutor-fs-7 tutor-color-muted"> 09:18</span>
                                                                <span class="tutor-course-content-list-item-status tutor-icon-lock-line tutor-color-muted tutor-ml-20" area-hidden="true"><i class="bi bi-lock"></i></span>
                                                            </div>
                                                        </li>
                                                        <li class="tutor-course-content-list-item">
                                                            <div class="tutor-d-flex tutor-align-center">
                                                                <span class="tutor-course-content-list-item-icon tutor-icon-brand-youtube-bold tutor-mr-12"><i class="bi bi-youtube"></i></span>
                                                                <p class="tutor-course-content-list-item-title">
                                                                    1. How to use Vue (using the CDN)
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <span class="tutor-course-content-list-item-duration tutor-fs-7 tutor-color-muted"> 09:18</span>
                                                                <span class="tutor-course-content-list-item-status tutor-icon-lock-line tutor-color-muted tutor-ml-20" area-hidden="true"><i class="bi bi-lock"></i></span>
                                                            </div>
                                                        </li>
                                                        <li class="tutor-course-content-list-item">
                                                            <div class="tutor-d-flex tutor-align-center">
                                                                <span class="tutor-course-content-list-item-icon tutor-icon-brand-youtube-bold tutor-mr-12"><i class="bi bi-youtube"></i></span>
                                                                <p class="tutor-course-content-list-item-title">
                                                                    1. How to use Vue (using the CDN)
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <span class="tutor-course-content-list-item-duration tutor-fs-7 tutor-color-muted"> 09:18</span>
                                                                <span class="tutor-course-content-list-item-status tutor-icon-lock-line tutor-color-muted tutor-ml-20" area-hidden="true"><i class="bi bi-lock"></i></span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <h5>Student Ratings & Reviews</h5>

                                <div class="students-review-on-tutor card">
                                    <div class="tutor-review card-body">
                                        <div class="tutor-review-left">
                                            <div class="tutor-review-summary-average-rating">5.0</div>
                                            <div>
                                                <div class="tutor-d-inline-block">
                                                    <div class="tutor-ratings tutor-ratings-lg">
                                                        <div class="tutor-ratings-stars">
                                                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                            <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tutor-fs-6 tutor-color-secondary tutor-mt-12 tutor-total-rating-count">Total: 23 Ratings</div>
                                        </div>
                                        <div class="tutor-review-right">
                                            <div class="tutor-review-summary-ratings">
                                                <div class="row tutor-align-center tutor-review-summary-rating">
                                                    <div class="col-2 text-end">
                                                        <div class="tutor-ratings">
                                                            <div class="tutor-ratings-stars">
                                                                <span class="tutor-icon-star-line" area-hidden="true">
                                                                    <i class="bi bi-star"></i>
                                                                </span>
                                                            </div>
                                                            <div class="tutor-ratings-average">
                                                                5
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-7">
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                                        </div>
                                                    </div>

                                                    <div class="col-3">
                                                        <span class="tutor-fs-6 tutor-color-secondary tutor-individual-star-rating">1 Rating</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="border-1 mb-2" />
                                    <!-- </div>

                    <div class="card"> -->
                                    <div class="row card-body single-tutor-meta-info">
                                        <div class="col-lg-4 tutor-meta-info">
                                            <div class="tutor-avatar">
                                                <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Gazi+Moshiul" alt="" srcset="" />
                                            </div>
                                            <a href="#">Polash Mahmud</a>
                                            <div class="tutor-comments-date">5th Sep, 2022</div>
                                        </div>
                                        <div class="col-lg-8 tutor-meta-user-comments">
                                            <div class="tutor-meta-ratings-star">
                                                <div class="tutor-ratings tutor-ratings-lg">
                                                    <div class="tutor-ratings-stars">
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tutor-meta-comments">Lorem ipsum dolor sit amet.</div>
                                        </div>
                                    </div>

                                    <div class="row card-body single-tutor-meta-info">
                                        <div class="col-lg-4 tutor-meta-info">
                                            <div class="tutor-avatar">
                                                <img src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Gazi+Moshiul" alt="" srcset="" />
                                            </div>
                                            <a href="#">Polash Mahmud</a>
                                            <div class="tutor-comments-date">5th Sep, 2022</div>
                                        </div>
                                        <div class="col-lg-8 tutor-meta-user-comments">
                                            <div class="tutor-meta-ratings-star">
                                                <div class="tutor-ratings tutor-ratings-lg">
                                                    <div class="tutor-ratings-stars">
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                        <span class="tutor-icon-star-bold"><i class="bi bi-star"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tutor-meta-comments">Lorem ipsum dolor sit amet.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- single page right sidebar start -->
                <div class="col-lg-4 right-tutor-col">
                    <div class="card">
                        <div class="card-body single-page-card-body pb-0">
                            <h3 class="card-title mt-3 mb-3">Free</h3>
                        </div>
                        <a href="single-page.html" class="btn-tutor">Enroll Course</a>
                        <div class="tutor-meta">
                            <div class="tutor-avatar text-center">
                                Free access this course
                            </div>
                        </div>
                        <hr class="border-1 mb-2" />

                        <div class="single-tutor-meta mb-3">
                            <ul class="single-tutor-ul">
                                <li class="text-capitalize">
                                    <span><i class="bi bi-water"></i></span>{{ course.course_level }}
                                </li>
                                <li>
                                    <span><i class="bi bi-mortarboard"></i></span>{{ course?.course_students?.length }} Total Enrolled
                                </li>
                                <li>
                                    <span><i class="bi bi-arrow-repeat"></i></span>Last Updated - {{ course.last_update }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-body single-page-card-body pb-0">
                            <span>A course by</span>
                            <div class="single-tutor-user-meta">
                                <div class="d-inline">
                                    <div class="tutor-avatar d-inline">
                                        <img :src="course?.course_teacher?.user_thumb" :alt="course?.course_teacher?.user_name" srcset="" />
                                        By
                                        <a href="#">{{ course?.course_teacher?.user_name }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="border-1 mb-2" />
                        <div class="single-tutor-meta-side-info card-body">
                            <div v-html="course.course_side_note"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: []
    }
  },
  created() {
    this.getCourse()
  },
  methods: {
    async getCourse() {
    	const response = await this.$axios.get(this.$route.path);
    	this.course    = response.data.data;
    },
  }
}
</script>

<style>

</style>
