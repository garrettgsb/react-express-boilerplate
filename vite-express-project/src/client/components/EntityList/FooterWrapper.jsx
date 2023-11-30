import Footer from '../Footer';

export const FooterWrapper = ({ style }) => {
  return (
    <div
      className="footer-wrapper flex items-end justify-center left-1/2 pb-7"
      style={{ ...style, left: '50%', transform: 'translate(-50%)', width: '50%'}}>
      <Footer />
    </div>
  )
}