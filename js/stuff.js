var curPage;
var curPageID;
var Value;
var Property;
var counter = 0;


var odevalkastate;
var mainButtons;
var maps;
var events;
var items;
var mobs;
var searchProps;
var searchValues;


var path = "http://lostmagic.ru";






odevalkastate = {
  false: 'Одевалка двойная',
  true: 'Одевалка на одного'
};


//nav-buttons
mainButtons = {
  'Главная': 'home',
  'Вещи': 'items',
  'Мобы': 'mobs',
  'События': 'events',
  'Карты': 'maps',
  'Квесты': 'quests',
  'Ачивки': 'achievements',
  'Одевалка': 'odevalka'
};


//maps
maps = {
  "Город": "beginning",
  "Болота": "bolota",
  "Северные Горы": "mountains",
  "Пустыня": "zona",
  "Сумеречный Город": "bad_city"/*,
  "Древние Земли": "amazonia",
  "Пираты": "bitch"*/
};


//events
events = [{
    "name": "Благословение Совы",
    "start": "0",
    "location": "Никто не знает",
    "description": "Доброй охоты, тем кто не спит."
  },
  {
    "name": "Кеды наголо!",
    "start": "4",
    "location": "Граница",
    "cd": "около часа",
    "description": "Побитые, облезлые и безхвостые Ено перекрасили челки, нацепили кеды и вышли на тропу войны! Не упустите шанс добыть уникальную обувь"
  },
  {
    "name": "Милтонфест",
    "start": "4",
    "location": "Бар Full Duck",
    "cd": "каждые 3 часа",
    "description": "В баре \"Full Duck\" есть древняя традиция. Каждые три часа посетители бара выходят во двор и бьют друг другу лица. Ничего личного, просто традиция. Драки проходят каждая со своей весовой категорией и ведутся до последнего выжившего. Драка начинается минимум при 5ти участиках. Победитель получает 5 Очков Арены!"
  },
  {
    "name": "Кровавый спорт. Раунд 1",
    "start": "4",
    "location": "Подвал БК",
    "cd": "каждые 24 часа",
    "description": "Ежедневно в 18.00 по местному времени (случайно совпавшему с земным московским) Тайлер приглашает вас посетить Бойцовский клуб и принять участие в первом раунде массовых боев в номинации \"стенка на стенку\"."
  },
  {
    "name": "Кровавый спорт. Раунд 2",
    "start": "4",
    "location": "Подвал БК",
    "cd": "каждые 24 часа",
    "description": "Ежедневно в 21.00 по местному времени (случайно совпавшему с земным московским) Тайлер приглашает вас посетить Бойцовский клуб и принять участие в втором раунде массовых боев в номинации \"стенка на стенку\"."
  },
  {
    "name": "Кровавый спорт. Раунд 3",
    "start": "4",
    "location": "Подвал БК",
    "cd": "каждые 24 часа",
    "description": "Ежедневно в 24.00 по местному времени (случайно совпавшему с земным московским) Тайлер приглашает вас посетить Бойцовский клуб и принять участие в третьем раунде массовых боев в номинации \"стенка на стенку\"."
  },
  {
    "name": "Замогильный нерест",
    "start": "4",
    "end": "5",
    "location": "Кладбище",
    "cd": "30 минут",
    "description": "Огромные залежи песчанника в окресностях города свидетельствует о том, что вся эта месность была дном доисторического моря. \nВ качестве наглядного доказательства данной теории могут служить окаменелые трупы древних рыб, периодически нападающих на мирных посетителей кладбища."
  },
  {
    "name": "Взрыв газа у гнезда",
    "start": "5",
    "location": "Черный Бор",
    "description": "Помимо агрессивной флоры и фауны, на болотах вас подстерегает еще одна опасность - спонтанные выбросы болотного газа, отравляющие всех, кто имел неосторожность оказатся поблизости.\nКаждый застигнутый на локации персонаж получает эффект \"Отравление болотным газом\":"
  },
  {
    "name": "Взрыв газа у зарослей",
    "start": "5",
    "location": "Вересковые заросли",
    "description": "Помимо агрессивной флоры и фауны, на болотах вас подстерегает еще одна опасность - спонтанные выбросы болотного газа, отравляющие всех, кто имел неосторожность оказатся поблизости.\nКаждый застигнутый на локации персонаж получает эффект \"Отравление болотным газом\":"
  },
  {
    "name": "Щедрый Мунэхиса",
    "start": "5",
    "end": "9",
    "location": "Проклятое дерево",
    "cd": "около 4 часов",
    "description": "Великий торговец Мунэхиса Хомма случайно оказался на болотах. У него с собой есть партия настоев, которую он с удовольствием распродаст путешественникам, случайно заставшим его у Проклятого Дерева."
  },
  {
    "name": "Свидание с сестрами",
    "start": "6",
    "location": "Дорога к Торфянным топям",
    "cd": "около 3х часов",
    "description": "Дороги в наше время не безопасны. Особенно болотистый отрезок между Чилтоном и Торфяными Топями, где орудует банда \"Бритых сестер\". Впрочем, у старательных блюстителей спокойствия на дорогах есть шанс отобрать у разбойниц одно из столь любимых ими украшений."
  },
  {
    "name": "Биологическая опасность",
    "start": "9",
    "location": "Лысая вершина",
    "description": "Под толстым слоем снега и льда скрывается огромное количество таинственных пещер, штолен, гротов и прочих катакомб. Неудивительно, что из некоторых нор лезут такие малоприятные \"подснежники\" как Разносчики Заразы.\nСоблюдайте гигиену и мойте руки обьязательно после каждого боя, иначе, вы рискуете заболеть:"
  },
  {
    "name": "Щедрый Хашогги",
    "start": "9",
    "location": "Мерзлое ущелье",
    "description": "Мудрец Хашогги смог раздобыть партию контрабандных настоев, которую он предлагает всем желающим за весьма разумные деньги."
  },
  {
    "name": "Оживший памятник",
    "start": "9",
    "location": "Слоулвиль",
    "cd": "около 4 часов",
    "description": "Феноменальное событие происходит с символом Слоулвиля - памятником Тихоходке. Сотни лет назад он был возведен как символ непоколебимости духа горожан и способности выживать в любых условиях. Однако, с недавних пор жители Слоулвиля заметили, что памятник необычайным образом оживает и ходит кругами по площади, а затем снова встает на постаменти замирате в прежней позе как ни в чем не бывало."
  },
  {
    "name": "Портал в Храм Солнца",
    "start": "14",
    "location": "Сектор \"Рифт\"",
    "cd": "каждые 6 часов",
    "description": "При определенном расположении звезд в секторе \"Рифт\" открывается магический порталв Храм Солнца. Попасть в портал смогут только храбрые и доблестные воины, владеющие энергией Зоны 50. Действовать надо быстро, ведь портал открывается всего на 3 минуты."
  },
  {
    "name": "Прозрение",
    "start": "16",
    "location": "Аллея Идолов",
    "cd": "около часа",
    "description": "Жители сумеречной долины много лет поклоняются идолам в поисках прозрения. Достигнув прозрения можно пообщатся с Богами, заключенными внутрь идолов. Ищите и обрящете."
  },
  {
    "name": "Тропа на улицу Элм",
    "start": "18",
    "location": "Перекресток Призраков",
    "description": "Тропа ведет в мрачное логово душегуба Фредди. Правда, самого Фредди увидеть не так просто. Не менее 10 душ требует он, чтобы оказать честь встретится с вами и вашей фракцией. Успейте победить в максимальном количестве боев за отведенное время. Тропа открывается на 25 минут."
  },
  {
    "name": "Изнурение",
    "start": "19",
    "location": "Сумеречная арена",
    "cd": "10 минут",
    "description": "Гнетущая атмосфера на Сумеречной арене мешает отдыху. Эффекты изнурения не исчезают с течением времени."
  },
  {
    "name": "Ключ от подвала",
    "start": "19",
    "location": "Мастерская Михаила",
    "description": "Дверь в подвал Михаила открыта! Возможность встретится с самим изобретателем будет дана лишь тем, кто докажет свою силу уничтожая врагов на територии Сумеречного города. Дверь открывается на 25 минут."
  },
  {
    "name": "Атака ордена/братства",
    "start": "19",
    "location": "Сумеречный каньон",
    "cd": "около часа",
    "description": "Охотники Одрена/Братства организовали нападение на Сумеречный каньон! Отразите их атаку уничтожив как можно большее количество нападающих."
  },
  {
    "name": "Kill All Humans!",
    "start": "19",
    "location": "Перекресток Призраков",
    "cd": "около часа",
    "description": "Роботы в Сумеречном Городе слетают с катушек от обилия энергии. Они нападают на каждого, кто пытается пройти мимо бара Full Duck к центру города. Их корпус выполнен из ценных металических сплавов, а ученые Ордена и Братства дорого заплатят за возможность исследовать их маккумуляторы."
  },
  {
    "name": "Миросплетение",
    "start": "15я ступень",
    "location": "Чаролесье",
    "cd": "около часа",
    "description": "Чарьлесье - мистическое место, где мир духов сплетается с миром людей. Выбрав правильное время, можно перейти из одного мира в другой."
  }
];

