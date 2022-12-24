<template>
  <div class="col-lg-4 col-md-6 col-12 mt-4">
      <div class="card item-ease">
          <div class="image-area">
            <img :src="course.course_thumb" class="card-img-top" :alt="course.course_name" />
              <span class="cat">{{ course.course_category }}</span>
              <span @click.prevent="addToWishlist( course.course_id )" class=""><i class="bi bi-bookmark card-bookmark"></i></span>

              <div class="tutor-course-ratings">
                  <span class="tutor-ratings-average">4.5</span>
                  <span class="tutor-ratings">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                  </span>
                  <span class="tutor-ratings-count">({{ course.course_reviews.length }})</span>
              </div>
          </div>

          <div class="card-body pb-0">

              <h5 class="card-title mt-3 mb-3">{{ course.course_name }}</h5>
              <p>{{ course.course_description }}</p>
              <div class="tutor-meta">
                  <div class="avatar">
                    <img :src="course.course_teacher.user_thumb" :alt="course.course_teacher.user_name" srcset="" />
                  </div>
                  <div class="meta">
                      <h4>{{ course.course_teacher.user_name }}</h4>
                      <span class="time"><i class="bi bi-calendar-date"></i> {{ course.last_update }}</span>
                      <span class="students"><i class="bi bi-person"></i> {{ course.course_students.length }}</span>
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

<style scoped>

.card.item-ease {
    border: none;
    box-shadow: 0 0 8px #ddd;
}

.card.item-ease a {
    cursor: pointer;
}

.image-area {
    position: relative;
    overflow: hidden;
}

.card-bookmark {
    cursor: pointer;
}

span.cat {
    position: absolute;
    left: 10px;
    bottom: -80%;
    background: #56bfe7;
    border: 1px solid #83bacf;
    padding: 3px 12px;
    border-radius: 15px;
    color: #fff;
    font-size: 13px;
    text-transform: capitalize;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
}

.image-area:hover img {}

.card.item-ease:hover span.cat {
    opacity: 1;
    visibility: visible;
    bottom: 10px;
}

.image-area:before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #ddd;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}

.card.item-ease:hover .image-area:before {
    opacity: 0.5;
    visibility: visible;
}

.item-ease h5.card-title {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 8px 0 !important;
}

.item-ease p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 25px;
    text-transform: capitalize;
}

.tutor-meta {
    display: flex;
}

.tutor-meta .avatar {margin-right: 10px;}

.tutor-meta .avatar img {
    border-radius: 5px;
    width: 50px;
}

.tutor-meta .meta {}

.tutor-meta .meta h4 {
    font-size: 16px;
    margin-bottom: 3px;
}

.tutor-meta .meta .time {
    display: inline-block;
    margin-right: 8px;
}

.tutor-course-ratings {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #fff;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 12px;
}

span.tutor-ratings-average {
    font-weight: 600;
}

span.tutor-ratings-count {
    font-weight: 300;
}

</style>
