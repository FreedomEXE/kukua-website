/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/components/sections/ContactForm.tsx
 *
 * Description:
 * Client-side contact form with lightweight success feedback.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'

type ContactFormData = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    void data
    setSubmitted(true)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="surface-card shadow-outline space-y-6 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm uppercase tracking-[0.2em] text-brown-dark">
          Name
          <input
            {...register('name', { required: true })}
            className="w-full border border-brown-dark/15 bg-white px-4 py-3 text-base normal-case tracking-normal text-brown-dark outline-none transition focus:border-brown-dark"
          />
          {errors.name ? <span className="text-xs text-brown">Please enter your name.</span> : null}
        </label>
        <label className="space-y-2 text-sm uppercase tracking-[0.2em] text-brown-dark">
          Email
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full border border-brown-dark/15 bg-white px-4 py-3 text-base normal-case tracking-normal text-brown-dark outline-none transition focus:border-brown-dark"
          />
          {errors.email ? <span className="text-xs text-brown">Please enter your email.</span> : null}
        </label>
      </div>
      <label className="space-y-2 text-sm uppercase tracking-[0.2em] text-brown-dark">
        Message
        <textarea
          rows={6}
          {...register('message', { required: true })}
          className="w-full border border-brown-dark/15 bg-white px-4 py-3 text-base normal-case tracking-normal text-brown-dark outline-none transition focus:border-brown-dark"
        />
        {errors.message ? <span className="text-xs text-brown">Please enter a message.</span> : null}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit">Send</Button>
        {submitted ? <p className="text-sm text-brown-dark">Thank you! Your message has been sent.</p> : null}
      </div>
    </form>
  )
}
