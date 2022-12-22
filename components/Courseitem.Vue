<template>
  <div class="col-lg-4 col-md-6 col-12 mt-4">
    <!-- {{ course }} -->
    <div class="card">
      <img :src="course.course_thumb" class="card-img-top" :alt="course.course_name" />
      <button @click.prevent="addToWishlist( course.course_id )" class=""><i class="bi bi-bookmark card-bookmark"></i></button>
      <div class="card-body pb-0">
        <div class="tutor-course-ratings">
          <div class="tutor-ratings">
            <div class="tutor-ratings">
              <span class="tutor-icon-star-bold"><i class="bi bi-star-fill"></i></span>
              <span class="tutor-icon-star-bold"><i class="bi bi-star-fill"></i></span>
              <span class="tutor-icon-star-bold"><i class="bi bi-star-fill"></i></span>
              <span class="tutor-icon-star-bold"><i class="bi bi-star-fill"></i></span>
              <span class="tutor-icon-star-bold"><i class="bi bi-star-fill"></i></span>
            </div>
            <div class="tutor-ratings-average">5.0</div>
            <div class="tutor-ratings-count">({{ course.course_reviews.length }})</div>
          </div>
        </div>
        <h5 class="card-title mt-3 mb-3">{{ course.course_name }}</h5>
        <div class="tutor-meta mb-3">
          <div class="d-inline">
            <span class="tutor-meta-icon tutor-icon-user-line" area-hidden="true"><i class="bi bi-person"></i></span>
            <span class="tutor-meta-value">{{ course.course_students.length }}</span>
          </div>

          <div class="d-inline p-2">
            <span class="tutor-meta-icon tutor-icon-clock-line ml-3" area-hidden="true"><i class="bi bi-clock"></i></span>
            <span class="tutor-meta-value"> 2h 23m</span>
          </div>
        </div>

        <div class="tutor-meta tutor-name-cat">
          <div class="d-inline">
            <div class="tutor-avatar d-inline">
              <img :src="course.course_teacher.user_thumb" :alt="course.course_teacher.user_name" srcset="" />
            </div>
          </div>

          <div class="d-inline">
            By
            <a href="#">{{ course.course_teacher.user_name }}</a>

            In
            <a href="#">{{ course.course_category }}</a>
          </div>
        </div>
      </div>
      <hr class="border-1 mb-2" />
      <NuxtLink :to="'course/'+course.course_slug" class="btn-tutor">View Course</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {}
  },
  methods: {
    async addToWishlist(id) {
      const response = await this.$axios.post('/wishlist', {
        'course_id': id
      });
    },
  },
}
</script>

<style>

</style>
