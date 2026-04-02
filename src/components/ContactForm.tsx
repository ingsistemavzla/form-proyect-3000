import { FormEvent, type ReactNode, useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Gem,
  Globe,
  LayoutTemplate,
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

const ACTIVITY_PILLS: {
  value: (typeof ACTIVITY_OPTIONS)[number]
  short: string
  Icon: LucideIcon
  pillClass: string
}[] = [
  {
    value: ACTIVITY_OPTIONS[0],
    short: 'Servicios profesionales',
    Icon: Briefcase,
    pillClass:
      'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 shadow-md shadow-blue-900/25',
  },
  {
    value: ACTIVITY_OPTIONS[1],
    short: 'Venta de productos',
    Icon: ShoppingBag,
    pillClass:
      'bg-gradient-to-br from-emerald-500 via-teal-600 to-teal-900 shadow-md shadow-teal-900/25',
  },
  {
    value: ACTIVITY_OPTIONS[2],
    short: 'Negocio local',
    Icon: MapPin,
    pillClass:
      'bg-gradient-to-br from-slate-600 via-coach-700 to-coach-900 shadow-md shadow-coach-900/25',
  },
]

const VISUAL_PRESET_LIST: {
  value: string
  title: string
  hint: string
  Icon: LucideIcon
  swatches: readonly string[]
}[] = [
  {
    value:
      'Moderno / Minimalista: mucho espacio en blanco, tipografía sans clara, paleta neutra con un acento; ideal para SaaS y portafolios.',
    title: 'Moderno / Minimalista',
    hint: 'Mucho espacio en blanco, tipografía sans clara · ideal para SaaS y portafolios',
    Icon: LayoutTemplate,
    swatches: ['#ffffff', '#f1f5f9', '#64748b', '#0f172a'],
  },
  {
    value:
      'Corporativo / Profesional: estructura clara, azules y grises, bloques ordenados; ideal para consultoría y B2B.',
    title: 'Corporativo / Profesional',
    hint: 'Estructura clara, azules y grises · ideal para consultoría y B2B',
    Icon: Building2,
    swatches: ['#0f172a', '#1e3a5f', '#3b82f6', '#e2e8f0'],
  },
  {
    value:
      'Creativo / Impactante: contraste alto, acentos vivos, formas y módulos llamativos; ideal para marcas jóvenes y cultura.',
    title: 'Creativo / Impactante',
    hint: 'Contraste alto, acentos vivos · ideal para marcas jóvenes y cultura',
    Icon: Zap,
    swatches: ['#7c3aed', '#ec4899', '#fbbf24', '#06b6d4'],
  },
  {
    value:
      'Elegante / Sofisticado: tonos profundos, detalles finos, serifas o tipografía refinada; ideal para legal, finanzas y lujo.',
    title: 'Elegante / Sofisticado',
    hint: 'Tonos profundos, detalles finos · ideal para legal, finanzas y lujo',
    Icon: Gem,
    swatches: ['#1c1917', '#44403c', '#d4af37', '#faf8f5'],
  },
]

const PAYMENT_LINES_WHATSAPP = `Datos de pago ($99 · Proyecto 3000):
Zelle → Sandryquezada@gmail.com (Sandra Quezada Da Silva)
Binance → gabrieldelgado110@gmail.com | User: ingenierogd10 | UID: 336165001`

const emailOk = (v: string) => /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(v.trim())

function Helper({ children }: { children: ReactNode }) {
  return <p className="mt-1 text-xs text-slate-500">{children}</p>
}

function ColorSwatches({ colors, labelClass }: { colors: readonly string[]; labelClass: string }) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      <span className={cn('text-[10px] font-bold uppercase tracking-wider', labelClass)}>Paleta</span>
      <div className="flex flex-wrap gap-1" role="list" aria-label="Colores de referencia">
        {colors.map((c) => (
          <span
            key={c}
            role="listitem"
            className="h-4 w-4 shrink-0 rounded-full border border-black/20 shadow-sm ring-1 ring-white/40"
            style={{ backgroundColor: c }}
            title={c}
          />
        ))}
      </div>
    </div>
  )
}

