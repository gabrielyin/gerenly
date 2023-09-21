import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar'

export default function Menu() {
  return (
    <Menubar className="h-[40px] rounded-none border-b border-none px-2 lg:px-4">
      <h5 className="mr-1 font-bold">Gerenly</h5>
      <MenubarMenu>
        <MenubarTrigger>Account</MenubarTrigger>
        <MenubarContent forceMount>
          <MenubarItem inset>Minha Conta</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset className="font-bold">
            Sair
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
