import { z } from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newPassword = z.object({
  password: z.string(),
  confirmPassword: z.string(),
})

type newPasswordFormData = z.infer<typeof newPassword>

export default function NewPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newPasswordFormData>({
    resolver: zodResolver(newPassword),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  async function handleNewPassword(data: newPasswordFormData) {
    return Promise<typeof data>
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Nova Senha</h1>
        <p className="text-sm text-muted-foreground">Digite a sua nova senha</p>
      </div>
      <form onSubmit={handleSubmit(handleNewPassword)}>
        <div className="grid gap-2">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">Nova senha</Label>
              <Input
                id="password"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isSubmitting}
                {...register('password')}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isSubmitting}
                {...register('confirmPassword')}
              />
            </div>
          </div>
          <Button disabled={false}>
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar nova senha'}
          </Button>
        </div>
      </form>
    </>
  )
}
