'use client'

import Link from 'next/link'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

type Project = {
  title: string
  description: string
  tag: string[]
  link?: string
  repo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const primaryLink =
    project.link && project.link.trim() !== ''
      ? project.link
      : project.repo && project.repo.trim() !== ''
      ? project.repo
      : null

  const CardContent = (
    <div className="group transition border border-gray-800 hover:border-gray-700 bg-gray-900 hover:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md cursor-pointer">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-white group-hover:text-lime-400 transition">
          {project.title}
        </h2>
        <div className="flex gap-3">
          {project.link && project.link.trim() !== '' ? (
            <Link
              href={project.link}
              target="_blank"
              className="text-gray-400 hover:text-lime-400 transition"
              title="Live Site"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={18} />
            </Link>
          ) : (
            <div className="text-sm text-gray-500 italic">No Live Website</div>
          )}

          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              className="text-gray-400 hover:text-lime-400 transition"
              title="Source Code"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={18} />
            </Link>
          )}
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tag.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs bg-gray-800 text-gray-300 border border-gray-700 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )

  return primaryLink ? (
    <Link href={primaryLink} target="_blank">
      {CardContent}
    </Link>
  ) : (
    <div>{CardContent}</div>
  )
}
