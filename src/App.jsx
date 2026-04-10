export default function App() {
  const roadmap = [
    {
      phase: "Этап 1",
      title: "Стабилизация ядра",
      text: "Довести сетевую часть до устойчивой работы: синхронизацию, обмен блоками, корректную логику нод и мобильную модель участия внутри ядра сети.",
    },
    {
      phase: "Этап 2",
      title: "Публичный запуск core",
      text: "Подготовить рабочую демонстрацию, показать сеть в действии, подтвердить жизнеспособность архитектуры и сформировать первое публичное присутствие проекта.",
    },
    {
      phase: "Этап 3",
      title: "Экономика LBU₽",
      text: "Развить нативную криптовалюту сети, подготовить основу для дальнейшей utility-модели, прикладных сценариев, ликвидности и интеграций.",
    },
    {
      phase: "Этап 4",
      title: "Первые продукты на ядре",
      text: "После стабилизации сети развивать первые пользовательские продукты на базе ColorChain: интерфейсы, сервисы и другие прикладные решения, использующие одно и то же ядро.",
    },
  ];

  const nowReasons = [
    "Мобильные пользователи всё чаще ищут не просто приложения, а способ прямого участия в цифровой экономике.",
    "Централизованные платформы остаются зависимыми от внешнего контроля, ограничений и правил, которые определяет не пользователь.",
    "Рынок ищет не только новые токены, но и новые криптосистемы, за которыми стоит собственная технология и реальная архитектура.",
    "Сейчас есть окно для проектов, которые предлагают не очередную обёртку, а самостоятельную мобильную сеть с понятной логикой и нативной криптовалютой.",
  ];

  const useCases = [
    {
      title: "Первые продукты",
      text: "После стабилизации ядра на базе ColorChain могут запускаться прикладные решения, использующие ту же сетевую основу и нативный актив.",
    },
    {
      title: "Игровые сценарии",
      text: "Ядро ColorChain может стать базой для игровых сред, где активы, внутренняя экономика и действия пользователей связаны с одной сетью.",
    },
    {
      title: "Цифровые сервисы",
      text: "На базе core могут появляться сервисы, интерфейсы участия, внутренние системы ценности и другие прикладные инструменты.",
    },
    {
      title: "Community-платформы",
      text: "ColorChain может стать основой для сообществ, которым нужна не только площадка общения, но и собственная цифровая среда.",
    },
  ];

  const faq = [
    {
      q: "Что такое ColorChain?",
      a: "ColorChain — это мобильная децентрализованная сеть, создаваемая прежде всего как система для добычи нативной криптовалюты LBU₽.",
    },
    {
      q: "Что такое LBU₽?",
      a: "LBU₽ (Local Blockchain Ultimatum Protocol)— нативная криптовалюта проекта ColorChain, вокруг которой строится модель мобильного майнинга и дальнейшая экономическая логика сети.",
    },
    {
      q: "Это уже готовый продукт?",
      a: "Сейчас проект находится в активной разработке. На данном этапе собирается и стабилизируется ядро сети, необходимое для полноценной работы модели добычи LBU₽.",
    },
    {
      q: "Что будет дальше после ядра?",
      a: "После стабилизации сети на базе ColorChain могут развиваться интерфейсы, сервисы и другие прикладные продукты. Но фундамент проекта — сеть и добыча LBU₽.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_22%),linear-gradient(180deg,#07111f_0%,#08101b_50%,#060b13_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07101b]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="group">
            <div className="text-sm font-black uppercase tracking-[0.42em] text-cyan-300 transition group-hover:text-cyan-200">
              ColorChain
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.34em] text-[var(--muted)]">
              Mobile Decentralized Network
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[var(--soft)] xl:flex">
            <a href="#about" className="transition hover:text-white">О проекте</a>
            <a href="#manifest" className="transition hover:text-white">Манифест</a>
            <a href="#whitepaper" className="transition hover:text-white">Whitepaper</a>
            <a href="#roadmap" className="transition hover:text-white">Roadmap</a>
            <a href="#difference" className="transition hover:text-white">Отличия</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a
              href="#contacts"
              className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-medium text-cyan-200 transition hover:border-cyan-200/50 hover:bg-cyan-300/15"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              Genesis stage
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Мобильная сеть
              <span className="block text-[var(--soft)]">для добычи и роста</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-amber-200 bg-clip-text text-transparent">
                нативной валюты LBU₽
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--soft)] sm:text-lg">
              ColorChain создаётся как мобильная криптосистема с собственным core-ядром,
              peer-to-peer архитектурой и нативной криптовалютой LBU₽. Проект делает ставку
              на модель, в которой смартфон становится не просто экраном, а точкой участия
              в новой децентрализованной сети.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#manifest" className="btn-primary">
                Читать манифест
              </a>
              <a href="#whitepaper" className="btn-secondary">
                Whitepaper
              </a>
              <a href="#contacts" className="btn-ghost">
                Контакты
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard value="P2P" label="архитектура сети" />
              <StatCard value="Mobile" label="формат участия" />
              <StatCard value="LBU₽" label="нативная криптовалюта" />
            </div>
          </div>

          <div className="xl:pl-8">
            <div className="glass-panel overflow-hidden rounded-[2rem] p-5 md:p-6">
              <div className="flex items-start justify-between gap-6 border-b border-white/8 pb-5">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.34em] text-cyan-300">
                    Network status
                  </div>
                  <div className="mt-3 text-3xl font-black text-white">ONLINE</div>
                  <p className="mt-2 max-w-sm text-sm leading-7 text-[var(--soft)]">
                    Ядро формируется как самостоятельная мобильная инфраструктура для
                    майнинга, синхронизации и дальнейшего роста сети.
                  </p>
                </div>

                <div className="mt-2 flex h-4 w-4 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.9)]" />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoCard title="Архитектура" value="P2P" subtitle="собственная сетевая основа" />
                <InfoCard title="Формат" value="Mobile" subtitle="доступ через устройство" />
                <InfoCard title="Актив" value="LBU₽" subtitle="нативная криптовалюта сети" />
                <InfoCard title="Фокус" value="Core" subtitle="ядро как фундамент системы" />
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
                <div className="rounded-[1.75rem] border border-amber-300/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5">
                  <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-amber-300/25 bg-[radial-gradient(circle_at_35%_35%,rgba(255,251,190,1),rgba(255,211,84,0.88)_28%,rgba(168,112,0,0.95)_68%,rgba(67,41,0,1)_100%)] shadow-[0_0_60px_rgba(245,158,11,0.18)]">
                    <div className="text-center">
                      <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6a4400]">
                        Native coin
                      </div>
                      <div className="mt-2 text-4xl font-black text-[#3e2600]">LBU₽</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#704900]">
                        ColorChain
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Notice tone="cyan" title="Genesis note">
                    ColorChain создаётся как мобильная децентрализованная инфраструктура,
                    в которой цифровая ценность рождается не в закрытых вычислительных
                    центрах, а в участии обычных пользователей.
                  </Notice>
                  <Notice tone="gold">
                    Главная идея проекта — построить сеть, в которой добыча LBU₽ имеет
                    собственную техническую базу: ядро, логику нод, мобильную модель
                    участия и дальнейший потенциал роста в самостоятельную экосистему.
                  </Notice>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="Что это" title="Что такое ColorChain">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Сеть в телефоне"
            text="ColorChain превращает смартфон не просто в интерфейс, а в инструмент участия в децентрализованной сети, где пользователь может входить в систему добычи LBU₽ напрямую со своего устройства."
          />
          <FeatureCard
            title="Нативная криптовалюта LBU₽"
            text="LBU₽ — нативная криптовалюта ColorChain. Проект строится вокруг идеи мобильного майнинга собственного цифрового актива, а не вокруг декоративного токена без технологической базы."
          />
          <FeatureCard
            title="Собственное core-ядро"
            text="В основе ColorChain лежит собственная сетевая архитектура: логика нод, синхронизация, валидация и модель участия, необходимые для построения самостоятельной криптосистемы."
          />
        </div>
      </Section>

      <section id="manifest" className="section-shell section-accent">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <div className="eyebrow-gold">Manifest</div>
          <h2 className="section-title mt-4">Манифест ColorChain</h2>

          <div className="mt-10 space-y-6 rounded-[2rem] border border-white/8 bg-white/[0.03] p-7 text-lg leading-9 text-[var(--soft)] shadow-[0_20px_60px_rgba(0,0,0,0.22)] md:p-10">
            <p>
              Большинство цифровых активов существуют для рынка, но не дают человеку
              реального участия в самом процессе их появления. ColorChain создаётся как
              попытка изменить это.
            </p>
            <p>
              Мы строим мобильную децентрализованную сеть, в которой основой становится не
              промышленная ферма и не закрытая инфраструктура, а участие пользователя через
              собственное устройство.
            </p>
            <p>
              ColorChain задуман прежде всего как система для добычи нативной криптовалюты
              LBU₽. Не как декоративный токен ради шума, а как цифровой актив, который
              получает собственную сеть, собственную логику и собственное технологическое
              основание.
            </p>
            <p>
              Ядро проекта строится затем, чтобы майнинг, сеть и цифровая ценность опирались
              на самостоятельную архитектуру, а не зависели от чужой платформы.
            </p>
            <p>
              В дальнейшем поверх этого ядра могут появляться дополнительные продукты и
              интерфейсы, но первичный смысл ColorChain — собственная мобильная криптосистема
              с нативной монетой LBU₽ и реальным участием пользователей в её добыче.
            </p>
          </div>
        </div>
      </section>

      <Section id="whitepaper" eyebrow="Whitepaper" title="Краткий whitepaper">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <PaperCard
            index="01"
            title="Идея"
            text="ColorChain создаётся как мобильная децентрализованная сеть для добычи нативной криптовалюты LBU₽, где смартфон становится точкой прямого участия в системе."
          />
          <PaperCard
            index="02"
            title="Ядро"
            text="В основе проекта лежит собственное core-ядро: peer-to-peer архитектура, логика нод, синхронизация состояния сети, валидация блоков и механика участия пользователей."
          />
          <PaperCard
            index="03"
            title="Майнинг"
            text="Майнинг в ColorChain — это центральный смысл системы. Проект делает ставку на мобильный формат добычи LBU₽, а не на промышленную модель, доступную только крупной инфраструктуре."
          />
          <PaperCard
            index="04"
            title="LBU₽"
            text="LBU₽ — нативная криптовалюта ColorChain. Именно вокруг неё строится сеть, модель участия, майнинг и будущая экономическая логика проекта."
          />
          <PaperCard
            index="05"
            title="Расширение"
            text="После стабилизации ядра на базе ColorChain могут появляться дополнительные продукты, интерфейсы и сервисы, использующие ту же сетевую основу."
          />
          <PaperCard
            index="06"
            title="Статус проекта"
            text="Сейчас ключевая задача — довести ядро сети и модель добычи LBU₽ до устойчивой публичной формы, чтобы ColorChain воспринимался не как идея, а как формирующаяся криптосистема."
          />
        </div>
      </Section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-24 xl:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="eyebrow-gold">Почему сейчас</div>
            <h2 className="section-title mt-4">
              Почему момент для ColorChain важен именно сейчас
            </h2>

            <div className="mt-8 grid gap-4">
              {nowReasons.map((item, index) => (
                <ReasonCard key={item} index={index + 1} text={item} />
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <div className="eyebrow-cyan">Позиционирование</div>
            <h3 className="mt-4 text-3xl font-bold text-white">Не просто ещё один токен</h3>
            <p className="mt-5 leading-8 text-[var(--soft)]">
              ColorChain строится не вокруг случайного токена, а вокруг идеи собственной
              мобильной криптосети, где LBU₽ получает не только имя, но и технологическую
              основу: ядро, сеть, майнинг и логику дальнейшего роста.
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-amber-300/15 bg-amber-300/8 p-5 leading-8 text-[#f0e1a6]">
              Главная задача сайта — чтобы человек сразу понял: перед ним проект, который
              создаётся в первую очередь для добычи собственной криптовалюты LBU₽, а не
              просто красивая концепция без реальной технической базы.
            </div>
          </div>
        </div>
      </section>

      <Section id="roadmap" eyebrow="Roadmap" title="Дорожная карта">
        <div className="grid gap-6 md:grid-cols-2">
          {roadmap.map((item, index) => (
            <RoadmapCard key={item.title} index={index + 1} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="use-cases"
        eyebrow="Use Cases"
        title="Сценарии применения ColorChain"
        intro="ColorChain создаётся прежде всего как сеть для добычи LBU₽. При этом собственное ядро проекта даёт возможность в дальнейшем развивать поверх него дополнительные продукты, интерфейсы и прикладные сценарии."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item) => (
            <UseCaseCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </Section>

      <section id="difference" className="section-shell section-accent">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow-gold">Difference</div>
            <h2 className="section-title mt-4">
              Чем ColorChain отличается от обычных криптопроектов
            </h2>
            <p className="mt-5 leading-8 text-[var(--soft)]">
              ColorChain отличается от типичных криптопроектов тем, что здесь в центре
              находится не просто выпуск токена, а попытка построить под LBU₽ собственную
              мобильную децентрализованную сеть и самостоятельную технологическую базу.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FeatureCard
              title="Не токен без основы"
              text="LBU₽ задуман не как пустой цифровой актив ради листинга, а как криптовалюта, для которой строится собственная сеть, логика участия и модель добычи."
            />
            <FeatureCard
              title="Мобильный майнинг"
              text="ColorChain делает ставку на возможность участия в добыче LBU₽ через мобильное устройство, а не только через тяжёлую вычислительную инфраструктуру."
            />
            <FeatureCard
              title="Собственное ядро"
              text="Проект строится на собственной peer-to-peer архитектуре, чтобы майнинг, сеть и цифровой актив существовали на самостоятельной технической базе."
            />
            <FeatureCard
              title="Долгий горизонт"
              text="После стабилизации сети ColorChain может расширяться в дополнительные продукты и интерфейсы, но фундамент проекта остаётся прежним: сеть и добыча LBU₽."
            />
          </div>
        </div>
      </section>

      <Section id="author" eyebrow="Author" title="Автор проекта">
        <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="eyebrow-cyan">Founder</div>
            <div className="mt-4 text-3xl font-bold text-white">Андрей Гладышев</div>
            <p className="mt-5 leading-8 text-[var(--soft)]">
              Андрей Гладышев — создатель ColorChain и независимый разработчик проекта.
              ColorChain строится как мобильная криптосистема с собственным ядром, нативной
              криптовалютой LBU₽ и долгосрочным потенциалом роста в самостоятельную цифровую
              экосистему.
            </p>
          </div>

          <div className="grid gap-4">
            <TextBlock>
              ColorChain создаётся как независимый проект, в центре которого находится не
              выпуск абстрактного токена, а построение собственной сети для добычи LBU₽,
              развития ядра и дальнейшего расширения системы.
            </TextBlock>
            <TextBlock>
              Цель проекта — не добавить на рынок ещё одну монету без опоры, а создать
              мобильную децентрализованную криптосистему, в которой сеть, майнинг и цифровой
              актив составляют единую технологическую основу.
            </TextBlock>
            <TextBlock>
              В долгом горизонте ColorChain может развиваться в более широкую цифровую
              экосистему, но фундамент проекта остаётся неизменным: собственное ядро,
              мобильное участие и добыча нативной криптовалюты LBU₽.
            </TextBlock>
          </div>
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Частые вопросы">
        <div className="grid gap-4">
          {faq.map((item) => (
            <FaqCard key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </Section>

      <section id="contacts" className="section-shell section-accent">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="eyebrow-cyan">Contacts</div>
              <h2 className="section-title mt-4">Контакты и ссылки проекта</h2>
              <p className="mt-5 max-w-2xl leading-8 text-[var(--soft)]">
                Это официальный контактный блок проекта. Сейчас он задаёт базовую структуру
                присутствия ColorChain, чтобы по мере развития сюда можно было последовательно
                добавить рабочие каналы, публичные ссылки и полноценные точки связи.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ContactCard
                title="Project page"
                value="Сайт ColorChain"
                note="официальная точка входа в проект"
              />
              <ContactCard
                title="Public channel"
                value="Будет добавлен позже"
                note="публичный канал проекта появится позже"
              />
              <ContactCard
                title="Email"
                value="contact@colorchain.local"
                note="временный адрес, будет заменён на рабочий"
              />
              <ContactCard
                title="Status"
                value="Genesis in progress"
                note="ядро находится в активной разработке"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 bg-[#050a12]">
  <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-3">
    <div>
      <div className="text-lg font-black uppercase tracking-[0.34em] text-cyan-300">
        ColorChain
      </div>
      <p className="mt-4 max-w-sm leading-8 text-[var(--soft)]">
        ColorChain — мобильная децентрализованная сеть для добычи LBU₽, строящаяся на
        собственном core-ядре и peer-to-peer архитектуре.
      </p>
    </div>

    <div className="mx-auto w-fit text-center">
      <div className="eyebrow-gold">Навигация</div>
      <div className="mt-4 space-y-3 text-[var(--soft)]">
        <a href="#about" className="block transition hover:text-white">О проекте</a>
        <a href="#manifest" className="block transition hover:text-white">Манифест</a>
        <a href="#whitepaper" className="block transition hover:text-white">Whitepaper</a>
        <a href="#roadmap" className="block transition hover:text-white">Roadmap</a>
        <a href="#difference" className="block transition hover:text-white">Отличия</a>
        <a href="#faq" className="block transition hover:text-white">FAQ</a>
      </div>
    </div>

    <div>
      <div className="eyebrow-cyan">Статус</div>
      <div className="mt-4 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 leading-8 text-[var(--soft)]">
        Проект находится в стадии активной разработки. Сейчас главная задача —
        довести ядро сети и модель добычи LBU₽ до устойчивой публичной формы.
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-7xl border-t border-white/8 px-5 py-6 text-sm text-[var(--muted)] md:px-8">
    © {new Date().getFullYear()} ColorChain. Developed by Кривые Линии / IT.
  </div>
</footer>
    </div>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="max-w-3xl">
        <div className="eyebrow-cyan">{eyebrow}</div>
        <h2 className="section-title mt-4">{title}</h2>
        {intro ? <p className="mt-5 leading-8 text-[var(--soft)]">{intro}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] px-5 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-sm text-[var(--muted-2)]">{label}</div>
    </div>
  );
}

function InfoCard({ title, value, subtitle }) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.045]">
      <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">{title}</div>
      <div className="mt-3 text-2xl font-black text-white">{value}</div>
      <div className="mt-2 text-sm leading-7 text-[var(--soft)]">{subtitle}</div>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/20 hover:bg-white/[0.045]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    className="h-5 w-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-[var(--soft)]">{text}</p>
    </div>
  );
}

function PaperCard({ index, title, text }) {
  return (
    <div className="rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.025))] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-amber-300/20">
      <div className="text-sm font-bold tracking-[0.28em] text-amber-300">{index}</div>
      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-[var(--soft)]">{text}</p>
    </div>
  );
}

function ReasonCard({ index, text }) {
  return (
    <div className="flex gap-4 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.14)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-sm font-bold text-amber-200">
        {String(index).padStart(2, "0")}
      </div>
      <p className="leading-8 text-[var(--soft)]">{text}</p>
    </div>
  );
}

function RoadmapCard({ index, phase, title, text }) {
  return (
    <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-bold uppercase tracking-[0.28em] text-amber-300">
          {phase}
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
          0{index}
        </div>
      </div>
      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-[var(--soft)]">{text}</p>
    </div>
  );
}

function UseCaseCard({ title, text }) {
  return (
    <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
      <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Scenario</div>
      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-[var(--soft)]">{text}</p>
    </div>
  );
}

function ContactCard({ title, value, note }) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.14)]">
      <div className="text-sm uppercase tracking-[0.25em] text-amber-300">{title}</div>
      <div className="mt-3 text-xl font-bold text-[var(--text)]">{value}</div>
      <div className="mt-2 text-sm leading-7 text-[var(--soft)]">{note}</div>
    </div>
  );
}

function TextBlock({ children }) {
  return (
    <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 leading-8 text-[var(--soft)] shadow-[0_14px_36px_rgba(0,0,0,0.14)]">
      {children}
    </div>
  );
}

function Notice({ tone = "cyan", title, children }) {
  const styles =
    tone === "gold"
      ? "border-amber-300/15 bg-amber-300/8 text-[#f5e7b4]"
      : "border-cyan-300/15 bg-cyan-300/8 text-[#d7f8ff]";

  return (
    <div className={`rounded-[1.5rem] border p-5 text-sm leading-7 ${styles}`}>
      {title ? (
        <span className="font-bold uppercase tracking-[0.22em] text-inherit">
          {title}:{" "}
        </span>
      ) : null}
      {children}
    </div>
  );
}

function FaqCard({ q, a }) {
  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6 shadow-[0_14px_36px_rgba(0,0,0,0.14)] transition duration-300 hover:bg-white/[0.045]">
      <h3 className="text-xl font-bold text-white">{q}</h3>
      <p className="mt-3 leading-8 text-[var(--soft)]">{a}</p>
    </div>
  );
}