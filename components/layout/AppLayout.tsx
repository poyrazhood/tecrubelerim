'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, PlusCircle, Bell, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '/', icon: Home, label: 'Ana Sayfa' },
  { href: '/kesfet', icon: Search, label: 'Keşfet' },
  { href: '/yorum-yaz', icon: PlusCircle, label: 'Yorum' },
  { href: '/bildirimler', icon: Bell, label: 'Bildirimler' },
  { href: '/profil', icon: User, label: 'Profil' },
]

export function AppLayout({ children, hideBottomNav }: { children: React.ReactNode; hideBottomNav?: boolean }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-surface flex justify-center">
      <div className="w-full max-w-[480px] min-h-screen relative border-x border-white/[0.04] flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-[10px] font-black text-white">T</span>
            </div>
            <span className="font-black text-base tracking-tight text-white">
              Tecrübelerim
            </span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 uppercase tracking-wider">
              Beta
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
              <Bell size={15} />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white cursor-pointer">
              AY
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 pb-24">
          {children}
        </main>

        {/* Bottom nav */}
        {!hideBottomNav && <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-40 bg-surface/90 backdrop-blur-xl border-t border-white/[0.06] px-2 py-2">
          <div className="flex items-center justify-around">
            {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all',
                    active
                      ? 'text-indigo-400'
                      : 'text-white/30 hover:text-white/60'
                  )}
                >
                  {href === '/yorum-yaz' ? (
                    <div className="w-10 h-10 -mt-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <Icon size={20} className="text-white" />
                    </div>
                  ) : (
                    <>
                      <Icon size={20} className={active ? 'fill-indigo-400/20' : ''} />
                      <span className="text-[10px] font-medium">{label}</span>
                    </>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>}
      </div>
    </div>
  )
}
