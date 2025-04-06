'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Form from 'next/form'
import { useActionState } from "react"
import { submitEmail } from "@/app/actions"
import { RiCheckFill, RiMailCheckFill } from "@remixicon/react"

export const ContactForm = () => {
  const [state, formAction, pending] = useActionState(submitEmail, {});


  return state.success ? (
    <div className="flex flex-col gap-4 max-w-screen-lg mx-auto py-12 items-center text-center">
      <RiMailCheckFill />
      <p className="text-center">Thank you for your message!</p>
    </div>
  ) : (
    <Form className="flex flex-col gap-4 max-w-screen-lg mx-auto" action={formAction}>
      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="flex-1">
          <Input
            name="name"
            type="text"
            placeholder="Name"
            required
            disabled={pending}
          />
        </div>
        <div className="flex-1">
          <Input
            name="company"
            type="text"
            placeholder="Company (optional)"
            disabled={pending}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="flex-1">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            disabled={pending}
          />
        </div>
        <div className="flex-1">
          <Input
            name="phone"
            type="tel"
            placeholder="Phone"
            disabled={pending}
          />
        </div>
      </div>
      <div className="">
        <Textarea
          name="message"
          placeholder="Message"
          rows={4}
          disabled={pending}
        />
      </div>
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? 'Sending...' : 'Send Message'}
      </Button>
    </Form>
  );
}
