import Burger from '../assets/BurgerCard.svg';
import Movie from '../assets/MovieCard.svg';
import Music from '../assets/MusicIcon.svg';
import Note from '../assets/Note.svg';
import TV from '../assets/TV.svg';
import Box from '../assets/Box.svg';

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
      alt: 'Burger',
      title: 'Продукты',
      discount: 'до 15%'
    },
    {
      image: Movie,
      alt: 'Movie',
      title: 'Кино',
      discount: 'до 15%'
    },
    {
      image: Music,
      alt: 'Music',
      title: 'Музыка',
      discount: 'до 10%'
    },
    {
      image: Note,
      alt: 'Note',
      title: 'Note',
      discount: 'до 10%'
    },
    {
      image: TV,
      alt: 'TV',
      title: 'Note',
      discount: 'до 10%'
    },
    {
      image: Box,
      alt: 'Box',
      title: 'Box',
      discount: 'до 10%'
    }
  ]
};
