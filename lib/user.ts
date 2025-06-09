import clientPromise from './db'

export async function getUserByEmail(email: string) {
  const client = await clientPromise
  const db = client.db()

  const user = await db.collection('users').findOne({ email })

  if (!user) return null

  return {
    name: user.name || '',
    email: user.email,
    image: user.image || '', // fallback to default if you wish
    role: user.role || 'user',
    createdAt: user.createdAt || null,
  }
}
