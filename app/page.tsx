export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <header className="space-y-2 border-b border-slate-200 pb-6">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-800">Last updated:</span>{' '}
            <span className="italic">February 3, 2026</span>
          </p>

          <p className="text-sm text-slate-600">
            This policy applies to the <span className="font-medium text-slate-800">Run Trial App</span>.
          </p>
        </header>

        <article className="prose prose-slate mt-8 max-w-none">
          <h2>Overview</h2>
          <p>
            This Privacy Policy describes how the <strong>Run Trial App</strong> (“the App”) handles
            information when you use it.
          </p>
          <p>
            This App is a <strong>test and trial application</strong> created for internal evaluation and
            learning purposes. It is not intended for public or commercial use.
          </p>

          <h2>Information We Collect</h2>
          <h3>Location Information</h3>
          <p>
            The App may request access to your device’s location <strong>only to demonstrate native
            location permissions and functionality</strong> during testing.
          </p>

          <ul>
            <li>Location data is accessed only when you explicitly grant permission</li>
            <li>Location data is displayed temporarily within the App</li>
            <li>
              Location data is <strong>not stored</strong>, <strong>not transmitted</strong>, and{' '}
              <strong>not shared</strong>
            </li>
          </ul>

          <p>
            You can revoke location permissions at any time through your device settings.
          </p>

          <h2>Information We Do Not Collect</h2>
          <p>The App does <strong>not</strong>:</p>
          <ul>
            <li>Collect personal identifying information</li>
            <li>Create user accounts</li>
            <li>Track users across apps or websites</li>
            <li>Store location history</li>
            <li>Share data with third parties</li>
            <li>Use analytics, advertising, or tracking technologies</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            The App does not persistently store user data. Any information accessed during use is handled
            locally on the device and discarded when the App is closed.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The App does not integrate with third-party analytics, advertising, or tracking services.
          </p>

          <h2>Children’s Privacy</h2>
          <p>
            The App is not intended for use by children and does not knowingly collect information from
            children under the age of 13.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time to reflect changes to the App or its
            functionality. Updates will be posted on this page.
          </p>

          <h2>Contact</h2>
          <p>If you have questions about this Privacy Policy, please contact:</p>

          <div className="not-prose mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-700">
              <span className="font-medium text-slate-900">Email:</span>{' '}
              <a
                className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
                href="mailto:your-email@yourdomain.com"
              >
                hsanchez7934@gmail.com
              </a>
            </p>
          </div>
        </article>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Run Trial App. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
