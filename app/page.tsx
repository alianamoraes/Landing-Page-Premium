'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Clock3, MapPin, Menu, Moon, Phone, ShoppingBag, Sparkles, Sun, X } from 'lucide-react'

const ORDER_URL = 'https://pedido.anota.ai/loja/melhor-opcao-lanches?referer=gbp_anota'
const INSTAGRAM_URL = 'https://www.instagram.com/melhoropcao.lanchesmogi/'

const reviews = [
  { name: 'Roseana Yoshifuku', time: '6 meses atrás', text: 'Hamburgueria familiar, bom espaço kids, de fácil acesso, com poltronas confortáveis e um ótimo atendimento. Os lanches são enormes, bem temperados, caprichados no recheio e muito saborosos. Já tinha pedido delivery, que tem a mesma qualidade. As maioneses são deliciosas. O preço é justo e vale muito experimentar. Recomendo.', rating: 5 },
  { name: 'Denise Correia', time: '3 meses atrás', text: 'Essa lanchonete da rua Thuller o atendimento é ótimo, em especial a Dayane. Ela é incrível, sensível e atende a gente se vê é um abraço, um oi sensacional ela, desejo tudo de melhor para a vida dela e muito sucesso a todos.', rating: 5 },
  { name: 'Day Santos', time: 'um ano atrás', text: 'Excelente experiência! Sempre que vou na lanchonete sou muito bem atendida. Os lanches são saborosos, bem preparados e chegam quentinhos e em condições perfeitas. Ingredientes de qualidade e cuidado em cada pedido.', rating: 5 },
]

const products = [
  {
    name: 'Porção de Pastéis',
    category: 'Para compartilhar',
    description: 'Mini pastéis dourados, crocantes e recheados na medida certa.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kt5VoIc2O9ugnfC4MKTXGL8CWsxLZk.png',
    className: '',
  },
  {
    name: 'Porção de Coxinhas',
    category: 'Clássicos da casa',
    description: 'Massa macia, frango bem temperado e muito recheio em cada mordida.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d0ZU9U3zipKV5nOarUjlRl3vsQFyRe.png',
    className: '',
  },
  {
    name: 'X-Bacon',
    category: 'Os mais pedidos',
    description: 'Hambúrguer artesanal, queijo derretido e bacon crocante no pão macio.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-13C07Dprm0resWDjr9KhBAjnMBuS8S.png',
    className: '',
  },
  {
    name: 'Opção do Chef',
    category: 'Especial da casa',
    description: 'A combinação generosa que virou favorita em Mogi das Cruzes.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Dg6GIU9V8RnSktxZaZYMGFD1qwyNOd.png',
    className: '',
  },
]

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
}

function InstagramSection() {
  useEffect(() => {
  const existingScript = document.querySelector('script[data-elfsight-platform]')
  const script = existingScript ?? document.createElement('script')

  if (!existingScript) {
  script.src = 'https://elfsightcdn.com/platform.js'
  script.async = true
  script.dataset.elfsightPlatform = 'true'
  document.body.appendChild(script)
  }

  const style = document.createElement('style')
  style.dataset.elfsightContrast = 'true'
  style.textContent = `
    .elfsight-app-9d96e643-8fe1-467d-b18d-b0d98cab05a3 * {
      color: #ffffff !important;
    }
    .elfsight-app-9d96e643-8fe1-467d-b18d-b0d98cab05a3 button {
      color: #ffffff !important;
    }
  `
  document.head.appendChild(style)

  return () => {
  style.remove()
  if (!existingScript) script.remove()
  }
  }, [])

  return (
    <section className="w-full py-16 bg-black flex flex-col items-center" aria-labelledby="instagram-title">
      <div className="max-w-5xl w-full px-4">
        <h2 id="instagram-title" className="text-3xl font-bold text-white mb-8 text-center">
          Siga-nos no <span className="text-red-600">Instagram</span>
        </h2>
        <div className="elfsight-app-9d96e643-8fe1-467d-b18d-b0d98cab05a3" data-elfsight-app-lazy />
      </div>
    </section>
  )
}

