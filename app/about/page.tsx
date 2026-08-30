import Link from 'next/link'

export const metadata = {
  title: 'About — Morphic',
  description: 'Why Morphic was built and the principles behind the open-source answer engine.'
}

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <Link href="/" className="text-sm font-semibold underline underline-offset-4">
        ← Back to Morphic
      </Link>
      <p className="mt-16 text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">About</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Research should stay inspectable.</h1>
      <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground md:text-lg">
        <p>Morphic was built around a simple frustration: getting a useful answer often means leaving the chat, opening several search results, collecting notes, and then trying to reconstruct the context again.</p>
        <p>We wanted an AI workspace that could help with the synthesis while keeping people close to the underlying material. That is why Morphic combines conversational answers, web-aware research, sources, and structured result experiences in one open-source application.</p>
        <p>Morphic is not intended to replace careful reading or professional judgment. Its job is to shorten the distance between a good question and the material you need to investigate it properly.</p>
      </div>
    </main>
  )
}
