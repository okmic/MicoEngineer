import { 
  GraduationCap, Target, Lightbulb, Users, TrendingUp, Shield,
  Code, Brain, Rocket, CheckCircle, Heart, Crown,
  Laptop, Server
} from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2017
}

export const siteData = {
  navItems: [
    { id: 'education', label: 'Образование' },
    { id: 'values', label: 'Ценности' },
    { id: 'about', label: 'Обо мне' }
  ],
  hero: {
    title: "Mico Инженер",
    subtitle: "Программный инженер • Исследователь • Инноватор"
  },
  about: {
    title: "ОБО МНЕ",
    description: "Моя миссия: Создавать инновационные решения для реальных проблем пользователей. С 2017 года я занимаюсь программной инженерией, исследуя новые технологии и подходы, чтобы приносить пользу пользователям и обществу.",
    tags: ["Node.js", "Python", "React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "Linux"]
  },
  education: {
    title: "ОБРАЗОВАНИЕ И ОПЫТ",
    subtitle1: "Профессиональное развитие и научная деятельность",
    items: [
      {
        id: "college",
        title: "Среднее профессиональное образование",
        description: "Информационные системы",
        institution: "Техник информационных систем",
        period: "2011 — 2015",
        gradient: "from-[#7C3AED] to-[#A78BFA]",
        icon: GraduationCap,
        image: "/MicoEngineer/edk.jpg",
        details: [
          "Диплом техника информационных систем",
          "Изучение основ программирования и БД",
          "Сетевая и системная администрация"
        ]
      },
      {
        id: "bachelor",
        title: "Бакалавриат",
        description: "Прикладная информатика",
        institution: "Диплом в области информационных систем",
        period: "2016 — 2021",
        gradient: "from-[#3B82F6] to-[#8B5CF6]",
        icon: Brain,
        image: "/MicoEngineer/edb.jpg",
        details: [
          "Диплом бакалавра прикладной информатики",
          "Углубленное изучение алгоритмов и структур данных",
          "Проектирование информационных систем"
        ]
      },
      {
        id: "skga",
        title: "Автоматизация внутренних процессов",
        description: "Северо-Кавказская государственная академия",
        institution: "СКГА",
        period: "2021 — 2022",
        gradient: "from-[#34D399] to-[#059669]",
        icon: Server,
        image: null,
        details: [
          "Автоматизация процессов с Python и Node.js",
          "Обучение сотрудников работе с БД",
          "Работа с локальными защищенными сетями"
        ]
      },
      {
        id: "freelance1",
        title: "Fullstack Web Разработчик",
        description: "Аутсорс-разработка и фриланс",
        institution: "Самостоятельная деятельность",
        period: "2022 — 2023",
        gradient: "from-[#F59E0B] to-[#F97316]",
        icon: Laptop,
        image: null,
        details: [
          "Разработка веб-приложений под ключ",
          "Работа с Node.js, React, PostgreSQL",
          "Интеграция платежных систем"
        ]
      },
    ]
  },
  values: {
    title: "ЦЕННОСТИ",
    subtitle1: "Принципы, которые определяют мою работу и жизнь",
    items: [
      {
        title: "Инженерное мышление",
        description: "Подхожу к задачам как инженер: анализирую, проектирую, тестирую и оптимизирую. Каждое решение должно быть обоснованным и эффективным.",
        icon: Code,
        gradient: "from-[#7C3AED] to-[#A78BFA]"
      },
      {
        title: "Чистота кода",
        description: "Пишу код, который легко читать, поддерживать и развивать. Следование принципам SOLID, DRY и KISS — не просто правила, а образ мышления.",
        icon: CheckCircle,
        gradient: "from-[#34D399] to-[#059669]"
      },
      {
        title: "Научный подход",
        description: "Принимаю решения на основе данных и исследований. Экспериментирую, измеряю результаты и улучшаю систему на основе обратной связи.",
        icon: Lightbulb,
        gradient: "from-[#F59E0B] to-[#F97316]"
      },
      {
        title: "Командная работа",
        description: "Верю, что лучшие результаты достигаются в команде. Делюсь знаниями, провожу code review и помогаю коллегам расти профессионально.",
        icon: Users,
        gradient: "from-[#3B82F6] to-[#8B5CF6]"
      },
      {
        title: "Постоянное развитие",
        description: "Технологии меняются каждый день. Слежу за трендами, изучаю новые языки и подходы, применяю лучшие практики в работе.",
        icon: TrendingUp,
        gradient: "from-[#EC4899] to-[#BE185D]"
      },
      {
        title: "Качество и надежность",
        description: "Стремлюсь к созданию систем, которые работают стабильно и предсказуемо. Тестирование, мониторинг и документирование — обязательные этапы.",
        icon: Shield,
        gradient: "from-[#00ADD8] to-[#5DC9E2]"
      },
      {
        title: "Ориентация на результат",
        description: "Фокусируюсь на достижении целей бизнеса. Технологии — инструмент для решения задач, а не самоцель. Каждый проект должен приносить пользу.",
        icon: Target,
        gradient: "from-[#FF6B6B] to-[#FF8E8E]"
      },
      {
        title: "Открытость к инновациям",
        description: "Экспериментирую с новыми технологиями и подходами. AI, ML, микросервисы, облачные решения — все, что делает продукт лучше.",
        icon: Rocket,
        gradient: "from-[#8B5CF6] to-[#6D28D9]"
      },
      {
        title: "Эмпатия и понимание",
        description: "Создаю продукты для людей. Понимаю потребности пользователей и стремлюсь сделать их опыт максимально комфортным и полезным.",
        icon: Heart,
        gradient: "from-[#F472B6] to-[#EC4899]"
      },
      {
        title: "Ответственность",
        description: "Несу ответственность за качество своей работы. Каждый проект — это отражение моего профессионализма и отношения к делу.",
        icon: Crown,
        gradient: "from-[#F59E0B] to-[#D97706]"
      }
    ]
  },
}