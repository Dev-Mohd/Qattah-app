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
  ShieldCheck
} from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// UI Components
const Button = ({ children, variant = "primary", className = "", ...props }: any) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20",
    outline: "border border-border bg-transparent hover:bg-secondary/50 text-white",
    ghost: "bg-transparent hover:bg-secondary/50 text-white",
  };
  return (
    <button 
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Section 1: Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5" dir="rtl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black text-white tracking-tight">قطّه</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-features">المميزات</a>
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

// Section 2: Hero
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
              نظّم وجبات الدوام، <br />
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
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-md mx-auto relative perspective-1000"
          >
            <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500">
              <div className="w-full aspect-[1/2] max-w-[320px] mx-auto rounded-[3rem] border-[8px] border-card bg-background shadow-2xl shadow-primary/20 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-card rounded-b-3xl z-20"></div>
                
                <div className="p-6 pt-12 h-full flex flex-col gap-6 bg-gradient-to-b from-background to-card" dir="rtl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white/50 text-xs font-bold">إجمالي قطة الشهر</p>
                      <p className="text-3xl font-black text-white mt-1">450 <span className="text-sm font-bold text-accent">ر.س</span></p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-inner">
                      <span className="text-xl">👨🏽‍💻</span>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-2xl p-4 border border-white/5 shadow-md">
                    <h3 className="text-sm font-bold text-white/80 mb-3">فطور اليوم</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-3 space-x-reverse">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-card text-sm z-30">😎</div>
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-card text-sm z-20">🤓</div>
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border-2 border-card text-sm z-10">🥸</div>
                      </div>
                      <span className="text-xs font-black text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">15 ر.س / شخص</span>
                    </div>
                  </div>

                  <div className="flex-1 bg-card rounded-2xl p-4 border border-white/5 overflow-hidden relative shadow-md">
                    <h3 className="text-sm font-bold text-white/80 mb-4">الزملاء (مطلوب منهم)</h3>
                    <div className="space-y-3">
                      {[
                        { name: "أحمد", emoji: "😎", amount: "120" },
                        { name: "خالد", emoji: "🤓", amount: "85" },
                        { name: "سعد", emoji: "🥸", amount: "45" },
                      ].map((u, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-background/50 border border-white/5">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{u.emoji}</span>
                            <span className="text-sm font-bold text-white">{u.name}</span>
                          </div>
                          <span className="text-sm font-black text-white/70">{u.amount} <span className="text-xs">ر.س</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 3: Value Proposition
const Values = () => {
  const values = [
    { icon: <Clock className="w-6 h-6 text-accent" />, title: "وفّر وقتك", desc: "لا تضيّع وقتك في حساب من دفع ومن ما دفع، التطبيق يحسبها لك بثواني." },
    { icon: <Wallet className="w-6 h-6 text-accent" />, title: "شارك بعدل", desc: "كل شخص يدفع على قد اللي أكله. حضور وغياب يومي دقيق." },
    { icon: <Users className="w-6 h-6 text-accent" />, title: "تابع الحضور", desc: "سجّل حضور الزملاء للوجبة بضغطة زر، واللي غايب ما ينحسب عليه." },
    { icon: <BarChart3 className="w-6 h-6 text-accent" />, title: "تقارير شهرية", desc: "نهاية الشهر، شارك تقرير مفصّل لكل شخص يوضّح كم له وكم عليه." }
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

// Section 4 & 6: Feature Highlights & Mockups
const Features = () => {
  return (
    <section id="features" className="py-32 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">إدارة الزملاء <br/><span className="text-accent">بشكل ممتع</span></h2>
            <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed">
              أضف زملائك في الدوام، اختر لكل شخص أفتار وإيموجي يعبّر عنه. خليناها بسيطة وممتعة عشان ما تحس إنها مجرد حسابات وأرقام.
            </p>
            <ul className="space-y-4">
              {['إضافة غير محدودة للزملاء', 'تخصيص الرمز التعبيري لكل شخص', 'تعديل سريع وسهل'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="w-full max-w-md mx-auto bg-card rounded-[2.5rem] p-6 border border-white/10 shadow-2xl relative z-10 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-black text-white">زملاء الدوام</h3>
                <Button variant="ghost" className="h-8 px-3 text-xs bg-white/5 border border-white/10 font-bold">إضافة +</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "أبو فهد", emoji: "👨🏽‍🦳", color: "bg-amber-500/20 text-amber-500 border-amber-500/30" },
                  { name: "سالم", emoji: "🧔🏽‍♂️", color: "bg-blue-500/20 text-blue-500 border-blue-500/30" },
                  { name: "تركي", emoji: "👨🏽‍💻", color: "bg-green-500/20 text-green-500 border-green-500/30" },
                  { name: "عبدالله", emoji: "😎", color: "bg-purple-500/20 text-purple-500 border-purple-500/30" },
                ].map((u, i) => (
                  <div key={i} className="bg-background/80 rounded-2xl p-4 border border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-background transition-colors cursor-pointer">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl border ${u.color}`}>
                      {u.emoji}
                    </div>
                    <span className="font-black text-white/90 text-sm">{u.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">الحسبة <br/><span className="text-primary">علينا</span></h2>
            <p className="text-lg text-white/60 mb-8 font-medium leading-relaxed">
              تطبيق قطّه يحسب نصيب كل شخص أوتوماتيكياً بناءً على حضوره في الوجبة. لو واحد غاب اليوم، ما راح ينحسب عليه فطور اليوم. عدل ومريح للجميع.
            </p>
            <Button variant="primary" data-testid="btn-learn-calc">اكتشف كيف نحسبها</Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md mx-auto relative"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-accent/10 rounded-full blur-3xl -z-10" />
             <div className="w-full aspect-[1/2] mx-auto rounded-[3rem] border-[8px] border-card bg-background shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-card rounded-b-3xl z-20"></div>
                <div className="p-6 pt-16 flex flex-col h-full bg-gradient-to-b from-background to-card">
                  <h3 className="text-xl font-black text-white mb-6">تسجيل الفطور</h3>
                  
                  <div className="bg-card rounded-2xl p-5 mb-6 border border-white/5 shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rounded-bl-full" />
                    <label className="text-xs text-white/50 font-bold block mb-2 relative z-10">التكلفة الإجمالية للفطور</label>
                    <div className="flex items-end gap-2 relative z-10">
                      <span className="text-4xl font-black text-accent">85</span>
                      <span className="text-white/50 mb-1 font-bold">ر.س</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-black text-white mb-4">مين حضر الفطور اليوم؟</h4>
                  <div className="space-y-3 flex-1 overflow-auto">
                    {[
                      { name: "أبو فهد", emoji: "👨🏽‍🦳", active: true },
                      { name: "سالم", emoji: "🧔🏽‍♂️", active: true },
                      { name: "تركي", emoji: "👨🏽‍💻", active: false },
                      { name: "عبدالله", emoji: "😎", active: true },
                    ].map((u, i) => (
                      <div key={i} className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors ${u.active ? 'bg-primary/20 border border-primary/30' : 'bg-background border border-white/5'}`}>
                        <div className={`w-6 h-6 rounded-full border-2 ml-4 flex items-center justify-center transition-colors ${u.active ? 'border-accent bg-accent' : 'border-white/20'}`}>
                          {u.active && <CheckCircle2 className="w-4 h-4 text-background" />}
                        </div>
                        <span className="text-xl ml-3">{u.emoji}</span>
                        <span className="font-bold text-white/90">{u.name}</span>
                        {u.active && <span className="mr-auto text-xs font-black text-accent bg-accent/10 px-2 py-1 rounded-md border border-accent/20">28.3 ر.س</span>}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 mt-auto">
                    <Button className="w-full h-12 bg-accent text-background text-lg shadow-accent/20" variant="accent">حفظ الوجبة</Button>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Section 5: How it works
const HowItWorks = () => {
  const steps = [
    { num: "01", title: "أضف موظفيك", desc: "سجل أسماء الزملاء المشتركين في القطة." },
    { num: "02", title: "سجّل الوجبة", desc: "اكتب تكلفة الفطور أو الغداء اليومية." },
    { num: "03", title: "احسب النصيب", desc: "حدد الحضور، والتطبيق يوزع المبلغ." },
    { num: "04", title: "شارك التقرير", desc: "نهاية الشهر أرسل كشف الحساب للكل." }
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

// Section 7: Reports
const Reports = () => {
  return (
    <section id="reports" className="py-32" dir="rtl">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">شفافية تامة للجميع</h2>
        <p className="text-lg text-white/60 mb-16 font-medium max-w-2xl mx-auto">
          تطبيق قطّه يعطيك تقارير شهرية مفصلة. الكل يعرف كم دفع، وكم مطلوب منه يدفع، ومين اللي عليه الدور.
        </p>

        <div className="max-w-4xl mx-auto bg-card rounded-[2rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <h3 className="text-xl font-black text-white">تقرير شهر نوفمبر</h3>
              <span className="text-sm font-bold text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">إجمالي القطة: 1250 ر.س</span>
            </div>

            <div className="space-y-6">
              {[
                { name: "أحمد", total: "350", paid: "400", status: "+50" },
                { name: "سالم", total: "280", paid: "200", status: "-80" },
                { name: "تركي", total: "310", paid: "310", status: "0" },
                { name: "عبدالله", total: "310", paid: "200", status: "-110" },
              ].map((u, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-background/50 border border-white/5 hover:bg-background transition-colors">
                  <div className="flex items-center gap-4 w-40">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">👤</div>
                    <span className="font-bold text-white">{u.name}</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex justify-between text-xs text-white/50 font-bold">
                      <span>مطلوب منه: {u.total} ر.س</span>
                      <span>دفع: {u.paid} ر.س</span>
                    </div>
                    <div className="h-3 w-full bg-card rounded-full overflow-hidden flex border border-white/5">
                      <div 
                        className={`h-full ${parseInt(u.paid) >= parseInt(u.total) ? 'bg-accent' : 'bg-primary'}`} 
                        style={{ width: `${Math.min((parseInt(u.paid) / parseInt(u.total)) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="w-24 text-left sm:text-left flex justify-end">
                    <span className={`font-black px-3 py-1 rounded-lg text-sm border ${
                      u.status.startsWith('+') ? 'text-accent bg-accent/10 border-accent/20' : 
                      u.status === '0' ? 'text-white/50 bg-white/5 border-white/10' : 
                      'text-destructive bg-destructive/10 border-destructive/20'
                    }`}>
                      {u.status} ر.س
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 8: Simple Workflow
const Workflow = () => {
  const benefits = [
    { icon: <WifiOff className="w-6 h-6 text-primary" />, title: "يعمل بدون إنترنت", desc: "سجّل الوجبات في أي وقت، والتطبيق بيزامن البيانات بعدين." },
    { icon: <Zap className="w-6 h-6 text-primary" />, title: "إعداد في ثواني", desc: "لا حسابات معقدة ولا ربط بنكي. أضف الأسماء وابدأ فوراً." },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "آمن وخاص", desc: "بياناتك ومصاريفك خاصة بمجموعتك ولا نشاركها مع أحد." }
  ];

  return (
    <section className="py-24 bg-card/50 border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
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

// Section 9: FAQ
const FAQ = () => {
  const faqs = [
    { q: "هل التطبيق مجاني؟", a: "نعم، قطّه مجاني بالكامل للاستخدام الأساسي المخصص للمجموعات الصغيرة." },
    { q: "هل يحتاج كل الزملاء يحملون التطبيق؟", a: "لا، يكفي شخص واحد (مدير القطة) يحمل التطبيق ويدير الحسابات، ويقدر يشارك التقرير معاهم نهاية الشهر كصورة أو رابط." },
    { q: "كيف تتم حسبة الغياب؟", a: "عند تسجيل أي وجبة، تقدر تحدد مين حضر ومين غاب. التطبيق بيقسم المبلغ على الحاضرين فقط، والغايب ما ينحسب عليه شيء." },
    { q: "هل يشتغل التطبيق بدون إنترنت؟", a: "نعم، تقدر تسجل الوجبات والحضور بدون إنترنت، والتطبيق بيحدث البيانات أول ما تشبك." },
    { q: "هل أقدر أضيف أكثر من مجموعة؟", a: "أكيد، تقدر تسوي مجموعة لفطور الدوام، ومجموعة لطلعات الاستراحة، وكل مجموعة لها حساباتها المستقلة." }
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
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
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

// Section 10: Footer
const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-white/5 relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="bg-primary/20 border border-primary/30 rounded-[3rem] p-12 text-center mb-24 relative overflow-hidden shadow-2xl shadow-primary/10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
          
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
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">قطّه</span>
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
