import TemplateHead from "../TemplateHead"
import Header from "../Header"
import Footer from "../Footer"

const TemplatePage = ({ title, description, styles, children }) => {
  return (
    <TemplateHead title={title} description={description}>
      <div style={styles}><Header /></div>
      {children}
      <div style={styles}><Footer /></div>
    </TemplateHead>
  )
}
export default TemplatePage
