import { useState } from "react";

// BGN → EUR conversion rate (1 BGN = 0.51 EUR, rounded to .X9 for menu aesthetics)
const toEur = (bgn: number) => (bgn * 0.51).toFixed(2) + " €";

const categories = [
  {
    key: "salati",
    label: "Салати",
    emoji: "🥗",
    image: "/photos/menu_salata.jpg",
    imageAlt: "Гръцка салата с фета",
    items: [
      { name: "Гръцка салата", weight: "600 г", price: toEur(18.90) },
      { name: "Овчарска салата", weight: "600 г", price: toEur(18.90) },
      { name: "Шопска салата", weight: "450 г", price: toEur(12.90) },
      { name: "Зеле с моркови", weight: "300 г", price: toEur(11.90) },
      { name: "Трицветна салата", weight: "300 г", price: toEur(12.90), desc: "зеле, моркови, марули, зехтин, лимон" },
      { name: "Рукола с пармезан", weight: "450 г", price: toEur(17.90) },
      { name: "Хорта (дива трева)", weight: "400 г", price: toEur(10.90) },
      { name: "Мешана", weight: "400 г", price: toEur(12.90) },
      { name: "Капрезе", weight: "350 г", price: toEur(14.90), desc: "бели розови домати, моцарела и песто" },
      { name: "Пролетна зелена салата с яйце", weight: "400 г", price: toEur(12.90) },
      { name: "Зелена салата с риба тон", weight: "450 г", price: toEur(18.90) },
      { name: "Френска салата (Шеф)", weight: "650 г", price: toEur(18.90), desc: "маруля, домати, краставици, шунка, сирене гауда, яйце, сос Шеф" },
    ],
  },
  {
    key: "studeni",
    label: "Студени предястия",
    emoji: "🫒",
    image: "/photos/dzadziki.jpg",
    imageAlt: "Студени предястия",
    items: [
      { name: "Дзадзики — домашно", weight: "150 г", price: toEur(9.99) },
      { name: "Тирокафтери", weight: "150 г", price: toEur(9.99) },
      { name: "Копанисти", weight: "150 г", price: toEur(9.99) },
      { name: "Мелиджано салата (кьопоолу)", weight: "150 г", price: toEur(9.99) },
      { name: "Паприка (лютеница със сирене фета)", weight: "150 г", price: toEur(8.99) },
      { name: "Тарама розова", weight: "150 г", price: toEur(9.99) },
      { name: "Тарама бяла", weight: "150 г", price: toEur(11.99) },
      { name: "Тарама Mix", weight: "150 г", price: toEur(10.99) },
      { name: "Скордала — чеснова разядка", weight: "150 г", price: toEur(9.99) },
      { name: "Цвекло със скордаля", weight: "300 г", price: toEur(14.90) },
      { name: "Лозови сърмички", weight: "300 г", price: toEur(13.90), desc: "сервират се с цедено мляко" },
      { name: 'Плато "Асорти"', weight: "400 г", price: toEur(21.89), desc: "дзадзики, тирокафтери, мелиджано салата, тарама розова, паприка × 80 г" },
      { name: 'Плато "7 морета"', weight: "560 г", price: toEur(26.89), desc: "дзадзики, тирокафтери, мелиджано салата, тарама розова, тарама бяла, копанисти, паприка × 80 г" },
      { name: "Маслини Каламон", weight: "100 г", price: toEur(7.99) },
      { name: "Маслини с лук", weight: "130 г", price: toEur(8.89) },
      { name: "Фета сирене (оригинална фета от Тирнавос)", weight: "100 г", price: toEur(8.99) },
      { name: "Гръцки люти чушки", weight: "1 бр.", price: toEur(3.99) },
      { name: "Цвекло сварено", weight: "150 г", price: toEur(7.99) },
    ],
  },
  {
    key: "topli",
    label: "Топли предястия",
    emoji: "🧀",
    image: "/photos/greekstyle.png",
    imageAlt: "Октопод на жар",
    items: [
      { name: 'По "Гръцки"', weight: "500 г", price: toEur(23.90), desc: "броколи, карфиол, сладки картофи, цвекло, авокадо" },
      { name: 'Козе сирене "Халуми" (от остров Кипър)', weight: "100 г", price: toEur(9.99) },
      { name: 'Гръцко сирене "Саганаки" (кефалотири от Крит)', weight: "150 г", price: toEur(12.99) },
      { name: "Солунски Буюрди", weight: "400 г", price: toEur(18.99), desc: "фета сирене в гювече с люта чушка" },
      { name: "Патладжан по гръцки", weight: "450 г", price: toEur(17.99), desc: "печен на скара с домати, сирене фета, магданоз, чесън, зехтин и оцет" },
      { name: "Картофи (пресни) пържени", weight: "250 г", price: toEur(6.69) },
      { name: "Картофи със сирене", weight: "300 г", price: toEur(7.59) },
      { name: "Картофи на фурна", weight: "300 г", price: toEur(10.99) },
      { name: "Зеленчуци на скара", weight: "300 г", price: toEur(14.99), desc: "тиквички, гъби, чушки, моркови" },
      { name: "Боб гигантски по гръцки", weight: "250 г", price: toEur(14.99) },
      { name: "Тиквички", weight: "300 г", price: toEur(12.89), desc: "с цедено мляко, копър, чесън" },
      { name: "Тиквички хрупкави по гръцки", weight: "450 г", price: toEur(14.89), desc: "сервират се с дзадзики" },
      { name: "Тиквички по кипърски", weight: "300 г", price: toEur(14.89), desc: "с яйца" },
    ],
  },
  {
    key: "supa",
    label: "Супи от пресни риби",
    emoji: "🍲",
    image: "/photos/menu_supa.jpg",
    imageAlt: "Рибена супа",
    items: [
      { name: "От Див Лаврак", weight: "350 мл", price: toEur(14.00) },
      { name: "От Скорпина или Рофос (Grouper)", weight: "350 мл", price: toEur(24.00) },
    ],
    note: "По предварителна заявка ресторантът може да Ви приготви супа от всякаква риба!",
  },
  {
    key: "hlebcheta",
    label: "Прясно изпечени хлебчета",
    emoji: "🍞",
    image: "/photos/menu_hlebcheta.jpg",
    imageAlt: "Прясно изпечени хлебчета",
    items: [
      { name: "Гръцка пита", weight: "80 г", price: toEur(2.39) },
      { name: "Кипърска пита", weight: "90 г", price: toEur(2.99) },
      { name: "Черно хлебче със семена", weight: "40 г", price: toEur(1.49) },
      { name: "Лаганаки със сусам", weight: "150 г", price: toEur(3.69) },
      { name: "Френска багета със сусам (бяла или черна)", weight: "150 г", price: toEur(3.89) },
      { name: 'Френска "Gustosa" багета', weight: "190 г", price: toEur(5.99), desc: "чеснов хляб с масло, босилек и масло — само в GUSTOSA!" },
      { name: 'Хляб "Mix"', weight: "740 г", price: toEur(22.55), desc: "6 различни хлебчета" },
    ],
  },
  {
    key: "riba",
    label: "Прясна дива риба",
    emoji: "🐟",
    image: "/photos/menu_riba.jpg",
    imageAlt: "Прясна дива риба",
    note: "Рибата се взима директно от рибните борси в Северна Гърция и я транспортираме със собствен хладилен бус. Риба на морска сол + 40 лв. с предварителна заявка.",
    items: [
      { name: "Ципура", weight: "1 кг", price: toEur(109.00) },
      { name: "Лаврак", weight: "1 кг", price: toEur(109.00) },
      { name: "Едър Лаврак (2+ кг)", weight: "1 кг", price: toEur(99.00), desc: "Промоция!" },
      { name: 'Саргос "Бяла Ципура"', weight: "1 кг", price: toEur(109.00) },
      { name: 'Скатари "Черна Ципура"', weight: "1 кг", price: toEur(109.00) },
      { name: 'Рофос "Групер"', weight: "1 кг", price: toEur(109.00) },
      { name: 'Стира "Златен Групер"', weight: "1 кг", price: toEur(119.00) },
      { name: 'Сфирида "Бял Групер"', weight: "1 кг", price: toEur(119.00) },
      { name: 'Христова риба "John Dory"', weight: "1 кг", price: toEur(99.00) },
      { name: 'Скорпина "Scorpion fish"', weight: "1 кг", price: toEur(119.00) },
      { name: "Мелокопи", weight: "1 кг", price: toEur(99.00), desc: "Промоция!" },
      { name: "Морски език (пържен или на скара)", weight: "1 кг", price: toEur(139.00) },
      { name: 'Морски език "Ала Мениер" (на фурна, задушен в масло)', weight: "1 кг", price: toEur(139.00) },
      { name: 'Барбун А\'А\'А\' "Много едър"', weight: "1 кг", price: toEur(119.00) },
      { name: "Кучомура (прилича на дребен барбун)", weight: "1 кг", price: toEur(89.00) },
      { name: "Бакалярос А'А'А'", weight: "1 кг", price: toEur(99.00) },
      { name: "Опашка от Морски дявол (пържена или на скара)", weight: "1 кг", price: toEur(109.00) },
      { name: "Фагри", weight: "1 кг", price: toEur(139.00) },
      { name: "Чауши", weight: "1 кг", price: toEur(139.00) },
      { name: 'Мушмули "Едър"', weight: "1 кг", price: toEur(139.00) },
      { name: "Синагрида", weight: "1 кг", price: toEur(139.00) },
    ],
  },
  {
    key: "morski",
    label: "Морски дарове",
    emoji: "🦑",
    image: "/photos/food_octopus.jpg",
    imageAlt: "Лангустини с ориз",
    items: [
      { name: 'Миди "бяло" Саганаки', weight: "400 г", price: toEur(20.90), desc: "лек винен сос, горчица и фета сирене" },
      { name: 'Миди "червено" Саганаки', weight: "400 г", price: toEur(20.90), desc: "доматен сос и фета сирене" },
      { name: "Едри Зелени миди", weight: "300 г", price: toEur(20.90), desc: "задушени в бяло вино, чесън, копър и подправки" },
      { name: "Черни миди по Гръцки", weight: "500 г", price: toEur(23.90) },
      { name: "Мидопилафо", weight: "600 г", price: toEur(23.90), desc: "миди с ориз по оригинална гръцка рецепта" },
      { name: "Гръцки Едри Диви Скариди", weight: "1 кг", price: toEur(119.00), desc: "скариди от Северно Егейско море, 1 бр. ~ 70–150 г" },
      { name: "Гръцки Лангустини (Scampi) — на скара", weight: "1 кг", price: toEur(149.00), desc: "подбрани максимално едри, 1 бр. ~ 130–250 г" },
      { name: "Гръцки Лангустини (Scampi) — в масло", weight: "1 кг", price: toEur(169.00) },
      { name: "Гръцки Лобстер — на скара", weight: "1 кг", price: toEur(149.00) },
      { name: "Гръцки Лобстер — с разтопено масло", weight: "1 кг", price: toEur(169.00) },
      { name: "Sea Food Mix — за двама", weight: "650 г", price: toEur(99.00), desc: "октопод, калмари на скара, диви скариди 2 бр., едри лангустини/Scampi 2 бр." },
    ],
  },
  {
    key: "pasta",
    label: "Паста Gustoza",
    emoji: "🍝",
    image: "/photos/pasta.webp",
    imageAlt: "Паста с морски дарове",
    items: [
      { name: "Болонезе — гръцка рецепта", weight: "400 г", price: toEur(19.00) },
      { name: "Карбонара", weight: "400 г", price: toEur(19.00) },
      { name: "Санто — Ал Олио", weight: "400 г", price: toEur(43.90), desc: "лингуине с октопод 50 г, калмар 50 г, скариди 50 г, черни миди 50 г" },
      { name: '"Халкидики" с доматен сос', weight: "400 г", price: toEur(43.90), desc: "лингуине с октопод 50 г, калмар 50 г, скариди 50 г, черни миди 50 г" },
      { name: "Диви скариди с паста", weight: "1 кг", price: toEur(139.00), desc: '"Ал алио" или с доматен сос' },
      { name: "Едри Лангустини с паста", weight: "1 кг", price: toEur(179.00), desc: '"Ал алио" или с доматен сос' },
      { name: "Гръцки Лобстер с паста", weight: "1 кг", price: toEur(179.00) },
    ],
  },
  {
    key: "meso",
    label: "Меса на дървени въглища",
    emoji: "🔥",
    image: "/photos/menu_meso.jpg",
    imageAlt: "Агнешки котлети на скара",
    items: [
      { name: "Гръцка свинска пържола XXL", weight: "500 г", price: toEur(25.00), desc: "с пържени картофи и салата паприка" },
      { name: 'Гръцка свинска пържола XXL "Селска"', weight: "550 г", price: toEur(27.00), desc: "с пържени картофи и салата паприка" },
      { name: 'Бифтек "Специал Густоза"', weight: "400 г", price: toEur(19.00), desc: "с пълнеж от бекон, гъби и Рокфор" },
      { name: 'Бифтек "Специал 4 сирена"', weight: "400 г", price: toEur(19.00), desc: "с пълнеж от 4 сирена" },
      { name: "Телешка котлетна пържола", weight: "~700 г", price: toEur(38.90), desc: "с печени картофи и два вида сос" },
      { name: "Телешко бон филе", weight: "500 г", price: toEur(38.90), desc: "с печени картофи и два вида сос" },
      { name: "Огромна котлетна пържола от плиган", weight: "900 г", price: toEur(38.90), desc: "пържолата е 700–800 г! С печени картофи и два вида сос" },
      { name: "Пилешка пържола (филе)", weight: "400 г", price: toEur(18.90), desc: "с печени картофи и сос майонеза" },
      { name: "Агнешки \"млечни\" котлетца", weight: "300 г / 1 кг", price: toEur(29.00) + " / " + toEur(89.00) },
      { name: "Телешки дроб скара", weight: "250 г", price: toEur(14.89) },
      { name: "Гръцки наденички от Серес", weight: "400 г", price: toEur(18.90), desc: "с пържени картофи и сос горчица" },
      { name: "Порция свински шишчета", weight: "400 г", price: toEur(19.00), desc: "с картофи и дзадзики" },
      { name: "Мешана скара", weight: "400 г", price: toEur(19.00), desc: "с картофи и горчица" },
    ],
    note: "Всички месни ястия в GUSTOSA са приготвени от първокачествено месо от Гърция.",
  },
  {
    key: "tradicionna",
    label: "Традиционна кухня",
    emoji: "🍲",
    image: "/photos/g08.jpg",
    imageAlt: "Традиционни гръцки ястия",
    items: [
      { name: "Мусака", weight: "450 г", price: toEur(19.00) },
      { name: "Свинско лемонато", weight: "450 г", price: toEur(21.90) },
      { name: "Телешко по гръцки", weight: "450 г", price: toEur(24.90) },
      { name: "Сунджукакя (кюфтенца в доматен сос)", weight: "450 г", price: toEur(21.90), desc: "с ориз или картофи на фурна" },
    ],
    note: "По предварителна заявка можем да изпечем за Ваши мероприятия цяло агне, прасенце или да Ви направим великолепния Кокорец. Млечно агне 1 кг/78 лв, Млечно Прасенце 1 кг/65 лв, Кокорец 1 кг/75 лв.",
  },
  {
    key: "vina_beli",
    label: "Гръцки бели вина",
    emoji: "🍾",
    image: "/photos/menu_vino.jpg",
    imageAlt: "Гръцко бяло вино",
    items: [
      { name: 'Самаропетра "Бутари" — Флорина', weight: "0.75 л", price: toEur(47.90), desc: "100% Совиньон Блан" },
      { name: "Лимния Ги — остров Лимнос", weight: "0.75 л", price: toEur(36.90), desc: "Александрийски мускат" },
      { name: "Видяно Лираракис — остров Крит", weight: "0.75 л", price: toEur(45.90), desc: "100% Критски сорт Видяно" },
      { name: 'Идисма Дриос — Драма', weight: "0.75 л", price: toEur(47.90), desc: "100% Шардоне" },
      { name: "Ктима Скура — Пелопонес", weight: "0.75 л", price: toEur(64.90), desc: "100% Вионие — Eclectic Spilitsa" },
      { name: 'Ктима Скура "Армира"', weight: "0.75 л", price: toEur(47.90), desc: "Шардоне и Малагузя" },
      { name: 'Ктима Аргиру "Cuvee Nykteri" 2019', weight: "0.75 л", price: toEur(109.90), desc: "100% Асиртико — Едно Велико вино! (Санторини)" },
      { name: 'Ктима Аргиру "Санторини"', weight: "0.75 л", price: toEur(68.90), desc: "100% Асиртико" },
      { name: 'Ктима Хаджидаки "Nykteri"', weight: "0.75 л", price: toEur(99.00) },
      { name: "Ктима Сигалас Санторини", weight: "0.75 л", price: toEur(99.90), desc: "100% Асиртико" },
    ],
  },
  {
    key: "recina",
    label: "Традиционна Гръцка Рецина",
    emoji: "🍷",
    image: "/photos/grucka_recina.jpg",
    imageAlt: "Гръцка рецина",
    items: [
      { name: "Маламатина — Солун", weight: "0.50 л", price: toEur(14.00) },
      { name: "Кехлибари — Солун", weight: "0.50 л", price: toEur(14.00) },
      { name: "Сълзата на Бора — Солун", weight: "0.75 л", price: toEur(47.90), desc: "Уникална рецина от 100% сорт Асиртико — само в GUSTOSA!" },
    ],
  },
  {
    key: "vina_roze",
    label: "Гръцки розе вина",
    emoji: "🌹",
    image: "/photos/roze.jpg",
    imageAlt: "Гръцко розе вино",
    items: [
      { name: "Вивлия Хора — Кавала", weight: "0.75 л", price: toEur(47.90), desc: "100% Сира" },
      { name: "Алфа — Амидео, Флорина", weight: "0.75 л", price: toEur(48.90), desc: "100% гръцки сорт Ксиномавро" },
      { name: 'Ктима Коста Лазариди "Аметистос"', weight: "0.75 л", price: toEur(48.90), desc: "Драма — Мерло, Каберне Совиньон" },
      { name: "Ктима Коста Лазариди", weight: "0.75 л", price: toEur(48.90), desc: "Мерло, Свети Георги, Grenache" },
      { name: 'Геровасилиу "Rose" — Солун', weight: "0.75 л", price: toEur(52.90), desc: "100% гръцки сорт Ксиномавро" },
      { name: 'Тимиопулос "Rose" — Науса', weight: "0.75 л", price: toEur(55.90), desc: "100% гръцки сорт Ксиномавро" },
    ],
  },
  {
    key: "vina_cherveni",
    label: "Гръцки червени вина",
    emoji: "🍷",
    image: "/photos/cherveni_vina.jpg",
    imageAlt: "Гръцко червено вино",
    items: [
      { name: "Вивлия Хора — Кавала", weight: "0.75 л", price: toEur(53.90), desc: "Мерло, Каберне Совиньон, Свети Георги" },
      { name: 'Вивлия Хора "Етос" Grand Reserve 2010', weight: "0.75 л", price: toEur(189.00), desc: "Кавала — гръцки сорт Свети Георги" },
      { name: '"Аметистос" Коста Лазариди', weight: "0.75 л", price: toEur(51.90), desc: "Драма — Мерло, Каберне Совиньон, Свети Георги" },
      { name: 'Аметистос Кава "Коста Лазариди"', weight: "0.75 л", price: toEur(68.90), desc: "100% Каберне Franc" },
      { name: 'Магико Вуно "Нико Лазариди"', weight: "0.75 л", price: toEur(48.90), desc: "Драма — Каберне Совиньон и Каберне Фран" },
      { name: 'Геровасилиу "Купаж" — Солун', weight: "0.75 л", price: toEur(48.90), desc: "Мерло, Лимно, Сира" },
      { name: 'Ктима Алфа "Ксимонавро"', weight: "0.75 л", price: toEur(52.90) },
    ],
  },
  {
    key: "bezalkoholni",
    label: "Безалкохолни и бира",
    emoji: "🥤",
    image: "/photos/bira.jpg",
    imageAlt: "Напитки",
    items: [
      { name: "Минерална вода Девин, Банкя", weight: "0.5 л", price: toEur(3.99) },
      { name: 'Гръцка мин. вода "Иоли" — стъкло', weight: "1 л", price: toEur(4.99) },
      { name: 'Гръцка мин. вода "Теони" — стъкло', weight: "1 л", price: toEur(5.99) },
      { name: 'Гръцка газирана вода "Сурoti"', weight: "0.25 л", price: toEur(3.99) },
      { name: "Гръцка портокалада /Vikos/", weight: "0.33 л", price: toEur(3.99) },
      { name: "Кока Кола, Кола Zero", weight: "0.25 л", price: toEur(3.99) },
      { name: "Фанта портокал/лимон", weight: "0.25 л", price: toEur(3.99) },
      { name: "Спрайт, Тоник, Сода", weight: "0.25 л", price: toEur(3.99) },
      { name: 'Сок "Капи" (портокал, праскова, ябълка)', weight: "0.25 л", price: toEur(3.99) },
      { name: 'Студен чай лимон "Fuze"', weight: "0.25 л", price: toEur(3.99) },
      { name: "Фреш портокал", weight: "0.3 л", price: toEur(5.99) },
      { name: "Фрапе", weight: "0.3 л", price: toEur(5.99) },
      { name: "Айрян", weight: "0.25 л", price: toEur(3.99) },
      { name: 'Наливна бира "Mythos"', weight: "0.33 л", price: toEur(5.29) },
      { name: 'Наливна бира "Mythos"', weight: "0.5 л", price: toEur(6.89) },
      { name: "Ролинг Рок", weight: "0.33 л", price: toEur(4.89) },
      { name: "Mythos Дарк", weight: "0.33 л", price: toEur(5.29) },
      { name: "Корона", weight: "0.5 л", price: toEur(5.29) },
      { name: "Старопрамен", weight: "0.5 л", price: toEur(5.29) },
      { name: "Хайнекен", weight: "0.5 л", price: toEur(5.59) },
      { name: 'Гръцка "Алфа"', weight: "0.33 л", price: toEur(4.89) },
      { name: "Гръцка Кайзер Pilsner", weight: "0.5 л", price: toEur(6.99) },
      { name: 'Гръцка "Мамос"', weight: "0.33 л", price: toEur(6.99) },
      { name: "Клаустхалер (безалкохолна)", weight: "0.33 л", price: toEur(5.59) },
      { name: "Ред Бул", weight: "0.25 л", price: toEur(5.99) },
      { name: "Ред Бул без захар", weight: "0.25 л", price: toEur(5.99) },
    ],
  },
  {
    key: "topli_napitkи",
    label: "Топли напитки",
    emoji: "☕",
    image: "/photos/g10.jpg",
    imageAlt: "Кафе",
    items: [
      { name: 'Еспресо "Или" 100% арабика', weight: "1 бр.", price: toEur(3.99) },
      { name: 'Еспресо "Лаваца" 100% арабика', weight: "1 бр.", price: toEur(3.99) },
      { name: "Еспресо с мляко", weight: "1 бр.", price: toEur(4.49) },
      { name: "Каничка мляко", weight: "40 мл", price: toEur(2.29) },
      { name: "Гръцко кафе на джезве", weight: "1 бр.", price: toEur(3.99) },
      { name: "Чай — плодов, билков", weight: "1 бр.", price: toEur(3.99) },
    ],
  },
  {
    key: "deserti",
    label: "Десерти",
    emoji: "🍯",
    image: "/photos/menu_desert.jpg",
    imageAlt: "Десерти",
    items: [
      { name: 'Солунска крем пита "Бугача"', weight: "350 г", price: toEur(11.99) },
      { name: "Баклава", weight: "1 бр.", price: toEur(10.99) },
      { name: "Кадаиф", weight: "1 бр.", price: toEur(10.99) },
      { name: "Портокалова пита", weight: "1 бр.", price: toEur(10.99) },
      { name: "Солунска Тригуна — ново!", weight: "1 бр.", price: toEur(10.99) },
      { name: "Крем Банофи /Special/", weight: "1 бр.", price: toEur(10.99) },
      { name: "Шоколадов мус", weight: "1 бр.", price: toEur(10.99) },
      { name: "Топка ванилов сладолед", weight: "1 бр.", price: toEur(3.99) },
    ],
    note: "Нашите десерти са от една от най-добрите сладкарници в Гърция.",
  },
];

