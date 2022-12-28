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
								<li class="active">
									<a href="dashboard.html"><i class="bi bi-speedometer2"></i> Dashboard</a>
								</li>
								<li>
									<a href="profile.html"><i class="bi bi-person-fill"></i>My Profile</a>
								</li>
								<li>
									<a href="progress.html"><i class="bi bi-speedometer2"></i> Progress</a>
								</li>
								<li>
									<a href="wishlist.html"><i class="bi bi-water"></i> Wishlist</a>
								</li>
								<li>
									<a href=""><i class="bi bi-box-arrow-right"></i> Logout</a>
								</li>
							</ul>
						</article>
					</aside>
					<div class="panel-content">
						<div class="components-body">
							<div class="components">
								<!-- style-1 -->
								<div class="style-1">
									<div class="icon">
										<i class="bi bi-book-fill"></i>
									</div>
									<div class="card-meta">
										<h3>{{ $auth.user.enroll_courses.length }}</h3>
										<span>Enrolled Courses</span>
									</div>
								</div>
								<!-- style-1 -->
								<div class="style-1">
									<div class="icon">
										<i class="bi bi-bookmark-fill"></i>
									</div>
									<div class="card-meta">
										<h3>{{ $auth.user.wishlist.length }}</h3>
										<span>Wishlist</span>
									</div>
								</div>
								<!-- style-1 -->
								<div class="style-1">
									<div class="icon">
										<i class="bi bi-mortarboard-fill"></i>
									</div>
									<div class="card-meta">
										<h3>{{ $auth.user.completed_courses.length }}</h3>
										<span>Complete Courses</span>
									</div>
								</div>

							</div>

							<div class="dashboard-lists">
								<div class="list-card">
									<div class="table-head">
										<h3>Complete Lessons</h3>
									</div>
									<table class="table table-borderless spot">
										<tbody>
											<tr>
												<td><span></span>Review and make sure nothing slips through cracks</td>
												<td>15 Sep, 2021</td>
											</tr>
											<tr>
												<td><span></span>Send meeting invites for sales upcampaign</td>
												<td>18 Sep, 2021</td>
											</tr>
											<tr>
												<td><span></span>Weekly closed sales won checking with sales team</td>
												<td>19 Sep, 2021</td>
											</tr>
											<tr>
												<td><span></span>Add notes that can be viewed from the individual view</td>
												<td>23 Sep, 2021</td>
											</tr>
											<tr>
												<td><span></span>Move stuff to another page</td>
												<td>27 Sep, 2021</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="list-card">
									<div class="table-head">
										<h3>Recent Review</h3>
									</div>
									<table class="table table-borderless image">
										<thead>
											<tr>
												<th scope="col">Image</th>
												<th scope="col">Course Name</th>
												<th scope="col">Star</th>
												<th scope="col">Date</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<img src="https://picsum.photos/1000?random=129" alt="">
												</td>
												<td>Move stuff to another page</td>
												<td>4</td>
												<td>23 Sep, 2021</td>
											</tr>
											<tr>
												<td>
													<img src="https://picsum.photos/1000?random=109" alt="">
												</td>
												<td>Move stuff to another page</td>
												<td>4</td>
												<td>23 Sep, 2021</td>
											</tr>
											<tr>
												<td>
													<img src="https://picsum.photos/1000?random=119" alt="">
												</td>
												<td>Move stuff to another page</td>
												<td>4</td>
												<td>23 Sep, 2021</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
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