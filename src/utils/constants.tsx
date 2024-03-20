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

export const HeaderData = {
  services: 'Развлекательные сервисы',
  sellHistory: 'История покупок',
  subscriptions: 'Мои подписки',
  manageSubcription: 'Управление подпиской',
  catalog: 'Каталог подписок',
  movie: 'Кино',
  connetcSubcription: 'Подключение подписки',
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
