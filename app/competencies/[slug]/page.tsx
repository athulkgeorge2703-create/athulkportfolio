import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CompetencyDetail } from '@/components/competency-detail'
import { competencies } from '@/data/competencies'

type CompetencyPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return competencies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CompetencyPageProps): Promise<Metadata> {
  const { slug } = await params
  const competency = competencies.find((item) => item.slug === slug)

  if (!competency) return { title: 'Competency not found | Med-Dex' }

  return {
    title: `${competency.title} | Med-Dex`,
    description: competency.teaser,
  }
}

export default async function CompetencyPage({ params }: CompetencyPageProps) {
  const { slug } = await params
  const competency = competencies.find((item) => item.slug === slug)

  if (!competency) notFound()

  return <CompetencyDetail competency={competency} />
}
