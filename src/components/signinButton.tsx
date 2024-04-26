'use client'

import { Button } from './button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { SigninForm } from './forms/signinForm'

export function SigninButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-w-none">
        <SigninForm />
      </DialogContent>
    </Dialog>
  )
}
