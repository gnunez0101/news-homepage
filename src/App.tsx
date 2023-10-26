import { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'

function App() {

  const [menuOpen, setMenuOpen] = useState("")
  const toggleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    window.addEventListener('resize', resizeScreen)
    return () => {
      window.removeEventListener('resize', resizeScreen)
    };
  }, [])

  const resizeScreen = () => {
    toggleRef.current!.checked = false;
    setMenuOpen("")
  }

  const handleToggle = () => {
    setMenuOpen(toggleRef.current!.checked ? "show": "")
  }

  return (
    <>
      <div className='grid'>

        <section className="header">
          <div className="logo">
            <img src={logo} alt="logo W." />
          </div>
          <nav className="nav">
            <input className='toggle' type="checkbox" ref={toggleRef} onClick={handleToggle}/>
            <span></span>
            <span></span>
            <span></span>
            <ul>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>New</li></a>
              <a href="#"><li>Popular</li></a>
              <a href="#"><li>Trending</li></a>
              <a href="#"><li>Categories</li></a>
            </ul>
          </nav>
        </section>

        <section className="main">
          <div className="image"></div>
          <div className="title">
            The Bright Future of Web 3.0?
          </div>
          <p className='message'>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?
          </p>
          <button type="button">
            Read more
          </button>
        </section>

        <section className="sidebar">
          <div className="title">
            New 
          </div>
          <div className="news">
            <div className="new-card">
              <div className="new-header"><a href="#">Hydrogen VS Electric Cars</a></div>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="new-card">
              <div className="new-header"><a href="#">The Downsides of AI Artistry</a></div>
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className="new-card">
              <div className="new-header"><a href="#">Is VC Funding Drying Up?</a></div>
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </section>

        <section className="articles">
          <article className="article-news">
            <img className='article-image' src="./src/assets/images/image-retro-pcs.jpg" alt="retro" />
            <div className="article-number">01</div>
            <div className="article-title"><a href="#">Reviving Retro PCs</a></div>
            <div className="article-text">What happens when old PCs are given modern upgrades?</div>
          </article>
          
          <article className="article-news">
          <img className='article-image' src="./src/assets/images/image-top-laptops.jpg" alt="laptops" />
            <div className="article-number">02</div>
            <div className="article-title"><a href="#">Top 10 Laptops of 2022</a></div>
            <div className="article-text">Our best picks for various needs and budgets.</div>
          </article>
         
          <article className="article-news">
            <img className='article-image' src="./src/assets/images/image-gaming-growth.jpg" alt="gaming" />
            <div className="article-number">03</div>
            <div className="article-title"><a href="#">The Growth of Gaming</a></div>
            <div className="article-text">How the pandemic has sparked fresh opportunities.</div>
          </article>
        </section>
      </div>
      { toggleRef.current && <div className={`backdrop ${menuOpen}`}
          onClick={resizeScreen}></div>
      }
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/gnunez0101/news-homepage">Gonzalo M. Núñez</a>.
      </div>
    </>
  )
}

export default App
