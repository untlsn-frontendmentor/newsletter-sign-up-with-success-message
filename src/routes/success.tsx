export default function Success() {
	const [params] = useSearchParams();

	return (
		<div class="lg:(bg-[#36384D] grid place-items-center) min-h-screen">
			<main class="lg:p-12 p-4 bg-white rounded-2rem max-w-screen w-120">
				<div class="max-lg:my-20vh space-y-6">
					<i class="i-bi-check-circle-fill text-[#FF6155] mr-2 text-4rem">&nbsp;</i>
					<h1 class="text-3rem font-bold">Thanks for subscribing!</h1>
					<p>
						{'A confirmation email has been send to '}
						<b>{params.email}</b>
						. Please open it and click the button inside to confirm your subscription
					</p>
				</div>
				<a href="/" class="btn block text-center mt-6">
					Dismiss message
				</a>
			</main>
		</div>
	);
}
