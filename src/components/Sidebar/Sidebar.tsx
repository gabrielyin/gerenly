'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GalleryVerticalEnd, Receipt, User2 } from 'lucide-react'

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export default function Sidebar({ className }: SidebarProps) {
  const currentPage = usePathname().split('/').pop()

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Cobranças
          </h2>
          <div className="grid gap-1">
            <Link href="/business/dashboard">
              <Button
                variant={currentPage === 'dashboard' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <GalleryVerticalEnd className="mr-2 h-4 w-4" />
                Todas cobranças
              </Button>
            </Link>
            <Link href="/business/new-bill">
              <Button
                variant={currentPage === 'new-bill' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <Receipt className="mr-2 h-4 w-4" />
                Novo boleto
              </Button>
            </Link>
            <Link href="/business/payers">
              <Button
                variant={currentPage === 'payers' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <User2 className="mr-2 h-4 w-4" />
                Cadastradar pagador
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
