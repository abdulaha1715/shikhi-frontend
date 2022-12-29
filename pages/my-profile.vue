<<template>
	<section class="user-auth pt-5 pb-4">
		<div class="container">
			<div class="row">
				<div class="user-panel">
					<aside class="panel-sidebar">
						<div class="user-meta">
							<img :src="$auth.user.profile.user_thumb" :alt="$auth.user.profile.user_name">
							<h3>{{ $auth.user.profile.user_name }}</h3>
						</div>
						<article class="panel-list-wrap">
							<ul>
								<li>
									<NuxtLink to="/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</NuxtLink>
								</li>
								<li class="active">
									<NuxtLink to="/my-profile"><i class="bi bi-person-fill"></i> My Profile</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/dashboard"><i class="bi bi-book-fill"></i> Enrolled Courses</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/dashboard"><i class="bi bi-bookmark-fill"></i> Wishlist</NuxtLink>
								</li>
								<li>
									<NuxtLink to="/logout"><i class="bi bi-box-arrow-right"></i> Logout</NuxtLink>
								</li>
							</ul>
						</article>
					</aside>
					
					<div class="panel-content">
						<div class="components-body">
							<div class="user-profile">
								<div class="user-image">
									<div class="image">
										<img :src="$auth.user.profile.user_thumb" :alt="$auth.user.profile.user_name">
										<h3>Howdy, <br> {{ $auth.user.profile.user_name }}</h3>
									</div>
									<a href="#">Edit Profile</a>
								</div>
								<div class="user-info">
									<h5 class="">User Info</h5>
									<div class="table-responsive">
										<table class="table table-borderless mb-0">
											<tbody>
												<tr>
													<th class="ps-0" scope="row">Full Name :</th>
													<td class="text-muted">{{ $auth.user.profile.user_name }}</td>
												</tr>
												<tr>
													<th class="ps-0" scope="row">Mobile :</th>
													<td class="text-muted">{{ $auth.user.profile.user_mobile }}</td>
												</tr>
												<tr>
													<th class="ps-0" scope="row">E-mail :</th>
													<td class="text-muted">{{ $auth.user.profile.user_email }}</td>
												</tr>
												<tr>
													<th class="ps-0" scope="row">Location :</th>
													<td class="text-muted">{{ $auth.user.profile.user_location }}</td>
												</tr>
												<tr>
													<th class="ps-0" scope="row">Joining Date :</th>
													<td class="text-muted">{{ $auth.user.profile.user_join_date }}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div class="user-last-update">
							<p>Profile Last Update: {{ $auth.user.profile.user_last_update }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style>

</style>