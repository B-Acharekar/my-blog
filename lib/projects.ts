// lib/project.ts
import clientPromise from './db'

export async function getAllProjects() {
  const client = await clientPromise
  const db = client.db()
  const projects = await db.collection('projects').find({}).sort({ date: -1 }).toArray()

  return projects.map((project) => ({
    title: project.title,
    description: project.description || '',
    repo: project.github || '',       // CHANGED
    link: project.live || '',         // CHANGED
    collaborators: project.collaborators || '',
    tag: project.tags || [],          // CHANGED
    createdAt: project.createdAt || null,
  }))
}

