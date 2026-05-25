export { metadata, viewport } from 'next-sanity/studio'

import ScrollToBottom from '@/app/components/scrollToBottom'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollToBottom />
      {children}
    </>
  )
}