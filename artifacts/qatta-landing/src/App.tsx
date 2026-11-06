import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  CheckCircle2,
  ListChecks,
  Clock,
  CreditCard,
  FileText,
  Bell,
  ShieldCheck,
  ChevronDown,
  WifiOff,
  Zap,
  Lock,
  Download,
  Users,
  BarChart3,
  Moon,
  Palette,
  Database,
  Receipt,
  LayoutGrid,
  MessageCircle,
  UserPlus,
  Smartphone,
  Wallet
} from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/us/app/qattah-app/id6768451077";
import PrivacyPage from "./pages/privacy";
import screen1 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.36_(2)_1779008325210.jpeg";
import screen2 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.35_(3)_1779008325210.jpeg";
import screen3 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.36_(3)_1779008325210.jpeg";
import screen4 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.35_1779008325210.jpeg";
import screen5 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.35_(2)_1779008325211.jpeg";
import screen6 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.36_1779008325210.jpeg";
import screen7 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.35_(1)_1779008325211.jpeg";
import screen8 from "@assets/WhatsApp_Image\u200f_1447-11-30_at_11.54.36_(1)_1779008325210.jpeg";

const QattahIcon = ({ id = "a", size = 40 }: { id?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="54" fill={`url(#bg${id})`}/>
    <rect x="34" y="28" width="52" height="64" rx="8" fill={`url(#paper${id})`} opacity="0.15"/>
    <rect x="34" y="28" width="52" height="64" rx="8" stroke={`url(#stroke${id})`} strokeWidth="2"/>
    <line x1="44" y1="46" x2="76" y2="46" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="44" y1="58" x2="76" y2="58" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="44" y1="70" x2="62" y2="70" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
    <circle cx="76" cy="78" r="14" fill={`url(#check${id})`}/>
    <polyline points="70,78 74,83 83,72" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <defs>
      <linearGradient id={`bg${id}`} x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#064e35"/><stop offset="100%" stopColor="#065f46"/>
      </linearGradient>
      <linearGradient id={`paper${id}`} x1="34" y1="28" x2="86" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <linearGradient id={`stroke${id}`} x1="34" y1="28" x2="86" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#10b981"/>
      </linearGradient>
      <linearGradient id={`check${id}`} x1="62" y1="64" x2="90" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#059669"/>
      </linearGradient>
    </defs>
  </svg>
);

const QattahWordmark = ({ className = "text-2xl" }: { className?: string }) => (
  <span className={`font-black text-white ${className}`}>
    قطّ<span className="text-accent">ه</span>
  </span>
);

const ScreenCard = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`relative w-full max-w-sm mx-auto ${className}`}>
    <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-75 -z-10" />
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/8">
      <img src={src} alt={alt} loading="lazy" decoding="async" width={720} height={1560} className="w-full h-auto block" />
    </div>
  </div>
);

