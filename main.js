$(function () {

    var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#808080";
defaultThemeColors["$main-hover-color"] = "red";
defaultThemeColors["$text-color"] = "black";
defaultThemeColors["$header-color"] = "red";

defaultThemeColors["$header-background-color"] = "red";
defaultThemeColors["$body-container-background-color"] = "#DCDCDC";

Survey
    .StylesManager
    .applyTheme();
var a;
var b;
var c;
var surveyJSON = {
    showCompletedPage:false,
    
 
 locale: "ru",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "dropdown",
     name: "question1",
     title: {
      ru: "У Вашей компании есть сайт?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question2",
     title: {
      ru: "Вы используете платную рекламу в интернете?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question3",
     title: {
      ru: "Тратите на рекламу от 30 тыс. в месяц?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question4",
     title: {
      ru: "Вы находите и отключаете рекламные каналы, которые не приносят доход?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question5",
     title: {
      ru: "Занимаетесь ли Вы холодным обзвоном клиентов?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question6",
     title: {
      ru: "Ваша компания представлена в социальных сетях в виде групп и пабликов?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question7",
     title: {
      ru: "У Вашей компании проработан логотип и фирменный стиль?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question8",
     title: {
      ru: "Вы производили сегментацию Вашей целевой аудитории?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question9",
     title: {
      ru: "Есть ли у Вас партнёрская программа?"
     },
     choices: [
      {
       value: "7",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question10",
     title: {
      ru: "Используете ли Вы контентекстную рекламу Яндекс.Директ и Google Ads для поиска клиентов?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question11",
     title: {
      ru: "Используете ли Вы email-рассылку с бесплатными материалами?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question12",
     title: {
      ru: "Используете ли Вы приёмы вирусного маркетинга в соцсетях? (вирусные видео и посты)"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question13",
     title: {
      ru: "Используете ли Вы тизерную рекламу?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question14",
     title: {
      ru: "Иcпользуете ли Вы таргетированную рекламу в соцсетях?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question15",
     title: {
      ru: "Вы публикуете какие-то бесплатные материалы на сайте для повышения лояльности клиентов?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question16",
     title: {
      ru: "Общаетесь ли Вы с клиентами в тематической группе в соцсетях?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question17",
     title: {
      ru: "Вы ведёте блог со статьями для привлечения клиентов?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "2",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question18",
     title: {
      ru: "Вы отвечаете на вопросы потенциальных клиентов на тематических форумах?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question19",
     title: {
      ru: "Вы собираете и анализируете запросы клиентов на тематических сайтах? "
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question20",
     title: {
      ru: "Выступаете ли Вы со своей темой на конференциях и семинарах? "
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question21",
     title: {
      ru: "Вы используте аналитику сайта в Яндекс.Метрике или Google Analytics?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "0",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question22",
     title: {
      ru: "Вы проводите бесплатные акции, мероприятия, мастер-классы, конкурсы?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question23",
     title: {
      ru: "Вы проводите бесплатные акции, мероприятия, мастер-классы, конкурсы?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question24",
     title: {
      ru: "Вы используете чат-боты?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question25",
     title: {
      ru: "Вы ведете канал на ютубе?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question26",
     title: {
      ru: "Вы вовлекаете своих клиентов в игры (геймификация)?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question27",
     title: {
      ru: "Вы переманиваете своих клиентов у конкурентов?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question28",
     title: {
      ru: "В Вашей компании работают реферальные агенты за процент?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "0",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question29",
     title: {
      ru: "Вы проводите/участствуете в выставках и презентациях?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question30",
     title: {
      ru: "Вы проводите дегустации продукта/услуги?"
     },
     choices: [
      {
       value: "5",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    }
   ]
  },
  {
   name: "page2",
   elements: [
    {
     type: "dropdown",
     name: "question31",
     title: {
      ru: "Есть ли у Вас отдел продаж?"
     },
     choices: [
      {
       value: "2",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question32",
     title: {
      ru: "Проработаны ли скрипты продажи под каждый сегмент по телефону?"
     },
     choices: [
      {
       value: "2",
       text: {
        ru: "Да"
       }
      },
      {
       value: "2",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question33",
     title: {
      ru: "У Вас есть презентационные материалы для продаж?"
     },
     choices: [
      {
       value: "5",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question34",
     title: {
      ru: "У Вас проработана система мотивации персонала и KPI отдела продаж?"
     },
     choices: [
      {
       value: "5",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question35",
     title: {
      ru: "Вы используете CRM-системы для учёта движения клиентов по воронке продаж?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question36",
     title: {
      ru: "У Вас проработаны обучающие материалы для продавцов?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question37",
     title: {
      ru: "Проводите ли Вы регулярные тренинги продаж для персонала?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question38",
     title: {
      ru: "Вы разрабатываете (используете готовые) инструменты для роста продаж?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question39",
     title: {
      ru: "Тестируете ли Вы разыне варианты УТП для страниц Вашего сайта по количеству продаж?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question40",
     title: {
      ru: "Вы встречаетесь со своими клиентами лично?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "0",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question41",
     title: {
      ru: "Вы организуете акции в торговой точке или на сайте?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question42",
     title: {
      ru: "У Вас проработана база Ваших клиентов в электронном виде?"
     },
     choices: [
      {
       value: "3",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question43",
     title: {
      ru: "Предлагаете ли Вы свой товар/услугу через дилеров (посредников)?"
     },
     choices: [
      {
       value: "7",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question44",
     title: {
      ru: "У Вас есть система лояльности клиентов (дисконтные карты и прочее)?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question45",
     title: {
      ru: "Вы поздравляете постоянных клиентов с праздниками?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question46",
     title: {
      ru: "У Вас сформулировано уникальное торговое предложение?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question47",
     title: {
      ru: "Вы раздаете тестовые (пробные) версии продукта/услуги?"
     },
     choices: [
      {
       value: "9",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question48",
     title: {
      ru: "Ваши клиенты заинтересованы рекомендовать Вас?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question49",
     title: {
      ru: "Сформирована ли база Ваших подписчиков (электронная почта, телефон, соцсети)?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question50",
     title: {
      ru: "Вы проводите мотивационные мероприятия для сотрудников отдела продаж?"
     },
     choices: [
      {
       value: "9",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question51",
     title: {
      ru: "Сотрудничаете ли Вы с компанием, продукция которой дополняет Ваши товары или услуги?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question52",
     title: {
      ru: "Сотрудничаете ли Вы с благотворительными организациями?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question53",
     title: {
      ru: "Предоставляете ли Вы гарантии?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question54",
     title: {
      ru: "У Вас работает \"сарафанное радио\"?"
     },
     choices: [
      {
       value: "8",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "0",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    }
   ]
  },
  {
   name: "page3",
   elements: [
    {
     type: "dropdown",
     name: "question55",
     title: {
      ru: "У Вас свормирована продуктовая линейка (линейка услуг)?"
     },
     choices: [
      {
       value: "11",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question56",
     title: {
      ru: "Превосходит ли ожидания Ваших клиентов Ваш товар/услуга?"
     },
     choices: [
      {
       value: "11",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question57",
     title: {
      ru: "Вы проводите мероприятия по контролю качества Вашего товара/услуги?"
     },
     choices: [
      {
       value: "11",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question58",
     title: {
      ru: "Вы проводите мероприятия по улучшению качества Вашего товара/услуги?"
     },
     choices: [
      {
       value: "11",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question59",
     title: {
      ru: "Соответвует ли цена товара/услуги среднерыночной?"
     },
     choices: [
      {
       value: "9",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question60",
     title: {
      ru: "Вы осуществляете поставку товара/предоставление услуги в более сжатые сроки, чем средние по рынку?"
     },
     choices: [
      {
       value: "11",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question61",
     title: {
      ru: "Разработаны ли стандарты качества товара/услуги?"
     },
     choices: [
      {
       value: "7",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question62",
     title: {
      ru: "У Вас проработана система мотивации персонала и KPI сотрудников производства/отдела предоставления товара/услуги?"
     },
     choices: [
      {
       value: "8",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question63",
     title: {
      ru: "Вы (или Ваш директор, зам) проводите ежедневные планерки с ключевыми сотрудниками производства/ отдела предоставления товара/услуги?"
     },
     choices: [
      {
       value: "7",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question64",
     title: {
      ru: "Соблюдаются ли стандарты изготовления/предоставления товара/услуги?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question65",
     title: {
      ru: "Соответствует ли внешний вид, упаковка товара, фото и изображениям на Вашем сайте?"
     },
     choices: [
      {
       value: "5",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question66",
     title: {
      ru: "Разработан ли дизайн упаковки товара/услуги?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question67",
     title: {
      ru: "Соответствует ли описание на сайте и в других рекламных материалах реальным качествам товара/услуги?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question68",
     title: {
      ru: "Обеспечиваются ли стандарты продукта/услуги после его реализации?"
     },
     choices: [
      {
       value: "4",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    },
    {
     type: "dropdown",
     name: "question69",
     title: {
      ru: "Имеет ли необходимый опыт, знания и навыки персонал, участвующий в изготовлении/предоставлении товара/услуги?"
     },
     choices: [
      {
       value: "6",
       text: {
        ru: "Да"
       }
      },
      {
       value: "1",
       text: {
        ru: "Нет"
       }
      },
      {
       value: "1",
       text: {
        ru: "Думаю, что не требуется в моей нише"
       }
      }
     ]
    }
   ]
  }
 ]
}

 showCompletedPage: false;



function showResult(survey, sum1, sum2, sum3) {
    survey.onComplete.add(function (sender, options) {
        sender.mode = "display";
    });
var sum1 = 0;
var question = "question";
for (var i = 1; i < 30 + 1 ; i++) {
sum1 += parseInt(survey.getValue(question + i), 10);
}
a = sum1;


var sum2 = 0;
var question = "question";
for (var i = 30; i < 54 + 1 ; i++) {
sum2 += parseInt(survey.getValue(question + i), 10);
}
b = sum2;


var sum3 = 0;
var question = "question";
for (var i = 54; i < 69 + 1 ; i++) {
sum3 += parseInt(survey.getValue(question + i), 10);
}
c = sum3;




    var str = '<div id="container"><canvas id="myCanvas" width="1300" height="1200"></canvas></div>';

    $("#surveyContainer").replaceWith(str);
    drawCircles();
}

function drawCircles() {
    var canvas = document.getElementById("myCanvas");

paper.install(window);
paper.setup(canvas);


var canvas = document.getElementById("myCanvas");

paper.install(window);
paper.setup(canvas);


var triangle = new Path.RegularPolygon(new Point(300, 300), 3, 100);
triangle.rotate(180);

var text = new PointText({
    point: [100, 150],
    content: 'Представление   Привлечение',
    fillColor: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 25
});
var text = new PointText({
    point: [250, 400],
    content: 'Продажи',
    fillColor: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 25
});

var myCircle = new Path.Circle(triangle.getPointAt(173), (a));
myCircle.fillColor = '#FF0000';
myCircle.opacity = '0.8';

var anotherCircle = new Path.Circle(triangle.getPointAt(173 *2), (b));
anotherCircle.fillColor = '#696969';
anotherCircle.opacity = '0.8';

var yetAnotherCircle = new Path.Circle(triangle.getPointAt(0), (c));
yetAnotherCircle.fillColor = '#00008B';
yetAnotherCircle.opacity = '0.8';
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: showResult
});
});
