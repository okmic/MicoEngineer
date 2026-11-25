import {
  GraduationCap, Target, Lightbulb, Users, TrendingUp, Shield,
  Code, Brain, Rocket, CheckCircle, Heart, Crown,
  Laptop, Server, Award,
  Sparkles, FileDownIcon, School
} from "lucide-react"
import { GiLovers, GiSportMedal } from "react-icons/gi"

export function getCodingYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2015
}

export function getCommercialYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2017
}

export function getExperienceYears() {
  return getCommercialYears()
}

export const siteData = {
  contacts: {
    email: "",
    telegram: "",
    github: "https://github.com/okmic",
    site: "https://okmic.github.io/MicoEngineer/"
  },
  targetRole: "Fullstack-инженер",
  navItems: [
    { id: 'education', label: 'Образование' },
    { id: 'achievements', label: 'Достижения' },
    { id: 'values', label: 'Ценности' },
    { id: 'about', label: 'Обо мне' }
  ],
  hero: {
    title: "Mico Инженер",
    subtitle: "Fullstack-инженер • Исследователь • Инноватор"
  },
  stack: {
    languages: ["TypeScript", "JavaScript", "Go", "Python"],
    frontend: ["React", "Vite"],
    backend: ["Node.js", "Express"],
    databases: ["PostgreSQL", "MongoDB"],
    infra: ["Docker", "Kubernetes", "S3", "Grafana", "Linux"]
  },
  about: {
    title: "ОБО МНЕ",
    description: "Пишу код с 2015 года, профессионально — с 2017. Начинал с автоматизации рутины в техникуме и быстро понял простую вещь — хороший код не про красивые паттерны, а про человека, которому в итоге станет легче. Поэтому много исследую, пробую новое и довожу до работающего результата. Архитектура важна, но польза важнее архитектуры.",
    tags: ["Node.js", "Go", "Python", "React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Linux"]
  },
  education: {
    title: "ОБРАЗОВАНИЕ И ОПЫТ",
    subtitle1: "Учёба, работа и всё, что между ними",
    items: [
      {
        id: "college",
        title: "Среднее профессиональное образование",
        description: "Информационные системы и программирование",
        institution: "Техникум информационных технологий",
        period: "2011 — 2015",
        gradient: "from-[#7C3AED] to-[#A78BFA]",
        icon: GraduationCap,
        image: "/MicoEngineer/edk.jpg",
        details: [
          "Сразу после защиты диплома вышел на первую работу",
          "Автоматизировал рутину и вернул сотрудникам более 1000 часов",
          "Изучал алгоритмы и структуры данных",
          "Сетевое и системное администрирование"
        ]
      },
      {
        id: "bachelor",
        title: "Бакалавриат",
        description: "Прикладная информатика в юриспруденции",
        institution: "Северо-Кавказская государственная академия",
        period: "2016 — 2021",
        gradient: "from-[#3B82F6] to-[#8B5CF6]",
        icon: Brain,
        image: "/MicoEngineer/edb.jpg",
        details: [
          "Углублённое изучение алгоритмов и структур данных",
          "Проектирование информационных систем",
          "Разработка корпоративных приложений",
          "Дипломная работа: «Автоматизация бизнес-процессов предприятия»"
        ]
      },
      {
        id: "work1",
        title: "Автоматизация процессов",
        description: "Разработка и внедрение внутренних систем для вуза",
        institution: "Северо-Кавказская государственная академия",
        period: "2021 — 2022",
        gradient: "from-[#34D399] to-[#059669]",
        icon: Server,
        image: "/MicoEngineer/skga.jpeg",
        details: [
          "Автоматизация процессов на Python и Node.js",
          "Обучение сотрудников работе с БД",
          "Внедрение защищённых сетей",
          "Оптимизация документооборота"
        ]
      },
      {
        id: "work2",
        title: "Fullstack-разработчик (MERN)",
        description: "Коммерческий проект в домене дейтинг-сервиса: онлайн-знакомства, общение и поиск людей по интересам",
        institution: "Коммерческая разработка",
        period: "2022 — 2023",
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: GiLovers,
        image: "/MicoEngineer/badoo.png",
        details: [
          "Разработка на Express, React, MongoDB",
          "Микросервисная архитектура",
          "Деплой и DevOps-практики"
        ]
      },
      {
        id: "work3",
        title: "Fullstack-разработчик",
        description: "Проектирование архитектуры портала и автоматизация работы спортивных комплексов: внутренние CRM и внешние приложения контроля времени посещения клубов",
        institution: "Коммерческая разработка",
        period: "2024 — 2025",
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: GiSportMedal,
        image: "/MicoEngineer/sport.jpg",
        details: [
          "Более 5 завершённых проектов в домене",
          "Разработка на Node.js, React, PostgreSQL",
          "Микросервисная архитектура",
          "Репликация, сети, S3, Kubernetes, Grafana",
          "Деплой и DevOps-практики"
        ]
      },
      {
        id: "freelance1",
        title: "Fullstack-разработчик (фриланс)",
        description: "Коммерческая разработка и аутсорс для внешних клиентов",
        institution: "Самостоятельная деятельность",
        period: "2025 — настоящее время",
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: Laptop,
        image: "/MicoEngineer/freelance.webp",
        details: [
          "Более 20 завершённых проектов",
          "Разработка на Node.js, React, PostgreSQL",
          "Интеграция платёжных систем (Stripe, Сбер)",
          "Микросервисная архитектура",
          "Деплой и DevOps-практики"
        ]
      }
    ]
  },
  achievements: {
    title: "ДОСТИЖЕНИЯ",
    subtitle1: "Продукты и туториалы, которые можно потрогать",
    items: [
      {
        id: "micoharness-code",
        title: "Туториал Mico.Harness.Code Практика",
        description: "Обработка лидов на Node.js и Go, промпт-помощник и рабочий чек-лист. Здесь код, который можно скачать и запустить. Собираем harness на 150 строк с правами, подтверждениями и изоляцией внешнего ввода. Без магии: всё, что происходит внутри, видно на экране.",
        link: "https://okmic.github.io/Mico.Harness.Code/",
        img: "/MicoEngineer/MicoHarness.jpg",
        icon: School,
        gradient: "from-[#6D28D9] to-[#A78BFA]",
        year: "2025"
      },
      {
        id: "micoharness-theory",
        title: "Туториал Mico.Harness Теория",
        description: "Вайб-кодинг дал суперсилу, и теперь вы отдаёте агенту почту. Claude не агент. Агент это harness. За 21 минуту чтения разберём, где вы теряете данные, деньги и качество ответов, и как собрать свой harness на 150 строк. Без воды: со схемой, примером кода и чек-листом, который можно применить сразу.",
        link: "https://okmic.github.io/Mico.Harness/",
        img: "/MicoEngineer/MicoHarness.jpg",
        icon: School,
        gradient: "from-[#4F46E5] to-[#818CF8]",
        year: "2025"
      },
      {
        id: "micoprompt",
        title: "MicoPrompt — утилита для генерации промптов",
        description: "Хотел убрать рутину для ИИ-агентов, которые проверяют логи приложений. Получился один бинарь на Go, который просто работает. В личной разработке, где ты сам в роли harness, он тоже выручает. Более 1000 скачиваний и более 100 благодарностей от людей, которые им пользуются. Приятнее всего было читать не цифры, а письма.",
        link: "https://github.com/okmic/MicoPrompt",
        img: "/MicoEngineer/MicoPrompt.webp",
        icon: FileDownIcon,
        gradient: "from-[#0EA5E9] to-[#5DC9E2]",
        year: "2024"
      },
      {
        id: "postfarm",
        title: "PostFarm — первый SaaS-продукт",
        description: "Мой первый SaaS от идеи до релиза. Сам спроектировал архитектуру, написал backend и frontend, настроил деплой. Гибридная схема работает и как монолит, и как микросервисы одновременно. Три уровня доступа: Root, Admin и User. Полный цикл продукта от нуля до пользователей. Отдельное удовольствие — сделать сложное простым.",
        link: "https://okmic.github.io/GetPostFarm",
        img: "/MicoEngineer/postfarm.jpg",
        icon: Rocket,
        gradient: "from-[#059669] to-[#34D399]",
        year: "2024"
      },
      {
        id: "expert",
        title: "Эксперт демонстрационного экзамена | МТК | 2026",
        description: "Приглашён независимым экспертом на демонстрационный экзамен в МТК. Это не формальная проверка знаний, а модель реального производства: студент получает задачу, запускается таймер, комиссия фиксирует каждый шаг. Моя задача — не помогать, не комментировать, не сопереживать, а только оценивать. Чисто и по факту. Сложнее всего было смотреть, как человек ошибается, и при этом не подсказать.",
        link: "https://e.dp.firpo.ru/?search=1&cert_number=&expert_surname=%D0%9E%D1%85%D1%82%D0%BE%D0%B2&expert_name=&expert_patronymic=&region=&skill=",
        img: "/MicoEngineer/mico-mtk-demo.png",
        icon: Award,
        gradient: "from-[#D97706] to-[#F59E0B]",
        year: "2026"
      },
      {
        id: "designer",
        title: "Инженер, который начал делать дизайны",
        description: "Я всегда был инженером, и в этом моя сила. Но однажды решил дать шанс творческой стороне: вырос в семье художников, а инженерное мышление приобрёл сам. Начал заниматься дизайном, и это хорошо дополнило основную работу. Сейчас 9 из 10 клиентов принимают макеты с минимальными правками. Инженерный подход помогает делать интерфейсы логичными и удобными. Красота без логики мне не интересна, а удобство без красоты скучно.",
        link: "https://miconext.github.io/Mico",
        img: "/MicoEngineer/mico-designer.png",
        icon: Sparkles,
        gradient: "from-[#F59E0B] to-[#F97316]",
        year: "2023"
      },
      {
        id: "llm-matching",
        title: "LLM-модель для поиска совпадений по абстрактным параметрам",
        description: "В 2022 году собрал LLM-модель, которая ищет совпадения между людьми по абстрактным, плохо формализуемым параметрам. Показала лучший результат в этой задаче среди моих экспериментов и оказалась достаточно сильной, чтобы получить оффер от команды ВК.Знакомства. Оффер не принял, но проект остался точкой отсчёта - с него началась работа с LLM не как с игрушкой, а как с инженерной задачей.",
        link: "",
        img: "/MicoEngineer/vk.png",
        icon: Brain,
        gradient: "from-[#7C3AED] to-[#C4B5FD]",
        year: "2022"
      },
    ]
  },
  values: {
    title: "ЦЕННОСТИ",
    subtitle1: "То, на что я опираюсь в работе каждый день",
    items: [
      {
        title: "Инженерное мышление",
        description: "Любую задачу разбираю как инженер: сначала понять, потом спроектировать, затем проверить и ускорить. Решение без обоснования для меня не решение. Исключение одно: иногда сначала надо просто попробовать, а обосновать уже потом.",
        icon: Code,
        gradient: "from-[#7C3AED] to-[#A78BFA]"
      },
      {
        title: "Чистота кода",
        description: "Пишу так, чтобы код было легко читать и менять через полгода. SOLID, DRY и KISS для меня не догма, а привычка думать. Хороший код не тот, который написан, а тот, который не страшно открыть.",
        icon: CheckCircle,
        gradient: "from-[#34D399] to-[#059669]"
      },
      {
        title: "Научный подход",
        description: "Решаю по данным, а не по ощущениям. Пробую, измеряю, смотрю на обратную связь и только потом делаю выводы. Интуиция полезна, но проверять её всё равно нужно.",
        icon: Lightbulb,
        gradient: "from-[#F59E0B] to-[#F97316]"
      },
      {
        title: "Командная работа",
        description: "Верю, что лучший результат рождается в команде. Делюсь знаниями, провожу code review и помогаю коллегам расти. Заметил простую вещь: когда объясняешь другому, сам понимаешь глубже.",
        icon: Users,
        gradient: "from-[#3B82F6] to-[#8B5CF6]"
      },
      {
        title: "Постоянное развитие",
        description: "Технологии меняются каждый день. Слежу за трендами, изучаю новые языки и подходы, применяю лучшее в работе. Учиться для меня не обязанность, а способ не заскучать.",
        icon: TrendingUp,
        gradient: "from-[#EC4899] to-[#BE185D]"
      },
      {
        title: "Качество и надёжность",
        description: "Строю системы, которые работают стабильно и предсказуемо. Тестирование, мониторинг и документация для меня обязательные этапы. Хорошая система не удивляет, ни хорошим, ни плохим.",
        icon: Shield,
        gradient: "from-[#00ADD8] to-[#5DC9E2]"
      },
      {
        title: "Ориентация на результат",
        description: "Фокусируюсь на целях бизнеса. Технологии для меня инструмент, а не самоцель. Каждый проект должен приносить пользу. Если красивое решение не помогает человеку, значит, оно не нужно.",
        icon: Target,
        gradient: "from-[#FF6B6B] to-[#FF8E8E]"
      },
      {
        title: "Открытость к инновациям",
        description: "Люблю экспериментировать: AI, ML, микросервисы, облака, всё, что делает продукт лучше. Но беру в работу только то, что готов защитить перед командой и объяснить заказчику.",
        icon: Rocket,
        gradient: "from-[#8B5CF6] to-[#6D28D9]"
      },
      {
        title: "Эмпатия и понимание",
        description: "Делаю продукты для людей. Стараюсь понять, что человеку на самом деле нужно, и убрать всё, что мешает. Лучший фидбэк для меня не «спасибо за фичу», а «наконец-то стало проще».",
        icon: Heart,
        gradient: "from-[#F472B6] to-[#EC4899]"
      },
      {
        title: "Ответственность",
        description: "Отвечаю за то, что выпускаю. Каждый проект говорит обо мне больше, чем любое резюме. Поэтому лучше сделать меньше, но так, чтобы не стыдно было подписаться.",
        icon: Crown,
        gradient: "from-[#F59E0B] to-[#D97706]"
      }
    ]
  },
}