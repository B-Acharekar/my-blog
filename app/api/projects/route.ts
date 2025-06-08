import clientPromise from '@/lib/db'
import { NextResponse } from 'next/server'

interface Project {
  title: string
  description?: string
  github?: string
  live?: string
  collaborators?: string
  tags?: string[]
}

export async function POST(req: Request) {
  try {
    const {
      title,
      description = '',
      github = '',
      live = '',
      collaborators = '',
      tags = [],
    }: Project = await req.json()

    if (!title || typeof title !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Title is required and must be a string.' },
        { status: 400 }
      )
    }

    const newProject = {
      title,
      description,
      github,
      live,
      collaborators,
      tags,
      createdAt: new Date(),
    }

    const client = await clientPromise
    const db = client.db()
    const projects = db.collection('projects')

    await projects.insertOne(newProject)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to save project:', error)
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 })
  }
}
