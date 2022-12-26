<template>
	<div>
		<header>
			<nav class="navbar navbar-expand-lg navbar-light border-bottom border-1 pt-3 pb-3">
				<div class="container">
					<NuxtLink class="navbar-brand" to="/">
						<h2 class="fw-bolder">Shikhi</h2>
					</NuxtLink>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
							
							<li v-if="$auth.loggedIn" class="nav-item">
								<a href=""><img :src="$auth.user.user_thumb" alt=""> {{ $auth.user.user_name }}</a>
								<ul>
									<li>
										<NuxtLink class="nav-link" aria-current="page" to="/my-profile">My Profile</NuxtLink>
									</li>
									<li>
										<span style="cursor:pointer" @click.prevent="handleLogout" class="nav-link" v-if="$auth.loggedIn">Logout</span>
									</li>
								</ul>
							</li>

							<li v-else class="nav-item">
								<NuxtLink to="/login"  class="nav-link" aria-current="page">Login</NuxtLink >
							</li>
							<li class="nav-item">
								<NuxtLink class="nav-link" to="/">Courses</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>

<script>
export default {
	methods: {
		handleLogout(){
            this.$auth.logout()
        }
	}
}
</script>

<style>

</style>
