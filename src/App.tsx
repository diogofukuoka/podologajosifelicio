/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ShieldCheck, HeartHandshake, Phone, Star, Sparkles, CheckCircle2, Stethoscope, Leaf, ArrowUpRight, MessageCircle } from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="font-display text-[20px] tracking-[2px] text-white uppercase flex items-center gap-2">
          PODÓLOGA <span className="text-gold-400">JOSI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('clinica')} className="text-[12px] uppercase tracking-[2px] text-white/70 hover:text-gold-400 transition-colors">A Clínica</button>
          <button onClick={() => scrollTo('tratamentos')} className="text-[12px] uppercase tracking-[2px] text-white/70 hover:text-gold-400 transition-colors">Tratamentos</button>
          <button onClick={() => scrollTo('localizacao')} className="text-[12px] uppercase tracking-[2px] text-white/70 hover:text-gold-400 transition-colors">Localização</button>
        </nav>

        <a 
          href="https://wa.me/55041995699517" 
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gold-400 rounded-full px-5 py-[8px] text-[12px] uppercase tracking-[1px] text-white hover:bg-gold-400 hover:text-black transition-colors bg-white/5"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      {/* 
        ETAPA 4 (Resolução): A imagem de fundo (background-image) estava invisível porque a opacidade estrutural (opacity: 0.15) 
        estava muito baixa, e os gradientes escuros sobrepostos (com opacity combinada) em um z-index superior (z-10) 
        a absorviam completamente. Ajustamos a opacidade do background nativo para 0.4 e suavizamos os níveis alfas do overlay. 
      */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          y: backgroundY 
        }}
      />
      
      {/* Overlay Escuro / Gradiente ajustado sem obscurecer totalmente a camada base z-0 */}
      <div className="absolute inset-0 bg-[#050505]/40 z-10 pointer-events-none blur-3xl opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]/20 z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full mt-16 flex flex-col justify-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl w-full"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-[10px] uppercase tracking-[2px] text-gold-400 block font-semibold">Saúde &amp; Estética Avançada</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-display text-[50px] md:text-[82px] font-light leading-[0.9] tracking-[-2px] mb-6 text-white mt-5">
            O toque que<br/>
            transforma a saúde<br/>
            <span className="text-gold-400 italic">dos seus pés.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-[18px] text-white/80 leading-[1.6] mb-10 max-w-[480px]">
            Podologia clínica e preventiva de luxo. Alívio imediato, cuidado humanizado e soluções indolores para recuperar o seu bem-estar, com a máxima delicadeza.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <a 
              href="https://wa.me/55041995699517" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-400 text-black px-9 py-[18px] font-semibold uppercase tracking-[1px] text-[13px] hover:bg-gold-500 transition-colors inline-block"
            >
              Agende sua Avaliação
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const texts = [
    "Atendimento Humanizado", "Alívio Imediato", "Protocolos Sem Dor", 
    "Biossegurança Nível Cirúrgico", "Especialista em Casos Complexos",
    "Atendimento Inclusivo"
  ];
  
  const items = [...texts, ...texts, ...texts];

  return (
    <div className="py-8 border-y border-white/5 bg-[#0a0a0a]/50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
      
      <div className="flex w-max animate-scroll">
        {items.map((text, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <Star className="w-3 h-3 text-gold-400 opacity-50" />
            <span className="font-sans text-[12px] tracking-[2px] text-white/50 uppercase whitespace-nowrap">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Diferenciais() {
  return (
    <section id="clinica" className="py-24 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
        <h2 className="font-display text-[40px] md:text-[50px] font-light leading-[1.1] tracking-[-1px] text-white mb-6">A excelência em <span className="text-gold-400">cada detalhe</span>.</h2>
        <p className="text-white/60 max-w-[480px] text-[18px] leading-[1.6] mx-auto md:mx-0">
          Mais do que tratar, nosso propósito é cuidar. Oferecemos uma experiência segura, acolhedora e altamente especializada.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 perspective-container">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="md:col-span-2 md:row-span-2 bg-[#050505] border border-white/5 rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden group min-h-[400px] md:min-h-[460px] card-3d"
          >
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Atendimento Humanizado" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale-[40%]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>

            <div className="card-3d-content relative z-10 flex flex-col justify-end h-full">
              <span className="text-[10px] uppercase tracking-[2px] text-gold-400 mb-3 block font-semibold">01. Humanização</span>
              <h3 className="text-[22px] text-white mb-3 tracking-tight font-sans">Acolhimento &amp; Empatia</h3>
              <p className="text-[14px] text-white/50 leading-[1.5]">
                Um espaço seguro e inclusivo, acolhedor para a comunidade LGBTQ+. Temos orgulho da nossa forma carinhosa, paciente e respeitosa de atender idosos, pessoas acamadas e pacientes neurodivergentes.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="bg-[#050505] border border-white/5 rounded-2xl p-10 flex flex-col justify-between card-3d"
          >
            <div className="card-3d-content">
              <span className="text-[10px] uppercase tracking-[2px] text-gold-400 mb-3 block font-semibold">02. Resultados</span>
              <h3 className="text-[22px] text-white mb-3 tracking-tight font-sans">Mãos Leves</h3>
              <p className="text-[14px] text-white/50 leading-[1.5]">Alívio imediato e procedimentos indolores, mesmo nos quadros agudos de infecção e inflamação.</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="bg-[#050505] border border-white/5 rounded-2xl p-10 flex flex-col justify-between card-3d"
          >
            <div className="card-3d-content">
              <span className="text-[10px] uppercase tracking-[2px] text-gold-400 mb-3 block font-semibold">03. Segurança</span>
              <h3 className="text-[22px] text-white mb-3 tracking-tight font-sans">Biossegurança</h3>
              <p className="text-[14px] text-white/50 leading-[1.5]">Ambiente clínico impecável. Materiais rigorosamente esterilizados para garantir proteção total.</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="md:col-span-2 bg-[#050505] border border-white/5 rounded-2xl p-10 flex flex-col justify-between card-3d"
          >
            <div className="card-3d-content">
              <span className="text-[10px] uppercase tracking-[2px] text-gold-400 mb-3 block font-semibold">04. Pós-Consulta</span>
              <h3 className="text-[22px] text-white mb-2 tracking-tight font-sans">Cuidado que continua</h3>
              <p className="text-[14px] text-white/50 leading-[1.5] max-w-lg">Acompanhamento pós-consulta via WhatsApp. Nossa preocupação com a sua evolução não acaba na clínica.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Servicos() {
  const services = [
    {
      title: "Unhas Infeccionadas",
      desc: "Remoção e tratamento de unhas encravadas ou inflamadas de forma rápida e incrivelmente delicada, priorizando o conforto e alívio imediato da dor."
    },
    {
      title: "Patologias Complexas",
      desc: "Expertise no trato de granulomas avançados e condições clínicas crônicas que exigem conhecimento anatômico profundo e intervenção segura."
    },
    {
      title: "Públicos Sensíveis",
      desc: "Protocolos humanizados e adaptados com o tempo e a paciência necessários para idosos, pessoas acamadas (Parkinson/Alzheimer) e autistas."
    },
    {
      title: "Limpeza & Estética",
      desc: "Higienização profunda, corte técnico das unhas, remoção de calosidades e orientações preventivas para manter pés saudáveis e esteticamente belos."
    }
  ];

  return (
    <section id="tratamentos" className="py-24 relative border-t border-white/5 bg-[#050505] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-display text-[40px] md:text-[50px] font-light leading-[1.1] tracking-[-1px] text-white mb-6">Nossos <span className="text-gold-400">Tratamentos</span></h2>
          <p className="text-white/60 max-w-[480px] text-[18px] leading-[1.6] mx-auto md:mx-0">
            Soluções completas com total transparência. Explicamos todo o procedimento com calma, entregando exatamente o que você precisa, sem pressa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-container">
          {services.map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="bg-[#050505] border border-white/5 rounded-2xl p-10 flex flex-col justify-center hover:bg-[#080808] transition-colors card-3d group"
            >
              <div className="card-3d-content">
                <span className="text-[10px] uppercase tracking-[2px] text-gold-400 mb-3 block font-semibold">Serviço {String(idx + 1).padStart(2, '0')}</span>
                <h3 className="text-[22px] tracking-tight text-white mb-3 font-sans">{item.title}</h3>
                <p className="text-[14px] text-white/50 leading-[1.5] max-w-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-[40px] md:text-[50px] font-light leading-[1.1] tracking-[-1px] text-white mb-16 text-center">O que dizem os nossos <span className="text-gold-400">Pacientes</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-container">
          {[
            {
              text: "Eu estava morrendo de dor com minha unha encravada e com muito medo de mexer. A Josi tem mãos de fada! Não senti dor e saí pisando leve. Impressionante a delicadeza e segurança que ela passa.",
              author: "Mariana Silva"
            },
            {
              text: "Trouxe meu pai de 82 anos, que tem Alzheimer e deita com muita dificuldade. A paciência da Josi e a forma carinhosa como lidou com a situação não tem preço. Serviço impecável e ambiente brilhando.",
              author: "Carlos Eduardo"
            },
            {
              text: "Sempre tive muita vergonha de mostrar os pés. A Josi me acolheu, explicou tudo de forma didática, limpou com extremo cuidado num ambiente esterilizado que me deu paz. Recomendo de olhos fechados.",
              author: "Fernanda T."
            }
          ].map((dep, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="bg-[#050505] border border-white/5 rounded-2xl p-10 flex flex-col card-3d"
            >
              <div className="card-3d-content flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />)}
                </div>
                <p className="text-[14px] text-white/50 leading-[1.6] flex-grow mb-8 italic">"{dep.text}"</p>
                <p className="text-[12px] uppercase tracking-[1px] font-semibold text-white">— {dep.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="py-32 relative border-t border-white/5 bg-[#050505] overflow-hidden" id="agendar">
      <motion.img 
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
        alt="Tratamento Relaxante" 
        className="absolute inset-0 w-full h-[150%] origin-top object-cover opacity-10 grayscale-[50%]"
        style={{ y: backgroundY }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]"></div>
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <span className="text-[10px] uppercase tracking-[2px] text-gold-400 mb-4 block font-semibold">Agende Seu Horário</span>
          <h2 className="font-display text-[50px] md:text-[64px] font-light leading-[1] tracking-[-2px] text-white mb-8">Dê o primeiro passo <br/><span className="text-gold-400 italic">sem dor.</span></h2>
          <p className="text-white/60 text-[18px] leading-[1.6] mb-12 max-w-xl mx-auto">
            Recupere o seu bem-estar com uma especialista que entende e respeita o seu tempo, ouvindo suas necessidades com empatia.
          </p>
          <a 
            href="https://wa.me/55041995699517"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-gold-400 text-black px-10 py-5 font-semibold uppercase tracking-[1px] text-[13px] hover:bg-gold-500 transition-colors inline-block"
          >
            Agendar Via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-[16px] tracking-[2px] text-white/50 uppercase">
          PODÓLOGA <span className="text-gold-400">JOSI</span>
        </div>
        <p className="text-[12px] text-white/40 tracking-[1px]">&copy; 2026 Podóloga Josi. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function Localizacao() {
  return (
    <section id="localizacao" className="py-24 relative bg-[#050505] border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[2px] text-gold-400 mb-4 block font-semibold">Como Chegar</span>
          <h2 className="font-display text-[40px] md:text-[50px] font-light leading-[1.1] tracking-[-1px] text-white mb-6">Nossa <span className="text-gold-400">Localização</span></h2>
          <p className="text-white/60 text-[18px] leading-[1.6]">Rua João Reffo, 1676 - Santa Felicidade, Curitiba - PR, 82410-000</p>
        </div>
        <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-white/5 border border-white/10 rounded-xl overflow-hidden relative">
          <iframe
            src="https://maps.google.com/maps?q=Rua%20Jo%C3%A3o%20Reffo%2C%201676%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082410-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/55041995699517"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[99] flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full transition-transform hover:scale-110 shadow-lg shadow-[#25D366]/20"
    >
      <div className="absolute inset-[-4px] rounded-full border border-[#25D366] animate-ripple"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
}

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-gold-400/30 selection:text-white bg-[#050505] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Diferenciais />
        <Servicos />
        <Depoimentos />
        <CTA />
        <Localizacao />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
