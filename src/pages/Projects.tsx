import { Link } from "react-router-dom";
import foto from "../assets/foto.jpg";
import "../css/Projects.css"
const Projects = () => {
    return (
        <>
            <header>
                <Link to={"/"}>
                    <div>
                        <img src={foto} />
                        <p style={{ textAlign: "center", fontSize: "1.25rem" }}>Jorgelu15's personal website</p>
                    </div>
                </Link>
            </header>
            <main>
                <div>
                    <h1 style={{
                        textAlign: "center",
                        fontSize: "1.5rem",
                        lineHeight: "2rem",
                        fontWeight: 400,
                        marginBottom: 50
                    }}>My projects</h1>
                    <p style={{ textAlign: "center", marginBottom: 30 }}>If the projects in my Youtube channel you liked and useful for you, you can sponsor my work on them. ☕</p>
                    <p style={{ textAlign: "center", marginBottom: 30 }}><a style={{ background: "#21262d", color: "#fff", borderRadius: 5, padding: 5 }} href='https://paypal.me/prograndom?country.x=CO&locale.x=es_XC'>Sponsor 😍</a></p>
                    <ul>
                        <li>
                            <p><a href="https://midgar.artosh.dev/"><strong className="color-red">Midgar ERP</strong></a> is a ERP system for small store that help to organize and manage all type operation</p>
                        </li>
                        <li>
                            <span>
                                <a href="https://github.com/jorgelu15/leermangaonline">
                                    <img src="https://img.shields.io/github/stars/jorgelu15/leermangaonline?style=social" alt="GitHub" />
                                </a>
                            </span>
                            <p><a href="https://github.com/jorgelu15/leermangaonline"><strong className="color-red">LeerMangaOnline</strong></a> is website that serve like a repository of manga where the users can have access to  extend catalogue of series</p>
                        </li>
                        <li>
                            <span>
                                <a href="https://github.com/jorgelu15/leermangaonline">
                                    <img src="https://img.shields.io/github/stars/jorgelu15/leermangaonline?style=social" alt="GitHub" />
                                </a>
                            </span>
                            <p><a href="https://github.com/jorgelu15/diagramasapp"><strong className="color-red">Schematic diagrams engine</strong></a> is a android application that serve for create schematic diagrams and is usefull for electric sector</p>
                        </li>
                        <li>
                            <span>
                                <a href="https://github.com/jorgelu15/tioanime">
                                    <img src="https://img.shields.io/github/stars/jorgelu15/tioanime?style=social" alt="GitHub" />
                                </a>
                            </span>
                            <p><a href="https://github.com/jorgelu15/tioanime"><strong className="color-red">Tioanime</strong></a> is website  that serve like a repository of anime the users can have access to  extend catalogue of series</p>
                        </li>
                        <li>
                            <span>
                                <a href="https://github.com/jorgelu15/Netflix-VideoPlayer">
                                    <img src="https://img.shields.io/github/stars/jorgelu15/Netflix-VideoPlayer?style=social" alt="GitHub" />
                                </a>
                            </span>
                            <p><a href="https://github.com/jorgelu15/Netflix-VideoPlayer"><strong className="color-red">Netflix video player Clone</strong></a> is website that serve like a repository of manga where the users can have access to  extend catalogue of series</p>
                        </li>
                    </ul>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <a style={{ margin: "20px 10px" }} href='https://www.facebook.com/elyorwtf' target='_blank'>Facebook</a>
                        <a style={{ margin: "20px 10px" }} target='_blank'>Github</a>
                        <a style={{ margin: "20px 10px" }} target='_blank'>Youtube</a>
                        <a style={{ margin: "20px 10px" }} target='_blank'>Instagram</a>
                    </div>
                    <footer style={{ marginTop: 100, width: "100%", textAlign: "center" }}>
                        <p>© All rights reserved. And everything else. 🤷</p>
                    </footer>
                </div>


            </main >
        </>
    );
}

export default Projects;