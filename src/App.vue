<template>
  <v-app>
    <v-app-bar
      app
      dense
      class="primary"
      dark
      style="z-index: 1000"
    >
      <v-toolbar-title>
        {{ currentLocale.title }}
      </v-toolbar-title>
      <template v-slot:extension>
        <v-tabs
                color="secondary"
                slider-color="secondary"
                v-model="state"
                class="white--text"
                align-with-title
        >
          <v-tab>
            <v-icon medium>mdi-home</v-icon>
            <span class="ml-2 d-none d-sm-flex">{{ currentLocale.menu.home }}</span>
          </v-tab>
          <v-tab>
            <v-icon medium>mdi-briefcase</v-icon>
            <span class="ml-2 d-none d-sm-flex">{{ currentLocale.menu.projects }}</span>
          </v-tab>
          <v-tab>
            <v-icon medium>mdi-card-account-phone</v-icon>
            <span class="ml-2 d-none d-sm-flex">{{ currentLocale.menu.contacts }}</span>
          </v-tab>
        </v-tabs>

        <v-menu
                transition="slide-y-transition"
                bottom
                dark
        >
          <template v-slot:activator="{ on }">
            <v-btn
                    fab
                    color="secondary"
                    bottom
                    right
                    absolute
                    v-on="on"
            >
              <v-icon medium>mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                    :key="1"
                    @click="currentLocale = localeEn"
            >
              <v-list-item-title>En</v-list-item-title>
            </v-list-item>
            <v-list-item
                    :key="2"
                    @click="currentLocale = localeRu"
            >
              <v-list-item-title>Ru</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main>
      <v-container v-if="state===0">
        <div v-if="currentLocale===localeRu"> <!--    РУССКАЯ ЛОКАЛИЗАЦИЯ    -->
          <h1 class="text-h2 mt-10">Горовов Сергей Николаевич</h1>
          <h2 class="text-h5 mb-6 text--secondary font-weight-light">Начинающий программист</h2>
          <p class="body-1">
            Занимаюсь программированием уже долгое время. Люблю новые технологии, языки и фреймворки. Пишу на
            JavaScript, Python и Go, но не останавливаюсь только на этом. На моем профиле в 
            <v-hover v-slot:default="{ hover }">
              <a
                      href="https://github.com/goserg"
                      :class="hover ? 'font-weight-bold' : 'text-decoration-none font-weight-bold'"
              >
                Github
              </a>
            </v-hover>
             и на странице
            <v-hover v-slot:default="{ hover }">
            <a
                    href="#"
                    @click="state=1"
                    :class="hover ? 'font-weight-bold' : 'text-decoration-none font-weight-bold'"
            >
              проекты</a></v-hover> можно посмотреть мои учебные и тестовые разработки, например странички на чистом JavaScript и на Vue.js,
              игру тетрис на Python, сервер с бекендом на Django для записи денег прописью, API на Go + Postgresql и много других.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Технологии</h3>
          <p class="body-1">
            JavaScript, Vue.JS, HTML/CSS, SCSS, Python, Django, Go, ООП, Структуры данных, Git, Postgresql, Docker.
          </p>
          <p class="body-1">
            Знаком так же с Haskell, Java, Bootstrap, React, Git Flow, PEP8, SQL, Design Patterns.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Дополнительные навыки</h3>
          <p class="body-1">
            Свободно владею английским, легко обучаюсь.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Обазование</h3>
          <p class="body-1">
            2005 – 2010<br>
            Южно-Российский Государственный Технический Университет (НПИ) Инженер
            по специальности Энергообеспечение предприятий.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Опыт работы</h3>
          <p class="body-1">
            2019 – ...<br>
            Инженер конструктор в ПАО "Криогенмаш". Разработка конструкторской
            документации для проекта Международного Экспериментального Термоядерного
            Реактора (ITER), разработка 3D моделей в CATIA, курирование субподрядчиков.
          </p>
          <p class="body-1">
            2010 – 2019<br>
            Инженер конструктор в ОАО "ТРТранс" (Технологии Рельсового Транспорта).
            Разработка конструкторской документации на электрический монтаж различных
            электровозов, разработка 3D моделей в CATIA, авторский надзор за производством.
          </p>
        </div>
        <div lang="en" v-if="currentLocale===localeEn"> <!--    АНГЛИЙСКАЯ ЛОКАЛИЗАЦИЯ    -->
          <h1 class="text-h2 mt-10">Gorovov Sergey</h1>
          <h2 class="text-h5 mb-6 text--secondary font-weight-light">Junior programmer</h2>
          <p class="body-1">
            I have been programming for a long time. I love to learn new technologies, languages and frameworks.
            I am coding in JavaScript, Python and Go, but I am not stopping only at these languages.
            On my
            <v-hover v-slot:default="{ hover }">
              <a
                      href="https://github.com/goserg"
                      :class="hover ? 'font-weight-bold' : 'text-decoration-none font-weight-bold'"
              >
                Github
              </a>
            </v-hover>
            and at the
            <v-hover v-slot:default="{ hover }">
              <a
                      href="#"
                      @click="state=1"
                      :class="hover ? 'font-weight-bold' : 'text-decoration-none font-weight-bold'"
              >
                projects</a></v-hover> section you can see my academic and test projects
                like web pages in vamila JS/HTML/CSS, Vue.js web pages, tetris game on Python, Django backend server for
                numbers to words money converting, Go API with Postgres DB and Docker, and many others.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Technologies</h3>
          <p class="body-1">
            JavaScript, Vue.JS, HTML/CSS, SCSS, Python, Django, Go, OOP, Data structures, Git, Postgresql, Docker.
          </p>
          <p class="body-1">
            Familiar with Haskell, Java, Bootstrap, React, Git Flow, PEP8, SQL, Design Patterns.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Additional skills</h3>
          <p class="body-1">
            I am fluent in English, and I am a quick learner.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Education</h3>
          <p class="body-1">
            2005 – 2010<br>
            South Russian State Technical University (NPI)
            Engineer by specialty Energy supply for the industry.
          </p>
          <h3 class="text-h4 mt-10 mb-4">Work experience</h3>
          <p class="body-1">
            2019 – ...<br>
            Designer engineer in PJSC "Cryogenmash".
            Development of engineering documentation for the International Thermonuclear
            Experimental Reactor (ITER) project, design of 3D models in CATIA,
            supervision of subcontractors.
          </p>
          <p class="body-1">
            2010 – 2019<br>
            Design engineer in JSC "TRTrans" (Railway Transport Technologies).
            Development of engineering documentation for electric mounting of
            the electric locomotives of various types, design of 3D models in
            CATIA, designer supervision of the manufacturing.
          </p>
        </div>
        <v-btn
                tile
                class="primary mt-10 mb-4"
                :href="currentLocale===localeRu ? 'gorovov.pdf' : 'gorovov_eng.pdf'"
        >
          <v-icon large>mdi-file-pdf</v-icon>{{ currentLocale===localeRu ? 'скачать' : 'download'}} pdf
        </v-btn>
      </v-container>

      <div class="grid" v-if="state===1">
        <v-card
                v-for="project in projects"
                :key="project.name"
                max-width="344"
                tile
        >
          <div style="position: absolute; z-index: 100;" v-if="project.inProgress">
            {{currentLocale===localeRu ? 'В РАЗРАБОТКЕ' : 'WORK IN PROGRESS'}}
          </div>
          <v-img v-if="project.img !== ''" :src="project.img" contain height="300px"></v-img>
          <v-card-title
                  class="primary mb-4 white--text"
          >
            {{ currentLocale === localeRu ? project.nameRu : project.nameEn }}
            <v-icon class="white--text" v-for="icon in project.icons" :key="icon">{{icon}}</v-icon>
          </v-card-title>
          <v-card-text>
            {{ currentLocale === localeRu ? project.textRu : project.textEn }}
          </v-card-text>
          <v-card-actions>
            <a
                    v-if="project.github !== ''"
                    :href="project.github"
                    target="_blank"
                    class="text-decoration-none"
            >
              <v-btn color="primary" text> <v-icon>mdi-github</v-icon>github </v-btn>
            </a>
            <a
                    v-if="project.page !== ''"
                    :href="project.page"
                    target="_blank"
                    class="text-decoration-none"
            >
              <v-btn color="primary" text >
                <v-icon>mdi-web</v-icon>
                {{ currentLocale===localeRu ? 'сайт' : 'website' }}
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </div>

      <v-container v-if="state===2">
        <v-card
                shaped
                class="mx-auto"
                max-width="344"
        >
          <v-card-title class="primary mb-4 white--text">{{ currentLocale.contacts }}</v-card-title>
          <v-card-text>
            <v-icon large>mdi-phone</v-icon>
            +7(977)961-60-09
          </v-card-text>
          <v-card-text>
            <v-icon large>mdi-email</v-icon>
            gor-serg@bk.ru
          </v-card-text>
          </v-card>
      </v-container>
    </v-main>
    <v-footer>
      <v-col
              class="text-center"
              cols="12"
      >
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({

    state: "1",
    localeRu: {
      title: "Горовов Сергей",
      menu: {
        home: "Главная",
        projects: "Проекты",
        contacts: "Контакты",
      },
      contacts: "Контакты",
    },
    localeEn: {
      title: "Gorovov Sergey",
      menu: {
        home: "Home",
        projects: "Projects",
        contacts: "Contacts",
      },
      contacts: "Contacts",
    },
    projects: [
      {
        nameRu: "Микроблог на Go",
        nameEn: "Go microblog",
        textRu: "Микроблог с бекендом на Go, БД Postgres. Релизована регистрация и авторизация " +
                "с помощью JWT токенов.",
        textEn: "Microblog with Go backend and Postgres BD. Working registration and authorization " +
                "with JWT tokens.",
        img: "https://raw.githubusercontent.com/goserg/go-blog/main/img/sagdb_reg.gif",
        github: "https://github.com/goserg/go-blog",
        page: "https://sagdb.herokuapp.com/",
        icons: ['mdi-language-go', 'mdi-database'],
        inProgress: false,
      },
      {
        nameRu: "Go merchant API",
        nameEn: "Go merchant API",
        textRu: "API для получения от поставщиков xlsx файлов, парсинга и добавления/обновления/поиска " +
                "товаров в базе данных. Работает в синхронном и асинхронном режимах (предоставляет id задания " +
                "по которому можно посмотреть результаты выполнения позже). Go, Postgres, Docker",
        textEn: "API for sellers to parse xlsx files and adding/updating/serching " +
                "goods at the data base. can operate in synchronous and asynchronous modes (returning task id " +
                "which allows you to check results later). Go, Postgres, Docker",
        img: "",
        github: "https://github.com/goserg/Golang-merchant-API",
        page: "",
        icons: ['mdi-language-go', 'mdi-database', 'mdi-api', 'mdi-docker'],
        inProgress: false,
      },
      {
        nameRu: "Конвертатор денег в пропись",
        nameEn: "Cookbook",
        textRu: "Тестовое задание на вакансию python backend. " +
                "Сервис для перевода денег из цифр в пропись с добавлением НДС. Парсер " +
                "написан на python без использования библиотек. Покрытие тестами. Django + Sqlite3",
        textEn: "Test task for python backend. " +
                "Service for converting money from numbers to words, adding vat. Parser " +
                "written in python without any libraries. Unit and functional tests. Django + Sqlite3",
        img: "https://raw.githubusercontent.com/goserg/megafon-test/main/screenshots/v1.png",
        github: "https://github.com/goserg/megafon-test",
        page: "https://megafon-test.herokuapp.com/",
        icons: ['mdi-language-python', 'mdi-language-html5', 'mdi-language-css3'],
        inProgress: false,
      },
      {
        nameRu: "Кулинарная книга",
        nameEn: "Cookbook",
        textRu: "Простая кулинарная книга на Vue.js + Firebase backend. " +
                "Авторизация через google, просмотр, добавление (после авторизации) рецептов, " +
                "редактирование своих рецептов. Изучение возможностей Firebase. Не адаптировано для десктопа.",
        textEn: "Simple cookbook via Vue.js + Firebase backend. " +
                "Google authentication, viewing, adding (after logging in) recipes, " +
                "editing your own recipes. Exploring Google Firebase. Not adapted for desktop",
        img: "https://raw.githubusercontent.com/goserg/wehavetocook/master/screenshots/v1.png",
        github: "https://github.com/goserg/wehavetocook",
        page: "https://gorovov.ru/wehavetocook/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-google', 'mdi-language-html5', 'mdi-language-css3'],
        inProgress: false,
      },
      {
        nameRu: "Тестовое задание Funbox",
        nameEn: "Funbox test",
        textRu: "Тестовое задание на вакансию Frontend developer компании Funbox.ru. " +
                "Адаптивность, поддержка Firefox, Opera, Chrome, IE11",
        textEn: "Test task for Frontend developer position for Funbox.ru. " +
                "Responsive design, Firefox, Opera, Chrome and IE11 support",
        img: "https://raw.githubusercontent.com/goserg/funbox-test/master/screenshots/v1.png",
        github: "https://github.com/goserg/funbox-test",
        page: "https://gorovov.ru/funbox-test/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
        inProgress: false,
      },
      {
        nameRu: "Фото альбом 2",
        nameEn: "Photo album 2",
        textRu: "Фотоальбом, с возможностью оставить комментарий (не сохраняется, только фронтенд), " +
                "поддержка мобильной версии. Без использования библиотек компонентов. Протестировано на Firefox и Chrome",
        textEn: "Photo album, commentary is working (without save, fromtend only), " +
                "mobile support. No compopents libraries used. Tested on Firefox and Chrome",
        img: "https://raw.githubusercontent.com/goserg/photo-album-2/master/screenshots/main.png",
        github: "https://github.com/goserg/photo-album-2",
        page: "https://gorovov.ru/photo-album-2/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
        inProgress: false,
      },
      {
        nameRu: "Магазин",
        nameEn: "Shop",
        textRu: "Учебный проект - магазин с использованием Vue CDN. Работает добавление " +
                "товара в корзину(и удаление), пагинация, поиск и фильтры по цене, бренду " +
                "и т.д. (написано в Notepad++)",
        textEn: "Study project - shop on Vue SDN. Working adding products to the cart(and " +
                "removing) pagination, search and filtering by price, brand etc. " +
                "(written using Notepad++)",
        img: "https://raw.githubusercontent.com/goserg/sa-shop/gh-pages/screenshots/last.png",
        github: "https://github.com/goserg/sa-shop",
        page: "https://gorovov.ru/sa-shop/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
        inProgress: true,
      },
      {
        nameRu: "Крестики нолики",
        nameEn: "Tic tac toe",
        textRu: "JavaScript+Vue.js CLI, HTML/CSS",
        textEn: "JavaScript+Vue.js CLI, HTML/CSS",
        img: "https://raw.githubusercontent.com/goserg/tic-tac-toe-vue/master/screenshots/v01.png",
        github: "https://github.com/goserg/tic-tac-toe-vue",
        page: "https://gorovov.ru/tic-tac-toe-vue/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
      },
      {
        nameRu: "Судоку",
        nameEn: "Sudoku",
        textRu: "JavaScript+Vue.js CLI, HTML/CSS",
        textEn: "JavaScript+Vue.js CLI, HTML/CSS",
        img: "https://raw.githubusercontent.com/goserg/sudoku-vue/master/screenshots/v01.png",
        github: "https://github.com/goserg/sudoku-vue",
        page: "https://gorovov.ru/sudoku-vue/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
      },
      {
        nameRu: "Фотоальбом",
        nameEn: "Photo Album",
        textRu: "JavaScript+Vue.js, HTML/CSS",
        textEn: "JavaScript+Vue.js, HTML/CSS",
        img: "https://raw.githubusercontent.com/goserg/photo-album/master/screenshots/v01.png",
        github: "https://github.com/goserg/photo-album",
        page: "https://gorovov.ru/photo-album/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
      },
      {
        nameRu: "Формы регистрации и логина",
        nameEn: "Register/login forms",
        textRu: "JavaScript+Vue.js CLI, HTML/CSS",
        textEn: "JavaScript+Vue.js CLI, HTML/CSS",
        img: "https://raw.githubusercontent.com/goserg/register-login-form/master/screenshots/v01.png",
        github: "https://github.com/goserg/register-login-form",
        page: "https://gorovov.ru/register-login-form/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
      },
      {
        nameRu: "Экранная клавиатура",
        nameEn: "Screen keyboard",
        textRu: "JavaScript+Vue.js, HTML/CSS",
        textEn: "JavaScript+Vue.js, HTML/CSS",
        img: "https://raw.githubusercontent.com/goserg/keyboard/gh-pages/screenshots/v01.png",
        github: "https://github.com/goserg/keyboard",
        page: "https://gorovov.ru/keyboard/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
      },
      {
        nameRu: "Поле чудес",
        nameEn: "Wheel of Fortune",
        textRu: "JavaScript+Vue.js, HTML/CSS",
        textEn: "JavaScript+Vue.js, HTML/CSS",
        img: "https://raw.githubusercontent.com/goserg/wof/master/screenshots/v01.png",
        github: "https://github.com/goserg/wof",
        page: "https://gorovov.ru/wof/",
        icons: ['mdi-language-javascript', 'mdi-vuejs', 'mdi-language-html5', 'mdi-language-css3'],
      },
      {
        nameRu: "Простой калькулятор",
        nameEn: "Simple Calculator",
        textRu: "JavaScript/HTML/CSS",
        textEn: "JavaScript/HTML/CSS",
        img: "https://raw.githubusercontent.com/goserg/SimpleCalc/master/img/v0.1_screenshot.PNG",
        github: "https://github.com/goserg/SimpleCalc",
        page: "https://gorovov.ru/SimpleCalc/index.html",
        icons: ['mdi-language-javascript', 'mdi-language-html5', 'mdi-language-css3'],
      },
      {
        nameRu: "Тетрис",
        nameEn: "Tetris",
        textRu: "Поддержка контроллера XBOX 360. " +
                "Несколько вариантов цветового оформления. " +
                "Два варианта внешнего вида тайлов. " +
                "Доска лидеров. " +
                "Сохранение до 4 имён для быстрого выбора. ",
        textEn: "XBOX 360 controller support. " +
                "Few color schemas. " +
                "Two variants of tile look. " +
                "Leader board. " +
                "Saving up to 4 player names for quick selection. ",
        img: "https://raw.githubusercontent.com/goserg/Tetris_pygame/master/img/0.7-alpha_01.png",
        github: "https://github.com/goserg/Tetris_pygame",
        page: "",
        icons: ['mdi-language-python', 'mdi-gamepad-variant-outline'],
      },
      {
        nameRu: "Визуализация сортировок",
        nameEn: "Sorting visualization",
        textRu: "Визуалтзация некоторых видов сотрировки с использованием модуля Pygame. " +
                "Виды сортировок: " +
                "Сортировка пузырьком, " +
                "Гномья сортировка, " +
                "Сортировка шейкером, " +
                "Сортировка выбором, " +
                "Сортировка вставками",
        textEn: "Visualization of some types of sorting using the Pygame module." +
                "Types of sorting: " +
                "bubble sort, " +
                "gnome sort, " +
                "shaker sort, " +
                "selection sort, " +
                "insertion sort",
        img: "https://raw.githubusercontent.com/goserg/Sorting_visualization/master/img/shaker_sort.gif",
        github: "https://github.com/goserg/Sorting_visualization",
        page: "",
        icons: ['mdi-language-python'],
      },
      {
        nameRu: "Анализатор текста",
        nameEn: "Text analyser",
        textRu: "Использование Yandex mystem3. " +
                "Анализ частоты встречаемости слов в тексте. " +
                "Создание html кода интерактивной диаграммы.",
        textEn: "Using Yandex mystem3. " +
                "Analysis of the frequency of occurrence of words in the text. " +
                "Creating html code for an interactive chart.",
        img: "https://raw.githubusercontent.com/goserg/text_analizer/master/img/v0.1_screenshot.PNG",
        github: "https://github.com/goserg/text_analizer",
        page: "",
        icons: ['mdi-language-python'],
      },
      {
        nameRu: "Тестер скорости кода",
        nameEn: "Code SpeedTest",
        textRu: "Небольшой модуль для сравнения скорости работы алгоритмов с возможностью построения графика в MatPlotLib.",
        textEn: "A small module for comparing the speed of algorithms with the ability to plot in MatPlotLib.",
        img: "https://raw.githubusercontent.com/goserg/code_speed_test/master/img/screenshot%20v0.1.png",
        github: "https://github.com/goserg/code_speed_test",
        page: "",
        icons: ['mdi-language-python'],
      },
      {
        nameRu: "Структуры данных на Python",
        nameEn: "Python Data Structures",
        textRu: "Учебный проект в котором я реализовал некоторые базовые структуры данных, такие как: " +
                "динамический массив, " +
                "стек, " +
                "очередь, " +
                "связные списки(односвязный, двусвязный, кольцевой), " +
                "куча, " +
                "хэш таблица. " +
                "Особенности: " +
                "тесты unittest, " +
                "поддержка протокола изменяемых последовательностей, " +
                "поддержка операторов []",
        textEn: "A training project in which I implemented some basic data structures, such as: " +
                "dynamic array, " +
                "stack, " +
                "queue, " +
                "linked lists(singly linked, doubly linked, circular), " +
                "heap, " +
                "hash table. " +
                "Features: " +
                "unittest, " +
                "support of mutable sequences protocol, " +
                "support of [] operator",
        img: "",
        github: "https://github.com/goserg/Python-Data-Structures",
        page: "",
        icons: ['mdi-language-python'],
      }
    ],
    currentLocale: undefined,
  }),
  created() {
    this.currentLocale = this.localeRu;
  },
  methods: {
    goTo (place) {
      this.state = place
    }
  },
  watch: {
    state() {
      window.scrollTo({top: 0});
    }
  },
};
</script>

<style lang="scss">
  .grid {
    margin: 50px auto;
    max-width: max-content;
    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 50px;
  }

  .v-tab:not(.v-tab--active) *{
    color: #fff !important;
  }

  *::selection {
    background: #80CBC4;
  }
  a::selection {
    color: #fff;
  }

  @media screen and (max-width: 1600px){
    .grid {
      grid-template-columns: repeat(3, max-content);
    }
  }
  @media screen and (max-width: 1200px){
    .grid {
      grid-template-columns: repeat(2, max-content);
    }
  }
  @media screen and (max-width: 800px){
    .grid {
      grid-template-columns: max-content;
    }
  }
</style>
