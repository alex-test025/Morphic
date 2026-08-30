import Link from 'next/link'

export const metadata = {
  title: 'Contact — Morphic',
  description: 'Contact the Morphic team about the product, privacy, or project.'
}

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <Link href="/" className="text-sm font-semibold underline underline-offset-4">← Back to Morphic</Link>
      <p className="mt-16 text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">Contact</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Talk to us.</h1>
      <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
        <p>For questions about Morphic, feedback on the research experience, privacy requests, or project-related enquiries, email hello@morphic.sh.</p>
        <p>When reporting a technical problem, including the page or workflow where it occurred and a short description of the expected and actual behavior helps us understand the issue quickly.</p>
      </div>
      <a href="mailto:hello@morphic.sh" className="mt-10 inline-flex min-h-12 items-center border border-foreground bg-foreground px-5 text-sm font-semibold text-background no-underline transition-transform hover:-translate-y-0.5">hello@morphic.sh</a>
    </main>
  )
}
