'use client'

import { Button } from './button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { SignupForm } from './forms/signupForm'

export function SignupButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-w-none">
        <SignupForm />
      </DialogContent>
    </Dialog>
  )
}
