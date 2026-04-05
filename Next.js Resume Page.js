export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-4xl rounded-xl bg-white shadow-md">
        <header className="border-b border-gray-200 px-8 py-10">
          <h1 className="text-4xl font-bold tracking-tight">[Your Full Name]</h1>
          <p className="mt-3 text-sm text-gray-600">
            [City, State] • [Phone Number] • [Email Address]
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <a
              href="[LinkedIn URL]"
              className="font-medium text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
            {" • "}
            <a
              href="[GitHub URL]"
              className="font-medium text-blue-700 hover:underline"
            >
              GitHub
            </a>
          </p>
          <p className="mt-6 text-base leading-7 text-gray-700">
            [Write a brief professional summary or objective here. Keep it to
            2–4 sentences and make it specific to your background, goals, and
            strengths.]
          </p>
        </header>

        <div className="px-8 py-8">
          <section>
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
              Education
            </h2>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">
                    [University or School Name]
                  </h3>
                  <p className="text-sm text-gray-700">
                    [Degree, Major / Concentration]
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  [Graduation Date or Expected Graduation]
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                [Optional: GPA, honors, awards, relevant coursework]
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
              Work Experience
            </h2>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">[Job Title]</h3>
                  <p className="text-sm text-gray-700">[Company Name]</p>
                </div>
                <p className="text-sm text-gray-500">[Start Date] – [End Date]</p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
                <li>[Achievement or responsibility]</li>
                <li>[Achievement or responsibility]</li>
                <li>[Achievement or responsibility]</li>
              </ul>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">[Job Title]</h3>
                  <p className="text-sm text-gray-700">[Company Name]</p>
                </div>
                <p className="text-sm text-gray-500">[Start Date] – [End Date]</p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
                <li>[Achievement or responsibility]</li>
                <li>[Achievement or responsibility]</li>
                <li>[Achievement or responsibility]</li>
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
              Skills
            </h2>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <ul className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                <li className="rounded-md bg-gray-50 px-4 py-3">[Skill]</li>
                <li className="rounded-md bg-gray-50 px-4 py-3">[Skill]</li>
                <li className="rounded-md bg-gray-50 px-4 py-3">[Skill]</li>
                <li className="rounded-md bg-gray-50 px-4 py-3">[Skill]</li>
                <li className="rounded-md bg-gray-50 px-4 py-3">[Skill]</li>
                <li className="rounded-md bg-gray-50 px-4 py-3">[Skill]</li>
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
              Projects
            </h2>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div>
                <h3 className="text-base font-semibold">[Project Name]</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  [Briefly describe the project, what tools you used, and the
                  outcome.]
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div>
                <h3 className="text-base font-semibold">[Project Name]</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  [Briefly describe the project, what tools you used, and the
                  outcome.]
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-800">
              Certifications
            </h2>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
                <li>[Certification Name]</li>
                <li>[Certification Name]</li>
              </ul>
            </div>
          </section>
        </div>

        <footer className="border-t border-gray-200 px-8 py-6 text-center text-sm text-gray-500">
          © 2026 [Your Full Name]
        </footer>
      </div>
    </main>
  );
}