const AppStoreBadge = ({ className = "" }: { className?: string }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="badge-appstore"
    className={`inline-flex items-center gap-3 bg-black border border-white/15 rounded-2xl px-5 py-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200 ${className}`}
  >
    <svg width="24" height="28" viewBox="0 0 24 28" fill="white">
      <path d="M20.16 14.77c-.04-3.39 2.77-5.02 2.9-5.09-1.58-2.31-4.04-2.63-4.91-2.66-2.08-.21-4.07 1.23-5.13 1.23-1.06 0-2.69-1.21-4.43-1.18-2.26.04-4.36 1.33-5.52 3.35-2.37 4.1-.61 10.17 1.68 13.5 1.14 1.63 2.47 3.45 4.22 3.39 1.7-.07 2.34-1.09 4.4-1.09 2.05 0 2.65 1.09 4.44 1.05 1.83-.03 2.98-1.65 4.09-3.29 1.3-1.88 1.83-3.7 1.86-3.8-.04-.01-3.57-1.37-3.6-5.41zM16.8 5.19c.94-1.14 1.58-2.72 1.4-4.29-1.35.06-2.98.9-3.94 2.02-.86 1-1.62 2.58-1.42 4.11 1.5.11 3.04-.77 3.96-1.84z"/>
    </svg>
    <div>
      <div className="text-white/50 text-[10px] font-medium leading-none mb-1">Download on the</div>
      <div className="text-white text-[18px] font-bold leading-none">App Store</div>
    </div>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F0D]/80 backdrop-blur-2xl border-b border-white/5" dir="rtl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <QattahIcon id="nav" size={38} />
          <QattahWordmark />
        </div>

        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-features">المميزات</a>
          <a href="#new" className="text-sm font-bold text-white/70 hover:text-white transition-colors">الجديد</a>
          <a href="#screens" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-screens">الشاشات</a>
          <a href="#how-it-works" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-how-it-works">كيف تعمل</a>
          <a href="#reports" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-reports">التقارير</a>
          <a href="#faq" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-faq">الأسئلة الشائعة</a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" data-testid="nav-download"
             className="px-6 py-2.5 text-sm rounded-full font-bold bg-accent text-black hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all">
            حمّل التطبيق
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} data-testid="nav-mobile-toggle"
                aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={isOpen}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0F0D] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#features" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>المميزات</a>
              <a href="#new" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>الجديد</a>
              <a href="#screens" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>الشاشات</a>
              <a href="#how-it-works" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>كيف تعمل</a>
              <a href="#reports" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>التقارير</a>
              <a href="#faq" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>الأسئلة الشائعة</a>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                 className="w-full mt-4 px-6 py-3 rounded-full font-bold bg-accent text-black text-center">
                حمّل التطبيق
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden bg-[#0A0F0D]" dir="rtl">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="flex w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-bold text-white/80">إصدار جديد كلياً · كلٌّ حسب طلبه والودجت</span>
          </div>

          <h1 className="text-[44px] sm:text-[64px] md:text-[88px] font-black text-white leading-[1.15] mb-6">
            نظّم وجبات الدوام<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">وشارك بالعدل</span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-white/55 mb-10 max-w-xl mx-auto lg:mx-0 leading-[1.7] font-medium">
            قطّه يحلّ مشكلة حساب مصاريف الفطور والغداء في الدوام من إضافة الأعضاء وتسجيل الوجبات إلى إصدار تقارير PDF شهرية وإشعارات السداد
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <AppStoreBadge className="w-full sm:w-auto justify-center" />
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white whitespace-nowrap">بدون حساب</p>
              <p className="text-xs font-bold text-white/40 mt-1">ابدأ فوراً</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white whitespace-nowrap">مشفّر</p>
              <p className="text-xs font-bold text-white/40 mt-1">على جهازك فقط</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white whitespace-nowrap">مجاني</p>
              <p className="text-xs font-bold text-white/40 mt-1">للتحميل</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full max-w-sm mx-auto relative"
        >
          <ScreenCard src={screen1} alt="واجهة تطبيق قطّه الرئيسية" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Values = () => {
  const values = [
    { icon: <ListChecks className="w-6 h-6 text-accent" />, title: "قوائم متعددة", desc: "أنشئ قائمة لكل مجموعة من فطور الدوام إلى غداء الفريق وطلعات الاستراحة" },
    { icon: <Clock className="w-6 h-6 text-accent" />, title: "حساب تلقائي", desc: "حدّد الحاضرين والتطبيق يوزّع المبلغ بالعدل على من حضر فقط" },
    { icon: <CreditCard className="w-6 h-6 text-accent" />, title: "تتبع السداد", desc: "تابع السداد الجزئي والكامل لكل عضو واعرف من سدّد ومن لم يسدّد" },
    { icon: <FileText className="w-6 h-6 text-accent" />, title: "تقارير PDF", desc: "أصدر تقريراً شهرياً احترافياً بهوية قطّه وشاركه مباشرة" },
    { icon: <Bell className="w-6 h-6 text-accent" />, title: "تذكير بالواتساب", desc: "رسالة جاهزة لكل عضو بمبلغه ورقم الآيبان تُفتح في الواتساب مباشرة" },
    { icon: <ShieldCheck className="w-6 h-6 text-accent" />, title: "أمان وتشفير", desc: "قاعدة بيانات مشفرة بـ SQLCipher وبياناتك محمية ولا تغادر جهازك" },
  ];

  return (
    <section className="py-24 bg-[#0d1612] border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#121e17] p-8 rounded-3xl border border-white/5 hover:border-accent/25 transition-colors group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0A0F0D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                {v.icon}
              </div>
              <h3 className="text-[20px] font-black text-white mb-3">{v.title}</h3>
              <p className="text-[18px] text-white/55 font-medium leading-[1.7]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureBlock = ({
  tag,
  title,
  desc,
  img,
  imgAlt,
  reversed = false,
}: {
  tag: string;
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
  reversed?: boolean;
}) => (
  <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 mb-32`}>
    <motion.div
      initial={{ opacity: 0, x: reversed ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <span className="inline-block text-[13px] font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-5">
        {tag}
      </span>
      <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-[18px] md:text-[20px] text-white/55 mb-8 font-medium leading-[1.7] max-w-lg">{desc}</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: reversed ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-1 w-full"
    >
      <ScreenCard src={img} alt={imgAlt} />
    </motion.div>
  </div>
);

const Features = () => (
  <section id="features" className="py-32 overflow-hidden bg-[#0A0F0D]" dir="rtl">
    <div className="container mx-auto px-6">
      <FeatureBlock
        tag="إدارة الأعضاء والوجبات"
        title="أضف زملائك والوجبات بسهولة"
        desc="أنشئ قائمتك وأضف أعضاءها وسجّل كل وجبة مع تحديد الحاضرين والتطبيق يوزّع المبلغ على الحاضرين فقط تلقائياً"
        img={screen3}
        imgAlt="إضافة الأعضاء والوجبات"
      />

      <FeatureBlock
        tag="الأرصدة والسداد"
        title="اعرف من له ومن عليه"
        desc="لوحة أرصدة فورية تُظهر رصيد كل عضو من المدين إلى الدائن والمسدّد مع دعم السداد الجزئي والكامل والتتبع الدقيق"
        img={screen4}
        imgAlt="الأرصدة والمديونيات"
        reversed
      />

      <FeatureBlock
        tag="تعدد القوائم"
        title="كل القوائم في مكان واحد"
        desc="قائمة لفطور الدوام وأخرى لغداء الفريق وثالثة لطلعات الاستراحة ولكل مجموعة ملخصها المستقل مع المصاريف والسداد والمتبقي"
        img={screen2}
        imgAlt="القوائم المتعددة"
      />
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "أضف الزملاء", desc: "سجّل أسماء الزملاء المشتركين في القطة" },
    { num: "02", title: "سجّل الوجبة", desc: "اكتب تكلفة الفطور أو الغداء اليومية" },
    { num: "03", title: "احسب القطة", desc: "حدّد الحاضرين والتطبيق يوزّع المبلغ فوراً" },
    { num: "04", title: "شارك التقرير", desc: "في نهاية الشهر أرسل كشف الحساب PDF" },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#0d1612] relative border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-4">كيف يعمل التطبيق</h2>
          <p className="text-[20px] text-white/55 font-medium max-w-2xl mx-auto">أربع خطوات بسيطة تريحك من الحسابات اليدوية</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="hidden md:block absolute top-12 right-24 left-24 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 group"
            >
              <div className="w-24 h-24 rounded-full bg-[#121e17] border border-white/10 flex items-center justify-center text-3xl font-black text-accent shadow-xl mb-6 shadow-black/50 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="text-[20px] font-black text-white mb-2">{step.title}</h3>
              <p className="text-[18px] text-white/55 font-medium px-4 leading-[1.7]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  const screens = [
    { img: screen1, label: "الرئيسية" },
    { img: screen2, label: "القوائم" },
    { img: screen8, label: "الوجبات" },
    { img: screen4, label: "الأرصدة" },
    { img: screen7, label: "الإحصائيات" },
    { img: screen5, label: "التقارير" },
  ];

  return (
    <section id="screens" className="py-32 bg-[#0A0F0D]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-5">واجهة مصممة بعناية</h2>
          <p className="text-[20px] text-white/55 font-medium max-w-xl mx-auto">
            تجربة مستخدم عربية سلسة وواضحة
          </p>
        </div>

        <div className="flex gap-6 pb-6 snap-x snap-mandatory overflow-x-auto -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {screens.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center shrink-0 flex flex-col items-center gap-6 w-64"
            >
              <ScreenCard src={s.img} alt={s.label} />
              <div className="text-center mt-2">
                <span className="text-[13px] font-bold text-white/50 px-4 py-2 rounded-full border border-white/5 bg-white/5">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reports = () => (
  <section id="reports" className="py-32 bg-[#0d1612] border-y border-white/5" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-6 leading-tight">
            تقارير شهرية واضحة واحترافية
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/55 mb-8 font-medium leading-[1.7]">
            في نهاية كل شهر وبضغطة زر واحدة أصدر تقريراً كاملاً ومفصلاً يوضّح كل شيء لكل عضو
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "ملخص عام للمصاريف والمديونيات",
              "تفصيل كامل لكل وجبة وتكلفتها",
              "رصيد كل عضو بالهللة",
              "تصدير بتنسيق PDF احترافي وجاهز للمشاركة"
            ].map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-[18px] text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-sm mx-auto"
        >
          <ScreenCard src={screen5} alt="تقارير قطّه" />
        </motion.div>
      </div>
    </div>
  </section>
);

const AdvancedFeatures = () => {
  const features = [
    { icon: <WifiOff />, title: "يعمل بدون إنترنت", desc: "سجّل الوجبات في أي وقت وأي مكان حتى بدون اتصال بالشبكة" },
    { icon: <Database />, title: "تخزين محلي", desc: "بياناتك تُحفظ على جهازك فقط لضمان الخصوصية التامة" },
    { icon: <Users />, title: "أعضاء غير محدودين", desc: "أضف العدد الذي تحتاجه من الزملاء بدون أي قيود" },
    { icon: <Palette />, title: "الوضع الليلي والنهاري", desc: "واجهة تتكيّف مع تفضيلاتك وتدعم الوضع المظلم بالكامل" },
    { icon: <Download />, title: "نسخ احتياطي", desc: "احفظ نسخة من بياناتك واسترجعها في أي وقت" },
    { icon: <Smartphone />, title: "ودجت للشاشة الرئيسية", desc: "المستحق وزر تسجيل وجبة اليوم بلمسة من الشاشة الرئيسية وشاشة القفل" },
    { icon: <BarChart3 />, title: "إحصائيات تفصيلية", desc: "رسوم بيانية توضّح معدل الصرف الشهري والتغيرات" },
    { icon: <Moon />, title: "تذكير يومي ذكي", desc: "لا يزعجك إذا سجّلت وجبتك ويذكّرك بالمبلغ المستحق" },
  ];

  return (
    <section className="py-32 bg-[#0A0F0D]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-5">مزايا متقدمة</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#121e17] p-6 rounded-3xl border border-white/5 flex flex-col gap-4"
            >
              <div className="text-accent">{f.icon}</div>
              <div>
                <h3 className="text-[18px] font-black text-white mb-2">{f.title}</h3>
                <p className="text-[16px] text-white/55 leading-[1.7]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SimpleWorkflow = () => (
  <section className="py-24 bg-[#0d1612] border-y border-white/5" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <WifiOff className="w-10 h-10 text-accent" />, title: "بدون إنترنت", desc: "تطبيق قطّه يعمل بكامل مزاياه حتى بدون اتصال بالإنترنت" },
          { icon: <Zap className="w-10 h-10 text-accent" />, title: "إعداد في ثوانٍ", desc: "لا يحتاج إلى إنشاء حساب احمل التطبيق وابدأ مباشرة بإضافة زملائك" },
          { icon: <Lock className="w-10 h-10 text-accent" />, title: "بياناتك مشفرة", desc: "نستخدم SQLCipher لحماية قاعدة بياناتك محلياً على جهازك" },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#121e17] p-10 rounded-[2rem] border border-white/5 text-center flex flex-col items-center shadow-lg"
          >
            <div className="mb-6">{card.icon}</div>
            <h3 className="text-[24px] font-black text-white mb-3">{card.title}</h3>
            <p className="text-[18px] text-white/55 font-medium leading-[1.7]">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "هل التطبيق مجاني", a: "نعم تطبيق قطّه مجاني بالكامل للتحميل والاستخدام" },
    { q: "هل يمكن أن يدفع كل شخص حسب طلبه", a: "نعم اختر طريقة التقسيم كلٌّ حسب طلبه وأضف أصناف كل شخص من قائمة المطعم والتوصيل يتوزع بالعدل حسب قيمة الطلب" },
    { q: "هل التطبيق متوفر على أندرويد", a: "حالياً على الآيفون والآيباد فقط ويكفي أن يكون التطبيق عند منظّم القطة" },
    { q: "هل يحتاج الأعضاء تحميل التطبيق", a: "لا يكفي أن يقوم شخص واحد بتحميل التطبيق وإدارة القائمة وإرسال التقارير للبقية" },
    { q: "هل بياناتي محفوظة في السحابة", a: "لا فكل بياناتك مشفرة ومحفوظة محلياً في جهازك لضمان الخصوصية التامة" },
    { q: "كيف تتم عملية السداد", a: "التطبيق لا يقوم بتحويل الأموال وهو يحسب فقط من له ومن عليه والتحويل يتم بينكم كالمعتاد" },
    { q: "هل يدعم التطبيق السداد الجزئي", a: "نعم يمكنك تسجيل سداد جزئي لأي عضو وسيقوم التطبيق بحساب المتبقي تلقائياً" },
    { q: "هل يمكن استخدام التطبيق لطلعات الاستراحة وليس الدوام فقط", a: "بالتأكيد يمكنك إنشاء قوائم متعددة بأي اسم كالدوام والاستراحة والسفر وغيرها" },
  ];

  return (
    <section id="faq" className="py-32 bg-[#0A0F0D]" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-5">الأسئلة الشائعة</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 bg-[#121e17] rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-right"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-[18px] font-bold text-white">{faq.q}؟</span>
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-[16px] text-white/55 font-medium leading-[1.7] border-t border-white/5 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-[#0A0F0D]" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-br from-[#065F46] to-[#042f23] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-6 leading-tight">
            هل أنت مستعد للتخلص من الحسابات اليدوية
          </h2>
          <p className="text-[20px] text-white/80 font-medium mb-10 max-w-xl mx-auto leading-[1.7]">
            حمّل قطّه الآن وابدأ بتنظيم مصاريف الدوام في ثوانٍ
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <AppStoreBadge className="w-full sm:w-auto justify-center" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NewFeatures = () => {
  const items = [
    { icon: <Receipt className="w-7 h-7 text-accent" />, title: "كلٌّ حسب طلبه", desc: "فول بثمانية وتميس وشاي بخمسة عشر؟ أضف طلب كل شخص من قائمة المطعم والتطبيق يحسب نصيبه بالهللة ويوزّع التوصيل بالعدل" },
    { icon: <LayoutGrid className="w-7 h-7 text-accent" />, title: "نفس طلب أمس بضغطة", desc: "كرّر طلبات آخر فطور وانسخ الطلب مجمّعاً جاهزاً للمطعم مثل ٣ فول و٥ تميس" },
    { icon: <MessageCircle className="w-7 h-7 text-accent" />, title: "تحصيل بدون إحراج", desc: "ذكّر الكل برسالة واتساب لكل شخص فيها مبلغه ورقم الآيبان وأرسل كشف حساب PDF أنيقاً لكل عضو" },
    { icon: <UserPlus className="w-7 h-7 text-accent" />, title: "ضيف ومن دفع؟", desc: "ضيف لمرة واحدة على حساب من دعاه ومن دفع للمطعم من جيبه يُحسب له تلقائياً" },
    { icon: <Smartphone className="w-7 h-7 text-accent" />, title: "ودجت واختصارات Siri", desc: "سجّل وجبة اليوم من الشاشة الرئيسية أو قل لسيري سجّل وجبة في قطه" },
    { icon: <Wallet className="w-7 h-7 text-accent" />, title: "تقارير ورسوم بيانية", desc: "تقرير شهري مع رسم يومي وتوزيع حسب الوجبة ورصيد مرحّل دقيق وتصدير PDF" },
  ];

  return (
    <section id="new" className="py-28 bg-[#0d1612] border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[13px] font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-5">جديد في الإصدار ٢</span>
          <h2 className="text-[34px] sm:text-[48px] md:text-[64px] font-black text-white mb-4">قطّه صار أذكى</h2>
          <p className="text-[18px] md:text-[20px] text-white/55 font-medium max-w-2xl mx-auto">أُعيد بناء التطبيق بالكامل ليكون أسرع وأدق وأسهل في الاستخدام اليومي</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative bg-gradient-to-br from-[#14251c] to-[#0f1a14] p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative w-14 h-14 rounded-2xl bg-[#0A0F0D] flex items-center justify-center mb-6 border border-white/5">
                {item.icon}
              </div>
              <h3 className="relative text-[22px] font-black text-white mb-3">{item.title}</h3>
              <p className="relative text-[17px] text-white/60 font-medium leading-[1.8]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0A0F0D] pt-16 pb-8 border-t border-white/5" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <QattahIcon id="footer" size={32} />
          <QattahWordmark className="text-xl" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#features" className="text-sm font-bold text-white/50 hover:text-white transition-colors">المميزات</a>
          <a href="#screens" className="text-sm font-bold text-white/50 hover:text-white transition-colors">الشاشات</a>
          <a href="#how-it-works" className="text-sm font-bold text-white/50 hover:text-white transition-colors">كيف تعمل</a>
          <a href="#faq" className="text-sm font-bold text-white/50 hover:text-white transition-colors">الأسئلة الشائعة</a>
          <a href={`${import.meta.env.BASE_URL}privacy`} className="text-sm font-bold text-white/50 hover:text-white transition-colors">سياسة الخصوصية</a>
          <a href="https://instagram.com/qattah.app" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white/50 hover:text-white transition-colors">تواصل معنا</a>
        </div>
      </div>
      <div className="text-center text-white/30 text-sm font-medium">
        © {new Date().getFullYear()} تطبيق قطّه. جميع الحقوق محفوظة.
      </div>
    </div>
  </footer>
);

export default function App() {
  if (window.location.pathname.replace(/\/+$/, "").endsWith("/privacy")) {
    return <PrivacyPage />;
  }
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <NewFeatures />
      <Values />
      <Features />
      <HowItWorks />
      <AppScreens />
      <Reports />
      <AdvancedFeatures />
      <SimpleWorkflow />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
