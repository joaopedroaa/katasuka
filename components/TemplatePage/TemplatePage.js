import TemplateHead from "../TemplateHead"
import Header from "../Header"
import Footer from "../Footer"
import FirebaseAuth from "../FirebaseAuth"
import config from "../../data/config.json"

const TemplatePage = ({ title, description, styles, children }) => {


  return (
    <TemplateHead title={`${title} - ${config.title}`} description={description ? description: config.description}>
      <div style={styles}><Header /></div>
      {children}
      <div style={styles}><Footer /></div>
    </TemplateHead>
  )
}
export default TemplatePage
