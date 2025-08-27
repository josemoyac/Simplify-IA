'use client';
import { useState } from 'react';
import Section from '@/components/section';
import Button from '@/components/button';

export default function Contacto() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      empresa: form.empresa.value,
      sector: form.sector.value,
      mensaje: form.mensaje.value
    };
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    setSent(true);
    form.reset();
  }

  return (
    <main>
      <Section>
        <h1 className="text-3xl font-heading mb-8 text-center">Contacto</h1>
        {sent && <p className="text-center text-brand mb-4">Mensaje enviado</p>}
        <form onSubmit={onSubmit} className="max-w-lg mx-auto space-y-4" aria-label="Formulario de contacto">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium">Nombre</label>
            <input id="nombre" name="nombre" type="text" required className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label htmlFor="empresa" className="block text-sm font-medium">Empresa</label>
            <input id="empresa" name="empresa" type="text" required className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label htmlFor="sector" className="block text-sm font-medium">Sector</label>
            <input id="sector" name="sector" type="text" required className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium">Mensaje</label>
            <textarea id="mensaje" name="mensaje" required className="mt-1 w-full rounded border p-2 bg-white dark:bg-slate-800" />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
        <div className="mt-8 text-center text-sm">
          <p>josemoyacarrasco@gmail.com</p>
          <a href="https://www.linkedin.com/in/josemoyacarrasco" className="text-brand">LinkedIn</a>
        </div>
      </Section>
    </main>
  );
}