function OrderButton({ compact = false }: { compact?: boolean }) {
  return (
    <a href={ORDER_URL} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 ${compact ? 'px-4 py-2.5' : ''}`}>
      <ShoppingBag aria-hidden="true" />
      {compact ? 'Pedir agora' : 'Faça seu pedido online'}
      <ArrowUpRight aria-hidden="true" />
    </a>
  )
}

export default function Page() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className={dark ? 'site-shell dark' : 'site-shell light'}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Melhor Opção Lanches, início">
          <span className="brand-mark">M</span>
          <span>melhor <b>opção</b><small>LANCHES</small></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#cardapio" onClick={() => setMenuOpen(false)}>Cardápio</a>
          <a href="#unidades" onClick={() => setMenuOpen(false)}>Unidades</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Nossa história</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="instagram-link" aria-label="Instagram da Melhor Opção Lanches"><InstagramIcon /> <span>Instagram</span></a>
          <OrderButton compact />
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" aria-label="Alternar tema" onClick={() => setDark(!dark)}>{dark ? <Sun /> : <Moon />}</button>
          <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="inicio" className="hero section-wrap py-10 md:py-20">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> O sabor que faz você voltar</div>
          <h1 className="text-4xl md:text-6xl">Seu momento pede<br /><em>algo especial.</em></h1>
          <p>Hambúrgueres artesanais, porções caprichadas e aquele sabor de lanchonete que transforma qualquer dia.</p>
          <div className="hero-actions"><OrderButton /><a href="#cardapio" className="text-link">Ver o cardápio <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="hero-proof"><div className="avatars"><span>✓</span><span>5</span><span>+</span></div><div><strong>Feito com carinho</strong><small>e ingredientes de verdade</small></div></div>
        </div>
        <div className="hero-art">
          <div className="hero-circle"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MsbGYyMI1n6rKBd6TV8brVTtrDdqKg.png" alt="Hambúrguer artesanal com bacon, fritas e Coca-Cola" /></div>
          <div className="floating-note note-top"><Sparkles aria-hidden="true" /><span><b>Mais pedido</b><small>da casa</small></span></div>
          <div className="floating-note note-bottom"><span className="mini-check"><Check /></span><span><b>Ingredientes frescos</b><small>todos os dias</small></span></div>
        </div>
      </section>

      <section id="unidades" className="location-bar section-wrap">
        <div className="location-intro"><span className="section-kicker">Peça pela unidade mais próxima</span><h2>Estamos do seu lado.</h2><p>Escolha a unidade que atende melhor a sua região.</p></div>
        <div className="location-cards">
          <a href="https://api.whatsapp.com/send?phone=5511970841904" target="_blank" rel="noreferrer" className="location-card"><span className="location-icon"><Phone /></span><span><small>WhatsApp · Unidade 01</small><strong>(11) 97084-1904</strong><em>Mogi das Cruzes</em></span><ArrowUpRight /></a>
          <a href="https://wa.me/5511970932861" target="_blank" rel="noreferrer" className="location-card"><span className="location-icon"><Phone /></span><span><small>WhatsApp · Unidade 02</small><strong>(11) 97093-2861</strong><em>Jardim Universo</em></span><ArrowUpRight /></a>
        </div><p className="delivery-note">Consulte a taxa de entrega e o tempo de espera para o seu bairro direto no WhatsApp!</p>
      </section>

      <section id="cardapio" className="menu-section section-wrap">
        <div className="section-heading"><div><span className="section-kicker">Uma seleção irresistível</span><h2>Feito para <em>dar fome.</em></h2></div><p>Do primeiro pedaço ao último, tudo é preparado para você viver uma experiência deliciosa.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">{products.map((product) => <article key={product.name} className="w-full h-[360px] md:h-[420px] bg-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-between border border-neutral-800"><div className="w-full h-[200px] md:h-[260px] overflow-hidden relative"><img src={product.image} alt={product.name} className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" /><span className="product-tag">{product.category}</span></div><div className="p-5 h-[160px] flex flex-col justify-between flex-1"><div><h3 className="text-xl font-bold text-white mb-2">{product.name}</h3><p className="text-sm text-neutral-400 line-clamp-2">{product.description || '\u00a0'}</p></div><a href={ORDER_URL} target="_blank" rel="noreferrer" className="round-arrow" aria-label={`Pedir ${product.name}`}><ArrowUpRight /></a></div></article>)}</div><div className="w-full flex justify-center items-center mt-12 mb-16"><a href="https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTFtY3Z3ajc4ehgAOgMI8A0%3D&hl=pt-BR&gl=br&authuser=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=Pn7OasCuEPel5OUPpOCE6AY&ei=Pn7OasCuEPel5OUPpOCE6AY&fo_s=OA&opi=79508299&ebb=1&cs=0&foub=mcpp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20 whitespace-nowrap">Cardápio Completo</a></div>
      </section>

      <section className="reviews-section section-wrap" aria-labelledby="reviews-title"><div className="reviews-heading"><div><span className="section-kicker">Quem prova, recomenda</span><h2 id="reviews-title">Avaliações que <em>dão gosto.</em></h2></div><div className="review-score"><strong>4,7</strong><span>★★★★★</span><small>58 avaliações no Google</small></div></div><div className="reviews-track">{reviews.map((review) => <article className="review-card" key={review.name}><div className="review-card-top"><div className="review-avatar">{review.name.charAt(0)}</div><div><h3>{review.name}</h3><small>Google · {review.time}</small></div><span className="review-stars" aria-label={`${review.rating} de 5 estrelas`}>★★★★★</span></div><p>{review.text}</p><a href="https://www.google.com/maps/search/Melhor+Opção+Lanches+Mogi+das+Cruzes" target="_blank" rel="noreferrer">Ler no Google <ArrowUpRight /></a></article>)}</div></section>

      <section id="sobre" className="story section-wrap"><div className="story-stamp"><span>Desde</span><strong>2018</strong><small>Mogi das Cruzes</small></div><div className="story-copy"><span className="section-kicker">Mais que um lanche</span><h2>O melhor sabor é<br /><em>o que fica.</em></h2><p>A Melhor Opção nasceu com uma ideia simples: servir comida de verdade, com generosidade e um atendimento que faz você se sentir em casa.</p><div className="story-details"><span><Clock3 /> Aberto todos os dias</span><span><MapPin /> Mogi das Cruzes, SP</span></div></div></section>

      <InstagramSection />

      <a className="floating-whatsapp bg-[#1a1a1a] border border-red-600 text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)]" href="https://wa.me/5511970841904" target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><span className="bg-neutral-900/80">Fale com a gente</span><strong>WA</strong></a>

      <footer className="site-footer section-wrap"><div className="brand"><span className="brand-mark">M</span><span>melhor <b>opção</b><small>LANCHES</small></span></div><p>Seu próximo lanche favorito está a um clique.</p><div className="footer-right"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram da Melhor Opção Lanches" className="social-link"><InstagramIcon /></a><OrderButton compact /></div></footer>
    </main>
  )
}
