import type { Metadata } from 'next'
import { CompetenciesOverview } from '@/components/competencies-overview'

export const metadata: Metadata = {
  title: 'Medical Competencies | Med-Dex',
  description:
    'Explore the nine thematic roles in the UAE EmiratesMEDs Competency Framework for Medical Education.',
}

export default function CompetenciesPage() {
  return <CompetenciesOverview />
}