function SectorGuide() {
  return (
    <div className="mt-2 rounded-lg border border-slate-100 bg-slate-50 p-3 text-xs text-slate-500">
      <p className="font-semibold text-coach-800">Guía por tipo de actividad</p>
      <ul className="mt-2 list-none space-y-2 pl-0">
        <li>
          <strong className="text-slate-700">Servicios profesionales:</strong> asesoría, salud, formación, agencias o trabajo independiente basado en
          conocimiento especializado.
        </li>
        <li>
          <strong className="text-slate-700">Venta de productos:</strong> catálogo, comercio electránico o oferta de bienes digitales.
        </li>
        <li>
          <strong className="text-slate-700">Negocio local:</strong> establecimiento con atención presencial o mixta (restauración, talleres, estética,
          servicios de proximidad).
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
            <CheckCircle2 className="h-14 w-14 text-sky-300" strokeWidth={1.5} />
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
            Hola <strong className="text-coach-900">{clientName}</strong>, he recibido sus datos relativos a{' '}
            <strong className="text-coach-900">{businessName}</strong>. Para asegurar su cupo entre los{' '}
            <strong>30 disponibles</strong> y congelar el precio de <strong>$99</strong>, solicito realizar el pago y adjuntar el comprobante.
          </p>
        </div>

        <div className="rounded-[20px] border border-coach-100 bg-gradient-to-br from-coach-light to-sky-50/90 p-5">
          <p className="flex items-center gap-2 font-display text-base font-extrabold text-coach-800">
            <Sparkles className="h-5 w-5 shrink-0 text-coach-600" />
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
          El mensaje ya incluye los datos de Zelle (Sandra) y Binance (Gabriel). Adjunte la captura del pago antes de enviar.
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
        <div className="mb-3 flex flex-col gap-0.5 font-display text-coach-900 sm:flex-row sm:items-center sm:gap-2">
          <span className="flex items-center gap-2 text-base font-bold">
            <Sparkles className="h-5 w-5 shrink-0 text-coach-600" />
            Proyecto 3000
          </span>
          <span className="hidden text-slate-300 sm:inline">·</span>
          <span className="text-sm font-semibold text-slate-600 sm:text-base sm:font-bold sm:text-coach-900">
            Formulario de requerimientos web
          </span>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">
          Datos por pasos. Tras el envío, contacto por correo o WhatsApp.
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
                  Nombre de contacto
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
                    placeholder="Nombre completo"
                    className={inputShell}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Building2 className="h-4 w-4 text-coach-700" />
                  Empresa, marca o proyecto
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
                Actividad principal del negocio
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {ACTIVITY_PILLS.map(({ value, short, Icon, pillClass }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setActivity(value)}
                    className={cn(
                      'flex min-w-[140px] flex-1 items-center gap-2.5 rounded-full px-4 py-3 text-left text-sm font-semibold text-white transition-all',
                      pillClass,
                      activity === value
                        ? 'ring-4 ring-coach-900 ring-offset-2 ring-offset-white'
                        : 'opacity-[0.92] hover:-translate-y-0.5 hover:opacity-100 hover:brightness-105'
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0 text-white" strokeWidth={2.25} aria-hidden />
                    {short}
                  </button>
                ))}
              </div>
              <Helper>Sirve para elegir arquitectura estática o dinámica según el contenido.</Helper>
              <SectorGuide />
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700" htmlFor="value_proposition">
                <Target className="h-4 w-4 text-coach-700" />
                Objetivo principal del sitio web
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
              <Helper>Ej.: leads, ventas, reservas, imagen institucional u otro objetivo.</Helper>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700" htmlFor="identity_references">
                <Globe className="h-4 w-4 text-coach-700" />
                Sitio web actual, referencia visual o nombre de dominio deseado{' '}
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
              <Helper>URL actual, referencia o nombre de dominio, si aplica.</Helper>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Palette className="h-4 w-4 text-coach-700" />
                Personalidad visual deseada para el sitio
              </label>
              <div className="grid gap-3 sm:grid-cols-1">
                {VISUAL_PRESET_LIST.map(({ value, title, hint, Icon, swatches }) => {
                  const selected = visualStyle === value
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setVisualStyle(value)}
                      className={cn(
                        'rounded-2xl border-2 p-4 text-left transition-all',
                        selected
                          ? 'border-coach-900 bg-coach-700 text-white shadow-coach-sm'
                          : 'border-transparent bg-slate-100 text-slate-800 hover:-translate-y-0.5 hover:bg-slate-200'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <Icon
                          className={cn('mt-0.5 h-6 w-6 shrink-0', selected ? 'text-white' : 'text-coach-700')}
                          strokeWidth={2}
                          aria-hidden
                        />
                        <div className="min-w-0 flex-1">
                          <span className="font-display block text-sm font-bold">{title}</span>
                          <span className={cn('mt-1 block text-xs', selected ? 'text-white/90' : 'text-slate-600')}>
                            {hint}
                          </span>
                          <ColorSwatches
                            colors={swatches}
                            labelClass={selected ? 'text-white/75' : 'text-slate-500'}
                          />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
              <Helper>Tipografía, color e intensidad visual del diseño.</Helper>
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
                      email && !emailOk(email) && 'border-coach-500/70 bg-sky-50/80',
                      emailOk(email) && 'border-coach-600/60 bg-coach-light/60'
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
                <Helper>Me pondré en contacto para coordinar el despliegue técnico según lo acordado.</Helper>
              </div>

              <div className="rounded-xl bg-slate-50 py-3 text-center">
                <p className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
                  <Zap className="h-4 w-4 text-coach-600" />
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
                Recordatorio: la entrega del sitio se contempla en un intervalo de <strong>48 a 72 horas</strong> una vez confirmado el pago.
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
          <p className="mt-4 text-center text-sm font-semibold text-coach-800" role="alert">
            No se pudo enviar. Inténtelo de nuevo en unos minutos.
          </p>
        )}

        <p className="mt-6 text-center text-[0.7rem] leading-relaxed text-slate-400">
          Gabriel Delgado · Consultoría de software de alto rendimiento
        </p>
      </form>
    </div>
  )
}
