'use client';

import Alert from '../ui/Alert';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export const Form = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const callbackUrl = searchParams!!.get('callbackUrl') || '/dashboard';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const res = await signIn('credentials', {
				redirect: false,
				email,
				password,
				callbackUrl
			});
			// console.log('Res', res)
			if (!res?.error) {
				router.push(callbackUrl);
			} else {
				setError('Invalid email or password');
			}
		} catch (err: any) {}
	};

	return (
		<form onSubmit={onSubmit} className='space-y-2 w-full sm:w-[400px]'>
			<div className='grid w-full items-center gap-1.5'>
				<Label htmlFor='email' className='dark:text-slate-200'>
					Email
				</Label>
				<Input
					className='w-full'
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id='email'
					type='email'
				/>
			</div>
			<div className='grid w-full items-center gap-1.5'>
				<Label htmlFor='password' className='dark:text-slate-200'>
					Password
				</Label>
				<Input
					className='w-full'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					id='password'
					type='password'
				/>
			</div>
			{error && <Alert>{error}</Alert>}
			<div className='w-full'>
				<Button className='w-full' size='lg' disabled>
					Login
				</Button>
			</div>
			<p className='text-center text-sm dark:text-slate-200'>
				Need to create an account?{' '}
				<Link
					className='text-indigo-500 hover:underline'
					href='/register'>
					Create Account
				</Link>{' '}
				or Login below{' '}
			</p>
		</form>
	);
};
