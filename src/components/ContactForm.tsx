import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/utils/cn'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzvqjbb'

const ACTIVITY_OPTIONS = [
  'Servicios Profesionales (Asesoría, Salud, Freelance)',
  'Venta de Productos (Tienda, E-commerce, Catálogo)',
  'Negocio Local (Restaurante, Estética, Taller)',
] as const

const fieldClass =
  'rounded-[12px] border-gray-300 shadow-sm transition-all hover:border-coach-500/40 focus:border-coach-700 focus:ring-coach-700'

export function ContactForm() {
  const [clientName, setClientName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [activity, setActivity] = useState<string>('')
  const [valueProposition, setValueProposition] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [submitted, setSubmitted] = useState(false)
  const [successName, setSuccessName] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const trimmedName = clientName.trim()

    const data = new FormData()
    data.append('client_name', trimmedName)
    data.append('business_name', businessName.trim())
    data.append('activity', activity)
    data.append('value_proposition', valueProposition.trim())
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
        setSubmitted(true)
        setStatus('idle')
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-[15px] border-2 border-[#00c853]/85 bg-gradient-to-br from-emerald-50/95 to-white p-6 shadow-coach-md sm:p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="mx-auto max-w-2xl text-center text-lg font-semibold leading-relaxed text-neutral-800 sm:text-xl">
          ¡Gracias, {successName}! Tus datos han sido recibidos correctamente. Tu cupo para el Proyecto 3000 está pre-reservado. Me pondré en contacto contigo
          por WhatsApp en breve para los detalles finales.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-[15px] border border-neutral-200/90 bg-white p-4 shadow-coach sm:p-6 md:p-8">
      <h2 className="font-display relative mb-2 border-b-4 border-coach-700 pb-3 text-xl font-black text-coach-900 sm:text-2xl">
        Pre-calificación técnica
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
        Unos datos concretos bastan para ver si tu proyecto encaja y preparar una respuesta clara. Te escribo por correo o WhatsApp con el siguiente paso.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 [&_label]:font-semibold [&_label]:text-neutral-800">
        <Input
          name="client_name"
          type="text"
          label="¿Cómo te llamas?"
          placeholder="Tu nombre"
          required
          autoComplete="name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className={fieldClass}
        />

        <Input
          name="business_name"
          type="text"
          label="Nombre de tu empresa o proyecto"
          placeholder="Marca, razón social o nombre del proyecto"
          required
          autoComplete="organization"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className={fieldClass}
        />

        <div className="w-full">
          <label htmlFor="activity" className="mb-1.5 block text-sm font-semibold text-neutral-800">
            ¿A qué se dedica tu negocio?
          </label>
          <select
            id="activity"
            name="activity"
            required
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className={cn(
              'w-full border bg-white px-4 py-2 text-neutral-800',
              fieldClass,
              'focus:outline-none focus:ring-2'
            )}
          >
            <option value="" disabled>
              Elige la opción que mejor encaje
            </option>
            {ACTIVITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="value_proposition" className="mb-1.5 block text-sm font-semibold text-neutral-800">
            ¿Cuál es el objetivo principal de tu nueva web?
          </label>
          <textarea
            id="value_proposition"
            name="value_proposition"
            rows={5}
            required
            value={valueProposition}
            onChange={(e) => setValueProposition(e.target.value)}
            className={cn(
              'w-full resize-y border px-4 py-2 text-neutral-800',
              fieldClass,
              'min-h-[120px] focus:outline-none focus:ring-2'
            )}
            placeholder="Ej. captar leads, vender online, reservas, credibilidad profesional…"
          />
        </div>

        <Input
          name="email"
          type="email"
          label="Correo electrónico"
          placeholder="tu@correo.com"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />

        <Input
          name="whatsapp"
          type="tel"
          label="WhatsApp"
          placeholder="+58 412 0000000"
          required
          autoComplete="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={fieldClass}
        />

        <div className="flex flex-col gap-3 pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className={cn(
              'font-display w-full font-bold shadow-coach-sm transition-all sm:w-fit sm:min-w-[220px]',
              'rounded-[25px] bg-gradient-to-br from-coach-700 to-coach-900 hover:opacity-95',
              'hover:-translate-y-0.5 hover:shadow-coach-md focus:ring-coach-800',
              'disabled:hover:translate-y-0 disabled:hover:opacity-50'
            )}
          >
            {status === 'loading' ? 'Enviando…' : 'Enviar solicitud'}
          </Button>
          {status === 'error' && (
            <p className="text-sm font-semibold text-alert" role="alert">
              No se pudo enviar. Inténtalo de nuevo en unos minutos.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
