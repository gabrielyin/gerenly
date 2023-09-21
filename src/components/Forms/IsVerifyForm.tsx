import { z } from 'zod'
import { Lock } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const verifySchema = z.object({
  verificationCode: z.string(),
})

type verificationFormData = z.infer<typeof verifySchema>

export default function IsVerifyForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<verificationFormData>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      verificationCode: '',
    },
  })

  async function handleVerification(data: verificationFormData) {
    return Promise<typeof data>
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Verificação</h1>
        <p className="text-sm text-muted-foreground">
          Digite o codigo de verificação do seu email
        </p>
      </div>
      <form onSubmit={handleSubmit(handleVerification)}>
        <div className="grid gap-2">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="verificationCode">Código de verificação</Label>
              <Input
                id="verificationCode"
                placeholder="Código de verificação"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isSubmitting}
                {...register('verificationCode')}
              />
            </div>
          </div>
          <Button disabled={false}>
            <Lock className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Verificando...' : 'Verificar'}
          </Button>
        </div>
      </form>
    </>
  )
}
