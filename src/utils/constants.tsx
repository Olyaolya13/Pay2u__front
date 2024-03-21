import Burger from '../assets/BurgerCard.svg';
import Movie from '../assets/MovieCard.svg';
import Music from '../assets/MusicIcon.svg';
import Note from '../assets/Note.svg';
import TV from '../assets/TV.svg';
import Box from '../assets/Box.svg';
import YandexPlusIcon from '../assets/YandexPusIcon.svg';
import LitrecIcon from '../assets/LitrecIcon.svg';
import IviIcon from '../assets/IviIcon.svg';
import MyBookIcon from '../assets/MyBookIcon.svg';
import MovieSearchIcon from '../assets/MovieSearchIcon.svg';
import OkkoIcon from '../assets/OkkoIcon.svg';
import CartIcon from '../assets/CartIcon.svg'
import CheckIcon from '../assets/CheckIcon.svg'
import KeyIcon from '../assets/KeyIcon.svg'
import ContactIcon from '../assets/ContactIcon.svg'

export const HeaderData = {
  services: 'Развлекательные сервисы',
  sellHistory: 'История покупок',
  subscriptions: 'Мои подписки',
  manageSubcription: 'Управление подпиской',
  catalog: 'Каталог подписок',
  categories: 'Кино',
  connectSubcription: 'Подключение подписки',
  payment: 'Оплата подписки',
  autoPayment: 'Подключение автоплатежа'
};

export const ServicesData = {
  btn: 'Узнать подробнее',
  text: 'Оформите подписки на любимые сервисы с выгодным кешбэком и управляйте ими в одном месте'
};

export const ServicesCatalogData = {
  title: 'Каталог подписок',
  all: 'Все'
};

export const ServicesCatalogCardData = {
  cards: [
    {
      image: Burger,
      alt: 'Продукты',
      title: 'Продукты',
      discount: 'до 15%'
    },
    {
      image: Movie,
      alt: 'Кино',
      title: 'Кино',
      discount: 'до 15%'
    },
    {
      image: Music,
      alt: 'Музыка',
      title: 'Музыка',
      discount: 'до 10%'
    },
    {
      image: Note,
      alt: 'Образование',
      title: 'Образование',
      discount: 'до 7%'
    },
    {
      image: TV,
      alt: 'Маркетплейсы',
      title: 'Маркетплейсы',
      discount: 'до 35%'
    },
    {
      image: Box,
      alt: 'Прочее',
      title: 'Прочее',
      discount: 'до 10%'
    }
  ]
};

export const ServicesNewData = {
  title: 'Новинки',
  all: 'Все'
};

export const ServicesNewCardData = {
  cards: [
    {
      image: YandexPlusIcon,
      alt: 'Яндекс Плюс',
      title: 'Яндекс Плюс',
      cashBack: '15% кэшбек',
      background: 'linear-gradient(120deg, #49B2FE 10%, #0047FF 100%)'
    },
    {
      image: LitrecIcon,
      alt: 'Литрес',
      title: 'Литрес',
      cashBack: '8% кэшбек',
      background: 'linear-gradient(120deg, #F19EFF 10%, #A323B8 100%)'
    },
    {
      image: IviIcon,
      alt: 'Иви',
      title: 'Иви',
      cashBack: '10% кэшбек',
      background: 'linear-gradient(120deg,#FFC774 10%, #FF720D 100%)'
    }
  ]
};

export const ServicesPopularData = {
  title: 'Популярные',
  all: 'Все'
};

export const ServicesPopularCardData = {
  cards: [
    {
      image: MyBookIcon,
      alt: 'My Book',
      title: 'My Book',
      cashBack: '15% кэшбек',
      background: 'linear-gradient(120deg, #76D179 10%, #049C4B 100%)'
    },
    {
      image: MovieSearchIcon,
      alt: 'Кинопоиск',
      title: 'Кинопоиск',
      cashBack: '15% кэшбек',
      background: 'linear-gradient(120deg, #FD6A4A 10%, #D72700 100%)'
    },
    {
      image: OkkoIcon,
      alt: 'Okko',
      title: 'Okko',
      cashBack: '20% кэшбек',
      background: 'linear-gradient(120deg,#7378ED 10%, #242AB6 100%)'
    }
  ]
};

export const ServisesQuestionsData = {
  title: 'Часто задаваемые вопросы '
};

export const ServisesQuestionsTitleData = {
  title: 'Управление подпиской',
  subtitle: 'Оформление подписки'
};

export const ServisesQuestionsManageSelectData = {
  select: [
    {
      title: 'Как перенести активную подписку на платформу банка?',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Когда начисляется кешбэк за текущий месяц?',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      width: '200px'
    },
    {
      title: 'Что делать, если подписка уже оформлена и я хочу ее сменить?',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};

export const ServisesQuestionsRegistSelectData = {
  select: [
    {
      title: 'Что входит в мою подписку?',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Какую выгоду я получу?',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Можно ли отменить автопродление?',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};

export const ServicesInstructionData = {
  title: 'Инструкция по работе с сервисом'
};

export const HistoryContentData = {
  history: [
    {
      title: 'Выгодные',
      span: 'скидки',
      text:' на кино, музыку, шопинг и не только',
      subtitle:
        'Оформите подписку на сервисы партнеров напрямую в приложении банка, чтобы получать кешбэк до 30% с каждого платежа.',
      image: CartIcon,
      width:'250px',

      widthText:'290px',
      padding:'0 0 0  87px'
    },
    {
      title: 'Ваши подписки всегда под рукой - управляйте ими',
      span: 'легко',
      text:', в один клик',
      subtitle:'Все подписки теперь в одном месте. Изменяйте и отменяйте их в любое время. Легко переходите на новые условия, даже если подписка уже есть.',
      image: CheckIcon,
      widthText:'310px',
      widthsubTitle:'335px'
    },
    {
      span: 'Безопасное ',
      text: 'управление без ввода данных на сторонних ресурсах',
      subtitle:'Больше не нужно вводить свои персональные данные и привязывать карты на разных сайтах. Платежные данные остаются в банке.',
      image: KeyIcon,

    },
    {
      image: ContactIcon,
      width:'172px',
      height:'140px',
      paddingContainer:'50px 20px 0',
      heightContainer:'560px',
      faq: [
      {
        question: 'Как подключить подписку на сервис?',
        answer: 'Выберите период действия → привяжите карту → оплатите. Для автоплатежа активируйте функцию «привязать счет» после покупки.'
      },
      {
        question: 'Где найти мои оформленные подписки? Как отключить подписку на сервис?',
        answer: 'В разделе «Оформленные подписки» на главной странице.'
      },
      {
        question: 'Если уже есть подписка на сервис?',
        answer: 'Действующая подписка сохранится, к ней добавится новая, период действия увеличится. '
      },
    ]
  }
  ]
};
