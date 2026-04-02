import { useState } from 'react'
import { ContactForm } from '@/components/ContactForm'
import { useMetaTags } from '@/hooks/useMetaTags'
import { cn } from '@/utils/cn'
import { Crosshair, Hand, Target, Zap } from 'lucide-react'

const PAGE_TITLE = 'Proyecto 3000 | Gabriel Delgado · Ingeniería de Software'
const PAGE_DESCRIPTION =
  'Ingeniería de despliegue humano: 30 sitios web escalables, por una causa familiar. Gabriel Delgado.'

export function MisionCelia() {
  const [formCompleted, setFormCompleted] = useState(false)

  useMetaTags({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  })

  const cuposActivos = 3
  const cuposTotal = 30
  const cuposPct = Math.min(100, Math.round((cuposActivos / cuposTotal) * 100))

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white py-4 sm:py-8 md:py-10">
      <div className="relative z-10 mx-auto w-full max-w-[720px] px-3 sm:px-4">
        <div className="animate-fade-in-up overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-coach-card">
          {!formCompleted && (
            <header className="relative overflow-hidden bg-gradient-to-br from-coach-900 to-coach-800 px-4 py-8 text-center text-white sm:px-8 sm:py-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
                aria-hidden
              />
              <div className="relative z-10 space-y-3">
                <p className="font-display text-[0.7rem] font-black uppercase tracking-[0.25em] text-sky-200/95 sm:text-xs">
                  Proyecto 3000
                </p>
                <p className="mx-auto max-w-md font-display text-xs font-bold uppercase tracking-wide text-white/90 sm:text-sm">
                  Formulario de requerimientos web
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Gabriel Delgado</p>
                <h1 className="font-display text-2xl font-black leading-tight tracking-tight sm:text-[1.65rem]">
                  Despliegue de 30 Sitios de Alto Rendimiento
                </h1>
                <p className="mx-auto max-w-md text-sm font-medium text-white/90">Iniciativa profesional con propósito familiar.</p>
                <div className="mx-auto mt-2 inline-flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                    <Hand className="h-4 w-4 text-sky-200" strokeWidth={2} />
                    Ingeniería al alcance de tu mano
                  </span>
                  <span className="rounded-full bg-sky-400/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-sky-100 ring-1 ring-sky-300/45">
                    Proyecto 3000
                  </span>
                </div>
              </div>
            </header>
          )}

          {!formCompleted && (
            <div className="border-b border-slate-100 px-4 py-5 sm:px-8">
              <div className="flex items-start gap-3 rounded-r-xl border-l-[5px] border-coach-500 bg-coach-light py-3 pl-4 pr-3 text-sm font-medium leading-relaxed text-slate-800">
                <Target className="mt-0.5 h-8 w-8 shrink-0 text-coach-600" strokeWidth={1.75} />
                <p>
                  Esta iniciativa tiene como objetivo financiar mediante mi trabajo profesional una intervención médica para mi abuela. Estoy abriendo 30
                  cupos exclusivos para el desarrollo de sitios web optimizados en velocidad, carga y conversión.
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-800 sm:text-base">
                Cada proyecto representa un compromiso directo con la calidad técnica y el bienestar de mi familia. Busco colaborar con 30 clientes que
                necesiten una infraestructura digital sólida y valoren el respaldo de un ingeniero dedicado.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 py-3 text-center">
                  <p className="font-display text-xl font-extrabold tabular-nums text-coach-900">
                    {cuposActivos}
                    <span className="text-sm font-bold text-coach-600">/{cuposTotal}</span>
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-500">Cupos activos</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 py-3 text-center">
                  <p className="flex justify-center text-2xl">
                    <Zap className="h-7 w-7 text-coach-600" />
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-500">Velocidad de carga superior</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 py-3 text-center">
                  <p className="flex justify-center text-2xl">
                    <Crosshair className="h-7 w-7 text-coach-700" />
                  </p>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-500">Optimización para conversión</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>Ocupación Proyecto 3000</span>
                  <span className="tabular-nums text-coach-900">
                    {cuposActivos} / {cuposTotal} cupos
                  </span>
                </div>
                <div
                  className="h-3 overflow-hidden rounded-full bg-slate-200"
                  role="progressbar"
                  aria-valuenow={cuposActivos}
                  aria-valuemin={0}
                  aria-valuemax={cuposTotal}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-coach-600 to-coach-900 transition-[width] duration-700 ease-out"
                    style={{ width: `${cuposPct}%` }}
                  />
                </div>
                <p className="mt-1.5 text-center text-[0.65rem] text-slate-500">Cupos en curso respecto a los 30 disponibles</p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <h2 className="font-display text-base font-semibold text-coach-900 sm:text-lg">
                  Requerimientos Técnicos y Reserva de Cupo
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Por favor, complete los datos de su proyecto para definir la arquitectura. Con esta información genero el diagnóstico técnico y procedo con
                  el inicio del desarrollo vía WhatsApp.
                </p>
              </div>
            </div>
          )}

          <div className={cn('bg-white', formCompleted && 'px-2 py-4 sm:px-6')}>
            <ContactForm onSuccess={() => setFormCompleted(true)} />
          </div>

          <footer className="border-t border-slate-100 bg-slate-50/80 px-4 py-5 text-center text-xs text-slate-500 sm:text-sm">
            Gabriel Delgado · Proyecto 3000 · Ingeniería de Software
          </footer>
        </div>
      </div>
    </div>
  )
}
