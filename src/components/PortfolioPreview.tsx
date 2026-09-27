import './PortfolioPreview.css'

export default function PortfolioPreview() {
  return <div className="portfolio-preview" aria-hidden="true">
    <div className="portfolio-preview-orbit" />
    <div className="portfolio-preview-sheet portfolio-preview-sheet-back" />
    <div className="portfolio-preview-sheet portfolio-preview-sheet-middle" />
    <div className="portfolio-preview-folio">
      <div className="portfolio-preview-toolbar">
        <span className="portfolio-preview-dots"><i /><i /><i /></span>
        <span>PERSONAL / FOLIO</span>
        <span>01</span>
      </div>
      <div className="portfolio-preview-page">
        <span className="portfolio-preview-eyebrow">PERSONAL PORTFOLIO</span>
        <strong className="portfolio-preview-name">ARJUN<span>C N</span></strong>
        <span className="portfolio-preview-rule"><i /></span>
        <span className="portfolio-preview-caption">DESIGN · CODE · STORY</span>
        <div className="portfolio-preview-chapters"><span>I</span><span>II</span><span>III</span></div>
      </div>
    </div>
    <span className="portfolio-preview-edition">A DIGITAL MANUSCRIPT</span>
  </div>
}
