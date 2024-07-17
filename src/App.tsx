import './App.css'
import foto from "./assets/foto.jpg";

function App() {

  return (
    <div className='container'>
      <img src={foto} />
      <p className='text-principal'>Hey! I'm @jorgelu15 <strong>(Jorge Guardo)</strong> 👋</p>
      <p>🙌 I’m software engineer from Colombia. co</p>
      <p>🗺️ I currently live in Cartagena, Colombia. co.</p>
      <p>🔨 I have been building apps and tools for a schematics
        diagrams engine and systems ERP and CRM for store small in Colombia,
        with different teams and organizations. </p>
      <p>I created <span className='color-red'>Midgar ERP</span>, <span className='color-red'>Schematics for android</span>  and other applications open source, additionally, i create content in Youtube 🚀</p>
      <p>I like to build things related software architecture,
        distributed systems, SQL and NoSQL databases, Docker, Java, TypeScript (and JavaScript), modern backend APIs, and modern frontend frameworks. 🤖</p>
      <p style={{ fontSize: 24 }}>You are so probably looking for my youtube channel content or my solutions for ERP and CRM or schematics engine</p>
      <p>I'm Actually dedicating a high percentage  of my time to Midgar ERP, inventory manager and schematics diagrams. If you wish like to have my help with your team and product, feel free to contact me</p>
      <p>If the projects in my Youtube channel you liked and useful for you,  you can sponsor my work on them. ☕</p>
      <a style={{ background: "#21262d", color: "#fff", borderRadius: 5, padding: 5 }} href='https://paypal.me/prograndom?country.x=CO&locale.x=es_XC'>Sponsor 😍</a>
      <div>
        <a style={{ margin: "20px 10px" }} href='https://www.facebook.com/elyorwtf' target='_blank'>Facebook</a>
        <a style={{ margin: "20px 10px" }} target='_blank'>Github</a>
        <a style={{ margin: "20px 10px" }} target='_blank'>Youtube</a>
        <a style={{ margin: "20px 10px" }} target='_blank'>Instagram</a>
      </div>
      <footer style={{ marginTop: 100 }}>
        <p>© All rights reserved. And everything else. 🤷</p>
      </footer>
    </div>
  )
}

export default App;
