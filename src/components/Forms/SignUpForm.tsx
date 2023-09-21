import { Dispatch, SetStateAction } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

const signUpSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().nonempty({ message: 'Preencha o campo Senha' }),
})

type signUpFormData = z.infer<typeof signUpSchema>

interface ISignUpForm {
  setIsVerify: Dispatch<SetStateAction<'VERIFY' | 'SIGNUP'>>
}

export default function SignUpForm({ setIsVerify }: ISignUpForm) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpFormData>({ resolver: zodResolver(signUpSchema) })

  async function handleLogin(data: signUpFormData) {
    return Promise<typeof data>
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Crie sua conta
        </h1>
        <p className="text-sm text-muted-foreground">
          para continuar na Gerenly
        </p>
      </div>
      <div className={cn('grid gap-6')}>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="grid gap-2">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isSubmitting}
                  {...register('email')}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  placeholder="Senha"
                  type="password"
                  disabled={isSubmitting}
                  {...register('password')}
                />
              </div>
            </div>
            <Button disabled={false}>
              {isSubmitting ? 'Verificando...' : 'Continuar'}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
