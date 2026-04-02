import { FormEvent, type ReactNode, useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Palette,
  Phone,
  Send,
  ShoppingBag,
  Sparkles,
  Target,
  User,
  Zap,
} from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzvqjbb'
const WHATSAPP_NUMBER = '584123563070'
const TOTAL_STEPS = 6

const ACTIVITY_OPTIONS = [
  'Servicios Profesionales (Asesoría, Salud, Freelance)',
  'Venta de Productos (Tienda, E-commerce, Catálogo)',
  'Negocio Local (Restaurante, Estética, Taller)',
] as const

const ACTIVITY_PILLS: { value: (typeof ACTIVITY_OPTIONS)[number]; short: string; Icon: typeof Briefcase }[] = [
  { value: ACTIVITY_OPTIONS[0], short: 'Servicios profesionales', Icon: Briefcase },
  { value: ACTIVITY_OPTIONS[1], short: 'Venta de productos', Icon: ShoppingBag },
  { value: ACTIVITY_OPTIONS[2], short: 'Negocio local', Icon: MapPin },
]

const VISUAL_STYLE_OPTIONS = [
  'Audaz y Moderno: (Fuertes contrastes, tipografías grandes, ideal para Tech/Agencias).',
  'Contemporáneo y Limpio: (Minimalismo tipo Apple, mucho aire, ideal para Servicios/Salud).',
  'Clásico y Conservador: (Elegancia sobria, fuentes con serifa, ideal para Legal/Finanzas).',
] as const

const VISUAL_PRESETS: {
  value: (typeof VISUAL_STYLE_OPTIONS)[number]
  title: string
  hint: string
}[] = [
  {
    value: VISUAL_STYLE_OPTIONS[0],
    title: 'Audaz y Moderno',
    hint: 'Fuertes contrastes, tipografías grandes · ideal para Tech/Agencias',
  },
  {
    value: VISUAL_STYLE_OPTIONS[1],
    title: 'Contemporáneo y Limpio',
    hint: 'Minimalismo tipo Apple · ideal para Servicios/Salud',
  },
  {
    value: VISUAL_STYLE_OPTIONS[2],
    title: 'Clásico y Conservador',
    hint: 'Elegancia sobria, serifa · ideal para Legal/Finanzas',
  },
]

const PAYMENT_LINES_WHATSAPP = `Datos de pago ($99 · Proyecto 3000):
Zelle → Sandryquezada@gmail.com (Sandra Quezada Da Silva)
Binance → gabrieldelgado110@gmail.com | User: ingenierogd10 | UID: 336165001`

const emailOk = (v: string) => /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(v.trim())

function Helper({ children }: { children: ReactNode }) {
  return <p className="mt-1 text-xs text-slate-500">{children}</p>
}

function SectorGuide() {
  return (
    <div className="mt-2 rounded-lg border border-slate-100 bg-slate-50 p-3 text-xs text-slate-500">
      <p className="font-semibold text-slate-600">💡 Guía rápida para elegir:</p>
      <ul className="mt-2 list-none space-y-2 pl-0">
        <li>
          <strong className="text-slate-700">Servicios Profesionales:</strong> Si vendes tu conocimiento (Abogados, Médicos, Coaches, Agencias, Freelance).
        </li>
        <li>
          <strong className="text-slate-700">Venta de Productos:</strong> Inventario físico o digital (tiendas, gadgets, cursos).
        </li>
        <li>
          <strong className="text-slate-700">Negocio Local:</strong> Punto físico y atención directa (restaurantes, talleres, estéticas, clínicas).
        </li>
      </ul>
    </div>
  )
}

function FieldIcon({ Icon, className }: { Icon: typeof User; className?: string }) {
  return <Icon className={cn('pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400', className)} aria-hidden />
}

const inputShell =
  'w-full rounded-2xl border-2 border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-sm transition-all placeholder:text-slate-400 focus:border-coach-700 focus:outline-none focus:ring-4 focus:ring-coach-700/10'

