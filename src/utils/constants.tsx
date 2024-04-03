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
import CartIcon from '../assets/CartIcon.svg';
import CheckIcon from '../assets/CheckIcon.svg';
import KeyIcon from '../assets/KeyIcon.svg';
import ContactIcon from '../assets/ContactIcon.svg';
import LikeeIcon from '../assets/LikeeIcon.svg';
import ChangeIcon from '../assets/ChangeIcon.svg';
import AutoPayIcon from '../assets/AutoPayIcon.svg';
import RejectIcon from '../assets/RejectIcon.svg';
import SBPPay from '../assets/SBPPay.svg';
import MirPay from '../assets/MIRPay.svg';
import SBPAutopay from '../assets/SBPAutopay.svg';
import OneMonthImg from '../assets/OneMonthImg.svg';
import ThreeMonthImg from '../assets/ThreeMonthImg.svg';
import TwelveMonthImg from '../assets/TwelveMonthImg.svg';
import DownloadCheckIcon from '../assets/DownloadCheckIcon.svg';
import InstructionIcon from '../assets/InstructionIcon.svg';

export const HeaderData = {
  services: 'Развлекательные сервисы',
  sellHistory: 'История покупок',
  subscriptions: 'Мои подписки',
  manageSubcription: 'Управление подпиской',
  catalog: 'Каталог подписок',
  categories: 'Кино',
  subscribe: 'Подключение подписки',
  subscriptionPayment: 'Оплата подписки',
  autopayment: 'Подключение автоплатежа'
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
      discount: '15%'
    },
    {
      image: Movie,
      alt: 'Кино',
      title: 'Кино',
      discount: '15%'
    },
    {
      image: Music,
      alt: 'Музыка',
      title: 'Музыка',
      discount: '10%'
    },
    {
      image: Note,
      alt: 'Образование',
      title: 'Образование',
      discount: '7%'
    },
    {
      image: TV,
      alt: 'Маркетплейсы',
      title: 'Маркетплейсы',
      discount: '35%'
    },
    {
      image: Box,
      alt: 'Прочее',
      title: 'Прочее',
      discount: '10%'
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
      cashBack: '15%',
      background: 'linear-gradient(120deg, #49B2FE 10%, #0047FF 100%)'
    },
    {
      image: LitrecIcon,
      alt: 'Литрес',
      title: 'Литрес',
      cashBack: '8%',
      background: 'linear-gradient(120deg, #F19EFF 10%, #A323B8 100%)'
    },
    {
      image: IviIcon,
      alt: 'Иви',
      title: 'Иви',
      cashBack: '10%',
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
      cashBack: '15%',
      background: 'linear-gradient(120deg, #76D179 10%, #049C4B 100%)'
    },
    {
      image: MovieSearchIcon,
      alt: 'Кинопоиск',
      title: 'Кинопоиск',
      cashBack: '15%',
      background: 'linear-gradient(120deg, #FD6A4A 10%, #D72700 100%)'
    },
    {
      image: OkkoIcon,
      alt: 'Okko',
      title: 'Okko',
      cashBack: '20%',
      background: 'linear-gradient(120deg,#7378ED 10%, #242AB6 100%)'
    }
  ]
};

export const ServisesQuestionsData = {
  title: 'Часто задаваемые вопросы '
};

