<template>
	<div class="">
		<section class="pt-4 pb-4">
			<div class="container">
				<div class="row mt-2 mb-2">
					<div class="col-lg-4 col-md-4">
						<h3 class="fw-bolder">Courses</h3>
					</div>

					<div class="col-lg-4 col-md-4 ms-auto">
						<select class="form-select" aria-label="Default select example">
							<option selected>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
				</div>
				<div class="row">
          <Courseitem v-for="course in courses" :key="course.id" :course="course"></Courseitem>
          {{ courses }}
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Courseitem from '../components/Courseitem.Vue';

export default {
  name: 'Home',
  data() {
    return {
      courses: []
    }
  },
  mounted() {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const response = this.courses = await this.$axios.$get('/courses');
        this.courses = response.data;
    },
  },

  components: { Courseitem }
}
</script>
