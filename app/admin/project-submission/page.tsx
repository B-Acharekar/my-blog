import Header from '@/components/Header'
import ProjectForm from '@/components/ProjectForm'

export default function AdminProjectSubmissionPage() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto shadow-lg rounded-xl p-6">
          <ProjectForm />
        </div>
      </main>
    </>
  )
}
