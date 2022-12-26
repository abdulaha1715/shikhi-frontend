export default {
	// Loading 
	loading: {
		color: 'blue',
		height: '5px'
	},
	
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'shikhi-frontend',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/style.css' }
		],
		script: [
			{ type: 'text/javascript', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
    	'@nuxtjs/auth-next'
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: 'http://shikhi.test/api',
    	credentials: true
	},

	auth: {
		strategies: {
			laravelSanctum: {
				provider: 'laravel/sanctum',
				url: 'http://localhost:8000',
				endpoints: {
					login: { url: '/api/login', method: 'post' },
					logout: { url: '/api/logout', method: 'post' },
					user: { url: '/api/me', method: 'get' }
				},
				user: {
				  property: 'user',
				  // autoFetch: true
				},
			},
		},
		redirect: {
			login: '/login',
			logout: '/',
			callback: '/login',
			home: '/'
		}
	},

	/**
	 * Login: /api/auth/login
	 * logout: /api/auth/logout
	 * user: /api/auth/user
	 */

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
