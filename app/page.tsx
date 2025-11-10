'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Briefcase, Code, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sound effects using Web Audio API
  const playSound = (type: 'hover' | 'click') => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === 'hover') {
      oscillator.frequency.value = 800;
      gainNode.gain.value = 0.3;
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.05);
    } else {
      // Som de click mais suave e moderno
      oscillator.type = 'sine';
      oscillator.frequency.value = 600;
      gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const scrollProjects = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 520;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const t = {
    en: {
      nav: {
        projects: 'Projects',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        badge: 'Available for work',
        title: 'Web3 & Full Stack Developer',
        description: 'I build decentralized applications and modern web solutions. Specialized in smart contracts, DeFi protocols, and full-stack development.',
        cta1: 'Get in touch',
        cta2: 'View my work'
      },
      projects: {
        title: 'Featured Projects'
      },
      about: {
        title: 'About Me',
        bio: [
          "Hi! I'm Landerson, a passionate developer focused on blockchain technology and modern web development. I love building things that live on the internet.",
          "I specialize in creating smart contracts, decentralized applications, and full-stack web solutions. My work combines technical expertise with a strong focus on user experience and clean code.",
          "When I'm not coding, I'm learning about new technologies, contributing to open-source projects, or exploring the latest trends in Web3 and DeFi."
        ],
        experience: 'Experience',
        skills: 'Skills & Technologies'
      },
      contact: {
        title: "Let's work together",
        description: "I'm currently available for freelance projects and full-time opportunities. Feel free to reach out if you'd like to collaborate!",
        email: 'Send me an email',
        linkedin: 'Connect on LinkedIn'
      },
      footer: {
        rights: 'All rights reserved.',
        built: 'Built with Next.js, TypeScript & Tailwind CSS'
      }
    },
    pt: {
      nav: {
        projects: 'Projetos',
        about: 'Sobre',
        contact: 'Contato'
      },
      hero: {
        badge: 'Disponível para trabalho',
        title: 'Desenvolvedor Web3 & Full Stack',
        description: 'Construo aplicações descentralizadas e soluções web modernas. Especializado em smart contracts, protocolos DeFi e desenvolvimento full-stack.',
        cta1: 'Entre em contato',
        cta2: 'Ver meu trabalho'
      },
      projects: {
        title: 'Projetos em Destaque'
      },
      about: {
        title: 'Sobre Mim',
        bio: [
          "Olá! Sou Landerson, um desenvolvedor apaixonado focado em tecnologia blockchain e desenvolvimento web moderno. Adoro construir coisas que vivem na internet.",
          "Sou especializado em criar smart contracts, aplicações descentralizadas e soluções web full-stack. Meu trabalho combina expertise técnica com forte foco em experiência do usuário e código limpo.",
          "Quando não estou codando, estou aprendendo sobre novas tecnologias, contribuindo para projetos open-source, ou explorando as últimas tendências em Web3 e DeFi."
        ],
        experience: 'Experiência',
        skills: 'Habilidades & Tecnologias'
      },
      contact: {
        title: 'Vamos trabalhar juntos',
        description: 'Estou disponível para projetos freelance e oportunidades full-time. Sinta-se à vontade para entrar em contato se quiser colaborar!',
        email: 'Me envie um email',
        linkedin: 'Conecte no LinkedIn'
      },
      footer: {
        rights: 'Todos os direitos reservados.',
        built: 'Construído com Next.js, TypeScript & Tailwind CSS'
      }
    }
  };

  const currentLang = t[language];

  const projectsData = {
    en: [
      {
        title: 'AptosScanMe',
        description: 'Developed for Vietnam Aptos Hackathon 2025, AptosScanMe is a full-stack dApp providing fast and intuitive wallet scanning on Aptos blockchain. Features instant APT balance viewing with Mainnet support and clean UI design.',
        tech: ['React', 'Tailwind CSS', 'Aptos SDK', 'Vercel'],
        year: '2025',
        type: 'Web3',
        link: 'https://aptosscanme.vercel.app/'
      },
      {
        title: 'VaultX',
        description: 'VaultX is a decentralized application (dApp) built for the Monad Testnet, designed to analyze on-chain activity and reward ecosystem engagement.',
        tech: ['React', 'Monad', 'AI Integration', 'Vercel', 'MetaMask'],
        year: '2025',
        type: 'Web3',
        link: 'https://vaultxscan.vercel.app'
      },
      {
        title: 'Ethaon',
        description: 'Revolutionary decentralized voting platform leveraging TEN Protocol\'s encrypted blockchain technology. Ensures complete privacy and transparency with votes remaining secret until poll deadline, when results are automatically revealed.',
        tech: ['React', 'TEN Protocol', 'Smart Contracts', 'Encryption'],
        year: '2025',
        type: 'Web3',
        link: 'https://ethaon.pages.dev/'
      },
      {
        title: 'LedgerView',
        description: 'Developed during Base Hackathon, LedgerView provides transparent blockchain data visualization. Users can easily track transactions, wallet activity, and smart contract interactions with an intuitive interface.',
        tech: ['React', 'Web3', 'Smart Contracts', 'Base Network'],
        year: '2025',
        type: 'Web3',
        link: 'https://ledgerview.netlify.app/'
      },
      {
        title: 'Tora DEX',
        description: 'Decentralized exchange on Ethereum Sepolia Testnet for trustless TORA/ETH trading. Features instant swaps at fixed rates (100 TORA per 1 ETH), MetaMask integration, and robust security mechanisms for safe token exchanges.',
        tech: ['Solidity', 'Web3.js', 'Ethereum', 'DeFi'],
        year: '2024',
        type: 'Web3',
        link: 'https://tora-dex.netlify.app/'
      },
      {
        title: 'Tora Faucet',
        description: 'Testnet faucet for automatic TORA token distribution on Ethereum Sepolia. Built with Node.js backend and interactive frontend, demonstrating practical Web3 integration and smart contract development.',
        tech: ['Node.js', 'JavaScript', 'ERC-20', 'Ethereum'],
        year: '2024',
        type: 'Web3',
        link: 'https://faucet-tora.netlify.app/'
      }
    ],
    pt: [
      {
        title: 'AptosScanMe',
        description: 'Desenvolvido para o Hackathon Vietnam Aptos 2025, AptosScanMe é um dApp full-stack que fornece escaneamento rápido e intuitivo de carteiras na blockchain Aptos. Possui visualização instantânea de saldo APT com suporte Mainnet e UI limpa.',
        tech: ['React', 'Tailwind CSS', 'Aptos SDK', 'Vercel'],
        year: '2025',
        type: 'Web3',
        link: 'https://aptosscanme.vercel.app/'
      },
      {
        title: 'VaultX',
        description: 'VaultX é uma aplicação descentralizada (dApp) construída para a Testnet Monad, projetada para analisar atividade on-chain e recompensar o engajamento no ecossistema.',
        tech: ['React', 'Monad', 'Integração IA', 'Vercel', 'MetaMask'],
        year: '2025',
        type: 'Web3',
        link: 'https://vaultxscan.vercel.app'
      },
      {
        title: 'Ethaon',
        description: 'Plataforma revolucionária de votação descentralizada usando tecnologia blockchain criptografada do TEN Protocol. Garante total privacidade e transparência com votos secretos até o prazo final, quando resultados são revelados automaticamente.',
        tech: ['React', 'TEN Protocol', 'Smart Contracts', 'Criptografia'],
        year: '2025',
        type: 'Web3',
        link: 'https://ethaon.pages.dev/'
      },
      {
        title: 'LedgerView',
        description: 'Desenvolvido durante o Hackathon Base, LedgerView fornece visualização transparente de dados blockchain. Usuários podem rastrear facilmente transações, atividade de carteiras e interações com smart contracts de forma intuitiva.',
        tech: ['React', 'Web3', 'Smart Contracts', 'Base Network'],
        year: '2025',
        type: 'Web3',
        link: 'https://ledgerview.netlify.app/'
      },
      {
        title: 'Tora DEX',
        description: 'Exchange descentralizada na Testnet Ethereum Sepolia para negociação TORA/ETH sem intermediários. Possui swaps instantâneos a taxas fixas (100 TORA por 1 ETH), integração MetaMask e mecanismos robustos de segurança.',
        tech: ['Solidity', 'Web3.js', 'Ethereum', 'DeFi'],
        year: '2024',
        type: 'Web3',
        link: 'https://tora-dex.netlify.app/'
      },
      {
        title: 'Tora Faucet',
        description: 'Faucet de testnet para distribuição automática de tokens TORA na Ethereum Sepolia. Construído com backend Node.js e frontend interativo, demonstrando integração Web3 prática e desenvolvimento de smart contracts.',
        tech: ['Node.js', 'JavaScript', 'ERC-20', 'Ethereum'],
        year: '2024',
        type: 'Web3',
        link: 'https://faucet-tora.netlify.app/'
      }
    ]
  };

  const projects = projectsData[language];

  const skills = {
    'Blockchain & Web3': [
      'Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 
      'Smart Contracts', 'DeFi', 'NFTs', 'IPFS', 'Aptos SDK'
    ],
    'Frontend Development': [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
      'HTML5', 'CSS3', 'Redux', 'React Query'
    ],
    'Backend Development': [
      'Node.js', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB',
      'REST APIs', 'GraphQL', 'Prisma', 'Redis', 'Java', 'Spring Boot'
    ],
    'Tools & DevOps': [
      'Git', 'Docker', 'CI/CD', 'Vercel', 'AWS',
      'Linux', 'Nginx', 'Jest', 'Postman'
    ]
  };

  const experienceData = {
    en: [
      {
        role: 'Web3 Developer',
        company: 'Freelance',
        period: 'Jan 2023 - Present',
        location: 'Remote',
        description: [
          'Develop and deploy smart contracts for DeFi and NFT projects',
          'Build modern dApps with React and Web3 integration',
          'Implement gas optimization techniques reducing costs by 40%',
          'Collaborate with clients to deliver production-ready solutions'
        ]
      },
      {
        role: 'Full Stack Developer',
        company: 'Personal Projects',
        period: 'Jun 2022 - Present',
        location: 'Remote',
        description: [
          'Create full-stack web applications with Next.js and Node.js',
          'Design and implement RESTful APIs and database schemas',
          'Build responsive UIs with modern CSS frameworks',
          'Deploy and maintain applications on cloud platforms'
        ]
      }
    ],
    pt: [
      {
        role: 'Desenvolvedor Web3',
        company: 'Freelance',
        period: 'Jan 2023 - Presente',
        location: 'Remoto',
        description: [
          'Desenvolvo e faço deploy de smart contracts para projetos DeFi e NFT',
          'Construo dApps modernos com React e integração Web3',
          'Implemento técnicas de otimização de gas reduzindo custos em 40%',
          'Colaboro com clientes para entregar soluções prontas para produção'
        ]
      },
      {
        role: 'Desenvolvedor Full Stack',
        company: 'Projetos Pessoais',
        period: 'Jun 2022 - Presente',
        location: 'Remoto',
        description: [
          'Crio aplicações web full-stack com Next.js e Node.js',
          'Projeto e implemento APIs RESTful e schemas de banco de dados',
          'Construo UIs responsivas com frameworks CSS modernos',
          'Faço deploy e mantenho aplicações em plataformas cloud'
        ]
      }
    ]
  };

  const experience = experienceData[language];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-neutral-900'}`}>
      <div className={`fixed inset-0 -z-10 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800' : 'bg-gradient-to-br from-blue-50 via-neutral-50 to-purple-50'}`} />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-neutral-900/80 border-neutral-800' : 'bg-white/80 border-neutral-200'}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-3xl font-bold tracking-tight hover:scale-105 transition-transform duration-300">LANDERSON CATANHEDE</a>
          <div className="flex items-center gap-6">
            <a href="#projects" onClick={(e) => { playSound('click'); scrollToSection(e, 'projects'); }} className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`} onMouseEnter={() => playSound('hover')}>
              {currentLang.nav.projects}
            </a>
            <a href="#about" onClick={(e) => { playSound('click'); scrollToSection(e, 'about'); }} className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`} onMouseEnter={() => playSound('hover')}>
              {currentLang.nav.about}
            </a>
            <a href="#contact" onClick={(e) => { playSound('click'); scrollToSection(e, 'contact'); }} className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'}`} onMouseEnter={() => playSound('hover')}>
              {currentLang.nav.contact}
            </a>
            <div className="flex gap-2">
              <button
                onClick={() => { playSound('click'); toggleLanguage(); }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border hover:scale-110 hover:rotate-12 ${darkMode ? 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700' : 'bg-white border-neutral-200 hover:border-neutral-400'}`}
                aria-label="Toggle language"
                onMouseEnter={() => playSound('hover')}
              >
                {language === 'en' ? '🇺🇸' : '🇧🇷'}
              </button>
              <button
                onClick={() => { playSound('click'); toggleDarkMode(); }}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border hover:scale-110 hover:rotate-12 ${darkMode ? 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700' : 'bg-white border-neutral-200 hover:border-neutral-400'}`}
                aria-label="Toggle dark mode"
                onMouseEnter={() => playSound('hover')}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="relative group">
              <div className={`w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-3xl ${darkMode ? 'border-4 border-neutral-800' : 'border-4 border-white'}`}>
                <img 
                  src="https://i.postimg.cc/yk1Mmw43/minha-foto.jpg"
                  alt="Landerson Catanhede"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                {currentLang.hero.badge}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
                {currentLang.hero.title}
              </h1>
              
              <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {currentLang.hero.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="mailto:landersonbtcms@gmail.com"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg ${darkMode ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              {currentLang.hero.cta1} <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#projects"
              onClick={(e) => { playSound('click'); scrollToSection(e, 'projects'); }}
              className={`inline-flex items-center gap-2 px-6 py-3 border rounded-lg transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg ${darkMode ? 'bg-neutral-800 border-neutral-700 hover:border-neutral-600' : 'bg-white border-neutral-300 hover:border-neutral-900'}`}
              onMouseEnter={() => playSound('hover')}
            >
              {currentLang.hero.cta2}
            </a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/andromedacripto"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center border rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-neutral-800 border-neutral-700 hover:border-neutral-600' : 'bg-white border-neutral-200 hover:border-neutral-900'}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/landerson-catanhede-69a902114"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center border rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-neutral-800 border-neutral-700 hover:border-neutral-600' : 'bg-white border-neutral-200 hover:border-neutral-900'}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:landersonbtcms@gmail.com"
              className={`w-12 h-12 flex items-center justify-center border rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-neutral-800 border-neutral-700 hover:border-neutral-600' : 'bg-white border-neutral-200 hover:border-neutral-900'}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className={darkMode ? 'text-neutral-600' : 'text-neutral-400'} size={24} />
            <h2 className="text-3xl font-bold">{currentLang.projects.title}</h2>
          </div>

          <div className="relative px-16">
            <button
              onClick={() => scrollProjects('left')}
              className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${darkMode ? 'bg-neutral-800 border-2 border-neutral-700 hover:bg-neutral-700' : 'bg-white border-2 border-neutral-300 hover:border-neutral-400 shadow-lg'}`}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={() => scrollProjects('right')}
              className={`absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${darkMode ? 'bg-neutral-800 border-2 border-neutral-700 hover:bg-neutral-700' : 'bg-white border-2 border-neutral-300 hover:border-neutral-400 shadow-lg'}`}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {projects.map((project, i) => (
                <div 
                  key={i}
                  className={`min-w-[400px] md:min-w-[500px] snap-center border rounded-xl p-8 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl ${darkMode ? 'bg-neutral-800 border-neutral-700 hover:border-neutral-600' : 'bg-white border-neutral-200 hover:border-blue-300'}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded ${darkMode ? 'bg-neutral-700 text-neutral-300' : 'bg-neutral-100 text-neutral-600'}`}>
                          {project.type}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${darkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>{project.year}</span>
                    </div>
                    
                    <p className={`leading-relaxed mb-4 flex-grow ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {project.description}
                    </p>
                    
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 mb-4 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                        onMouseEnter={() => playSound('hover')}
                        onClick={() => playSound('click')}
                      >
                        {language === 'en' ? 'View Project' : 'Ver Projeto'} <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span 
                          key={j}
                          className={`px-3 py-1 text-sm rounded-md font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default ${darkMode ? 'bg-neutral-700text-neutral-300 hover:bg-neutral-600' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-neutral-700' : 'bg-neutral-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-neutral-800/50' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className={darkMode ? 'text-neutral-600' : 'text-neutral-400'} size={24} />
                <h2 className="text-3xl font-bold">{currentLang.about.title}</h2>
              </div>

              <div className={`space-y-4 leading-relaxed mb-12 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {currentLang.about.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <Briefcase className={darkMode ? 'text-neutral-600' : 'text-neutral-400'} size={24} />
                <h3 className="text-2xl font-bold">{currentLang.about.experience}</h3>
              </div>

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={i}>
                    <div className="mb-3">
                      <h4 className="text-lg font-semibold mb-1">{exp.role}</h4>
                      <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li key={j} className={`text-sm flex gap-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                          <span className={darkMode ? 'text-neutral-600' : 'text-neutral-400'}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">{currentLang.about.skills}</h3>
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className={`font-semibold mb-3 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-2 text-sm rounded-lg font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default ${darkMode ? 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{currentLang.contact.title}</h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {currentLang.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:landersonbtcms@gmail.com"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg hover:scale-105 hover:shadow-xl group ${darkMode ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <Mail size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              {currentLang.contact.email}
            </a>
            <a 
              href="https://linkedin.com/in/landerson-catanhede-69a902114"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 rounded-lg transition-all duration-300 font-medium text-lg hover:scale-105 hover:shadow-xl group ${darkMode ? 'border-white hover:bg-white hover:text-neutral-900' : 'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white'}`}
              onMouseEnter={() => playSound('hover')}
              onClick={() => playSound('click')}
            >
              <Linkedin size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              {currentLang.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      <footer className={`border-t py-8 px-6 ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
        <div className={`max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ${darkMode ? 'text-neutral-500' : 'text-neutral-600'}`}>
          <p>© 2025 Landerson Catanhede. {currentLang.footer.rights}</p>
          <p>{currentLang.footer.built}</p>
        </div>
      </footer>
    </div>
  );
}