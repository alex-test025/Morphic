import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Morphic',
  description: 'Morphic privacy policy and information about data handling.'
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <Link href="/" className="text-sm font-semibold underline underline-offset-4">← Back to Morphic</Link>
      <p className="mt-16 text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">Legal</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-6xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated August 30, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-8 text-muted-foreground">
        <section><h2 className="text-xl font-semibold text-foreground">Information we collect</h2><p className="mt-3">Depending on how the deployment is configured, Morphic may process account information, chat messages, files or links supplied by a user, and basic diagnostic or analytics information. The exact data available to an installation depends on its enabled services.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">How information is used</h2><p className="mt-3">Information is used to provide the requested AI and search experience, maintain conversations where chat history is enabled, protect the service, troubleshoot errors, and understand product usage where analytics are configured.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">Third-party services</h2><p className="mt-3">A Morphic deployment may connect to external providers for authentication, model inference, web search, storage, analytics, or hosting. Those providers process information according to the configuration and their own policies.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">Your choices</h2><p className="mt-3">Do not submit information you would not want processed by the services configured for the deployment. For questions about a specific hosted installation, contact its operator using the published contact address.</p></section>
        <section><h2 className="text-xl font-semibold text-foreground">Contact</h2><p className="mt-3">Privacy questions can be sent to hello@morphic.sh.</p></section>
      </div>
    </main>
  )
}
