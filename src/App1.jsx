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
      a: "LBU₽ — нативная криптовалюта проекта ColorChain, вокруг которой строится модель мобильного майнинга и дальнейшая экономическая логика сети.",
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
    <div className="min-h-screen bg-[#070b14] text-[#f4efe2]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,224,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(87,72,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,204,0,0.08),transparent_24%),linear-gradient(180deg,#0a0f19_0%,#070b14_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.4em] text-cyan-300">
              ColorChain
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.34em] text-[#7f8797]">
              Mobile Decentralized Network
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-[#d7d0c1] lg:flex">
            <a href="#about" className="transition hover:text-cyan-300">О проекте</a>
            <a href="#manifest" className="transition hover:text-cyan-300">Манифест</a>
            <a href="#whitepaper" className="transition hover:text-cyan-300">Whitepaper</a>
            <a href="#roadmap" className="transition hover:text-cyan-300">Roadmap</a>
            <a href="#difference" className="transition hover:text-cyan-300">Отличия</a>
            <a href="#faq" className="transition hover:text-cyan-300">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[6%] top-16 h-56 w-56 rounded-full border border-cyan-400/10" />
          <div className="absolute right-[8%] top-24 h-72 w-72 rounded-full border border-indigo-400/10" />
          <div className="absolute left-1/3 top-0 h-px w-72 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
          <div className="absolute bottom-16 right-1/4 h-px w-56 bg-gradient-to-r from-transparent via-yellow-300/25 to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-cyan-300">
              ColorChain // Genesis
            </div>

            <h1 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-tight text-[#f5f0e5] sm:text-6xl lg:text-7xl">
              Мобильная
              <span className="block text-cyan-300">децентрализованная</span>
              сеть для добычи
              <span className="block text-yellow-300">LBU₽</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#cfc8bb] sm:text-lg">
              ColorChain создаётся как мобильная криптосистема с собственным core-ядром,
              peer-to-peer архитектурой и нативной криптовалютой LBU₽. Проект делает ставку
              на модель, в которой смартфон становится не просто экраном, а инструментом
              участия в новой децентрализованной сети.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#manifest"
                className="rounded-2xl border border-cyan-300 bg-cyan-300 px-6 py-3 font-semibold text-[#071018] transition hover:-translate-y-0.5"
              >
                Читать манифест
              </a>
              <a
                href="#whitepaper"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-[#f4efe2] transition hover:border-cyan-300/40 hover:bg-white/8"
              >
                Whitepaper
              </a>
              <a
                href="#contacts"
                className="rounded-2xl border border-yellow-300/30 bg-yellow-300/10 px-6 py-3 font-semibold text-yellow-200 transition hover:border-yellow-300/60"
              >
                Контакты
              </a>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <StatCard value="P2P" label="архитектура сети" />
              <StatCard value="Mobile" label="формат майнинга" />
              <StatCard value="LBU₽" label="нативная криптовалюта" />
            </div>
          </div>

          <div className="xl:pl-6">
            <div className="overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(13,17,31,0.96)_0%,rgba(10,12,22,0.98)_100%)] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="border-b border-white/8 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.34em] text-cyan-300">
                      Node Status
                    </div>
                    <div className="mt-2 text-3xl font-black text-white">ONLINE</div>
                  </div>
                  <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.9)]" />
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <InfoCard title="Архитектура" value="P2P" subtitle="собственная сетевая основа" />
                <InfoCard title="Добыча" value="Mobile" subtitle="майнинг через участие" />
                <InfoCard title="Актив" value="LBU₽" subtitle="нативная криптовалюта сети" />
                <InfoCard title="Фокус" value="Core" subtitle="ядро для роста системы" />
              </div>

              <div className="grid gap-6 border-t border-white/8 px-6 py-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="flex justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-yellow-300/30 bg-[radial-gradient(circle_at_35%_35%,rgba(255,251,180,0.98),rgba(255,215,64,0.82)_28%,rgba(191,136,0,0.95)_70%,rgba(84,54,0,1)_100%)] shadow-[0_0_60px_rgba(255,210,70,0.20)]">
                    <div className="absolute inset-3 rounded-full border border-white/20" />
                    <div className="absolute inset-6 rounded-full border border-black/20" />
                    <div className="text-center">
                      <div className="text-[10px] font-bold uppercase tracking-[0.42em] text-[#654100]">
                        Native Coin
                      </div>
                      <div className="mt-2 text-4xl font-black text-[#412600]">LBU₽</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.32em] text-[#704900]">
                        ColorChain
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/8 p-4 text-sm leading-7 text-[#d7f8ff]">
                    <span className="font-bold uppercase tracking-[0.22em] text-cyan-300">
                      Genesis note:
                    </span>{" "}
                    ColorChain создаётся как мобильная децентрализованная инфраструктура, в
                    которой цифровая ценность рождается не в закрытых вычислительных центрах,
                    а в участии обычных пользователей.
                  </div>
                  <div className="rounded-2xl border border-yellow-300/15 bg-yellow-300/8 p-4 text-sm leading-7 text-[#f5e7b4]">
                    Главная идея проекта — построить сеть, в которой добыча LBU₽ имеет
                    собственную техническую базу: ядро, логику нод, мобильную модель
                    участия и дальнейший потенциал роста в самостоятельную экосистему.
                  </div>
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

      <section id="manifest" className="border-y border-white/6 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-sm uppercase tracking-[0.34em] text-yellow-300">Manifest</div>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Манифест ColorChain
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-9 text-[#d8d1c4]">
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
        <div className="grid gap-6 md:grid-cols-2">
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

      <section className="border-y border-white/6 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 md:py-20 xl:grid-cols-[1fr_0.92fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.34em] text-yellow-300">Почему сейчас</div>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Почему момент для ColorChain важен именно сейчас
            </h2>
            <div className="mt-8 space-y-4">
              {nowReasons.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/8 bg-[#0d1220] p-5 leading-8 text-[#d0cabd]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(12,18,32,0.95)_0%,rgba(8,12,22,0.98)_100%)] p-8">
            <div className="text-sm uppercase tracking-[0.34em] text-cyan-300">Позиционирование</div>
            <h3 className="mt-4 text-3xl font-bold text-white">Не просто ещё один токен</h3>
            <p className="mt-5 leading-8 text-[#d4cdbf]">
              ColorChain строится не вокруг случайного токена, а вокруг идеи собственной
              мобильной криптосети, где LBU₽ получает не только имя, но и технологическую
              основу: ядро, сеть, майнинг и логику дальнейшего роста.
            </p>
            <div className="mt-6 rounded-3xl border border-yellow-300/15 bg-yellow-300/8 p-5 leading-8 text-[#f0e1a6]">
              Главная задача сайта — чтобы человек сразу понял: перед ним проект, который
              создаётся в первую очередь для добычи собственной криптовалюты LBU₽, а не
              просто красивая концепция без реальной технической базы.
            </div>
          </div>
        </div>
      </section>

      <Section id="roadmap" eyebrow="Roadmap" title="Дорожная карта">
        <div className="grid gap-6 md:grid-cols-2">
          {roadmap.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/8 bg-[#0d1220] p-6"
            >
              <div className="text-sm font-bold uppercase tracking-[0.28em] text-yellow-300">
                {item.phase}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 leading-8 text-[#d0cabd]">{item.text}</p>
            </div>
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

      <section id="difference" className="border-y border-white/6 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.34em] text-yellow-300">Difference</div>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Чем ColorChain отличается от обычных криптопроектов
            </h2>
            <p className="mt-5 leading-8 text-[#d0cabd]">
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
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(12,18,32,0.95)_0%,rgba(8,12,22,0.98)_100%)] p-8">
            <div className="text-sm uppercase tracking-[0.34em] text-cyan-300">Founder</div>
            <div className="mt-4 text-3xl font-bold text-white">Андрей Гладышев</div>
            <p className="mt-5 leading-8 text-[#d4cdbf]">
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
        <div className="space-y-4">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-white/8 bg-[#0d1220] p-6"
            >
              <h3 className="text-xl font-bold text-white">{item.q}</h3>
              <p className="mt-3 leading-8 text-[#d0cabd]">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="contacts" className="border-y border-white/6 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.34em] text-cyan-300">Contacts</div>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Контакты и ссылки проекта
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-[#d0cabd]">
                Это официальный контактный блок проекта. Сейчас он задаёт базовую структуру
                присутствия ColorChain, чтобы по мере развития сюда можно было последовательно
                добавить рабочие каналы, публичные ссылки и полноценные точки связи.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ContactCard title="Project page" value="Сайт ColorChain" note="официальная точка входа в проект" />
              <ContactCard title="Public channel" value="Будет добавлен позже" note="публичный канал проекта появится позже" />
              <ContactCard title="Email" value="contact@colorchain.local" note="временный адрес, будет заменён на рабочий" />
              <ContactCard title="Status" value="Genesis in progress" note="ядро находится в активной разработке" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/6 bg-[#060911]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-3">
          <div>
            <div className="text-lg font-black uppercase tracking-[0.34em] text-cyan-300">
              ColorChain
            </div>
            <p className="mt-4 max-w-sm leading-8 text-[#bdb7aa]">
              ColorChain — мобильная децентрализованная сеть для добычи LBU₽, строящаяся на
              собственном core-ядре и peer-to-peer архитектуре.
            </p>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-yellow-300">Навигация</div>
            <div className="mt-4 space-y-3 text-[#d5cfbf]">
              <a href="#about" className="block transition hover:text-cyan-300">О проекте</a>
              <a href="#manifest" className="block transition hover:text-cyan-300">Манифест</a>
              <a href="#whitepaper" className="block transition hover:text-cyan-300">Whitepaper</a>
              <a href="#roadmap" className="block transition hover:text-cyan-300">Roadmap</a>
              <a href="#difference" className="block transition hover:text-cyan-300">Отличия</a>
              <a href="#faq" className="block transition hover:text-cyan-300">FAQ</a>
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-emerald-300">Статус</div>
            <div className="mt-4 rounded-3xl border border-white/8 bg-[#0d1220] p-5 leading-8 text-[#d9d3c6]">
              Проект находится в стадии активной разработки. Сейчас главная задача —
              довести ядро сети и модель добычи LBU₽ до устойчивой публичной формы.
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-white/6 px-5 py-6 text-sm text-[#7f8797] md:px-8">
          © {new Date().getFullYear()} ColorChain. Core in development.
        </div>
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.34em] text-cyan-300">{eyebrow}</div>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {intro ? <p className="mt-5 leading-8 text-[#d0cabd]">{intro}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-sm text-[#bcb5a7]">{label}</div>
    </div>
  );
}

function InfoCard({ title, value, subtitle }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
      <div className="text-[11px] uppercase tracking-[0.28em] text-[#8992a4]">{title}</div>
      <div className="mt-3 text-2xl font-black text-white">{value}</div>
      <div className="mt-2 text-sm leading-7 text-[#c8c1b4]">{subtitle}</div>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#0d1220] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-[#d0cabd]">{text}</p>
    </div>
  );
}

function PaperCard({ index, title, text }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#0d1220] p-6">
      <div className="text-sm font-bold tracking-[0.3em] text-yellow-300">{index}</div>
      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-[#d0cabd]">{text}</p>
    </div>
  );
}

function UseCaseCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#0d1220] p-6">
      <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Scenario</div>
      <h3 className="mt-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-8 text-[#d0cabd]">{text}</p>
    </div>
  );
}

function ContactCard({ title, value, note }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#0d1220] p-5">
      <div className="text-sm uppercase tracking-[0.25em] text-yellow-300">{title}</div>
      <div className="mt-3 text-xl font-bold text-[#f3eee1]">{value}</div>
      <div className="mt-2 text-sm leading-7 text-[#c5bfb1]">{note}</div>
    </div>
  );
}

function TextBlock({ children }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#0d1220] p-6 leading-8 text-[#d7d1c4]">
      {children}
    </div>
  );
}