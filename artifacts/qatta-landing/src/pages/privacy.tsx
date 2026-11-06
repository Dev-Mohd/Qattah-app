const sections: { title: string; body: string }[] = [
  {
    title: "مقدمة",
    body: "توضح هذه السياسة طريقة تعامل تطبيق قطّه مع البيانات التي تدخلها فيه. باستخدامك للتطبيق فإنك توافق على هذه السياسة.",
  },
  {
    title: "البيانات التي تدخلها",
    body: "أسماء القوائم والأعضاء وأرقام جوالاتهم الاختيارية، وأنواع الوجبات وأصناف المطعم، والوجبات والمبالغ والسدادات والملاحظات، وبيانات التحويل الخاصة بك مثل رقم الآيبان، وإعدادات المظهر والتذكير.",
  },
  {
    title: "أين تُحفظ البيانات",
    body: "تُحفظ كل البيانات محلياً على جهازك في قاعدة بيانات مشفّرة، ومفتاح التشفير محفوظ في سلسلة المفاتيح الآمنة في الجهاز. لا يرسل التطبيق بياناتك إلى أي خادم، ولا يستخدم أدوات تتبّع أو إعلانات.",
  },
  {
    title: "الودجت واختصارات Siri",
    body: "يحفظ التطبيق ملخصاً صغيراً للأرقام في مساحة مشتركة على جهازك فقط ليعرضه الودجت. واختصارات Siri تعمل داخل التطبيق على جهازك.",
  },
  {
    title: "المشاركة والنسخ الاحتياطي",
    body: "عند مشاركة الأرصدة أو التذكير بالواتساب أو كشف الحساب أو التقرير بصيغة PDF أو تصدير نسخة احتياطية، يُنشأ نص أو ملف من البيانات التي اخترت مشاركتها ويُرسل بالتطبيق الذي تختاره أنت. ملف النسخة الاحتياطية غير مشفّر، فاحفظه في مكان آمن.",
  },
  {
    title: "الإشعارات",
    body: "إذا فعّلت التذكير اليومي يستخدم التطبيق إشعارات محلية على جهازك دون إرسال أي بيانات.",
  },
  {
    title: "حذف البيانات",
    body: "يمكنك حذف كل البيانات من الإعدادات في التطبيق، أو بحذف التطبيق. بعد الحذف لا يمكن استعادة البيانات إلا من نسخة احتياطية سابقة.",
  },
  {
    title: "تحديث السياسة",
    body: "إذا أُضيفت مزايا تتطلب إرسال بيانات خارج جهازك مثل المزامنة السحابية فستُحدَّث هذه السياسة قبل ذلك.",
  },
];

export default function PrivacyPage() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white" dir="rtl">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <a href={base} className="text-accent font-bold text-sm hover:underline">
          → العودة للصفحة الرئيسية
        </a>
        <h1 className="text-[40px] md:text-[56px] font-black mt-6 mb-2">سياسة الخصوصية</h1>
        <p className="text-white/50 mb-12">تطبيق قطّه · آخر تحديث: نوفمبر 2026</p>

        <div className="space-y-6">
          {sections.map((s) => (
            <section key={s.title} className="bg-[#121e17] border border-white/5 rounded-2xl p-6">
              <h2 className="text-[20px] font-black mb-3">{s.title}</h2>
              <p className="text-[17px] text-white/65 leading-[1.8]">{s.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 bg-accent/10 border border-accent/20 rounded-2xl p-6">
          <h2 className="text-[20px] font-black mb-3">التواصل</h2>
          <p className="text-[17px] text-white/70 leading-[1.8]">
            لأي سؤال عن الخصوصية أو البيانات تواصل معنا عبر إنستغرام{" "}
            <a href="https://instagram.com/qattah.app" className="text-accent font-bold" target="_blank" rel="noopener noreferrer">
              qattah.app@
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
