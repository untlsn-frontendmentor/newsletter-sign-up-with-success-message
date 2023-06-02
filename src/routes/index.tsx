import { useNavigate } from '@solidjs/router';

function ListPoint(props: { children: JSXElement }) {
	return (
		<li class="pt-2 text-lg flex items-start">
			<i class="i-bi-check-circle-fill text-[#FF6155] mr-2 text-xl">&nbsp;</i>
			{props.children}
		</li>
	);
}

const errMessage = 'Valid email required';
const emailSchema = z.string({ required_error: errMessage }).email(errMessage);

export default function Home() {
	const [errors, setErrors] = createSignal('');
	const navigate = useNavigate();

	const submit = (ev: Event) => {
		ev.preventDefault();

		const parse = emailSchema.safeParse(
			(new FormData(ev.currentTarget as HTMLFormElement)).get('email'),
		);

		if (!parse.success) return setErrors(parse.error.errors[0].message);
		navigate(`/success?email=${parse.data}`);
	};

	return (
		<div class="lg:(bg-[#36384D] grid place-items-center) min-h-screen">
			<main class="lg:(flex-(~ row-reverse) items-center p-8) bg-white rounded-2rem gap-8">
				<picture>
					<source media="(min-width:1024px)" srcset="/images/illustration-sign-up-desktop.svg" />
					<img
						src="/images/illustration-sign-up-mobile.svg"
						alt="illustration-sign-up"
						class="w-full"
					/>
				</picture>
				<form class="px-4 lg:px-8 mx-auto mt-8 max-w-screen w-120" onSubmit={submit}>
					<h1 class="text-4xl font-bold">Stay updated!</h1>

					<p class="my-4 text-lg">Join 60,000+ product managers receiving monthly updates on:</p>

					<ul>
						<ListPoint>Product discovery and building what matters</ListPoint>
						<ListPoint>Measuring to ensure updates are a success</ListPoint>
						<ListPoint>And much more!</ListPoint>
					</ul>

					<div class="text-sm m-(b6 t8)">
						<p class="flex justify-between">
							<label class="font-bold">Email address</label>
							<label class="empty:hidden text-red-500">{errors()}</label>
						</p>
						<input
							type="email"
							class={clsx('border-1 rounded-lg p-4 w-full', errors() && 'border-red-500 text-red-500')}
							placeholder="email@company.com"
							name="email"
						/>
					</div>

					<button type="submit" class="btn">
						Subscribe to monthly newsletter
					</button>
				</form>
			</main>
		</div>
	);
}