export const QuestionsTitleData = {
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

export const InstructionData = {
  titleServise: 'Инструкция по работе с платформой',
  titleSubscribtion: 'Инструкция по работе с сервисом',
  titleSubscribe: 'У меня уже есть подписка',
  titleParnter: 'Сайт партнера'
};

export const HistoryContentData = {
  history: [
    {
      title: 'Выгодные',
      span: 'скидки\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0',
      text: ' на кино, музыку, шопинг и не только',
      subtitle:
        'Оформите подписку на сервисы партнеров напрямую в приложении банка, чтобы получать кешбэк до 30% с каждого платежа.',
      image: CartIcon,
      width: '250px',

      widthText: '290px',
      padding: '0 0 0  87px'
    },
    {
      title: 'Ваши подписки всегда под рукой - управляйте ими',
      span: 'легко',
      text: ', в один клик',
      subtitle:
        'Все подписки теперь в одном месте. Изменяйте и отменяйте их в любое время. Легко переходите на новые условия, даже если подписка уже есть.',
      image: CheckIcon,
      widthText: '310px',
      widthsubTitle: '335px'
    },
    {
      span: 'Безопасное ',
      text: 'управление без ввода данных на сторонних ресурсах',
      subtitle:
        'Больше не нужно вводить свои персональные данные и привязывать карты на разных сайтах. Платежные данные остаются в банке.',
      image: KeyIcon
    },
    {
      image: ContactIcon,
      width: '172px',
      height: '140px',
      paddingContainer: '50px 20px 0',
      heightContainer: '560px',
      paddingTopSubtitle: '43px',
      paddingBottomTitle: '40px',
      padding: '0 0 0  87px',
      faq: [
        {
          question: 'Как подключить подписку на сервис?',
          answer:
            'Выберите период действия → привяжите карту → оплатите. Для автоплатежа активируйте функцию «привязать счет» после покупки.'
        },
        {
          question: 'Где найти мои оформленные подписки? Как отключить подписку на сервис?',
          answer: 'В разделе «Оформленные подписки» на главной странице.'
        },
        {
          question: 'Если уже есть подписка на сервис?',
          answer:
            'Действующая подписка сохранится, к ней добавится новая, период действия увеличится. '
        }
      ]
    }
  ]
};

export const HistoryProgressData = {
  title: 'Далее',
  transfer: 'Перейти в каталог подписок'
};

export const SellHistoryDelalizationData = {
  title: '1 197',
  subtitle: 'Потрачено за март',
  text: 'Следующее списание 24 июня — 597 ₽. Напомним об этом за 2 дня.'
};

export const SellHistoryInfoData = {
  title: 'Кешбэк за расчетный месяц будет начислен до 25 числа следующего месяца'
};

export const SellHistoryCardMartData = {
  card: [
    {
      image: OkkoIcon,
      alt: 'Okko',
      title: 'Okko',
      subtitle: '24.03.2024',
      sum: '-597',
      cashBack: '+ 50 '
    },

    {
      image: LikeeIcon,
      alt: 'Likee',
      title: 'Likee',
      subtitle: '18.03.2024',
      sum: '-599',
      cashBack: '+ 50 '
    },
    {
      image: YandexPlusIcon,
      alt: 'Яндекс Плюс',
      title: 'Яндекс Плюс',
      subtitle: '15.03.2024',
      sum: '-1',
      period: 'пробный период'
    }
  ]
};

export const SellHistoryContentMartData = {
  title: 'Март'
};

export const SellHistoryCardFebruaryData = {
  card: [
    {
      image: MyBookIcon,
      alt: 'My book',
      title: 'My book',
      subtitle: '14.02.2024',
      sum: '-260',
      cashBack: ' + 23 '
    }
  ]
};

export const SellHistoryContentFebruaryData = {
  title: 'Февраль'
};

export const SellHistoryCardJanuaryData = {
  card: [
    {
      image: OkkoIcon,
      alt: 'Okko',
      title: 'Okko',
      subtitle: '24.01.2024',
      sum: '-597',
      cashBack: '+ 50 '
    }
  ]
};

export const SellHistoryContentJanuaryData = {
  title: 'Январь'
};

export const ContentCatalogSubscriptionsMovieData = {
  title: 'Кино',
  all: 'Все'
};

export const SubscriptionsCardCatalogMovieData = {
  card: [
    {
      image: OkkoIcon,
      alt: 'Okko',
      title: 'Okko',
      subtitle: 'Фильмы напрямую от голливудских студий',
      raiting: 4.2,
      cashback: '5%',
      sum: '199',
      per: '/месяц'
    },
    {
      image: IviIcon,
      alt: 'Иви',
      title: 'Иви',
      subtitle: 'Фильмы онлайн в HD-качестве',
      raiting: 4.4,
      cashback: '5%',
      sum: '199',
      per: '/месяц'
    },
    {
      image: MovieSearchIcon,
      alt: 'Кинопоиск',
      title: 'Кинопоиск',
      subtitle: 'Онлайн-кинотеатр ',
      raiting: 4.6,
      cashback: '5%',
      sum: '199',
      per: '/месяц'
    }
  ]
};

export const ContentCatalogSubscriptionsReadData = {
  title: 'Чтение',
  all: 'Все'
};

export const SubscriptionsCardCatalogReadData = {
  card: [
    {
      image: LitrecIcon,
      alt: 'Литрес',
      title: 'Литрес',
      subtitle: 'Цифровой сервис электронных, аудиокниг, и другого контента',
      raiting: 4.8,
      cashback: '5%',
      sum: '199',
      per: '/месяц'
    }
  ]
};

export const ContentCatalogSubscriptionsComboData = {
  title: 'Комбо-подписки',
  all: 'Все'
};

export const SubscriptionsCardCatalogComboData = {
  card: [
    {
      image: MovieSearchIcon,
      alt: 'Кинопоиск',
      title: 'Кинопоиск',
      subtitle: 'Онлайн-кинотеатр ',
      raiting: 4.6,
      cashback: '5%',
      sum: '299',
      per: '/месяц'
    }
  ]
};

export const FilterSelectOptionsData = [
  'По популярности',
  'По названию',
  'Новинки',
  'Сначала дешевые',
  'Сначала дорогие'
];

export const ServicesSubscriptionImageData = {
  card: [
    {
      image: OkkoIcon,
      alt: 'Okko'
    },
    {
      image: LikeeIcon,
      alt: 'Likee'
    },
    {
      image: YandexPlusIcon,
      alt: 'Яндекс Плюс'
    }
  ]
};

export const ServicesSubscriptionData = {
  title: 'Мои подписки',
  writeOff: '26 марта ближайшее списание –',
  sum: '520'
};

export const ServicesSubscriptionHistoryData = {
  title: 'История покупок в марте',
  subtitlePlus: 'Накоплено',
  sumPlus: '+ 565,33',
  subtitleMinus: 'Потрачено',
  sumMinus: '- 1200'
};

export const ServicesSubscriptionInfoData = {
  title:
    '  Оформите подписки на любимые сервисы с выгодным кешбэком\u00A0\u00A0 и управляйте ими в одном месте',
  subtitle: 'Подробнее о платформе'
};

export const MySubscriptionsWaitActiveData = {
  title: 'Ожидают активации',
  subtitle:
    ' Промокод необходимо активировать\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 до окончания действия подписки - ',
  period: '18.05.2024'
};

export const MySubscriptionsWaitActiveCardData = {
  card: [
    {
      image: LikeeIcon,
      alt: 'Likee',
      title: 'Likee',
      period: '2'
    }
  ]
};

export const MySubscriptionsActiveData = {
  title: 'Активные'
};

export const MySubscriptionsActiveCardData = {
  card: [
    {
      image: OkkoIcon,
      alt: 'Okko',
      title: 'Okko',
      period: 'Подписка на 3 месяца',
      description: ' за 1 месяц',
      sum: '199',
      activeUntill: '24.06.2024',
      isActive: true
    },
    {
      image: YandexPlusIcon,
      alt: 'Яндекс Плюс',
      title: 'Яндекс Плюс',
      period: 'Пробная подписка на 10 дней',
      sum: '1',
      activeUntill: '23.04.2024',
      isActive: true
    }
  ]
};

export const MySubscriptionsInvalidData = {
  title: 'Недействительные'
};

export const MySubscriptionsInvalidCardData = {
  card: [
    {
      image: MyBookIcon,
      alt: 'My Book',
      title: 'My Book',
      period: 'Подписка на 2 месяца',
      description: ' за 1 месяц',
      sum: '130',
      activeUntill: '14.03.2023'
    },
    {
      image: IviIcon,
      alt: 'Иви',
      title: 'Иви',
      period: 'Подписка на 2 месяца',
      description: ' за 1 месяц',
      sum: '399',
      activeUntill: '23.12.2024'
    }
  ]
};

export const InfoTooltipData = {
  titleSubscription:
    'Вы не можете пользоваться сервисом, пока не завершите активацию подписки. Скопируйте код в разделе управления подпиской и перейдите на сайт партнера'
};

export const ManageSubscriptionCardData = {
  card: [
    {
      image: OkkoIcon,
      alt: 'Okko',
      title: 'Okko',
      description: 'Подписка на 3 месяца',
      period: ' 05.04.2024',
      isActive: true
    }
  ]
};

export const ManageSubscriptionBtnData = {
  card: [
    {
      image: AutoPayIcon,
      alt: 'Стрелки меняющиеся',
      title: 'Автоплатеж',
      borderColor: '#76D179'
    },
    {
      image: RejectIcon,
      alt: 'Крестик',
      title: 'Отключить',
      borderColor: '#FD6A4A'
    },
    {
      image: ChangeIcon,
      alt: 'Стрелки меняющиеся с рублем',
      title: 'Сменить тариф',
      borderColor: '#FFC774'
    }
  ]
};

export const ManageSubscriptionAboutData = {
  titleSubscription: 'О подписке',
  titlePartner: 'О партнере'
};

export const ManageSubscriptionAboutPartnerData = {
  text: 'Окко – онлайн-кинотеатр для просмотра кино, сериалов, мультфильмов, лекций, концертов, спектаклей и ТВ-каналов. Каждую неделю появляются новинки. Для детей есть профиль с фильтрами по возрастам. Для болельщиков - Okko Спорт» с трансляциями футбольных матчей, теннисных турниров и боёв MMA.'
};

export const ManageSubscriptionAboutContentData = {
  isConeccted: false,
  sum: '597',
  paySystem: SBPPay,
  alt: 'СБП',
  phoneNumber: '+ 7 (900) 000-07-07',
  cashback: '5%',
  profit: '150',
  date: '24.06.2024'
};

export const AutopaymentCardData = {
  card: [
    {
      image: SBPAutopay,
      alt: 'СБП',
      title: 'СБП'
    },
    {
      image: MirPay,
      alt: 'Мир',
      title: 'Мир',
      number: '**3345'
    },
    {
      image: MirPay,
      alt: 'Мир',
      title: 'Мир',
      number: '**5545'
    }
  ]
};

export const AutopaymentQuestionsContentData = {
  select: [
    {
      title: 'Как это работает',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Как отменить автоплатёж?',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]
};

export const AutopaymentContentData = {
  title: 'Изи Иви',
  sum: 199,
  date: '10.04.2024',
  long: 'Раз в месяц',
  text: 'За 2 дня до списания отправим СМС или Push'
};

export const AutopaymentPopupData = {
  title: 'Автоплатеж подключен',
  sum: 199,
  date: '10.04.2024',
  nextPay: 'Следующий платеж',
  text: 'Напомним за 2 дня до списания'
};

export const SubscribeCardData = {
  image: IviIcon,
  alt: 'ИВи',
  title: 'Иви',
  about: 'Онлайн-кинотеатр'
};

export const SubscribeCardInfoData = {
  title: 'Подключите пробную подписку на 1 месяц за 1 ₽!',
  text: 'Как это работает'
};

export const SubscribeContentData = {
  'Подписка Иви': {
    title: 'Подписка Иви',
    description: 'Все фильмы и сериалы основного каталога + ТВ-каналы.',
    cashback: '5',
    cards: [
      {
        title: 'На 1 месяц',
        sum: 399,
        description: 'ежемесячно',
        image: OneMonthImg,
        alt: '1 месяц',
        about: 399,
        payAbout: 'каждый месяц',
        imageSize: { width: '49px', height: '89px' }
      },
      {
        title: 'На 3 месяца',
        sum: 299,
        description: '899 ₽',
        image: ThreeMonthImg,
        alt: '3 месяца',
        about: 899,
        month: '3 месяца',
        payAbout: 'раз в 3 месяца',
        imageSize: { width: '54px', height: '89px' }
      },
      {
        title: 'На 12 месяцев',
        sum: 199,
        description: '2390 ₽',
        image: TwelveMonthImg,
        alt: '12 месяцев',
        about: 899,
        month: '12 месяцев',
        payAbout: 'раз в 12 месяцев',
        imageSize: { width: '80px', height: '89px' }
      }
    ]
  },
  'Изи Иви': {
    title: 'Изи Иви',
    description: 'Наполнение такое же, но смотреть можно только со смартфона.',
    cashback: '5',
    cards: [
      {
        title: 'На 1 месяц',
        sum: 199,
        description: 'ежемесячно',
        image: OneMonthImg,
        alt: '1 месяц',
        about: 399,
        payAbout: 'каждый месяц',
        imageSize: { width: '49px', height: '89px' }
      },
      {
        title: 'На 3 месяца',
        sum: 149,
        description: '447 ₽',
        image: ThreeMonthImg,
        alt: '3 месяца',
        about: 447,
        month: '3 месяца',
        payAbout: 'раз в 3 месяца',
        imageSize: { width: '54px', height: '89px' }
      },
      {
        title: 'На 12 месяцев',
        sum: 199,
        description: '2390 ₽',
        image: TwelveMonthImg,
        alt: '12 месяцев',
        about: 899,
        month: '12 месяцев',
        payAbout: 'раз в 12 месяцев',
        imageSize: { width: '80px', height: '89px' }
      }
    ]
  },
  'Иви + Amediateka': {
    title: 'Иви + Amediateka',
    description: 'К основному каталогу добавляется кино от Амедиатеки― кинотеатра-партнёра.',
    cashback: '5',
    cards: [
      {
        title: 'На 1 месяц',
        sum: 999,
        description: 'ежемесячно',
        image: OneMonthImg,
        alt: '1 месяц',
        about: 399,
        payAbout: 'каждый месяц',
        imageSize: { width: '49px', height: '89px' }
      },
      {
        title: 'На 3 месяца',
        sum: 899,
        description: '2697 ₽',
        image: ThreeMonthImg,
        alt: '3 месяца',
        about: 2697,
        month: '3 месяца',
        payAbout: 'раз в 3 месяца',
        imageSize: { width: '54px', height: '89px' }
      },
      {
        title: 'На 12 месяцев',
        sum: 199,
        description: '2390 ₽',
        image: TwelveMonthImg,
        alt: '12 месяцев',
        about: 899,
        month: '12 месяцев',
        payAbout: 'раз в 12 месяцев',
        imageSize: { width: '80px', height: '89px' }
      }
    ]
  }
};

export const AboutSubscribeCardData = [
  {
    title: '5 профилей, одна подписка',
    subtitle: 'Одна подписка для всей семьи или друзей'
  },
  {
    title: 'Максимальное качество',
    subtitle: 'Более 10 000 фильмов, сериалов и мультфильмов в 4K'
  },
  {
    title: 'Просмотр офлайн',
    subtitle: 'Смотрите кино даже там, где нет интернета'
  },
  {
    title: 'Никакой рекламы',
    subtitle: 'Ни один рекламный ролик не прервёт просмотр'
  }
];

export const AboutSubscribeCardTitleData = {
  title: 'Новые фильмы и сериалы со всего мира с кешбэком'
};

export const AboutSubscribeСonditionsData = [
  {
    text: 'Кешбэк будет начисляться за первую и все последующие оплаты купленной подписки'
  },
  {
    text: 'Подписка включается по коду доступа. Вы получите его после оплаты.'
  },
  {
    text: 'Для автоматической генерации кода доступа на следующий период подписки, активируйте   функцию «Привязать счёт» на экране оплаты (только для устройств на Android).'
  },
  {
    text: 'Кешбэк будет начислен до 25 числа следующего за оплатой месяца'
  }
];

export const SubscriptionPaymentContentData = {
  sum: 1,
  subtile: 'оплачиваете сейчас',
  sumMonth: 399,
  text: '- с 14 марта каждый месяц',
  textNumber: 'Номер телефона',
  phone: '+7 (915) 290 83 04'
};

export const SubscriptionPaymentMethodTitleData = {
  title: 'Способ оплаты'
};

export const SubscriptionPaymentMethodCardData = {
  card: [
    {
      image: MirPay,
      alt: 'Мир',
      title: 'Мир',
      number: '**3345'
    },
    {
      image: MirPay,
      alt: 'Мир',
      title: 'Мир',
      number: '**5545'
    },
    {
      image: SBPAutopay,
      alt: 'СБП',
      title: 'СБП'
    }
  ]
};

export const SubscriptionPaymentInfoData = {
  agreeText: 'Согласен с',
  rulesText: 'правилами партнера',
  sum: 599,
  perMonth: 'в месяц'
};

export const SubscriptionPaymentPopupInfoData = [
  {
    image: DownloadCheckIcon,
    alt: 'Чек',
    title: 'Скачать чек'
  },
  {
    image: AutoPayIcon,
    alt: 'Меняющиеся стрелочки по кругу',
    title: 'Создать автоплатеж'
  },
  {
    image: InstructionIcon,
    alt: 'Лист',
    title: 'Узнать, как работать с сервисом'
  }
];

export const SubscriptionPaymentPopupData = {
  title: 'Подписка оплачена',
  sum: 299,
  promo: 'FDJ264999SHK0',
  activUntil: 'Активировать до',
  tooltip:
    'Вы не можете пользоваться сервисом, пока не завершите активацию подписки. Скопируйте код и перейдите на сайт партнера. Это можно сделать позже, в разделе управления подпиской.',
  CopyBtn: 'Скопировать и перейти на сайт',
  returnBtn: 'Вернуться на главную'
};

export const ManageSubscriptionWaitIdAboutData = {
  sum: '597',
  paySystem: SBPPay,
  alt: 'СБП',
  phoneNumber: '+ 7 (900) 000-07-07',
  cashback: 5,
  profit: 309,
  date: '-'
};

export const ManageSubscriptionWaitIdContentData = {
  title: 'Промокод необходимо активировать на сайте партнера до окончания действия подписки – ',
  period: '18.05.2024'
};

export const ManageSubscriptionWaitIdCardData = {
  card: [
    {
      image: LikeeIcon,
      alt: 'Likee',
      title: 'Likee',
      description: 'Подписка на 3 месяца',
      period: ' 18.05.2024'
    }
  ]
};

export const ManageSubscriptionWaitIdPromoData = {
  title: 'Промокод',
  promo: 'FDJ264999SHK0'
};

export const ManageSubscriptionWaitIdAboutPartnerData = {
  text: 'Likee – онлайн-кинотеатр для просмотра кино, сериалов, мультфильмов, лекций, концертов, спектаклей и ТВ-каналов. Каждую неделю появляются новинки. Для детей есть профиль с фильтрами по возрастам. '
};
