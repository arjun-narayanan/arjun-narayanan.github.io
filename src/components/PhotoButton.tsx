import { useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import type { PersonalPhoto } from '../data/photos'
import './PhotoButton.css'

interface PhotoButtonProps {
  photo: PersonalPhoto
  className?: string
  children?: ReactNode
}

export default function PhotoButton({ photo, className = '', children }: PhotoButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const captionId = useId()
  const backdropPointerDown = useRef(false)

  useEffect(() => {
    if (!isOpen) return
    const dialog = dialogRef.current
    if (!dialog) return
    const previousOverflow = document.body.style.overflow
    const trigger = buttonRef.current

    document.body.style.overflow = 'hidden'
    dialog.showModal()

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [isOpen])

  return <>
    <button
      ref={buttonRef}
      type="button"
      className={`photo-open ${className}`.trim()}
      aria-label={`View ${photo.title} full photo`}
      aria-haspopup="dialog"
      onClick={() => setIsOpen(true)}
    >
      {children}
    </button>
    {isOpen && createPortal(
      <dialog
        ref={dialogRef}
        className="photo-viewer"
        aria-labelledby={titleId}
        aria-describedby={captionId}
        onCancel={(event) => {
          event.preventDefault()
          event.stopPropagation()
          setIsOpen(false)
        }}
        onClose={(event) => {
          event.stopPropagation()
          setIsOpen(false)
        }}
        onPointerDown={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect()
          backdropPointerDown.current = event.target === event.currentTarget && (
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
          )
        }}
        onClick={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect()
          const isOutside = event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
          if (backdropPointerDown.current && event.target === event.currentTarget && isOutside) {
            setIsOpen(false)
          }
          backdropPointerDown.current = false
        }}
      >
        <div className="photo-viewer-layout">
          <header className="photo-viewer-header">
            <div>
              <p className="photo-viewer-eyebrow">FROM MY CAMERA ROLL</p>
              <h2 id={titleId}>{photo.title}</h2>
            </div>
            <button type="button" className="photo-viewer-close" aria-label="Close photo" onClick={() => setIsOpen(false)} autoFocus>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </header>
          <div className="photo-viewer-image-wrap">
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="photo-viewer-image" />
          </div>
          <footer className="photo-viewer-footer">
            <p id={captionId} className="photo-viewer-caption">{photo.caption}</p>
          </footer>
        </div>
      </dialog>,
      document.body,
    )}
  </>
}
