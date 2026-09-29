const features = [
    'Summaries from PDFs and notes',
    'AI-generated flashcards',
    'Quiz assessments with scoring',
    'Personalized study plans',
];

const stats = [
    { label: 'Users', value: '12K+' },
    { label: 'Docs processed', value: '84K' },
    { label: 'Avg. score uplift', value: '+34%' },
];

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <header className="mx-auto max-w-7xl px-6 py-6">
                <nav className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="text-xl font-bold tracking-wide text-cyan-400">STUDYFLOW AI</div>
                    <div className="hidden gap-6 text-sm text-slate-300 md:flex">
                        <a href="#features">Features</a>
                        <a href="#workflow">Workflow</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button className="rounded-full border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500 hover:text-slate-950">
                        Launch app
                    </button>
                </nav>
            </header>

            <main className="mx-auto max-w-7xl px-6 pb-20">
                <section className="grid items-center gap-10 py-16 md:grid-cols-2">
                    <div>
                        <div className="mb-4 inline-flex rounded-full border border-cyan-500/50 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                            AI Study Platform
                        </div>
                        <h1 className="text-5xl font-black uppercase leading-tight tracking-tight md:text-7xl">
                            Learn faster.
                            <span className="block text-cyan-400">Retain more.</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-slate-300">
                            Turn PDFs, notes, and study material into flashcards, quizzes, and summaries with a smart learning workflow built for students and knowledge workers.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
                                Get started
                            </button>
                            <button className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                                View demo
                            </button>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl shadow-cyan-950/40">
                        <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                            <span>Study pipeline</span>
                            <span className="text-cyan-400">Live</span>
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Input</p>
                                <p className="mt-2 text-lg font-semibold">PDF / Notes / Articles</p>
                            </div>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-xs uppercase tracking-[0.18em] text-slate-300">Summaries</div>
                                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-xs uppercase tracking-[0.18em] text-slate-300">Cards</div>
                                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-xs uppercase tracking-[0.18em] text-slate-300">Quiz</div>
                            </div>
                            <div className="rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">AI insight</p>
                                <p className="mt-2 text-lg font-medium">Key idea: spaced repetition is best for retaining concept clusters.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-10">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Capabilities</p>
                            <h2 className="mt-2 text-3xl font-bold uppercase md:text-4xl">Built for structured learning</h2>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                                <div className="mb-4 h-10 w-10 rounded-full bg-cyan-500/15 ring-1 ring-cyan-500/40" />
                                <p className="text-lg font-semibold text-slate-100">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="workflow" className="py-14">
                    <div className="mb-8 text-center">
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Workflow</p>
                        <h2 className="mt-2 text-3xl font-bold uppercase">From material to mastery</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-4">
                        {['Upload', 'Summarize', 'Study', 'Assess'].map((step, index) => (
                            <div key={step} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                                <div className="mb-3 text-3xl font-bold text-cyan-400">0{index + 1}</div>
                                <h3 className="text-xl font-semibold uppercase">{step}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="pricing" className="py-14">
                    <div className="grid gap-6 md:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
                                <div className="text-4xl font-black text-cyan-400">{stat.value}</div>
                                <div className="mt-2 text-sm uppercase tracking-[0.15em] text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
