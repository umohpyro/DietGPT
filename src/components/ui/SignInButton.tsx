'use client'

//import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { Button } from './Button'
import { toast } from './toast'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({ }) => {
   const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // const signInWithGoogle = async () => {
  //   try {
  //     setIsLoading(true)
  //     await signIn('google')
  //   } catch (error) {
  //     toast({
  //       title: 'Error signing in',
  //       message: 'Please try again later.',
  //       type: 'error',
  //     })
  //   }
  // }

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      router.push('/login');
        } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later.',
        type: 'error',
      })
    }
  };

  return (
    <Button onClick={handleSignIn} isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton
