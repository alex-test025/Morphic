import Link from 'next/link'

import {
  IconArrowUpRight,
  IconBraces,
  IconChevronDown,
  IconClock,
  IconExternalLink,
  IconHistory,
  IconMenu2,
  IconQuote,
  IconSearch,
  IconShieldCheck,
  IconSourceCode,
  IconWorldSearch
} from '@tabler/icons-react'

import './landing.css'

const steps = [
  {
    number: '01',
    title: 'Start with a real question',
    copy: 'Type the question as you would ask a researcher or colleague. Morphic can handle a focused fact check, a technical problem, a comparison, or a broad topic that needs several sources.'
  },
  {
    number: '02',
    title: 'Morphic searches before it answers',
    copy: 'For research-style prompts, the assistant can retrieve relevant web information instead of relying only on a model memory snapshot. The search context is turned into an answer rather than a pile of links.'
  },
  {
    number: '03',
    title: 'Read the answer with its trail',
    copy: 'Useful sources are shown alongside the response so you can inspect where a claim came from. That makes it easier to verify details, open the original page, and continue the research yourself.'
  },
  {
    number: '04',
    title: 'Keep the useful work in context',
    copy: 'Follow-up questions stay in the same conversation, with chat history available when enabled. Instead of starting over, you can refine a question until the answer is actually useful.'
  }
]

const faqs = [
  {
    q: 'What is Morphic?',
    a: 'Morphic is an open-source answer engine and AI chat workspace for research-oriented questions. It combines conversational AI with web retrieval and a visual interface for presenting answers, sources, and structured results.'
  },
  {
    q: 'How is Morphic different from a standard chatbot?',
    a: 'A standard chatbot can be useful for drafting and brainstorming, but it may not have current web context. Morphic is designed around the idea that research answers should be inspectable, so eligible questions can be enriched with retrieved web sources and the result can expose that trail.'
  },
  {
    q: 'Does Morphic show sources?',
    a: 'Yes. When a response uses web research, Morphic can surface the supporting sources so you can inspect the original material. Sources are there to help you verify an answer rather than asking you to accept the response as an authority.'
  },
  {
    q: 'Can I use Morphic for technical work?',
    a: 'Yes. Morphic supports conversational technical research, explanation, comparison, and problem-solving workflows. The interface is built to keep the question, answer, supporting material, and follow-up work in one place.'
  },
  {
    q: 'Can I ask follow-up questions?',
    a: 'Yes. Conversations are designed as a sequence of questions and answers, so a follow-up can narrow the scope, challenge a claim, request a different explanation, or build on the previous result without repeating the entire prompt.'
  },
  {
    q: 'Is Morphic open source?',
    a: 'Morphic is an open-source project. That means the application code can be inspected and extended by developers, which is especially useful for teams that want to understand how their AI research interface is put together.'
  },
  {
    q: 'Who is Morphic for?',
    a: 'Morphic is aimed at students, developers, researchers, and knowledge workers who want fast answers without losing the ability to inspect context and continue researching. It is especially useful when a question crosses several sources or requires a few rounds of refinement.'
  },
  {
    q: 'Does Morphic replace professional judgment?',
    a: 'No. AI-generated answers can be incomplete or wrong, and web sources can also be outdated or misleading. Morphic is built to make research faster and more transparent, but important decisions should still be checked against primary sources and qualified professional advice.'
  }
]

function Wordmark() {
  return (
    <Link href="/" className="landing-wordmark" aria-label="Morphic home">
      <span className="landing-wordmark-mark" aria-hidden="true">
        M
      </span>
      <span>Morphic</span>
    </Link>
  )
}

