export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <header className="space-y-3 border-b border-slate-200 pb-6">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Support
          </h1>

          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-800">Run Trial App</span>
          </p>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm text-amber-900">
              <span className="font-semibold">Notice:</span> This application is a test/trial app
              created for internal evaluation and learning purposes. It is{" "}
              <span className="font-semibold">not intended for public use</span>.
            </p>
          </div>
        </header>

        <section className="mt-8 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Getting Help
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              If you are participating in internal testing and need assistance,
              please contact the team using the email below. Include the app
              version and a brief description of the issue.
            </p>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-700">
                <span className="font-medium text-slate-900">Support Email:</span>{" "}
                <a
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
                  href="mailto:your-email@yourdomain.com"
                >
                  hsanchez7934@gmail.com
                </a>
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Typical response time: 1–2 business days (internal testing only).
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Why can’t I access all features?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  This is a trial application and may contain incomplete or
                  experimental functionality intended for internal validation.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  Does the app collect personal data?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  This trial app is designed to be minimal. If location is used,
                  it is only to demonstrate permissions and functionality during
                  testing. Refer to the Privacy Policy for details.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  How do I report a bug?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Email support with the steps to reproduce, expected vs actual
                  behavior, device model, and OS version.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">
              App Details
            </h2>

            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="font-medium text-slate-900">App Name</dt>
                <dd className="mt-1 text-slate-700">Run Trial App</dd>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="font-medium text-slate-900">Intended Audience</dt>
                <dd className="mt-1 text-slate-700">Internal testing only</dd>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="font-medium text-slate-900">Last Updated</dt>
                <dd className="mt-1 text-slate-700">February 3, 2026</dd>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <dt className="font-medium text-slate-900">Status</dt>
                <dd className="mt-1 text-slate-700">Trial / Evaluation</dd>
              </div>
            </dl>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Run Trial App. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
