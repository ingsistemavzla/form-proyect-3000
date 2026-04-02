import { useState } from 'react'
import { ContactForm } from '@/components/ContactForm'
import { useMetaTags } from '@/hooks/useMetaTags'
import { cn } from '@/utils/cn'
import { Crosshair, Target, Zap } from 'lucide-react'

const PAGE_TITLE = 'Gabriel Delgado | Consultoría de Software de Alto Rendimiento'
const PAGE_DESCRIPTION =
  'Ingeniería real, no marketing: 30 sitios web de alto rendimiento. Gabriel Delgado. Pre-calificación técnica y contacto directo.'

export function MisionCelia() {
  const [formCompleted, setFormCompleted] = useState(false)

  useMetaTags({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  })

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-coach-700 via-coach-800 to-coach-900 py-4 sm:py-8 md:py-10">
      <div
        className="pointer-events-none fixed inset-0 opacity-100"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.12) 0%, transparent 55%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[720px] px-3 sm:px-4">
        <div className="animate-fade-in-up overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-coach-card">
          {!formCompleted && (
          <header className="relative overflow-hidden bg-gradient-to-br from-coach-900 to-coach-800 px-4 py-8 text-center text-white sm:px-8 sm:py-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Gabriel Delgado</p>
              <h1 className="mt-3 font-display text-2xl font-black leading-tight tracking-tight sm:text-[1.65rem]">
                Ingeniería con{' '}
                <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                  Propósito
                </span>
                : 30 Sitios de Élite
              </h1>
              <p className="mx-auto mt-3 max-w-md text-sm font-medium text-white/90">
                30 Sitios de Élite · Una iniciativa de Gabriel Delgado para una causa familiar
              </p>
              <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                <Zap className="h-4 w-4 text-amber-300" />
                No es marketing, es ingeniería real
              </div>
            </div>
          </header>
          )}

          {!formCompleted && (
            <div className="border-b border-slate-100 px-4 py-5 sm:px-8">
              <div className="flex items-start gap-3 rounded-r-xl border-l-[5px] border-amber-400 bg-coach-light py-3 pl-4 pr-3 text-sm font-medium leading-relaxed text-slate-800">
                <Target className="mt-0.5 h-8 w-8 shrink-0 text-amber-500" strokeWidth={1.75} />
                <div>
                  <p>
                    <strong className="text-alert">Esta iniciativa tiene un solo objetivo:</strong> financiar mediante mi trabajo profesional una intervención
                    médica urgente para mi abuela. Cada línea de código y cada arquitectura desplegada se traduce en salud para mi familia.
                  </p>
                  <p className="mt-2 text-slate-700">
                    Busco <strong className="text-coach-900">30 clientes</strong> que valoren el compromiso de un ingeniero que trabaja por lo más importante.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                Estoy abriendo <strong className="text-coach-900">30 cupos exclusivos</strong> para sitios web de alto rendimiento, optimizados para conversión y
                velocidad extrema. Si tu proyecto encaja, hablemos.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 py-3 text-center">
                  <p className="font-display text-xl font-extrabold text-coach-900">
                    2<span className="text-sm font-bold text-coach-600">/30</span>
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-500">Proyectos activos</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 py-3 text-center">
                  <p className="flex justify-center text-2xl">
                    <Zap className="h-7 w-7 text-amber-500" />
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-500">Velocidad extrema</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 py-3 text-center">
                  <p className="flex justify-center text-2xl">
                    <Crosshair className="h-7 w-7 text-coach-700" />
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-500">Conversión optimizada</p>
                </div>
              </div>

              <p className="mt-5 rounded-lg border border-coach-100 bg-white px-3 py-2 text-center text-xs text-slate-600">
                El formulario es la <strong className="text-coach-800">pre-calificación técnica</strong>: paso a paso, sin perder tu tiempo ni el mío.
              </p>
            </div>
          )}

          <div className={cn('bg-white', formCompleted && 'px-2 py-4 sm:px-6')}>
            <ContactForm onSuccess={() => setFormCompleted(true)} />
          </div>

          <footer className="border-t border-slate-100 bg-slate-50/80 px-4 py-5 text-center text-xs text-slate-500 sm:text-sm">
            Gabriel Delgado · Consultoría de software de alto rendimiento
          </footer>
        </div>
      </div>
    </div>
  )
}