function ChatPreview() {
  return (
    <div className="landing-stage" aria-label="Preview of the Morphic research workspace">
      <div className="landing-stage-glow" aria-hidden="true" />
      <div className="landing-window">
        <div className="landing-window-bar">
          <div className="landing-window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="landing-window-title">Morphic / research session</div>
          <div className="landing-window-status">Live research</div>
        </div>

        <div className="landing-window-grid">
          <aside className="landing-window-sidebar">
            <div className="landing-mini-label">Workspace</div>
            <div className="landing-mini-item landing-mini-item-active">
              <IconSearch size={14} />
              New research
            </div>
            <div className="landing-mini-item">
              <IconHistory size={14} />
              Recent chats
            </div>
            <div className="landing-mini-label landing-mini-label-space">Sources</div>
            <div className="landing-source-line">knowledge graph / web</div>
            <div className="landing-source-line">answer context / live</div>
          </aside>

          <div className="landing-window-main">
            <div className="landing-chat-breadcrumb">RESEARCH ASSISTANT</div>
            <div className="landing-chat-query">
              What are the practical differences between edge and serverless compute for a small SaaS product?
            </div>

            <div className="landing-chat-answer">
              <div className="landing-answer-rule" />
              <p>
                The main difference is where execution happens relative to the user and the provider&apos;s infrastructure. For a small SaaS, the decision usually comes down to latency, runtime limits, and where your data already lives.
              </p>
              <p>
                Edge functions are strongest for lightweight, latency-sensitive work. Traditional serverless functions are often a better fit for longer-running backend tasks and database-heavy workflows.
              </p>
            </div>

            <div className="landing-source-stack">
              <div className="landing-source-card">
                <div className="landing-source-icon"><IconWorldSearch size={14} /></div>
                <div>
                  <div className="landing-source-domain">vercel.com</div>
                  <div className="landing-source-title">Edge and serverless execution patterns</div>
                </div>
                <IconExternalLink size={14} />
              </div>
              <div className="landing-source-card">
                <div className="landing-source-icon"><IconQuote size={14} /></div>
                <div>
                  <div className="landing-source-domain">developer.mozilla.org</div>
                  <div className="landing-source-title">Runtime and deployment context</div>
                </div>
                <IconExternalLink size={14} />
              </div>
            </div>

            <div className="landing-composer">
              <span>Ask a follow-up...</span>
              <div className="landing-composer-send"><IconArrowUpRight size={15} /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-float landing-float-top">
        <IconSourceCode size={15} />
        <span>2 sources checked</span>
      </div>
      <div className="landing-float landing-float-bottom">
        <IconShieldCheck size={15} />
        <span>Traceable answer</span>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="landing-page">
      <div className="landing-shell">
        <header className="landing-header">
          <Wordmark />

          <nav className="landing-nav" aria-label="Primary navigation">
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="/auth/login">Sign in</Link>
          </nav>

          <div className="landing-header-actions">
            <Link href="/auth/login" className="landing-signin-mobile">
              Sign in
            </Link>
            <Link href="#start" className="landing-button landing-button-dark">
              Open Morphic <IconArrowUpRight size={16} />
            </Link>
            <details className="landing-mobile-nav">
              <summary aria-label="Open navigation">
                <IconMenu2 size={22} />
              </summary>
              <div className="landing-mobile-menu">
                <Link href="#features">Features</Link>
                <Link href="#how-it-works">How it works</Link>
                <Link href="#faq">FAQ</Link>
                <Link href="/auth/login">Sign in</Link>
              </div>
            </details>
          </div>
        </header>

        <section className="landing-hero" aria-labelledby="hero-title">
          <div className="landing-hero-copy">
            <p className="landing-kicker"><span /> Research before response</p>
            <h1 id="hero-title">Answers that leave a trail.</h1>
            <p className="landing-hero-lede">
              Morphic is an AI research workspace for students, developers, researchers, and professionals who need more than a plausible paragraph. It searches relevant context when needed, connects that material to the response, and keeps the conversation available for the next question.
            </p>
            <div className="landing-hero-actions" id="start">
              <Link
                href="/search?q=Compare%20Postgres%20and%20SQLite%20for%20a%20small%20SaaS"
                className="landing-button landing-button-accent"
              >
                Try a research question <IconArrowUpRight size={17} />
              </Link>
              <Link href="#how-it-works" className="landing-text-link">
                See how it works <span>↓</span>
              </Link>
            </div>
            <div className="landing-hero-note">
              <IconClock size={15} />
              Built for questions that take more than one source.
            </div>
          </div>

          <ChatPreview />
        </section>

        <section className="landing-proof-strip" aria-label="Product principles">
          <div><strong>Search</strong><span>When current context matters.</span></div>
          <div><strong>Context</strong><span>Relevant material stays attached to the answer.</span></div>
          <div><strong>Sources</strong><span>Open the trail and inspect it yourself.</span></div>
          <div><strong>Conversation</strong><span>Keep refining instead of restarting.</span></div>
        </section>

        <section className="landing-section landing-how" id="how-it-works" aria-labelledby="how-title">
          <div className="landing-section-heading landing-section-heading-split">
            <div>
              <p className="landing-eyebrow">How it works</p>
              <h2 id="how-title">A research loop, not a prompt box.</h2>
            </div>
            <p>
              Morphic is designed around the working rhythm of research: frame the question, gather context, inspect the result, then ask the better follow-up.
            </p>
          </div>

          <div className="landing-steps">
            {steps.map(step => (
              <article key={step.number} className="landing-step">
                <span className="landing-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section landing-features" id="features" aria-labelledby="features-title">
          <div className="landing-section-heading">
            <p className="landing-eyebrow">Features</p>
            <h2 id="features-title">Built for work you need to explain later.</h2>
          </div>

          <div className="landing-feature-main">
            <div className="landing-feature-copy">
              <div className="landing-feature-label"><IconWorldSearch size={16} /> Web-aware answers</div>
              <h3>Search is part of the answer path.</h3>
              <p>
                When a question benefits from current information, Morphic can retrieve web context and use it to ground the response. That matters for product research, technical documentation, changing APIs, comparisons, and any question where yesterday&apos;s model memory is not enough.
              </p>
            </div>
            <div className="landing-code-panel">
              <div className="landing-code-head"><span>research_context</span><span>LIVE</span></div>
              <pre>{`query = "edge vs serverless"

sources = search(query)
context = rank(sources)
answer = model(context, query)

return answer + citations`}</pre>
            </div>
          </div>

          <div className="landing-feature-grid">
            <article className="landing-feature-panel landing-feature-panel-tall">
              <div className="landing-feature-panel-top">
                <IconQuote size={17} />
                <span>01 / Traceability</span>
              </div>
              <h3>See what the answer is leaning on.</h3>
              <p>
                Source cards keep the evidence close to the prose instead of hiding it behind a separate research tab. You can open an original page, compare context, and decide whether the supporting material is strong enough for your use case.
              </p>
              <div className="landing-mini-source-preview">
                <span>developer.mozilla.org</span>
                <span>runtime context</span>
              </div>
            </article>

            <article className="landing-feature-panel">
              <div className="landing-feature-panel-top">
                <IconBraces size={17} />
                <span>02 / Structured output</span>
              </div>
              <h3>Let useful answers become useful interfaces.</h3>
              <p>
                Morphic can render richer answer experiences when a question calls for structure, such as lists, tables, or interactive result components. The interface adapts to the task instead of forcing every response into the same text bubble.
              </p>
            </article>

            <article className="landing-feature-panel">
              <div className="landing-feature-panel-top">
                <IconHistory size={17} />
                <span>03 / Conversation memory</span>
              </div>
              <h3>Keep the question alive.</h3>
              <p>
                Research rarely finishes in one turn. Follow-ups remain attached to the conversation so you can narrow scope, change direction, challenge a conclusion, or ask for a second pass without rebuilding the context from scratch.
              </p>
            </article>

            <article className="landing-feature-panel landing-feature-panel-wide">
              <div className="landing-feature-wide-copy">
                <div className="landing-feature-panel-top">
                  <IconShieldCheck size={17} />
                  <span>04 / Open architecture</span>
                </div>
                <h3>Understand the product you are using.</h3>
                <p>
                  Morphic is open source, so developers can inspect the application architecture, adapt the interface, and understand how an AI answer workspace is assembled. That is a practical advantage for teams that care about control as much as convenience.
                </p>
              </div>
              <div className="landing-open-source-mark">
                <span>OPEN</span>
                <strong>SOURCE</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="landing-section landing-about" id="about" aria-labelledby="about-title">
          <div className="landing-about-mark" aria-hidden="true">M</div>
          <div className="landing-about-copy">
            <p className="landing-eyebrow">Why we built Morphic</p>
            <h2 id="about-title">Fast answers are useful. Answers you can investigate are better.</h2>
            <p>
              The web is full of information, but finding a good answer still means moving between search results, documentation, notes, and a blank chat window. We wanted a different workflow: let an AI assistant help with the synthesis while keeping the research trail visible enough for a person to inspect.
            </p>
            <p>
              That idea shaped Morphic into an open-source answer engine rather than another generic chat screen. The goal is not to make users trust a model more. It is to make the path from question to answer more legible, so a useful response can become the starting point for better research instead of the end of it.
            </p>
            <div className="landing-quote">
              <IconQuote size={19} />
              <blockquote>Use the answer as a map back to the material, not as a substitute for it.</blockquote>
            </div>
          </div>
        </section>

        <section className="landing-section landing-faq" id="faq" aria-labelledby="faq-title">
          <div className="landing-section-heading landing-section-heading-split">
            <div>
              <p className="landing-eyebrow">FAQ</p>
              <h2 id="faq-title">Questions people should be able to answer before they try it.</h2>
            </div>
            <p>
              Transparent products should explain their boundaries as clearly as their benefits.
            </p>
          </div>
          <div className="landing-faq-list">
            {faqs.map(item => (
              <details key={item.q} className="landing-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <IconChevronDown size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="landing-final" aria-labelledby="final-title">
          <div>
            <p className="landing-eyebrow">Start with a difficult question.</p>
            <h2 id="final-title">Search less. Understand more.</h2>
            <p>
              Bring Morphic a question that crosses sources, needs context, or deserves a second look.
            </p>
          </div>
          <Link
            href="/search?q=Find%20the%20best%20database%20for%20a%20small%20SaaS%20and%20compare%20the%20tradeoffs"
            className="landing-button landing-button-accent landing-button-large"
          >
            Open the research workspace <IconArrowUpRight size={18} />
          </Link>
        </section>

        <footer className="landing-footer">
          <div className="landing-footer-brand">
            <Wordmark />
            <p>Open-source AI research for questions worth investigating.</p>
          </div>
          <div className="landing-footer-links">
            <div>
              <span>Product</span>
              <Link href="#features">Features</Link>
              <Link href="#how-it-works">How it works</Link>
              <Link href="#faq">FAQ</Link>
            </div>
            <div>
              <span>Company</span>
              <Link href="#about">About</Link>
              <Link href="mailto:hello@morphic.sh">Contact</Link>
              <Link href="/auth/login">Sign in</Link>
            </div>
            <div>
              <span>Legal</span>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
          <div className="landing-footer-bottom">
            <span>© {new Date().getFullYear()} Morphic. Built for research, not hype.</span>
            <span>Open-source answer engine.</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
