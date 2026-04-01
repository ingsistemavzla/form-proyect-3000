import { ContactForm } from '@/components/ContactForm'
import { CuposProgress } from '@/components/CuposProgress'
import { useMetaTags } from '@/hooks/useMetaTags'

const PAGE_TITLE = 'Gabriel Delgado | Consultoría de Software de Alto Rendimiento'
const PAGE_DESCRIPTION =
  'Ingeniería real, no marketing: 30 sitios web de alto rendimiento. Gabriel Delgado. Pre-calificación técnica y contacto directo.'

export function MisionCelia() {
  useMetaTags({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  })

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-coach-700 via-coach-800 to-coach-900 py-2 sm:py-4 md:py-8 px-0 sm:px-2 md:px-4">
      <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[15px] bg-white shadow-coach sm:mx-2 md:mx-4 lg:mx-auto">
        <header className="relative overflow-hidden bg-gradient-to-br from-coach-900 to-coach-800 text-white px-4 py-10 sm:py-12 sm:px-6 md:px-10 sm:rounded-t-[15px]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Gabriel Delgado</p>
            <h1 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-[2rem] lg:text-[2.25rem]">
              Ingeniería con Propósito: 30 Sitios de Élite
            </h1>
            <div
              className="mx-auto h-1 w-[70px] rounded-full bg-gradient-to-r from-coach-500 to-white/90"
              aria-hidden
            />
            <p className="mx-auto max-w-xl text-sm font-normal leading-relaxed text-white/90 sm:text-base">
              Una iniciativa de Gabriel Delgado para una causa familiar.
            </p>
          </div>
        </header>

        <div className="space-y-8 p-4 animate-fade-in sm:space-y-10 sm:p-6 md:p-10 lg:p-12">
          <section className="mx-auto max-w-3xl space-y-6 text-[#333]">
            <p className="text-base leading-relaxed sm:text-lg">
              No es marketing, es ingeniería real. Estoy abriendo <strong className="font-bold text-neutral-900">30 cupos exclusivos</strong> para desarrollar
              sitios web de alto rendimiento, optimizados para conversión y velocidad extrema.
            </p>
            <p className="text-base leading-relaxed text-neutral-800 sm:text-lg">
              Esta iniciativa tiene un solo objetivo: financiar mediante mi trabajo profesional una intervención médica urgente para mi abuela. Cada línea de
              código y cada arquitectura desplegada se traduce directamente en salud para mi familia.
            </p>
            <p className="text-base leading-relaxed text-neutral-800 sm:text-lg">
              Busco 30 clientes que no solo necesiten un sitio web superior, sino que valoren el compromiso de un ingeniero que está trabajando por lo más
              importante. Si tu proyecto encaja, hablemos.
            </p>

            <CuposProgress current={2} total={30} countSuffix="Proyectos activos" />

            <p className="rounded-r-[8px] border-l-[5px] border-alert bg-coach-light py-3 pl-4 pr-3 text-sm italic leading-relaxed text-neutral-800 sm:text-base">
              El formulario siguiente es la herramienta de <strong className="font-semibold not-italic text-coach-900">pre-calificación técnica</strong>: con
              tus respuestas evalúo encaje, alcance y siguiente paso sin perder tu tiempo ni el mío.
            </p>
          </section>

          <ContactForm />
        </div>

        <footer className="border-t border-coach-100 bg-coach-light/50 px-4 py-6 text-center text-sm text-neutral-600 sm:px-8">
          Gabriel Delgado · Consultoría de software de alto rendimiento
        </footer>
      </div>
    </div>
  )
}
