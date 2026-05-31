export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GitHub Integration
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Estimate PR Review Time<br />
          <span className="text-[#58a6ff]">Before It Hits Your Queue</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub repos and get ML-powered predictions on how long each pull request will take to review — based on diff complexity, files touched, and your team's history.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for 7-day trial.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: "Diff Analysis", desc: "Lines changed, files touched, cyclomatic complexity extracted automatically." },
          { title: "ML Predictions", desc: "Model trained on your team's historical review data for accurate estimates." },
          { title: "Accuracy Tracking", desc: "Dashboard shows prediction vs. actual over time so the model improves." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "ML review time predictions",
              "Historical accuracy dashboard",
              "GitHub OAuth integration",
              "Team seat included",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the ML model work?",
              a: "It extracts complexity metrics from each PR diff — lines added/removed, number of files, estimated cyclomatic complexity — and compares them against your team's historical review times to produce a calibrated estimate."
            },
            {
              q: "Does it need access to my code?",
              a: "It only reads PR metadata and diffs via GitHub's API using OAuth. Your source code is never stored on our servers."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time and you won't be charged again. Your access continues until the end of the billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} PR Time Estimator. All rights reserved.
      </footer>
    </main>
  );
}
