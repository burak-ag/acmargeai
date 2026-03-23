import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, animate } from 'motion/react';
import { 
  Star, 
  ArrowRight, 
  Lightbulb, 
  Users, 
  Rocket, 
  Code2, 
  BarChart3, 
  Award, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Moon,
  Sun,
  X,
  Menu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ARGE_UNITS = [
  {
    id: 1,
    icon: <Lightbulb className="w-6 h-6" />,
    title: "İnovasyon",
    shortDesc: "Yeni fikirler üretir, teknolojik çözümler geliştiririz.",
    detailTitle: "İnovasyon Laboratuvarı",
    detailDesc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    ],
    stats: [{ label: "Proje", value: "12+" }, { label: "Patent", value: "3" }],
    gradient: "from-purple-600 to-violet-800",
    accentColor: "#a855f7"
  },
  {
    id: 2,
    icon: <Users className="w-6 h-6" />,
    title: "İşbirliği",
    shortDesc: "Disiplinler arası ekiplerle ortak projeler yürütürüz.",
    detailTitle: "Ekip & İşbirliği",
    detailDesc: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur."
    ],
    stats: [{ label: "Üye", value: "50+" }, { label: "Ekip", value: "8" }],
    gradient: "from-fuchsia-600 to-purple-800",
    accentColor: "#c026d3"
  },
  {
    id: 3,
    icon: <Rocket className="w-6 h-6" />,
    title: "Gelişim",
    shortDesc: "Sürekli öğrenme ve kişisel gelişimi destekleriz.",
    detailTitle: "Kişisel & Teknik Gelişim",
    detailDesc: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    stats: [{ label: "Workshop", value: "20+" }, { label: "Sertifika", value: "15+" }],
    gradient: "from-violet-600 to-indigo-800",
    accentColor: "#7c3aed"
  },
  {
    id: 4,
    icon: <Code2 className="w-6 h-6" />,
    title: "Yazılım",
    shortDesc: "Modern teknolojilerle gerçek dünya problemlerini çözeriz.",
    detailTitle: "Yazılım & Teknoloji",
    detailDesc: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore."
    ],
    stats: [{ label: "Uygulama", value: "5+" }, { label: "Teknoloji", value: "10+" }],
    gradient: "from-purple-700 to-fuchsia-900",
    accentColor: "#9333ea"
  },
  {
    id: 5,
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Araştırma",
    shortDesc: "Akademik ve endüstriyel araştırmalar yürütürüz.",
    detailTitle: "Araştırma & Analiz",
    detailDesc: [
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore."
    ],
    stats: [{ label: "Makale", value: "7+" }, { label: "Konferans", value: "4" }],
    gradient: "from-indigo-600 to-purple-800",
    accentColor: "#6366f1"
  },
  {
    id: 6,
    icon: <Award className="w-6 h-6" />,
    title: "Başarılar",
    shortDesc: "Ulusal ve uluslararası yarışmalarda ödüller kazanırız.",
    detailTitle: "Ödüller & Başarılar",
    detailDesc: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
    ],
    stats: [{ label: "Ödül", value: "10+" }, { label: "Yarışma", value: "6+" }],
    gradient: "from-pink-600 to-purple-800",
    accentColor: "#db2777"
  },
  {
    id: 7,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Siber Güvenlik",
    shortDesc: "Dijital varlıkları korumak için gelişmiş çözümler üretiriz.",
    detailTitle: "Siber Güvenlik Laboratuvarı",
    detailDesc: [
      "Ağ güvenliği, sızma testleri ve veri şifreleme konularında derinlemesine araştırmalar yapıyoruz. Modern tehditlere karşı proaktif savunma mekanizmaları geliştiriyoruz.",
      "Kritik altyapıların korunması ve siber olaylara müdahale stratejileri üzerine çalışarak dijital dünyayı daha güvenli hale getirmeyi hedefliyoruz.",
      "Etik hacking ve güvenlik protokolleri üzerine düzenlediğimiz workshoplarla topluluğumuzun farkındalığını artırıyoruz."
    ],
    stats: [{ label: "Analiz", value: "15+" }, { label: "Sertifika", value: "8" }],
    gradient: "from-red-600 to-rose-800",
    accentColor: "#e11d48"
  },
  {
    id: 8,
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Veri Bilimi",
    shortDesc: "Veriden anlamlı bilgiler çıkararak geleceği öngörürüz.",
    detailTitle: "Veri Analitiği & Bilimi",
    detailDesc: [
      "Büyük veri setlerini işleyerek karmaşık problemleri çözmek için makine öğrenmesi ve yapay zeka algoritmaları kullanıyoruz.",
      "Tahminleme modelleri ve veri görselleştirme teknikleri ile karar alma süreçlerini optimize eden araçlar geliştiriyoruz.",
      "İstatistiksel analiz ve veri madenciliği projelerimizle endüstriyel verilere yeni bir bakış açısı getiriyoruz."
    ],
    stats: [{ label: "Dataset", value: "25+" }, { label: "Model", value: "12" }],
    gradient: "from-emerald-600 to-teal-800",
    accentColor: "#059669"
  }
];

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      radius: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 51, 234, 0.4)';
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 90 }, () => new Particle());

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(10, 5, 20, 1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.4 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 15,
      y: (e.clientY / window.innerHeight - 0.5) * 15,
    });
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#0a0514]"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 opacity-50 transition-transform duration-700 ease-out pointer-events-none animate-subtle-drift"
        style={{
          transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px) scale(1.15)`,
          background: `
            radial-gradient(circle at 15% 25%, #581c87 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, #3b0764 0%, transparent 45%),
            radial-gradient(circle at 50% 50%, #1e1b4b 0%, transparent 100%)
          `
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-[#7e22ce08] to-transparent" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
    </div>
  );
};

const PROJECTS = [
  {
    title: "Proje Alpha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    image: "https://picsum.photos/seed/project1/600/400",
    tags: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Proje Beta",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: "https://picsum.photos/seed/project2/600/400",
    tags: ["Python", "AI", "Machine Learning"]
  },
  {
    title: "Proje Gamma",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    image: "https://picsum.photos/seed/project3/600/400",
    tags: ["React Native", "Mobile", "Firebase"]
  },
  {
    title: "Proje Delta",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    image: "https://picsum.photos/seed/project4/600/400",
    tags: ["Vue.js", "Dashboard", "Analytics"]
  },
  {
    title: "Proje Epsilon",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    image: "https://picsum.photos/seed/project5/600/400",
    tags: ["Blockchain", "Web3", "Solidity"]
  },
  {
    title: "Proje Zeta",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "https://picsum.photos/seed/project6/600/400",
    tags: ["Cloud", "AWS", "DevOps"]
  }
];

interface ArgeCardProps {
  unit: typeof ARGE_UNITS[0];
  index: number;
  isDark: boolean;
  onSelect: () => void;
  onClick: () => void;
  x: any; // MotionValue
  containerWidth: number;
}

const ArgeCard: React.FC<ArgeCardProps> = ({ unit, index, isDark, onSelect, onClick, x: rotation, containerWidth }) => {
  const isMobile = containerWidth < 768;
  const isSmallMobile = containerWidth < 480;
  
  // Dynamic dimensions based on container width
  const cardWidth = isMobile 
    ? Math.min(containerWidth * 0.8, 280) 
    : 300;
    
  const radius = isMobile 
    ? Math.min(containerWidth * 0.85, 360) 
    : 420;
  
  const totalCards = ARGE_UNITS.length;
  const angleStep = 360 / totalCards;
  
  const theta = index * angleStep;
  
  // Transform values based on rotation
  const rotateY = useTransform(rotation, (r: number) => theta + r);
  
  // Calculate X and Z based on rotation to form a circle
  const x = useTransform(rotation, (r: number) => {
    const angle = (theta + r) * (Math.PI / 180);
    return Math.sin(angle) * radius;
  });
  
  const z = useTransform(rotation, (r: number) => {
    const angle = (theta + r) * (Math.PI / 180);
    return Math.cos(angle) * radius;
  });

  // Opacity and scale based on Z position (front cards are opaque and large)
  const opacity = useTransform(z, [-radius, radius * 0.3, radius], [0, 0.15, 1]);
  const scale = useTransform(z, [-radius, radius], [isMobile ? 0.75 : 0.7, 1]);

  return (
    <motion.div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        x: useTransform(x, (val) => val - cardWidth / 2),
        y: '-50%',
        z,
        rotateY,
        scale,
        opacity,
        transformStyle: "preserve-3d",
        willChange: "transform",
        width: cardWidth
      }}
      className="flex-shrink-0 h-[240px] md:h-[250px] z-10 select-none cursor-pointer"
    >
      <motion.div 
        className={`relative h-full w-full rounded-3xl ${isSmallMobile ? 'p-5' : 'p-8'} flex flex-col justify-between overflow-hidden
          ${isDark ? 'border border-white/10 shadow-2xl shadow-purple-900/20' : 'border border-purple-200 shadow-xl shadow-purple-100'}
          backdrop-blur-xl transition-colors duration-300`}
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(30,30,40,0.9) 0%, rgba(15,15,20,0.95) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,245,250,0.9) 100%)',
          transformStyle: "preserve-3d"
        }}
      >
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${unit.gradient}`}></div>
        
        <div className="flex justify-between items-start" style={{ transform: "translateZ(20px)" }}>
          <div className="space-y-1">
            <h3 className={`${isSmallMobile ? 'text-lg' : 'text-xl'} font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{unit.title}</h3>
            <p className={`text-[10px] md:text-xs font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{unit.shortDesc}</p>
          </div>
          <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full ${isDark ? 'bg-white/5' : 'bg-purple-50'}`}>
            <span className={`${isDark ? 'text-purple-300' : 'text-purple-600'} scale-75 md:scale-100`}>
              {unit.icon}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-end" style={{ transform: "translateZ(30px)" }}>
          <div className="flex gap-3">
            {unit.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{stat.label}</span>
                <span className={`text-sm md:text-base font-black ${isDark ? 'text-white' : 'text-purple-700'}`}>{stat.value}</span>
              </div>
            ))}
          </div>
          <div 
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className={`flex items-center space-x-1 md:space-x-2 text-[10px] md:text-xs font-bold uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
          >
            <span>Detaylar</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<typeof ARGE_UNITS[0] | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const rotation = useMotionValue(0);
  const totalCards = ARGE_UNITS.length;
  const angleStep = 360 / totalCards;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const handleResize = () => {
        if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = containerWidth < 768;

  const scrollToIndex = (index: number, velocity = 0) => {
    // Calculate the shortest rotation to the target index
    const currentRotation = rotation.get();
    const targetRotation = -index * angleStep;
    
    // Normalize rotation to find the closest path
    let diff = (targetRotation - currentRotation) % 360;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    animate(rotation, currentRotation + diff, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      velocity: velocity
    });
  };

  const handleDragEnd = (_: any, info: any) => {
    const currentRotation = rotation.get();
    const velocity = info.velocity.x;
    // Map horizontal velocity to angular velocity
    const projectedRotation = currentRotation + velocity * 0.05; 
    
    let nearestIndex = Math.round(-projectedRotation / angleStep);
    scrollToIndex(nearestIndex, velocity * 0.05);
  };

  const navigate = (direction: 'next' | 'prev') => {
    const currentRotation = rotation.get();
    let currentIndex = Math.round(-currentRotation / angleStep);
    const nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || isMobileMenuOpen ? (isDark ? 'bg-gray-950/60 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-white/60 backdrop-blur-xl border-b border-black/5 shadow-xl') : 'bg-transparent'} py-3 md:py-4 px-4 md:px-6`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button className="flex items-center space-x-2 md:space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://static.readdy.ai/image/a49a708ff15a112259bae29f78dc133b/eb54a76d95f58d32b413a617da2ab1c4.png" 
              alt="ACM Hacettepe ARGE" 
              className="h-8 w-8 md:h-10 md:w-10"
              referrerPolicy="no-referrer"
            />
            <span className={`text-lg md:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>ACM ARGE</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {['acm-nedir', 'acm-hacettepe', 'arge-birimi', 'gecmis-calismalar', 'geyik-app', 'acs-days'].map((id) => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`relative w-12 h-6 md:w-16 md:h-8 rounded-full transition-colors duration-300 ${isDark ? 'bg-purple-900/50' : 'bg-purple-200'}`}
            >
              <motion.div 
                animate={{ x: isDark ? (isMobile ? 24 : 32) : 0 }}
                className={`absolute top-0.5 left-0.5 md:top-1 md:left-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center ${isDark ? 'bg-purple-600' : 'bg-yellow-400'}`}
              >
                {isDark ? <Moon className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" /> : <Sun className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />}
              </motion.div>
            </button>

            <button 
              className="md:hidden text-purple-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-purple-500/20"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {['acm-nedir', 'acm-hacettepe', 'arge-birimi', 'gecmis-calismalar', 'geyik-app', 'acs-days'].map((id) => (
                  <button 
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-purple-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <div className={`inline-block px-6 py-2 rounded-full mb-8 ${isDark ? 'bg-purple-500/20 border border-purple-400/30' : 'bg-purple-100/80 border border-purple-300'} backdrop-blur-md`}>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-purple-200' : 'text-purple-900'}`}>Yenilikçi Projeler</span>
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>• ACM Hacettepe ARGE</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Teknoloji ile Geleceği</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Birlikte İnşa Ediyoruz</span>
          </h1>

          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto">
            Araştırma, geliştirme ve inovasyon odaklı projelerle <br className="hidden md:block" /> yazılım dünyasında fark yaratıyoruz
          </p>

          <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70">
            <span className="flex items-center space-x-2">
              <span>Projelerimizi Keşfet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </section>

      {/* ACM Nedir Section */}
      <section id="acm-nedir" className={`py-24 px-6 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' : 'bg-purple-100 border border-purple-200 text-purple-700'} text-sm font-semibold`}>
                Hakkımızda
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>ACM Nedir?</h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden ${isDark ? 'bg-purple-900/20 border border-purple-500/20' : 'bg-white border border-purple-200 shadow-xl'} backdrop-blur-md`}>
                <div className="aspect-square">
                  <img 
                    src="https://picsum.photos/seed/acm/600/600" 
                    alt="ACM" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACM Hacettepe Section */}
      <section id="acm-hacettepe" className={`py-24 px-6 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="order-2 md:order-1 relative"
            >
              <div className={`relative rounded-2xl overflow-hidden ${isDark ? 'bg-purple-900/20 border border-purple-500/20' : 'bg-gray-50 border border-purple-200 shadow-xl'} backdrop-blur-md`}>
                <div className="aspect-square">
                  <img 
                    src="https://picsum.photos/seed/hacettepe/600/600" 
                    alt="ACM Hacettepe" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="order-1 md:order-2"
            >
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' : 'bg-purple-100 border border-purple-200 text-purple-700'} text-sm font-semibold`}>
                Topluluğumuz
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>ACM Hacettepe Nedir?</h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ARGE Birimi Section */}
      <section id="arge-birimi" className={`py-16 md:py-24 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <div className={`inline-block px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' : 'bg-purple-100 border border-purple-200 text-purple-700'} text-sm font-semibold`}>
              Birimlerimiz
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>ARGE Birimi Nedir?</h2>
            <p className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Araştırma, geliştirme ve inovasyon odaklı çalışmalarımızı keşfetmek için kartlara tıklayın.
            </p>
          </div>
        </div>

        <div className="relative mt-4 md:mt-12 py-8 md:py-12 overflow-visible">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-[2/1] rounded-full blur-[80px] md:blur-[120px] pointer-events-none ${isDark ? 'bg-purple-600/15' : 'bg-purple-300/20'}`}></div>
          
          <div 
            ref={containerRef}
            className="relative z-10 w-full h-[350px] md:h-[400px] overflow-visible"
            style={{ perspective: '1200px' }}
          >
            <motion.div 
              onPan={(e, info) => {
                // Map pan distance to rotation without moving the container itself
                const currentRotation = rotation.get();
                // Reduced sensitivity for smoother dragging
                const sensitivity = isMobile ? 0.2 : 0.15;
                rotation.set(currentRotation + info.delta.x * sensitivity);
              }}
              onPanEnd={handleDragEnd}
              style={{ 
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                position: 'relative',
                touchAction: 'pan-y' // Allow vertical scrolling but capture horizontal pan
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              {ARGE_UNITS.map((unit, index) => (
                <ArgeCard 
                  key={unit.id}
                  unit={unit}
                  index={index}
                  isDark={isDark}
                  onSelect={() => setSelectedUnit(unit)}
                  onClick={() => scrollToIndex(index)}
                  x={rotation}
                  containerWidth={containerWidth}
                />
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-8 pointer-events-none z-30">
              <button 
                onClick={() => navigate('prev')}
                className={`pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-purple-500/10 border border-purple-500/20 text-purple-600 hover:bg-purple-500/20'}`}
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button 
                onClick={() => navigate('next')}
                className={`pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${isDark ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-purple-500/10 border border-purple-500/20 text-purple-600 hover:bg-purple-500/20'}`}
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedUnit && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedUnit(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`relative max-w-lg w-full rounded-3xl p-6 md:p-8 shadow-2xl ${isDark ? 'bg-gray-900/80 border border-purple-500/30' : 'bg-white/80 border border-purple-200 shadow-purple-200/50'} backdrop-blur-2xl`}
              >
                <button 
                  onClick={() => setSelectedUnit(null)}
                  className={`absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 ${isDark ? 'bg-white/10 hover:bg-white/20 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${selectedUnit.gradient} text-white`}>
                    {selectedUnit.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{selectedUnit.detailTitle}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      {selectedUnit.stats.map((stat, i) => (
                        <span key={i} className={`text-xs px-2 py-0.5 rounded-full font-semibold ${isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                          {stat.value} {stat.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`h-px mb-6 ${isDark ? 'bg-white/10' : 'bg-purple-100'}`} />

                <div className="space-y-4">
                  {selectedUnit.detailDesc.map((p, i) => (
                    <p key={i} className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{p}</p>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedUnit(null)}
                  className={`mt-8 w-full py-3 rounded-xl bg-gradient-to-r ${selectedUnit.gradient} hover:opacity-90 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-500/30`}
                >
                  Kapat
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Portfolio Section */}
      <section id="gecmis-calismalar" className={`py-24 px-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-block px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' : 'bg-purple-100 border border-purple-200 text-purple-700'} text-sm font-semibold`}>
              Portföy
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Geçmiş Çalışmalarımız</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 ${isDark ? 'bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40' : 'bg-white border border-purple-200 shadow-lg hover:shadow-xl'} backdrop-blur-md`}
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geyik App Section */}
      <section id="geyik-app" className={`py-24 px-6 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' : 'bg-purple-100 border border-purple-200 text-purple-700'} text-sm font-semibold`}>
                Uygulamalarımız
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Geyik Uygulamamız</h2>
              <div className={`space-y-4 text-base leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <Smartphone />, title: "Mobil Uyumlu", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                  { icon: <ShieldCheck />, title: "Güvenli", desc: "Sed do eiusmod tempor incididunt ut labore et dolore." },
                  { icon: <Zap />, title: "Hızlı", desc: "Ut enim ad minim veniam, quis nostrud exercitation." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-purple-600/30' : 'bg-purple-100'}`}>
                      <span className="text-purple-400">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden ${isDark ? 'bg-purple-900/20 border border-purple-500/20' : 'bg-white border border-purple-200 shadow-xl'} backdrop-blur-md`}>
                <div className="aspect-square">
                  <img 
                    src="https://picsum.photos/seed/app/600/600" 
                    alt="Geyik App" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACS DAYS Section */}
      <section id="acs-days" className={`py-24 px-6 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="order-2 md:order-1 relative"
            >
              <div className={`relative rounded-2xl overflow-hidden ${isDark ? 'bg-purple-900/20 border border-purple-500/20' : 'bg-gray-50 border border-purple-200 shadow-xl'} backdrop-blur-md`}>
                <div className="aspect-square">
                  <img 
                    src="https://picsum.photos/seed/event/600/600" 
                    alt="ACS DAYS App" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="order-1 md:order-2"
            >
              <div className={`inline-block px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400' : 'bg-purple-100 border border-purple-200 text-purple-700'} text-sm font-semibold`}>
                Etkinliklerimiz
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>ACS DAYS Uygulamamız</h2>
              <div className={`space-y-4 text-base leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Katılımcı" },
                  { value: "50+", label: "Konuşmacı" },
                  { value: "3", label: "Gün" },
                  { value: "20+", label: "Workshop" }
                ].map((stat, i) => (
                  <div key={i} className={`p-4 md:p-6 rounded-xl text-center ${isDark ? 'bg-purple-900/20 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'} backdrop-blur-md`}>
                    <div className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{stat.value}</div>
                    <div className={`text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-6 ${isDark ? 'bg-purple-950/50' : 'bg-purple-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://static.readdy.ai/image/a49a708ff15a112259bae29f78dc133b/eb54a76d95f58d32b413a617da2ab1c4.png" 
                  alt="ACM Hacettepe ARGE" 
                  className="h-10 w-10"
                  referrerPolicy="no-referrer"
                />
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>ACM ARGE</span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Hacettepe Üniversitesi ACM öğrenci topluluğunun ARGE birimi.
              </p>
            </div>
            
            <div>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                {['acm-nedir', 'acm-hacettepe', 'arge-birimi'].map((id) => (
                  <li key={id}>
                    <button 
                      onClick={() => scrollToSection(id)}
                      className={`text-sm transition-colors hover:text-purple-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Projeler</h4>
              <ul className="space-y-2">
                {['gecmis-calismalar', 'geyik-app', 'acs-days'].map((id) => (
                  <li key={id}>
                    <button 
                      onClick={() => scrollToSection(id)}
                      className={`text-sm transition-colors hover:text-purple-400 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sosyal Medya</h4>
              <div className="flex space-x-4">
                {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-purple-900/30 text-purple-400 hover:bg-purple-900/50' : 'bg-purple-100 text-purple-600 hover:bg-purple-200'}`}>
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`pt-8 border-t ${isDark ? 'border-purple-900/30' : 'border-purple-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 ACM Hacettepe ARGE. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
