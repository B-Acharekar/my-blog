import Header from '@/components/Header'
import NewPostForm from '@/components/NewPostForm'

export default function AdminPostPage() {
  return (
    <>
      <Header />

      {/* Main Content */}
      <main className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto shadow-lg rounded-xl p-6">
          <NewPostForm />
        </div>
      </main>
    </>
  )
}
