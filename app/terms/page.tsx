import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — Morphic',
  description: 'Terms governing use of the Morphic AI research application.'
}

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <Link href="/" className="text-sm font-semibold underline underline-offset-4">← Back to Morphic</Link>
      <p className="mt-16 text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">Legal</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-6xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated August 30, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-8 text-muted-foreground">
        <section><h2 className="text-xl font-semibold text-foreground">Using Morphic</h2><p className="mt-3">You may use Morphic for lawful research, development, education, and other legitimate activities. You are responsible for the questions, files, links, and other content you submit and for complying with applicable laws and third-party terms.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">AI-generated content</h2><p className="mt-3">Morphic can produce incorrect, incomplete, outdated, or misleading information. Responses and retrieved sources should be reviewed before they are used for important technical, legal, financial, medical, safety, or business decisions.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">Third-party services</h2><p className="mt-3">A hosted Morphic installation can depend on external model, search, authentication, storage, analytics, and hosting services. Availability and processing of information can therefore depend on those services.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">Open-source software</h2><p className="mt-3">Morphic is released as open-source software. Open-source availability does not guarantee that every hosted deployment will provide identical features, integrations, uptime, or support.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">Contact</h2><p className="mt-3">Questions about these terms can be sent to hello@morphic.sh.</p></section>
      </div>
    </main>
  )
}