export function MenuPreview() {
  const [active, setActive] = useState(categories[0].key);
  const cat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs text-accent font-semibold mb-4">Менюто</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Вкусове от Егейско море</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Прясна дива риба и морски дарове, доставяни директно от Гърция на всеки два дена.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                active === c.key
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-background text-foreground hover:bg-sand"
              }`}
            >
              <span>{c.emoji}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>

        {/* Menu panel */}
        <div className="mt-10 grid md:grid-cols-5 gap-6 items-start">
          {/* Food photo */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-warm relative group sticky top-24">
            <img
              key={cat.key}
              src={cat.image}
              alt={cat.imageAlt}
              className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </span>
            </div>
          </div>

          {/* Items list */}
          <div className="md:col-span-3 bg-background rounded-2xl border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {cat.items.map((item, i) => (
                <div key={i} className="px-5 py-3.5 hover:bg-secondary/60 transition-colors">
                  <div className="flex justify-between gap-3 items-start">
                    <div className="min-w-0">
                      <span className="font-semibold text-foreground leading-snug">{item.name}</span>
                      {item.weight && (
                        <span className="ml-2 text-xs text-muted-foreground">{item.weight}</span>
                      )}
                      {item.desc && (
                        <div className="text-xs text-muted-foreground mt-0.5 italic">{item.desc}</div>
                      )}
                    </div>
                    <div className="font-bold text-primary whitespace-nowrap shrink-0 pt-0.5 text-sm">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {cat.note && (
              <div className="px-5 py-3.5 border-t border-border bg-accent/10">
                <p className="text-xs text-muted-foreground italic">{cat.note}</p>
              </div>
            )}
            <div className="px-5 py-3 border-t border-border bg-secondary/40">
              <p className="text-xs text-muted-foreground">
                * Цените са в евро и включват ДДС.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