function ReservationFicha({ clientName, businessName }: { clientName: string; businessName: string }) {
  const waBody = [
    `Hola Gabriel, acabo de enviar mi solicitud para ${businessName}.`,
    '',
    'Adjunto el comprobante de pago de $99 para asegurar mi cupo (Proyecto 3000).',
    '',
    PAYMENT_LINES_WHATSAPP,
    '',
    'Quedo atento/a a la confirmación.',
  ].join('\n')

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waBody)}`

  return (
    <div
      className="animate-fade-in-up overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-coach-card"
      role="status"
      aria-live="polite"
    >
      <header className="bg-gradient-to-br from-coach-900 to-coach-800 px-4 py-8 text-center text-white sm:px-6">
        <div className="mx-auto mb-3 flex justify-center">
          <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
            <CheckCircle2 className="h-14 w-14 text-emerald-300" strokeWidth={1.5} />
          </div>
        </div>
        <p className="font-display text-lg font-extrabold sm:text-xl">Solicitud recibida — paso final para reserva</p>
        <p className="mt-1 text-sm text-white/85">Ficha de reserva · Proyecto 3000</p>
      </header>

      <div className="space-y-6 px-4 py-8 sm:px-8">
        <div className="rounded-[20px] border border-slate-200 bg-slate-50/80 p-5">
          <p className="flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wider text-slate-500">
            <Target className="h-4 w-4 text-coach-700" />
            Resumen de solicitud
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-800">
            Hola <strong className="text-coach-900">{clientName}</strong>, he recibido tus datos para{' '}
            <strong className="text-coach-900">{businessName}</strong>. Para asegurar tu cupo de los{' '}
            <strong>30 disponibles</strong> y congelar el precio de <strong>$99</strong>, realiza el pago y adjunta el comprobante.
          </p>
        </div>

        <div className="rounded-[20px] border border-amber-200/80 bg-gradient-to-br from-amber-50 to-amber-100/50 p-5">
          <p className="flex items-center gap-2 font-display text-base font-extrabold text-alert">
            <Sparkles className="h-5 w-5 shrink-0" />
            Instrucciones de pago
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-[14px] border border-slate-200/80 bg-white p-4 shadow-sm">
              <p className="flex items-center gap-2 font-display text-sm font-extrabold text-coach-900">Zelle</p>
              <p className="mt-2 break-all font-mono text-sm text-slate-800">
                <strong className="text-coach-800">Email:</strong> Sandryquezada@gmail.com
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <strong className="text-coach-800">Beneficiario:</strong> Sandra Quezada Da Silva
              </p>
            </div>
            <div className="rounded-[14px] border border-slate-200/80 bg-white p-4 shadow-sm">
              <p className="flex items-center gap-2 font-display text-sm font-extrabold text-coach-900">Binance</p>
              <p className="mt-2 break-all font-mono text-sm text-slate-800">
                <strong className="text-coach-800">Email:</strong> gabrieldelgado110@gmail.com
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <strong className="text-coach-800">User:</strong> <span className="font-mono">ingenierogd10</span>
                <span className="mx-1 text-slate-300">·</span>
                <strong className="text-coach-800">UID:</strong> <span className="font-mono">336165001</span>
              </p>
            </div>
          </div>
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'font-display flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-center text-base font-bold text-white shadow-lg transition-all',
            'bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:-translate-y-0.5 hover:shadow-xl',
            'focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2'
          )}
        >
          <Phone className="h-5 w-5" />
          Enviar comprobante por WhatsApp (+58 412 356 3070)
        </a>
        <p className="border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
          El mensaje ya incluye Zelle (Sandra) y Binance (Gabriel). Adjunta tu capture de pago antes de enviar.
        </p>
      </div>
    </div>
  )
}

interface ContactFormProps {
  onSuccess?: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [step, setStep] = useState(0)
  const [shake, setShake] = useState(false)
  const [clientName, setClientName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [activity, setActivity] = useState<string>('')
  const [valueProposition, setValueProposition] = useState('')
  const [identityReferences, setIdentityReferences] = useState('')
  const [visualStyle, setVisualStyle] = useState<string>('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [submitted, setSubmitted] = useState(false)
  const [successName, setSuccessName] = useState('')
  const [successBusiness, setSuccessBusiness] = useState('')

  const progressFill = useMemo(() => {
    let done = 0
    if (clientName.trim().length >= 2) done++
    if (businessName.trim().length >= 2) done++
    if (activity) done++
    if (valueProposition.trim().length >= 8) done++
    if (visualStyle) done++
    if (emailOk(email)) done++
    if (whatsapp.trim().length >= 7) done++
    return Math.min(100, Math.round((done / 7) * 100))
  }, [clientName, businessName, activity, valueProposition, visualStyle, email, whatsapp])

  function triggerShake() {
    setShake(true)
    window.setTimeout(() => setShake(false), 400)
  }

  function canAdvance(fromStep: number): boolean {
    switch (fromStep) {
      case 0:
        return clientName.trim().length >= 2 && businessName.trim().length >= 2
      case 1:
        return !!activity
      case 2:
        return valueProposition.trim().length >= 8
      case 3:
        return true
      case 4:
        return !!visualStyle
      case 5:
        return emailOk(email) && whatsapp.trim().length >= 7
      default:
        return false
    }
  }

  function goNext() {
    if (!canAdvance(step)) {
      triggerShake()
      return
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  }

  function goPrev() {
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!canAdvance(5)) {
      triggerShake()
      return
    }
    setStatus('loading')

    const trimmedName = clientName.trim()
    const trimmedBusiness = businessName.trim()

    const data = new FormData()
    data.append('client_name', trimmedName)
    data.append('business_name', trimmedBusiness)
    data.append('activity', activity)
    data.append('value_proposition', valueProposition.trim())
    if (identityReferences.trim()) {
      data.append('identity_references', identityReferences.trim())
    }
    data.append('visual_style', visualStyle)
    data.append('email', email.trim())
    data.append('whatsapp', whatsapp.trim())
    data.append('_subject', 'Proyecto 3000 — Gabriel Delgado')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.status === 200 || res.ok) {
        setSuccessName(trimmedName)
        setSuccessBusiness(trimmedBusiness)
        setSubmitted(true)
        onSuccess?.()
        setStatus('idle')
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (submitted) {
    return <ReservationFicha clientName={successName} businessName={successBusiness} />
  }

  return (
    <div className="animate-fade-in-up">
      <div className="border-b border-slate-100 px-4 pb-4 pt-2 sm:px-8 sm:pt-4">
        <div className="mb-3 flex items-center gap-2 font-display text-base font-bold text-coach-900">
          <Sparkles className="h-5 w-5 text-coach-600" />
          Pre-calificación técnica
        </div>
        <p className="text-sm leading-relaxed text-slate-600">
          Unos datos concretos bastan para ver si tu proyecto encaja. Avanza paso a paso; te escribo por correo o WhatsApp con el siguiente paso.
        </p>

        <div className="mt-4 flex gap-1">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={cn('h-1.5 flex-1 rounded-full transition-all duration-300', i <= step ? 'bg-coach-700' : 'bg-slate-200')}
            />
          ))}
        </div>
        <p className="mt-2 text-xs font-semibold text-slate-500">
          Paso {step + 1} de {TOTAL_STEPS}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-4 py-6 sm:px-8">
        <div
          key={step}
          className={cn(
            'min-h-[200px] motion-reduce:animate-none',
            shake ? 'animate-shake' : 'animate-step-in'
          )}
        >
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <User className="h-4 w-4 text-coach-700" />
                  ¿Cómo te llamas?
                </label>
                <div className="relative">
                  <FieldIcon Icon={User} />
                  <input
                    name="client_name"
                    type="text"
                    required
                    autoComplete="name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Tu nombre"
                    className={inputShell}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Building2 className="h-4 w-4 text-coach-700" />
                  Nombre de tu empresa o proyecto
                </label>
                <div className="relative">
                  <FieldIcon Icon={Building2} />
                  <input
                    name="business_name"
                    type="text"
                    required
                    autoComplete="organization"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Marca, razón social o nombre del proyecto"
                    className={inputShell}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Briefcase className="h-4 w-4 text-coach-700" />
                ¿A qué se dedica tu negocio?
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {ACTIVITY_PILLS.map(({ value, short, Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setActivity(value)}
                    className={cn(
                      'flex min-w-[140px] flex-1 items-center gap-2 rounded-full border-2 px-4 py-3 text-left text-sm font-medium transition-all',
                      activity === value
                        ? 'border-coach-900 bg-coach-700 text-white shadow-coach-sm'
                        : 'border-transparent bg-slate-100 text-slate-800 hover:-translate-y-0.5 hover:bg-slate-200'
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {short}
                  </button>
                ))}
              </div>
              <Helper>Esto me ayuda a elegir la arquitectura de carga (SSG o Dinámica) más eficiente para ti.</Helper>
              <SectorGuide />
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700" htmlFor="value_proposition">
                <Target className="h-4 w-4 text-coach-700" />
                ¿Cuál es el objetivo principal de tu nueva web?
              </label>
              <textarea
                id="value_proposition"
                name="value_proposition"
                rows={5}
                required
                value={valueProposition}
                onChange={(e) => setValueProposition(e.target.value)}
                className={cn(inputShell, 'min-h-[120px] resize-y py-3 pl-4')}
                placeholder="Ej. captar leads, vender online, reservas, credibilidad profesional…"
              />
              <Helper>Sé específico: ¿Quieres captar leads, vender productos o marca personal?</Helper>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700" htmlFor="identity_references">
                <Globe className="h-4 w-4 text-coach-700" />
                ¿Tienes una web actual, referencia o nombre ideal para tu dominio?{' '}
                <span className="text-xs font-normal text-slate-400">(opcional)</span>
              </label>
              <div className="relative">
                <FieldIcon Icon={Globe} />
                <input
                  id="identity_references"
                  name="identity_references"
                  type="text"
                  value={identityReferences}
                  onChange={(e) => setIdentityReferences(e.target.value)}
                  placeholder="URL, referencia o el dominio que imaginas"
                  className={inputShell}
                />
              </div>
              <Helper>
                Dime si ya tienes una página, algún sitio que te guste como referencia o simplemente el nombre que sueñas para tu dirección web.
              </Helper>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Palette className="h-4 w-4 text-coach-700" />
                ¿Qué personalidad visual buscas para tu sitio?
              </label>
              <div className="grid gap-3 sm:grid-cols-1">
                {VISUAL_PRESETS.map(({ value, title, hint }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setVisualStyle(value)}
                    className={cn(
                      'rounded-2xl border-2 p-4 text-left transition-all',
                      visualStyle === value
                        ? 'border-coach-900 bg-coach-700 text-white shadow-coach-sm'
                        : 'border-transparent bg-slate-100 text-slate-800 hover:-translate-y-0.5 hover:bg-slate-200'
                    )}
                  >
                    <span className="font-display block text-sm font-bold">{title}</span>
                    <span className={cn('mt-1 block text-xs', visualStyle === value ? 'text-white/90' : 'text-slate-600')}>
                      {hint}
                    </span>
                  </button>
                ))}
              </div>
              <Helper>Esto define la tipografía, los colores y la fuerza del diseño.</Helper>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-5">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Mail className="h-4 w-4 text-coach-700" />
                  Correo electrónico
                </label>
                <div className="relative">
                  <FieldIcon Icon={Mail} />
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className={cn(
                      inputShell,
                      email && !emailOk(email) && 'border-alert/60 bg-red-50/50',
                      emailOk(email) && 'border-solution/70 bg-emerald-50/30'
                    )}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Phone className="h-4 w-4 text-coach-700" />
                  WhatsApp
                </label>
                <div className="relative">
                  <FieldIcon Icon={Phone} />
                  <input
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+58 412 356 3070"
                    className={inputShell}
                  />
                </div>
                <Helper>Te escribiré personalmente para coordinar el despliegue técnico.</Helper>
              </div>

              <div className="rounded-xl bg-slate-50 py-3 text-center">
                <p className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
                  <Zap className="h-4 w-4 text-amber-500" />
                  Completado
                  <span className="tabular-nums text-coach-800">{progressFill}%</span>
                </p>
                <div className="mx-auto mt-2 h-2 max-w-xs overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-coach-600 to-coach-900 transition-[width] duration-500 ease-out"
                    style={{ width: `${progressFill}%` }}
                  />
                </div>
              </div>

              <p className="rounded-xl border border-coach-100 bg-coach-light/50 px-3 py-3 text-center text-xs font-semibold leading-relaxed text-coach-900 sm:text-sm">
                Recordatorio: Tu sitio será entregado en un bloque de <strong>48 a 72 horas</strong> tras la confirmación del pago.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={goPrev}
            disabled={step === 0 || status === 'loading'}
            className="order-2 border-2 border-coach-600 text-coach-800 sm:order-1"
          >
            <ChevronLeft className="mr-1 inline h-4 w-4" />
            Anterior
          </Button>

          {step < TOTAL_STEPS - 1 ? (
            <Button
              type="button"
              onClick={goNext}
              className="order-1 w-full rounded-full bg-gradient-to-br from-coach-700 to-coach-900 py-3 font-display font-extrabold shadow-coach-btn transition-all hover:-translate-y-0.5 hover:shadow-lg sm:order-2 sm:w-auto"
            >
              Siguiente
              <ChevronRight className="ml-1 inline h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="order-1 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-coach-700 to-coach-900 py-3 font-display font-extrabold shadow-coach-btn transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:translate-y-0 sm:order-2 sm:w-auto"
            >
              <Send className="h-5 w-5" />
              {status === 'loading' ? 'Enviando…' : 'Enviar solicitud'}
            </Button>
          )}
        </div>

        {status === 'error' && (
          <p className="mt-4 text-center text-sm font-semibold text-alert" role="alert">
            No se pudo enviar. Inténtalo de nuevo en unos minutos.
          </p>
        )}

        <p className="mt-6 text-center text-[0.7rem] leading-relaxed text-slate-400">
          Gabriel Delgado · Consultoría de software de alto rendimiento
        </p>
      </form>
    </div>
  )
}
