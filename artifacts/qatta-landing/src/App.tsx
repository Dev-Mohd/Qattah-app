import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Wallet,
  Clock,
  BarChart3,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  Apple,
  Play,
  WifiOff,
  Zap,
  ShieldCheck,
} from "lucide-react";
import NotFound from "@/pages/not-found";

import screen1 from "@assets/Qattah1_1779006339253.jpg";
import screen2 from "@assets/Qattah2_1779006339253.jpg";
import screen3 from "@assets/Qattah3_1779006339253.jpg";
import screen4 from "@assets/Qattah4_1779006339253.jpg";
import screen5 from "@assets/Qattah5_1779006339253.jpg";
import screen6 from "@assets/Qattah6_1779006339253.jpg";

const queryClient = new QueryClient();

const QattahIcon = ({ id = "a", size = 40 }: { id?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="54" fill={`url(#bgGrad${id})`} />
    <rect x="34" y="28" width="52" height="64" rx="8" fill={`url(#paperGrad${id})`} opacity="0.15" />
    <rect x="34" y="28" width="52" height="64" rx="8" stroke={`url(#strokeGrad${id})`} strokeWidth="2" />
    <line x1="44" y1="46" x2="76" y2="46" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="44" y1="58" x2="76" y2="58" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    <line x1="44" y1="70" x2="62" y2="70" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    <circle cx="76" cy="78" r="14" fill={`url(#checkGrad${id})`} />
    <polyline points="70,78 74,83 83,72" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <defs>
      <linearGradient id={`bgGrad${id}`} x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#064e35" />
        <stop offset="100%" stopColor="#065f46" />
      </linearGradient>
      <linearGradient id={`paperGrad${id}`} x1="34" y1="28" x2="86" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id={`strokeGrad${id}`} x1="34" y1="28" x2="86" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <linearGradient id={`checkGrad${id}`} x1="62" y1="64" x2="90" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

const QattahWordmark = ({ nameClass = "text-2xl", greenClass = "" }: { nameClass?: string; greenClass?: string }) => (
  <span className={`font-black text-white tracking-tight ${nameClass}`}>
    قطّ<span className={`text-[#10b981] ${greenClass}`}>ه</span>
  </span>
);

const Button = ({ children, variant = "primary", className = "", ...props }: any) => {
  const variants: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20",
    outline: "border border-border bg-transparent hover:bg-secondary/50 text-white",
    ghost: "bg-transparent hover:bg-secondary/50 text-white",
  };
  return (
    <button
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5" dir="rtl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <QattahIcon id="nav" size={40} />
          <QattahWordmark nameClass="text-2xl" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-features">المميزات</a>
          <a href="#screens" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-screens">الشاشات</a>
          <a href="#how-it-works" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-how-it-works">كيف تعمل</a>
          <a href="#reports" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-reports">التقارير</a>
          <a href="#faq" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-faq">الأسئلة الشائعة</a>
          <Button variant="accent" className="px-5 py-2 text-sm" data-testid="nav-download">حمّل التطبيق</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} data-testid="nav-mobile-toggle">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#features" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>المميزات</a>
              <a href="#screens" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>الشاشات</a>
              <a href="#how-it-works" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>كيف تعمل</a>
              <a href="#reports" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>التقارير</a>
              <a href="#faq" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>الأسئلة الشائعة</a>
              <Button variant="accent" className="w-full mt-4">حمّل التطبيق</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden" dir="rtl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="flex w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-bold text-white/80">التطبيق الأول لمشاركة المصاريف في الدوام</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              نظّم وجبات الدوام،<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">وشارك بالعدل.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              تطبيق قطّه يحل لك مشكلة حساب مصاريف الفطور والغداء في الدوام. أضف زملائك، سجّل الوجبات، وخلّ الباقي علينا.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg bg-white text-background hover:bg-white/90 shadow-white/10" data-testid="hero-appstore">
                <Apple className="w-6 h-6" />
                App Store
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-card/50 backdrop-blur-md" data-testid="hero-playstore">
                <Play className="w-6 h-6" />
                Google Play
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-black text-white">+1,200</p>
                <p className="text-xs font-bold text-white/50 mt-1">مستخدم نشط</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-black text-white">4.9 ★</p>
                <p className="text-xs font-bold text-white/50 mt-1">تقييم المتجر</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-black text-white">مجاني</p>
                <p className="text-xs font-bold text-white/50 mt-1">للتحميل</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-sm mx-auto relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 -z-10" />
            <img
              src={screen1}
              alt="واجهة تطبيق قطّه الرئيسية"
              className="w-full rounded-3xl shadow-2xl shadow-primary/30 ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    { icon: <Clock className="w-6 h-6 text-accent" />, title: "وفّر وقتك", desc: "لا تضيّع وقتك في حساب من دفع ومن ما دفع، التطبيق يحسبها لك بثواني." },
    { icon: <Wallet className="w-6 h-6 text-accent" />, title: "شارك بعدل", desc: "كل شخص يدفع على قد اللي أكله. حضور وغياب يومي دقيق." },
    { icon: <Users className="w-6 h-6 text-accent" />, title: "تابع الحضور", desc: "سجّل حضور الزملاء للوجبة بضغطة زر، واللي غايب ما ينحسب عليه." },
    { icon: <BarChart3 className="w-6 h-6 text-accent" />, title: "تقارير شهرية", desc: "نهاية الشهر، شارك تقرير مفصّل لكل شخص يوضّح كم له وكم عليه." },
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                {v.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3">{v.title}</h3>
              <p className="text-white/60 font-medium leading-relaxed text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">كل شيء في مكان واحد</h2>
          <p className="text-lg text-white/50 font-medium max-w-xl mx-auto">أضف الأعضاء، سجّل الوجبات، وتابع السداد — كل هذا بتطبيق واحد بسيط.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-black text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-5 tracking-widest uppercase">إدارة الأعضاء</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              أضف زملائك<br /><span className="text-accent">بكل سهولة</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed">
              أنشئ القائمة، أضف الأعضاء، وسجّل الوجبات خلال ثواني. التطبيق يتولى توزيع المبالغ أوتوماتيكياً على الحاضرين.
            </p>
            <ul className="space-y-4">
              {["إضافة سريعة للأعضاء", "تنظيم واضح للوجبات", "قوائم متعددة لكل مجموعة"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm mx-auto relative"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-75 -z-10" />
            <img
              src={screen3}
              alt="إضافة الأعضاء والوجبات"
              className="w-full rounded-3xl shadow-2xl shadow-accent/20 ring-1 ring-white/10"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-black text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-5 tracking-widest uppercase">الحسابات</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              اعرف على مين<br /><span className="text-primary">ومين له</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed">
              رصيد كل عضو واضح بلمحة: المدين، والدائن، والمسدد. ومع السداد المباشر داخل التطبيق، ما في لخبطة بعد اليوم.
            </p>
            <Button variant="primary" data-testid="btn-learn-calc">اكتشف كيف نحسبها</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm mx-auto relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75 -z-10" />
            <img
              src={screen4}
              alt="عرض الأرصدة والمديونيات"
              className="w-full rounded-3xl shadow-2xl shadow-primary/20 ring-1 ring-white/10"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-black text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-5 tracking-widest uppercase">تعدد القوائم</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              كل القوائم<br /><span className="text-accent">في مكان واحد</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed">
              سواء كانت قائمة الفطور، قائمة الغداء، أو طلعة الاستراحة — كل مجموعة لها ملخصها الخاص مع المصاريف والسداد والمتبقي.
            </p>
            <ul className="space-y-4">
              {["مجموعات متعددة", "ملخص فوري لكل قائمة", "متابعة أسهل"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm mx-auto relative"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-75 -z-10" />
            <img
              src={screen2}
              alt="القوائم المتعددة"
              className="w-full rounded-3xl shadow-2xl shadow-accent/20 ring-1 ring-white/10"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "أضف موظفيك", desc: "سجل أسماء الزملاء المشتركين في القطة." },
    { num: "02", title: "سجّل الوجبة", desc: "اكتب تكلفة الفطور أو الغداء اليومية." },
    { num: "03", title: "احسب النصيب", desc: "حدد الحضور، والتطبيق يوزع المبلغ." },
    { num: "04", title: "شارك التقرير", desc: "نهاية الشهر أرسل كشف الحساب للكل." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card/20 relative border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">أبسط مما تتخيل</h2>
          <p className="text-white/60 font-medium">خطوات بسيطة تريحك من وجع الراس والحسابات</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="hidden md:block absolute top-12 right-24 left-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 group"
            >
              <div className="w-24 h-24 rounded-full bg-card border-4 border-background flex items-center justify-center text-3xl font-black text-accent shadow-xl mb-6 shadow-accent/10 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="text-xl font-black text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/50 font-medium px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  const screens = [
    { img: screen1, label: "لوحة التحكم", desc: "الرئيسية" },
    { img: screen2, label: "كل القوائم", desc: "القوائم" },
    { img: screen5, label: "تقارير شهرية", desc: "التقارير" },
    { img: screen6, label: "إعدادات ذكية", desc: "الإعدادات" },
  ];

  return (
    <section id="screens" className="py-32 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5">التطبيق بنفسه يحكي</h2>
          <p className="text-lg text-white/50 font-medium max-w-xl mx-auto">واجهة عربية أصيلة، مصممة لراحتك واستخدامك اليومي</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none justify-center flex-wrap md:flex-nowrap">
          {screens.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center shrink-0 flex flex-col items-center gap-4 w-56"
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={s.img}
                  alt={s.label}
                  className="w-56 rounded-[2rem] shadow-2xl shadow-black/50 ring-1 ring-white/10 relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <p className="font-black text-white text-sm">{s.label}</p>
                <p className="text-xs text-white/40 font-medium mt-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reports = () => {
  return (
    <section id="reports" className="py-32 bg-card/20 border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-black text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-5 tracking-widest uppercase">التقارير</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              شفافية تامة<br /><span className="text-accent">للجميع</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed">
              تقارير شهرية واضحة بالأرقام والرسوم البيانية. اعرف المتبقي، والمصاريف، والسداد — كل شيء في شاشة واحدة.
            </p>
            <ul className="space-y-4">
              {["تقارير شهرية مفصلة", "رسوم بيانية سهلة الفهم", "متابعة دقيقة للسداد"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm mx-auto relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75 -z-10" />
            <img
              src={screen5}
              alt="تقارير شهرية"
              className="w-full rounded-3xl shadow-2xl shadow-primary/20 ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const benefits = [
    { icon: <WifiOff className="w-6 h-6 text-primary" />, title: "يعمل بدون إنترنت", desc: "سجّل الوجبات في أي وقت، والتطبيق بيزامن البيانات بعدين." },
    { icon: <Zap className="w-6 h-6 text-primary" />, title: "إعداد في ثواني", desc: "لا حسابات معقدة ولا ربط بنكي. أضف الأسماء وابدأ فوراً." },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "آمن وخاص", desc: "بياناتك ومصاريفك خاصة بمجموعتك ولا نشاركها مع أحد." },
  ];

  return (
    <section className="py-24 bg-card/50 border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">بدون تعقيد، بدون إزعاج</h2>
          <p className="text-white/50 font-medium">صُمّم قطّه ليكون الحل الأبسط لمشكلة القطة اليومية</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                {b.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3">{b.title}</h3>
              <p className="text-white/50 font-medium leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "هل التطبيق مجاني؟", a: "نعم، قطّه مجاني بالكامل للاستخدام الأساسي المخصص للمجموعات الصغيرة." },
    { q: "هل يحتاج كل الزملاء يحملون التطبيق؟", a: "لا، يكفي شخص واحد (مدير القطة) يحمل التطبيق ويدير الحسابات، ويقدر يشارك التقرير معاهم نهاية الشهر كصورة أو رابط." },
    { q: "كيف تتم حسبة الغياب؟", a: "عند تسجيل أي وجبة، تقدر تحدد مين حضر ومين غاب. التطبيق بيقسم المبلغ على الحاضرين فقط، والغايب ما ينحسب عليه شيء." },
    { q: "هل يشتغل التطبيق بدون إنترنت؟", a: "نعم، تقدر تسجل الوجبات والحضور بدون إنترنت، والتطبيق بيحدث البيانات أول ما تشبك." },
    { q: "هل أقدر أضيف أكثر من مجموعة؟", a: "أكيد، تقدر تسوي مجموعة لفطور الدوام، ومجموعة لطلعات الاستراحة، وكل مجموعة لها حساباتها المستقلة." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">الأسئلة الشائعة</h2>
          <p className="text-white/60 font-medium">كل ما تحتاج معرفته عن تطبيق قطّه</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-right font-black text-white hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                data-testid={`faq-toggle-${i}`}
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 shrink-0 mr-4 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-white/60 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-white/5 relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="bg-primary/20 border border-primary/30 rounded-[3rem] p-12 text-center mb-24 relative overflow-hidden shadow-2xl shadow-primary/10">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23fff' fill-opacity='0.05'/%3E%3C/svg%3E\")" }} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">جاهز تريّح راسك من الحسابات؟</h2>
            <p className="text-xl text-white/80 font-medium mb-10 max-w-lg mx-auto">
              حمّل تطبيق قطّه الآن، وخل فطور الدوام ممتع وبدون إحراجات.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg bg-white text-background hover:bg-white/90" data-testid="footer-appstore">
                <Apple className="w-6 h-6" />
                حمّل من App Store
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-background/50 backdrop-blur-md" data-testid="footer-playstore">
                <Play className="w-6 h-6" />
                حمّل من Google Play
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <QattahIcon id="footer" size={36} />
            <QattahWordmark nameClass="text-xl" />
          </div>

          <div className="flex items-center gap-6 text-sm font-bold text-white/50">
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-terms">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors" data-testid="footer-contact">تواصل معنا</a>
          </div>

          <p className="text-sm font-medium text-white/40">
            © {new Date().getFullYear()} تطبيق قطّه. صُنع بحب في السعودية.
          </p>
        </div>
      </div>
    </footer>
  );
};

function Home() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-accent selection:text-background font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Features />
        <HowItWorks />
        <AppScreens />
        <Reports />
        <Workflow />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