//4item search
searchProps = {
  'items': {
    'type': 'Тип',
    'rarity': 'Качество',
    'reqlevel': 'Уровень',
    'quest': 'Квестовый'
  },
  'mobs': {
    'race': 'Тип',
    'level': 'Уровень',
    'location': 'Место обитания'
  }
};

searchValues = {
  'items': {
    "type": {

      'group1':'Одежда',
      "head": "Шлем",
      "chest": "Нагрудник",
      "cloak": "Плащ",
      "gloves": "Перчатки",
      "belt": "Пояс",
      "legs": "Поножи",
      "boots": "Боты",

      'group2':'Аксессуары',
      "neck": "Ожерелье",
      "ring": "Кольцо",
      "trinket": "Безделушка",
      "rune": "Аура",
      "totem": "Тотем",

      'group3':'Оружие',
      "rweapon": "Праворуч",
      "weapon": "Оружие в любую руку",
      "twohandedweapon": "Двуруч",
      "lweapon": "Леворуч",
      "shield": "Щит",

      'group4':'Ювелирное дело',
      "catalyst": "Катализатор(Амальгама)",
      "extractor": "Щипцы",
      "holemaker": "Сверло",
      "improver": "Катализатор",
      "gemmpart": "Компонент",
      "reagent": "Реагент",
      "recipe": "Рецепт",
      "socket": "Гемма",

      'group5':'Травничество/Алхимия',
      "additive": "Присадка",
      "emptybottle": "Пустой сосуд",
      "bottle": "Бутылка",
      "fertilizer": "Удобрение",
      "grass": "Трава",
      "seed": "Семечко",

      'group6':'Остальное',
      "sunduk": "Коробочка",
      "pet": "Петы",
      "present": "Подарок",
      "pvp_drop": "ПВП-дроп",
      "book": "Книги",
      "lottery": "Лотерейки",
      "map": "Карта",
      "other": "Другое",
      "coupon": "Купон",
      "personalcoupon": "Персональный Купон",
    },
    "rarity": {
      "common": "Белый",
      "uncommon": "Зеленый",
      "rare": "Синий",
      "epic": "Фиолетовый",
      "legend": "Оранжевый"
    },
    "reqlevel": {
      "undefined": "0 Уровень",
      "1": "1 Уровень",
      "2": "2 Уровень",
      "3": "3 Уровень",
      "4": "4 Уровень",
      "5": "5 Уровень",
      "6": "6 Уровень",
      "7": "7 Уровень",
      "8": "8 Уровень",
      "9": "9 Уровень",
      "10": "10 Уровень",
      "11": "11 Уровень",
      "12": "12 Уровень",
      "13": "13 Уровень",
      "14": "14 Уровень",
      "15": "15 Уровень",
      "16": "16 Уровень",
      "17": "17 Уровень",
      "18": "18 Уровень",
      "19": "19 Уровень",
      "20": "20 Уровень"
    },
    "quest": {
      'undefined': "Нет",
      "1": "Да"
    }
  },
  'mobs': {
    'race': {
      'undead': 'Замогильники',
      'human': 'Люди',
      'beast': 'Звери',
      'demon': 'Демоны',
      'plant': 'Хищноцветы',
      'elv': 'Эльфы',
      'ghost': 'Одержимые',
      'mechanics': 'Механизмы',
      'intelligent': 'Разумные',
      'boss': 'Боссы'
    },
    'level': {
      "1": "1 Уровень",
      "2": "2 Уровень",
      "3": "3 Уровень",
      "4": "4 Уровень",
      "5": "5 Уровень",
      "6": "6 Уровень",
      "7": "7 Уровень",
      "8": "8 Уровень",
      "9": "9 Уровень",
      "10": "10 Уровень",
      "11": "11 Уровень",
      "12": "12 Уровень",
      "13": "13 Уровень",
      "14": "14 Уровень",
      "15": "15 Уровень",
      "16": "16 Уровень",
      "17": "17 Уровень",
      "18": "18 Уровень",
      "19": "19 Уровень",
      "20": "20 Уровень",
      "99": "Подстраиваемый"
    },
    'location': {
      'group1':'Зона обитания',
      'city':'Город',
      'bolota':'Болота',
      'gory':'Горы',
      'zona':'Зона 50',
      'sumerki':'Сумерки',
      'land':'Древние земли',
      'pirates': 'Пираты',

      'group2':'Инсты',
      'pant': 'Пантеон',
      'sklep': 'Склеп',
      'melnica':'Мельница',
      'pg':'Плывучий Голландец',
      'gribnaya':'Грибная пещера',
      'logovo':'Логово',
      'nedra':'Недра',
      'nora':'Нора',
      'morfonora':'Пещера Идолов',
      'cirk':'Цирк',
      'zamok':'Темный Замок',
      'temple':'Храм Полоза',
      'les':'Вечный Лес',
      'sharkonora':'Пещера Проклятых',
      'limb':'Лимб',

      'group3':'ПВП-Инсты',
      'arena':'Арена',
      'arka':'Башня Арканы',

      'group4':'Другое',
      'priziv':'Свисток'
    }
  }
};


lootLoc = {
    'loot':'одно из',
    'randloot':'возможное содержимое',
    'questloot':'квестовый лут',
    'factionmoney':'стигмы',
    'money':'голда',
    'twilights':'анимы',
    'crystals':'осколки магии',
    'psevdorandloot':'псевдорандомный лут',
    'personalloot':'персональный дроп',


    'sockets': 'количество дыр'
}