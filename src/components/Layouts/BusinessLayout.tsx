import Menu from '../Menu/Menu'
import Sidebar from '../Sidebar/Sidebar'

interface IBusinessLayout {
  children: React.ReactNode
}

export default function BusinessLayout({ children }: IBusinessLayout) {
  return (
    <div className="min-h-screen">
      <Menu />
      <div className="grid min-h-[calc(100vh-40px)] border-t bg-background lg:grid-cols-5">
        <Sidebar className="hidden lg:block" />
        <div className="col-span-4 space-y-6 px-4 py-6 lg:border-l lg:px-8">
          {children}
        </div>
      </div>
    </div>
  )
}
