$(function() {
    // -- data_point 
    var multitouch = true;
    var Point_Mass = [{
        "point": {
            "id": "gost_chaika",
            "type": "active",
            "object_name": "Гостиница Чайка",
            "object_type": "infrastructure",
            "institution": "hotel",
            "right_infoblock_header":"ГОСТИНИЦА <br> ЧАЙКА",
            "description": "",
            "smal_description": " Гостиница «Чайка» расположена на берегу реки Волга.",
            "icon_url":           "img/icons/Hotel_for_map.svg",
            "active_icon_url" :   "img/icons/Hotel_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, <br> набережная Фадеева, 1/1",
            "phone": "+7 (960) 715-71-11 <br> +7 (48236) 3-29-33 — администратор",
            "time_worck": "Пн.- Чт. – 10:00 - 22:00 Пт.- Сб. – 10:00 - 24:00 Вс. – 10:00 - 22:00",
            "services": "Домашняя кухня, проведение свадеб, юбилеев, поминальные обеды",
            "maill": "info@chaika-kimry.ru",
            "map_pos_x":"-1388px",
            "map_pos_y":"-1121px",
            "position": {
                "top": "1522.5px",
                "left": "1836.5px"
            }
        }
    }, {
        "point": {
            "id": "gost_2_cap",
            "type": "active",
            "object_name": "Гостиница Два капитана",
            "object_type": "infrastructure",
            "institution": "hotel",
            "right_infoblock_header":"ГОСТИНИЦА <br>  ДВА КАПИТАНА",
            "description": "",
            "smal_description": "Гостиница Два капитана расположена в Яхт клубе города Кимры.",
            "icon_url": "img/icons/Hotel_for_map.svg",
            "active_icon_url" :   "img/icons/Hotel_for_map_active.svg",
            "addres": "Тверская область, г. Кимры ул. Красная горка, 11",
            "phone": "+7 (985) 233-47-21 <br>  +7 (48236) 3-24-93 — тел/факс",
            "time_worck": "",
            "services": "",
            "maill": "dvacapitana@mail.ru",
            "map_pos_x":"-1964px",
            "map_pos_y":"-217px",
            "position": {
                "top": "663.5px",
                "left": "2438.5px"
            }
        }
    }, {
        "point": {
            "id": "gost_berezka",
            "type": "active",
            "object_name": "Гостиница Березка",
            "object_type": "infrastructure",
            "institution": "hotel",
            "right_infoblock_header":"ГОСТИНИЦА <br> БЕРЕЗКА",
            "description": "",
            "smal_description": "Гостиница «Березка» расположенана левом берегу р. Волга",
            "icon_url": "img/icons/Hotel_for_map.svg",
            "active_icon_url" :   "img/icons/Hotel_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. 50 лет ВЛКСМ, д. 21",
            "phone": "+7 (48236) 4-24-59",
            "time_worck": "",
            "services": "",
            "maill": "gos.berezka@ya.ru",
            "map_pos_x":"-1690px",
            "map_pos_y":"-1725px",
            "position": {
                "top": "2096px",
                "left": "2201.5px"
            }
        }
    }, {

        "point": {
            "id": "g_savma",
            "type": "active",
            "object_name": "Гостиница Савма",
            "object_type": "infrastructure",
            "institution": "hotel",
            "right_infoblock_header":"ГОСТИНИЦА <br> САВМА",
            "description": "",
            "smal_description": "Гостиница «Савма» расположенана левом берегу р. Волга",
            "icon_url": "img/icons/Hotel_for_map.svg",
            "active_icon_url" :   "img/icons/Hotel_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. Чапаева, 5",
            "phone": " +7 (48236) 4-29-42 <br> +7 (48236) 4-24-80",
            "time_worck": "",
            "services": "",
            "maill": "",
            "map_pos_x":"-1642px",
            "map_pos_y":"-2436px",
            "position": {
                "top": "2823px",
                "left": "2130px"
            }
        }
    }, {
        "point": {
            "id": "c_calina",
            "object_name": "Кафе Калина",
            "object_type": "infrastructure",
            "institution": "cafe",
            "right_infoblock_header":"КАФЕ <br> КАЛИНА",
            "description": "",
            "smal_description": " ",
            "icon_url": "img/icons/Cafe_for_map.svg",
            "active_icon_url" :   "img/icons/Cafe_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. Урицкого, 14б",
            "phone": "+7 (48236) 2-22-12 <br> +7 (48236) 2-15-33",
            "time_worck": "Пн.- Чт. – 10:00 - 22:00 <br> Пт.- Сб. – 10:00 - 24:00",
            "services": "Европейская кухня, бизнес-ланч, доставка обедов, пиццы, банкеты, лаунж-бар",
            "map_pos_x":"-1136p",
            "map_pos_y":"-1128px",
            "position": {
                "top": "1476.5px",
                "left": "1593px"
            }
        }
    }, {
        "point": {
            "id": "c_stariy_gorod",
            "type": "active",
            "object_name": "Кафе Старый город",
            "object_type": "infrastructure",
            "institution": "cafe",
            "right_infoblock_header":"КАФЕ <br> СТАРЫЙ ГОРОД",
            "description": "",
            "smal_description": " ",
            "icon_url": "img/icons/Cafe_for_map.svg",
            "active_icon_url" :   "img/icons/Cafe_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. Володарского, д.9",
            "phone": "+7 (48236) 3-60-70",
            "time_worck": "Пн.- Чт. – 12:00 - 24:00 <br> Пт.- Сб. – 12:00 - 03:00",
            "services": "Домашняя кухня, проведение свадеб, юбилеев, поминальные обеды",
            "map_pos_x":"-1340px",
            "map_pos_y":"-1048px",
            "position": {
                "top": "1440.5px",
                "left": "1834.5px"
            }
        }
    }, {
        "point": {
            "id": "c_shemchushina",
            "type": "active",
            "object_name": "Кафе Жемчужина",
            "object_type": "infrastructure",
            "institution": "cafe",
            "right_infoblock_header":"КАФЕ <br> ЖЕМЧУЖИНА",
            "description": "",
            "smal_description": "",
            "icon_url": "img/icons/Cafe_for_map.svg",
            "active_icon_url" :   "img/icons/Cafe_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. Володарского, д.9",
            "phone": " +7 (48236) 3-60-70",
            "time_worck": "Пн.- Чт. – 12:00 - 24:00 <br> Пт.- Сб. – 12:00 - 03:00",
            "services": "Европейская кухня, проведение свадеб, юбилеев, живая музыка, бильярд, сауна, поминальные обеды",
            "map_pos_x":"-1682px",
            "map_pos_y":"-1800px",
            "position": {
                "top": "2228px",
                "left": "2156px"
            }
        }
    }, {
        "point": {
            "id": "mag_nix",
            "type": "active",
            "object_name": "Обувной магазин Никс",
            "object_type": "infrastructure",
            "right_infoblock_header":"ОБУВНОЙ МАГАЗИН <br> НИКС",
            "description": "",
            "smal_description": "Закрытое акционерное общество 'Производственное обувное предприятие' 'Никс'",
            "icon_url": "img/icons/Shoe_shop_for_map.svg",
            "active_icon_url" :   "img/icons/Shoe_shop_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. Карла Либкнехта, д. 21",
            "phone": " + 8 (48236) 31052 <br> + 8 (48236) 22849",
            "time_worck": "ежедневно, 9:00–20:00",
            "services": "",
            "map_pos_x":"-1161px",
            "map_pos_y":"-1051px",
            "position": {
                "top": "1441px",
                "left": "1652px"
            }
        }
    }, {
        "point": {
            "id": "mag_capriz",
            "type": "active",
            "object_name": "Обувной магазин Каприз",
            "object_type": "infrastructure",
            "right_infoblock_header":"ОБУВНОЙ МАГАЗИН <br>  КАПРИЗ",
            "description": "",
            "smal_description": "Общество с ограниченной ответственностью «Обувная фабрика «КАПРИЗ — ТМ»",
            "icon_url": "img/icons/Shoe_shop_for_map.svg",
            "active_icon_url" :   "img/icons/Shoe_shop_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. Кирова д. 30, к. 16",
            "phone": " + 8 (48236) 3-17-58 <br> + 8 (48236) 3-26-83",
            "time_worck": "ежедневно, 9:00–20:00",
            "services": "",
            "map_pos_x":"-1269px",
            "map_pos_y":"-836px",
            "position": {
                "top": "1276px",
                "left": "1730px"
            }
        }
    }, {
        "point": {
            "id": "ob_mag_obuf",
            "type": "active",
            "object_name": "Обувной магазин обувь",
            "object_type": "infrastructure",
            "right_infoblock_header":"ОБУВНОЙ МАГАЗИН <br>  ОБУВЬ",
            "description": "«Село Кимры широко раскинулось вдоль высокого, обрывистого левого берега Волги… Взоры проезжающих по Волге невольно устремляются на это красивое, богатое село. Почти по самой середине села протекает речка Кимерка, делящая Кимры на две части. Обе части села, расположенные на совершенно ровной местности, разбиты вдоль и поперек на кварталы прямыми улицами, из которых половина вымощена, а некоторые усажены деревьями.»",
            "smal_description": "",
            "icon_url": "img/icons/Shoe_shop_for_map.svg",
             "active_icon_url" :   "img/icons/Shoe_shop_for_map_active.svg",
            "addres": "Тверская область, г. Кимры, ул. Володарского, 35а, ТЦ Олимп",
            "phone": "+ 7 (48236) 2-12-07 ",
            "time_worck": "ежедневно, 9:00–20:00",
            "map_pos_x":"-1422px",
            "map_pos_y":"-831px",
            "position": {
                "top": "1245px",
                "left": "1919px"
            }
        }
    }, {
        "point": {
            "id": "vozn_cercov",
            "type": "active",
            "object_name": "Вознесенская церковь",
            "object_type": "tourist_facilities",
            "right_infoblock_header":"ВОЗНЕСЕНСКАЯ <br> ЦЕРКОВЬ",
            "description": {

                "1": "   Первое упоминание о храме мы находим в описании Кимрской дворцовой волости. В 1635 году царь Михаил Федорович пожаловал село Кимры боярину Алексею Михайловичу Львову за заслуги перед Отечеством (за посольскую службу). В описании читаем, что боярину Львову дано: “…село Кимра на реке на Волге да на речке на Кимерке, а в селе церковь Вознесение Господа нашего Иисуса Христа древяна клетцки с папертми, а в церкви деисус и двери царские и образы месные и ризы и книги и колокола…”. По названию церкви и все Заречье стало называться Вознесенской стороной.   В 1677 году в селе Кимра на месте прежней обветшавшей или сгоревшей от пожара была построена новая деревянная Вознесенская церковь с двумя приделами во имя Петра и Павла и во имя Димитрия Солунского.",
                
                "2": "    Внешний вид храма был традиционен для своего времени: трехсветный четверик, увенчанный декоративным пятиглавием с полуциркулярной апсидой. Трапезная – двусветная, прямоугольная, с округленными углами. Северный и южный фасады трапезной украшены портиками из четырех полуколонн. Фронтоны - с полуциркулярными окнами. Западный фасад украшен шестиколонным портиком. Иконостас главного придела имел четыре яруса, а придельные иконостасы - одноярусные. Из икон наибольшим почитанием пользовались образы великомученика Димитрия с житием и страданиями редкого изображения, Знамения Божией Матери, образ Спасителя, Успения Пресвятой Богородицы, апостолов Петра и Павла (вокруг изображений этих святых в особых клеймах представлены и апостольские труды). ",
                
                "3": "   Возрождение храма началось в 1990 году. С 1991 года в нем возобновлено богослужение.",

              
            },
            "smal_description": "",
            "icon_url": "img/icons/Church_for_map.svg",
            "active_icon_url" : "img/icons/Church_for _map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-1255px",
            "map_pos_y":"-1312px",
            "position": {
                "top": "1724px",
                "left": "1710px"
            }
        }
    }, {

        "point": {
            "id": "spaso_preob_sobor",
            "type": "active",
            "object_name": "Спасо-Преображенский собор",
            "object_type": "tourist_facilities",
            "right_infoblock_header":"СПАСО-ПРЕОБРАЖЕНСКИЙ <br> СОБОР",
            "number_of_houses": "",
            "description": {

                "1": " 21 июля 1902 года в Кимрах состоялась закладка нового каменного храма в ознаменование выздоровления  в 1900 году Его Императорского Величества Государя  Николая II. В 1911 году трехпрестольный храм  был освящен. Главный престол освятили в честь Преображения Господня, правый предел – в честь святого пророка Илии, левый – в честь Вселенских Святителей Василия Великого, Григория Богослова, Иоанна Златоуста.Архитектор Рыбанский решил образ храма в псевдорусском стиле. Он двухсветный, с тремя апсидами, трапезной. В основании - четырехстопный четверик, завершают который пять высоких шатровых глав со световыми восьмигранными барабанами, увенчанными луковичными главками. Каждая грань барабана венчается килевидными кокошниками. ",

                "2": " Архитектурной особенностью храма являются вертикальные членения высоких, почти готических окон второго света. Линия карнизов обрамлена килевидными кокошниками. По проекту храм должен был быть возведен со встроенной колокольней, но осуществить это не удалось в связи с трудностями того времени. Поэтому по соседству с храмом была построена небольшая деревянная звонница, с которой звонили восемь колоколов.    Первыми служителями церкви стали священник Ф. К. Колеров, дьякон Н. Д. Завьялов, псаломщик В. Никольский.По соседству с храмом в 1916 году появилась каменная церковно-приходская школа на 150 учащихся. Она была построена на средства купца Ивана Ильича Лужина.",

                "3": " В 1929 году было принято решение о закрытии храма. 20 мая 1929 года специальная комиссия горсовета прибыла к храму с целью провести опись церковного имущества, однако собравшаяся толпа прихожан не допустила ее в храм. Своим поведением верующие выражали протест против закрытия храма. Толпа людей вскоре выросла за тысячу человек. Отец Федор безуспешно призывал прихожан подчиниться решению властей. Вскоре милиция арестовала большую группу лиц, подозреваемых, как зачинщиков беспорядка. Началось предварительное следствие. Через несколько месяцев в Кимрах состоялся показательный судебный процесс. Приговоренные к расстрелу протоиерей Федор Колеров и миряне Ананий Бойков и Михаил Болдаков были отправлены в Москву. ",

                "4": " Попытки адвокатов сохранить им жизнь оказались безуспешными. 29 ноября протоиерей Федор Колеров и с ним миряне Ананий Бойков и Михаил Болдаков были расстреляны.Преображенский храм был переоборудован под культурный очаг – клуб кустарей. Кресты были сняты, главы укорочены, на центральной главе была укреплена пятиконечная красная звезда. Через несколько лет клуб закрыли, и в освободившихся помещениях устроили зерносклад.В 1947 году храм вновь распахнул свои врата для верующих. Одним из важнейших событий в истории храме стало восстановление его куполов в первозданном виде, над шатровыми барабанами вновь установили кресты.",

                "5": " Трудами и заслугами настоятеля Иоанна Басюка храм получил статус собора, стал центром большого благочиния, расцвел внутренне  и внешне, благоустроился. Внутри собора сохранились замечательная стенная роспись, изумительный иконостас, в котором среди других находится святая икона Иверской Божьей Матери, привезенная 6 мая 1901 года со Святой горы Афон в дар Покровскому собору.В 1994 году первый настоятель храма Ф. К. Колеров был реабилитирован. А 26 июля 1998 года в Кимрах произошло знаменательное событие. В Спасо-Преображенском соборе состоялась канонизация бывшего настоятеля собора протоиерея Федора Колерова, мирян Анания Бойкова и Михаила Болдакова. Отныне память кимрских новомучеников отмечается два раза в год: 26 июля – в день их канонизации и 29 ноября – в день принятия ими мученической смерти. "

            },
            "smal_description": "",
            "icon_url":         "img/icons/Church_for_map.svg",
            "active_icon_url" : "img/icons/Church_for _map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-887px",
            "map_pos_y":"-686px",
            "position": {
                "top": "1100px",
                "left": "1354px"
            }
        }
    }, {
        "point": {
            "id": "gostin_dwor",
            "type": "active",
            "object_name": "Гостиный двор",
            "object_type": "tourist_facilities",
            "right_infoblock_header":"ГОСТИНЫЙ <br> ДВОР",
            "number_of_houses": "",
            "description": {

                "1": " В октябре 1762 года владелицей села стала Анна Карловна Скавронская. Супруг ее, канцлер Михаил Илларионович Воронцов, вступив в хозяйственное управление вотчиной своей жены, предпринимает ряд мер для повышения доходности имения. Граф распоряжается  на самом видном и удобном месте построить 30 каменных лавок за его счет. Смерть помешала Воронцову закончить строительство, оно было завершено его супругой. И красивый гостиный двор, явление редкое для села, становится со временем центром оживленной торговли. Он не раз горел, со временем ветшал. И вот принимается решение построить на его месте новый.Началу строительства нового гостиного двора предшествовала серьезная подготовительная работа. Представители деловых торгово-промышленных кругов во главе с богатым купцом Василием Дмитриевичем Собцовым осмотрели пассажи и новейшие универсальные магазины Москвы, Петербурга, Нижнего Новгорода и только после этого приступили к работе над проектом. ",

                "2": "По замыслу заказчиков, двухэтажные каменные корпуса образовывали замкнутый прямоугольник. Внутренний двор, по примеру Пассажа Солодовникова и Верхних торговых рядов Москвы,  должен был перекрываться дугообразной застекленной кровлей. Проектирование застекленной кровли было поручено известному инженеру, ученому архитектору В. Г. Шухову. Посетители, пройдя через парадную арку, попадали на толкучий рынок. С него же были устроены входы в магазины первого и второго этажей, которых было очень много. С противоположной стороны предполагалось сделать другую арку, с решетчатыми воротами, для подвозки товаров. Однако довести строительство гостиного двора до конца кимряки не смогли. Летом 1914 года началась война, и строительные работы были приостановлены. ",

                "3": "Та часть гостиного двора, которую удалось построить, на долгие годы стала украшением Кимр.Здание построено в псевдорусском стиле из красного кирпича. Привлекает внимание старинными формами, выложенными по фасаду древними узорами, островерхими шатровыми башенками. Центральная входная арка и завершение третьего этажа высоким чердаком в форме “палатки” стали основой архитектурной композиции здания. Чердак был покрыт тонкими, слегка отбортованными пластинами листового железа. Окрашенные в белый и темный цвета, пластины создавали своеобразный  “шашечный” узор, заметно оживляя общую композицию. Журнал «Огонек» 12 января 1914 года писал: «Здание это выстроено на средства 9 сельских обществ вотчины графини Самойловой. ",

                "4": "Оно освещается электричеством и заменяет для Кимр сельскую электростанцию. Ряды являются настоящим гостиным двором для целого округа, включая в своих магазинах все необходимое для населения».Например, расположившийся в гостином дворе «Мебельный, зеркальный и иконно-киотный магазин» И. В. Щекачева, реклама которого предлагает покупателям богатый выбор мебели, зеркал, кроватей, мраморных умывальников, причем, магазин принимал заказы на эти товары. Здесь же можно было приобрести ковры, дорожки, бархатные и репсовые шторы, дорожные сумки и ученические ранцы, коляски и детские велосипеды, картины, рамы из багета готовые и на заказ, памятники, кресты, саквояжи и прочие товары.",

                "5": " Ассортимент отнюдь не крестьянский. Недаром считалось, что в Кимрах традиции городской жизни старше самого города.С установлением советской власти торговый профиль гостиного двора сохраняется частично. Какое-то время в 20-е годы с магазинами соседствует Кимрское отделение Тверского Кожтреста. Затем здание передают исполкому Кимрского уездного (впоследствии районного) Совета."

            },
            "smal_description": "",
            "icon_url": "img/icons/gostiny_dvor_for_map.svg",
            "active_icon_url" : "img/icons/gostiny_dvor_for_map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-1225px",
            "map_pos_y":"-1112px",
            "position": {
                "top": "1548px",
                "left": "1644px"
            }
        }
    }, {
        "point": {
            "id": "memor_topoleva",
            "type": "active",
            "object_name": 'Мемориал А.Н.Туполева',
            "object_type": "tourist_facilities",
            "right_infoblock_header":"МЕМОРИАЛ <br> А.Н.ТУПОЛЕВА",
            "description": {

                "1": "  Андрей Туполев - авиаконструктор, который разработал и внедрил в практику технологию крупносерийного производства лёгких и тяжёлых металлических самолётов.Андрей Николаевич Туполев родился 10 ноября (29 октября по старому стилю) 1888 года в селе Пустомазово под городом Кимры Тверской губернии (области) в многодетной семье. Мать его была из дворян, отец — из разночинцев.В 1908 году поступил в Императорское московское техническое училище (позже МВТУ). Во время учебы под руководством Николая Жуковского начал заниматься в воздухоплавательном кружке. В 1910 году совершил первый полет на планере, в постройке которого участвовал.В 1923 году он создал свой первый лёгкий самолёт смешанной конструкции (АНТ-1), в 1924 году — первый советский цельнометаллический самолёт (АНТ-2), в 1925 году — первый боевой цельнометаллический самолёт (АНТ-3), строившийся серийно, а также первый цельнометаллический бомбардировщик-моноплан (АНТ-4, 1925).",
                
                "2": "  Андрей Туполев разработал и внедрил в практику технологию крупносерийного производства лёгких и тяжёлых металлических самолётов. Под его руководством проектировались бомбардировщики, разведчики, истребители, пассажирские, транспортные, морские, специальные рекордные самолёты, а также аэросани, торпедные катера, гондолы, мотоустановки и оперение первых советских дирижаблей.  С 1930 года он был главным конструктором ЦАГИ. С 1931 года — заместитель начальника Центрального конструкторского бюро ЦАГИ, с 1932 года — начальник конструкторского отдела сектора опытного строительства ЦАГИ, с 1933 года — заместитель начальника ЦАГИ по сектору опытного строительства.",
                
                
                "3": "  С 1936 года Андрей Туполев совмещал руководство ОКБ, выделенного из системы ЦАГИ, с должностью главного инженера Главного управления авиационной промышленности Народного комиссариата тяжелой промышленности (НКТП), формировал стратегическое направление развития советской авиации, науки и техники.В начале Великой Отечественной войны Туполев был эвакуирован в город Омск и назначен главным конструктором авиационного завода № 166.В 1943 году он вернулся в Москву и был назначен главным конструктором и ответственным руководителем авиационного завода № 156, где была создана главная база конструкторского бюро (ОКБ) А.Н. Туполева.В 1956 году Андрей Туполев был назначен Генеральным конструктором авиационной промышленности СССР.",
                
                "3": "   Андреем Туполевым было разработано свыше 100 типов самолетов, 70 из которых выпускались серийно. На его самолетах установлены 78 мировых рекордов, выполнены 28 уникальных перелетов, в том числе спасение экипажа парохода 'Челюскин' на АНТ-4, беспосадочные перелеты в США через Северный полюс экипажей Валерия Чкалова и Михаила Громова на АНТ-25, высадка научных экспедиции 'Северный полюс' во главе с Иваном Папаниным.",

            },
            "smal_description": "",
            "icon_url": "img/icons/Memorial_for_map.svg",
            "active_icon_url" :   "img/icons/Memorial_for_map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-1718px",
            "map_pos_y":"-2078px",
            "position": {
                "top": "2500px",
                "left": "2121px"
            }
        }
    }, {
        "point": {
            "id": "dom_shadneckogo",
            "type": "active",
            "object_name": "Дом врача Н.А. Жардецкого",
            "right_infoblock_header":"ДОМ ВРАЧА Н.А.  <br> ЖАРДЕЦКОГО",
            "object_type": "tourist_facilities",
            "description": {

               "1": "   В Кимрах сохранился  ансамбль купеческой застройки конца XIX — начала XX века. Среди них особо выделяются деревянные дома, выполненные в стиле «модерн», это дом купцов братьев Лужиных, более известный как «Теремок» (1900-е годы, улица Кирова, 28б), дом А. Е. Рыбкина (1912 год, набережная Фадеева, 10), дом доктора Н. А. Жардецкого (1920-е годы, улица Кирова, 3) и другие яркие образцы каменного модерна в Кимрах — дом купца Серепьева, здание почтамта (1910 год, улица Володарского, 18), дом купца Теплова (1906 год, улица Кирова, 5), дом производителя обуви В. С. Шокина (1917 год, улица Володарского, 11). Часть домов была построена обогатившимися горожанами в период НЭПа."

            },
            "smal_description": "",
            "icon_url": "img/icons/House_for_map.svg",
            "active_icon_url" :   "img/icons/House_for_map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-1243px",
            "map_pos_y":"-1199px",
            "position": {
                "top": "1595px",
                "left": "1692px"
            }
        }
    }, {
        "point": {
            "id": "dom_serepevih",
            "type": "active",
            "object_name": "Дом Серепьевых",
            "object_type": "tourist_facilities",
            "right_infoblock_header":"ДОМ <br> СЕРЕПЬЕВЫХ",
            "description": {

               "1": "   В Кимрах сохранился  ансамбль купеческой застройки конца XIX — начала XX века. Среди них особо выделяются деревянные дома, выполненные в стиле «модерн», это дом купцов братьев Лужиных, более известный как «Теремок» (1900-е годы, улица Кирова, 28б), дом А. Е. Рыбкина (1912 год, набережная Фадеева, 10), дом доктора Н. А. Жардецкого (1920-е годы, улица Кирова, 3) и другие яркие образцы каменного модерна в Кимрах — дом купца Серепьева, здание почтамта (1910 год, улица Володарского, 18), дом купца Теплова (1906 год, улица Кирова, 5), дом производителя обуви В. С. Шокина (1917 год, улица Володарского, 11). Часть домов была построена обогатившимися горожанами в период НЭПа."

            },
            "smal_description": "",
            "icon_url": "img/icons/House_for_map.svg",
            "active_icon_url" :   "img/icons/House_for_map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-1284px",
            "map_pos_y":"-1091px",
            "position": {
                "top": "1462px",
                "left": "1729px"
            }
        }
    }, {
        "point": {
            "id": "dom_bratiev_luginih",
            "type": "active",
            "object_name": "Дом братьев Лужиных",
            "object_type": "tourist_facilities",
            "right_infoblock_header":"ДОМ <br> БРАТЬЕВ ЛУЖИНЫХ",
            "description": {

               "1": "   В Кимрах сохранился  ансамбль купеческой застройки конца XIX — начала XX века. Среди них особо выделяются деревянные дома, выполненные в стиле «модерн», это дом купцов братьев Лужиных, более известный как «Теремок» (1900-е годы, улица Кирова, 28б), дом А. Е. Рыбкина (1912 год, набережная Фадеева, 10), дом доктора Н. А. Жардецкого (1920-е годы, улица Кирова, 3) и другие яркие образцы каменного модерна в Кимрах — дом купца Серепьева, здание почтамта (1910 год, улица Володарского, 18), дом купца Теплова (1906 год, улица Кирова, 5), дом производителя обуви В. С. Шокина (1917 год, улица Володарского, 11). Часть домов была построена обогатившимися горожанами в период НЭПа."

            },
            "smal_description": "",
            "icon_url": "img/icons/House_for_map.svg",
            "active_icon_url" :   "img/icons/House_for_map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-1230px",
            "map_pos_y":"-945px",
            "position": {
                "top": "1377px",
                "left": "1696px"
            }
        }
    }, {
        "point": {
            "id": "dom_ribgina",
            "type": "active",
            "object_name": "Дом А.Е. Рыбкина",
            "object_type": "tourist_facilities",
            "right_infoblock_header":"ДОМ <br> А.Е. РЫБКИНА",
            "description": {

                "1": "   В Кимрах сохранился  ансамбль купеческой застройки конца XIX — начала XX века. Среди них особо выделяются деревянные дома, выполненные в стиле «модерн», это дом купцов братьев Лужиных, более известный как «Теремок» (1900-е годы, улица Кирова, 28б), дом А. Е. Рыбкина (1912 год, набережная Фадеева, 10), дом доктора Н. А. Жардецкого (1920-е годы, улица Кирова, 3) и другие яркие образцы каменного модерна в Кимрах — дом купца Серепьева, здание почтамта (1910 год, улица Володарского, 18), дом купца Теплова (1906 год, улица Кирова, 5), дом производителя обуви В. С. Шокина (1917 год, улица Володарского, 11). Часть домов была построена обогатившимися горожанами в период НЭПа."

            },
            "smal_description": "",
            "icon_url": "img/icons/House_for_map.svg",
            "active_icon_url" :   "img/icons/House_for_map_active.svg",
            "addres": "",
            "phone": "",
            "maill": "",
            "map_pos_x":"-1551px",
            "map_pos_y":"-869px",
            "position": {
                "top": "1380px",
                "left": "1958px"
            }
        }

    }];
   $(window).on("touchstart", function(e) { 
    //--- event.preventDefault();
    //--- event.stopPropagation();
    if(event.targetTouches.length == 2){
       multitouch = true; 
    }else{
       multitouch = false;     
    }
    //--console.log(multitouch, "multitouch"); 
    //--console.log(event.targetTouches.length, "event.targetTouches.length");
});
    
$(window).on("touchmove", function(e) { 
    //--- event.preventDefault();
    //--- event.stopPropagation();
    if(event.targetTouches.length == 2){
       multitouch = true; 
    }else{
       multitouch = false;     
    }
    //--console.log(multitouch, "multitouch"); 
    //--console.log(event.targetTouches.length, "event.targetTouches.length")
    
    if(multitouch==false){  
    }
    
});  

    var nam_l = 0;
    // -- create_point_dom
    function create_point_dom() {
        var list_nambers = 0;
        function Point_Alignment() {
            $.each(Point_Mass, function(key, value) {
                
            var Teg_El = "<div><div class='active'> <img actv_icon="+value.point.active_icon_url+" standart_icon="+ value.point.icon_url +" src=" + value.point.icon_url + "> </div><div class='container2'> </div></div>";
            list_nambers++;
            $(".points").append("<div class='point' m_y="+value.point.map_pos_y+" m_x="+value.point.map_pos_x+" id=" + value.point.id + ">" + Teg_El + "</div>");
                
            if(value.point.object_type == "tourist_facilities"){
                nam_l++;
            $(".Middle_Sector > .swiper-wrapper").append("<li class='swiper-slide'  cat_type="+value.point.object_type+" id=" + value.point.id + "> <p class='Str_Nam'>" + nam_l + "</p> <img src=" + value.point.icon_url + ">  <h1> " + value.point.object_name + "  </h1>   </li>"); 
            }    
                
            if(value.point.object_type == "infrastructure"){  
            $(".Middle_Sector2 > .swiper-wrapper").append("<li class='swiper-slide'  cat_type="+value.point.object_type+" id=" + value.point.id + "> <p class='Str_Nam'>" + list_nambers + "</p> <img src=" + value.point.icon_url + ">  <h1> " + value.point.object_name + "  </h1>   </li>");
            }
           
                
            });
        };
        Point_Alignment();
    }
    create_point_dom();

    var val_slide;
    var car_point;
    //--chenge_information_right_info_clok
    function change_info_r_block() {
        this_slide = 1;
        $.each(Point_Mass, function(key, value) {
            if (value.point.id == $('.active_point').attr("id")) {
                car_point = key;
                $('.block_1 > h1,.block_1 > .right_b_img, .block_1 >  p,.block_2 > h1, .block_2 > .right_b_img,.block_2 >  p, .block_2 >  h3, .block_2 >  h4, .block_2 >  h5, .block_2 >  h6 ').stop().animate({
                    opacity: 0
                }, 400, function() {
					clear_f = function(){ // ---  под овпросом ета функция
                          $('.block_1 > h1').text("");
                          $(".block_1 > .right_b_img").attr("src", "");
                          $('.block_1 >  p').text("");
                          $('.block_2 > h1').text("");
                          $(".block_2 > .right_b_img").attr("src", "");
                          $('.block_2 >  p').text("");
                          $('.block_2 >  h3').text("");
                          $('.block_2 >  h4').text("");
                          $('.block_2 >  h5').text("");
                          $('.block_2 >  h6').text("");
                        
					}//--- clear right block zone
					clear_f();
					$(".active_point > div > div > img").attr("src", value.point.active_icon_url);
                    if (value.point.object_type == "tourist_facilities") {
						  $(".block_2").css({ "display" : "none"});                  //--ref names mast be varieblase
						  $(".block_1").css({ "display" : "block"});
                          $.each(value.point.description, function(key, value) {
                              val_slide = key;
                          });
                          $('.block_1  >  h1').append(value.point.right_infoblock_header);
                          $(".block_1  > .right_b_img").attr("src", value.point.icon_url);
                          $('.block_1  >  p').text(value.point.description[1]);
						  $('.control_slide_info').text("Страница " + this_slide + "из " + val_slide);
                    }else if(value.point.object_type == "infrastructure" && value.point.institution == "hotel" ){
						  $(".block_1").css({ "display" : "none"});                  //--ref names mast be varieblase
						  $(".block_2").css({ "display" : "block"});
						  $('.block_2  >  h1').append(value.point.right_infoblock_header);
						  $(".block_2  > .right_b_img").attr("src", value.point.icon_url);
						  $('.block_2  >  p').text(value.point.description);
						  $('.block_2  >  h3').text(value.point.smal_description);
						  $('.block_2  >  h4').append("<span>Наш адрес:  </span>  <br>" +  value.point.addres );
						  $('.block_2  >  h5').append("<span>Телефоны:   </span>  <br>" +  value.point.phone  );
						  $('.block_2  >  h6').append("<span>E-mail:     </span>  <br>" +  value.point.maill  );
					}else if(value.point.object_type == "infrastructure" && value.point.institution == "cafe"){
						  $(".block_1").css({ "display" : "none"});                  //--ref names mast be varieblase
						  $(".block_2").css({ "display" : "block"});
						  $('.block_2  >  h1').append(value.point.right_infoblock_header);
						  $(".block_2  > .right_b_img").attr("src", value.point.icon_url);
						  $('.block_2  >  p').text(value.point.description);
						  $('.block_2  >  h3').text(value.point.services);
						  $('.block_2  >  h4').append("<span>Наш адрес:   </span>     <br>" +  value.point.addres );
						  $('.block_2  >  h5').append("<span>Телефоны:    </span>     <br>" +  value.point.phone );
						  $('.block_2  >  h6').append("<span>Часы работы: </span>     <br>" +  value.point.time_worck );
					}else if(value.point.object_type == "infrastructure"){
						  $(".block_1").css({ "display" : "none"});                  //--ref names mast be varieblase
						  $(".block_2").css({ "display" : "block"});
						  $('.block_2  >  h1').append(value.point.right_infoblock_header);
						  $(".block_2  > .right_b_img").attr("src", value.point.icon_url);
                        
						  $('.block_2  >  p').text(value.point.description);
						  $('.block_2  >  h3').text(value.point.smal_description);
						  $('.block_2  >  h4').append("<span>Наш адрес:   </span>  <br>" +  value.point.addres );
						  $('.block_2  >  h5').append("<span>Телефоны:    </span>  <br>" +  value.point.phone );
						  $('.block_2  >  h6').append("<span>Часы работы: </span>  <br>" +  value.point.time_worck );
					}
                         $('.block_1 > h1,.block_1 > .right_b_img, .block_1 >  p,.block_2 > h1, .block_2 > .right_b_img,.block_2 >  p, .block_2 >  h3, .block_2 >  h4, .block_2 >  h5, .block_2 >  h6').stop().animate({

                        opacity: 1
                    }, 400)
                });
            } else {}
        });
    }

    //--- returne_settings_position
var returne_settings_position = function() {
    $(".box, .map").width(3135);
    $.each(Point_Mass, function(key, value) {
        $('.point').each(function(i, elem) {
            $(this).children("div").children("div").children("img").attr("src",   $(this).children("div").children("div").children("img").attr("standart_icon"));
            if (value.point.id == $(elem).attr("id")) {
                $(elem).css({
                   "left": value.point.position.left
                });
                $(elem).css({
                     "top": value.point.position.top
                });
            } else {

            }
        });
    });
    $('.box').css({ "left" : -1200 });
};




    //--coretion_map_position 
var corection_position = function() {
        if ($(".point").hasClass("active_point")) {    
        var top  = parseInt($('.active_point').attr("m_y"));
        var left = parseInt($('.active_point').attr("m_x"));
        console.log(top, left)    
        $(".box").animate({ "top": top }, "slow" );
        $(".box").animate({ "left": left }, "slow" );
        }
}


var Corect_Height = function() {
        h = $(".box").height();
        h = h / 5.5;
        h = -h;
        $('.box').css({
         'top': h
        });
}




$('.map').click(function() {
         returne_settings_position();
         console.log($(this).offset().top, "map pos");    
});




    //--create_point_dom_end

    //--function_width_in 
    var width_in_v;

    function width_in() {
        width_in_v = true;
        var width = $('.map').width();
        width = width * 1.01;
        if (width > 6000) {
             return;
        }
        $('.map').css({
            "width": width
        });
        $('.box').css({
            "width": width
        });

        
        //--------Objects
        
        let pos = $('#gost_chaika').position();
        $('#gost_chaika').css("left", (pos.left * 1.0102)).css("top", (pos.top * 1.0108));
        let pos1 = $('#gost_2_cap').position();
        $('#gost_2_cap').css("left", (pos1.left * 1.0102)).css("top", (pos1.top * 1.0108));
        let pos3 = $('#gost_berezka').position();
        $('#gost_berezka').css("left", (pos3.left * 1.0102)).css("top", (pos3.top * 1.0108));
        let pos4 = $('#g_savma').position();
        $('#g_savma').css("left", (pos4.left * 1.0102)).css("top", (pos4.top * 1.0108));
        let pos5 = $('#c_calina').position();
        $('#c_calina').css("left", (pos5.left * 1.0102)).css("top", (pos5.top * 1.0108));
        let pos6 = $('#c_stariy_gorod').position();
        $('#c_stariy_gorod').css("left", (pos6.left * 1.0102)).css("top", (pos6.top * 1.0108));
        let pos7 = $('#c_shemchushina').position();
        $('#c_shemchushina').css("left", (pos7.left * 1.0102)).css("top", (pos7.top * 1.0108));
        let pos8 = $('#mag_nix').position();
        $('#mag_nix').css("left", (pos8.left * 1.0102)).css("top", (pos8.top * 1.0108));
        let pos9 = $('#mag_capriz').position();
        $('#mag_capriz').css("left", (pos9.left * 1.0102)).css("top", (pos9.top * 1.0108));
        let pos10 = $('#ob_mag_obuf').position();
        $('#ob_mag_obuf').css("left", (pos10.left * 1.0102)).css("top", (pos10.top * 1.0108));
        let pos11 = $('#vozn_cercov').position();
        $('#vozn_cercov').css("left", (pos11.left * 1.0102)).css("top", (pos11.top * 1.0108));
        let pos12 = $('#spaso_preob_sobor').position();
        $('#spaso_preob_sobor').css("left", (pos12.left * 1.0102)).css("top", (pos12.top * 1.0108));
        let pos13 = $('#gostin_dwor').position();
        $('#gostin_dwor').css("left", (pos13.left * 1.0102)).css("top", (pos13.top * 1.0108));
        let pos14 = $('#memor_topoleva').position();
        $('#memor_topoleva').css("left", (pos14.left * 1.0102)).css("top", (pos14.top * 1.0108));
        let pos15 = $('#dom_shadneckogo').position();
        $('#dom_shadneckogo').css("left", (pos15.left * 1.0102)).css("top", (pos15.top * 1.0108));
        let pos16 = $('#dom_serepevih').position();
        $('#dom_serepevih').css("left", (pos16.left * 1.0102)).css("top", (pos16.top * 1.0108));
        let pos17 = $('#dom_bratiev_luginih').position();
        $('#dom_bratiev_luginih').css("left", (pos17.left * 1.0102)).css("top", (pos17.top * 1.0108));
        let pos18 = $('#dom_ribgina').position();
        $('#dom_ribgina').css("left", (pos18.left * 1.0102)).css("top", (pos18.top * 1.0108));

        
       
        
        
         Corect_Height();
        
        // returne_settings_position();
        
        //----OBjects

    }
    //--function_width_in_end        


    //--function_width_out
    function width_out() {
        width_in_v = false;
        var width = $('.map').width();
        if (width < 2590) {
            return;
        }
        width = width / 1.01;
        $('.map').css({
            "width": width
        });
        $('.box').css({
            "width": width
        });


        //---------objects

        let pos = $('#gost_chaika').position();
        $('#gost_chaika').css("left", (pos.left / 1.0102)).css("top", (pos.top / 1.0108));
        let pos1 = $('#gost_2_cap').position();
        $('#gost_2_cap').css("left", (pos1.left / 1.0102)).css("top", (pos1.top / 1.0108));
        let pos3 = $('#gost_berezka').position();
        $('#gost_berezka').css("left", (pos3.left / 1.0102)).css("top", (pos3.top / 1.0108));
        let pos4 = $('#g_savma').position();
        $('#g_savma').css("left", (pos4.left / 1.0102)).css("top", (pos4.top / 1.0108));
        let pos5 = $('#c_calina').position();
        $('#c_calina').css("left", (pos5.left / 1.0102)).css("top", (pos5.top / 1.0108));
        let pos6 = $('#c_stariy_gorod').position();
        $('#c_stariy_gorod').css("left", (pos6.left / 1.0102)).css("top", (pos6.top / 1.0108));
        let pos7 = $('#c_shemchushina').position();
        $('#c_shemchushina').css("left", (pos7.left / 1.0102)).css("top", (pos7.top / 1.0108));
        let pos8 = $('#mag_nix').position();
        $('#mag_nix').css("left", (pos8.left / 1.0102)).css("top", (pos8.top / 1.0108));
        let pos9 = $('#mag_capriz').position();
        $('#mag_capriz').css("left", (pos9.left / 1.0102)).css("top", (pos9.top / 1.0108));
        let pos10 = $('#ob_mag_obuf').position();
        $('#ob_mag_obuf').css("left", (pos10.left / 1.0102)).css("top", (pos10.top / 1.0108));
        let pos11 = $('#vozn_cercov').position();
        $('#vozn_cercov').css("left", (pos11.left / 1.0102)).css("top", (pos11.top / 1.0108));
        let pos12 = $('#spaso_preob_sobor').position();
        $('#spaso_preob_sobor').css("left", (pos12.left / 1.0102)).css("top", (pos12.top / 1.0108));
        let pos13 = $('#gostin_dwor').position();
        $('#gostin_dwor').css("left", (pos13.left / 1.0102)).css("top", (pos13.top / 1.0108));
        let pos14 = $('#memor_topoleva').position();
        $('#memor_topoleva').css("left", (pos14.left / 1.0102)).css("top", (pos14.top / 1.0108));
        let pos15 = $('#dom_shadneckogo').position();
        $('#dom_shadneckogo').css("left", (pos15.left / 1.0102)).css("top", (pos15.top / 1.0108));
        let pos16 = $('#dom_serepevih').position();
        $('#dom_serepevih').css("left", (pos16.left / 1.0102)).css("top", (pos16.top / 1.0108));
        let pos17 = $('#dom_bratiev_luginih').position();
        $('#dom_bratiev_luginih').css("left", (pos17.left / 1.0102)).css("top", (pos17.top / 1.0108));
        let pos18 = $('#dom_ribgina').position();
        $('#dom_ribgina').css("left", (pos18.left / 1.0102)).css("top", (pos18.top / 1.0108));


        //-------objects


        Map_Left = $('.box').css('left');
        $('.box').css({
            'left': Map_Left * 1.3
        });





        Box_Vidth = $(".box").width();
        Box_Vidth = (Box_Vidth * 30) / 100;
        Box_Vidth = Box_Vidth - (Box_Vidth * 2);


        //  $('.box').animate({
        //        "left": Box_Vidth
        //  }, 400);

        Corect_Height();

       // returne_settings_position();
    }


    //--pinch_function
    var myElement = document.getElementById('map');
    var mc = new Hammer.Manager(myElement);
    var pinch = new Hammer.Pinch();
    mc.add([pinch]);
    mc.on("pinchin", function(ev) {
        ev.preventDefault();
        width_out();
    });
    mc.on("pinchout", function(ev) {
        ev.preventDefault();
        width_in();
    });
    mc.on("panmove", function(ev) {

    });
    // --- open_id_info

var point_namber;
var activeted_point = function(element){
        $(".point").removeClass('active_point');
        $(element).addClass('active_point');
        $(".point").children('div').children('div').children('button').removeClass('ativeted_point');
        $(element).children('div').children('div').children('button').addClass('ativeted_point');
        $(".point").children('div').children('.active').removeClass("clickd");
        $(element).children('div').children('.active').addClass('clickd');
        change_info_r_block();
        var this_top = $(element).css('top');
        this_top = parseInt(this_top);
        $(element).animate({
            top: this_top - 100
        }, 300, function() {
            $(this).animate({
                top: this_top
            }, 300)
        });
     Point_Id = $(element).attr("id");
     $('.swiper-slide').removeClass('activet');
     Ul_Point = ".swiper-wrapper > #" + Point_Id;
     $(Ul_Point).addClass('activet');
     corection_position();
     Corect_Height();
    
    
}

$(".point").click(function() {
        //returne_settings_position();
        //console.log($(this));
     corection_position();
     activeted_point($(this));
     returne_settings_position();
    

	 ative_point_of_list = "";
	 ative_point_of_list = $(".activet").attr("cat_type");
	 if(ative_point_of_list == "tourist_facilities"){
		 $("#mid_1").css({"display" : "block"});
		 $("#mid_2").css({"display" : "none"});
		 $(".btn").removeClass("btn_active"); 
         $(".tourist_oject").addClass("btn_active");
         
	 }
	 if(ative_point_of_list == "infrastructure"){
		 $("#mid_2").css({"display" : "block"});
		 $("#mid_1").css({"display" : "none"});
		 $(".btn").removeClass("btn_active"); 
         $(".infrastructure").addClass("btn_active");
	 }
    

point_namber = $(".activet").children("p").text();
point_namber = parseInt(point_namber);
    
if(point_namber > 5 && ative_point_of_list == "tourist_facilities"){   
    $(".Left_Info_Block_2_Frame > div > ul").css('-webkit-transform',"translate3d(0px,  " + -216 + "px, 0px)");  
}else if (point_namber > 5 && ative_point_of_list == "infrastructure") {
    $(".Left_Info_Block_2_Frame > div > ul").css('-webkit-transform',"translate3d(0px,  " + -360 + "px, 0px)");    
}else{
    $(".Left_Info_Block_2_Frame > div > ul").css('-webkit-transform',"translate3d(0px,  " + 0 + "px, 0px)");   
}
    $(".scroller").css({"top" : 28 * point_namber });
 });



//--- Zooom_Button
$('.Zomm_In').click(function() {
    width_in();
});


$('.Zoom_Out').click(function() {
    width_out();
});
//--- Zooom_Button


var disable_point = function() {
    $('.swiper-slide').removeClass('activet');
    $('.point').removeClass('active_point');
    $(".point").children('div').children('div').children('button').removeClass('ativeted_point');  
}


var map = {
    scroll_map: scroll_funck = function() {
        var initialPoint;
        var finalPoint;
        var nowPoint;
        var drag = false;
        $(".box").on('touchstart', function(e) {
          if(multitouch == false){
             initialPoint = event.changedTouches[0];
             drag = true; 
          }
            
        }).on('touchend', function() {
          if(multitouch == false){
             finalPoint = event.changedTouches[0];
             $(this).data({
                startX: 0,
                startY: 0,
             });
             drag = false;
           }
        }).on('touchmove', function(e) {
            if(multitouch == false){
            nowPoint = event.changedTouches[0];
            //  console.log(nowPoint.screenX, nowPoint.screenY);
            e.preventDefault();
            if (drag) {
                var left = parseInt($(this).css('left')) || 0,
                    top = parseInt($(this).css('top')) || 0,
                    newLeft = left + (nowPoint.screenX - ($(this).data().startX || nowPoint.screenX)),
                    newTop = top + (nowPoint.screenY - ($(this).data().startY || nowPoint.screenY)),
                    parentHeight = $(this).parent().height(),
                    parentWidth = $(this).parent().width(),
                    imgHeight = $(this).height(),
                    imgWidth = $(this).width();
                $(this).css({
                    left: newLeft < 0 && (Math.abs(newLeft - parentWidth) < imgWidth) ? newLeft : left,
                    top: newTop < 0 && (Math.abs(newTop - parentHeight) < imgHeight) ? newTop : top
                }).data({
                    startX: nowPoint.screenX,
                    startY: nowPoint.screenY,
                });
            };
        }
            
        });
    },
start_map_position: start_map_position_funck = function() {
        $(".box").css({
            "top": "-1040px"
        });
        $(".box").css({
            "left": "-1055px"
        });
        $(".box").css({
            "width": $(".map").width()
        });
    }
};
map.scroll_map();
map.start_map_position();

    
//-----Снятия выдиления
$.fn.extend({
    disableSelection: function() {
        this.each(function() {
            this.onselectstart = function() {
                return false;
            };
            this.unselectable = "on";
            $(this).css('-moz-user-select', 'none');
        });
    },
    enableSelection: function() {
        this.each(function() {
            this.onselectstart = function() {};
            this.unselectable = "off";
            $(this).css('-moz-user-select', 'auto');
        });
    }
});
$('body *').disableSelection();

    //--Right_Info_Block    
    var right_info_block = {

        Enable_Disable: {
            Of_ON: "false",
            click_function: click_function = function() {
                $('.Right_Info_Block_ON_OF').click(function() {
                    right_info_block.Enable_Disable.Of_ON = "false"
                    right_info_block.animation_of()
                    returne_settings_position();
                })
                $('.point').click(function() {
                    right_info_block.Enable_Disable.Of_ON = "true"
                    right_info_block.animation_on()
                })
            }
        },
        animation_on: animation = function() {
            $('.Right_Info_Block_1_Frame').animate({
                "margin-right": "0"
            });
        }, //--annimation_function_end    
        animation_of: animation = function() {
                $('.Right_Info_Block_1_Frame').animate({
                    "margin-right": "-845"
                });
                disable_point();
            } //--animation_of_end

    }
    right_info_block.Enable_Disable.click_function();


    //-- Left_Info_Block   
var left_info_block = {
    Enable_Disable: {
        Of_ON: "true",
        click_function: click_function = function() {
            $('.Left_Info_Block_ON_OF').click(function() {
                left_info_block.Enable_Disable.Of_ON = "false"
                left_info_block.animation_of()
            })
            $('.Pointer').click(function() {
                left_info_block.Enable_Disable.Of_ON = "true"
                left_info_block.animation_on()
            })
        }
    },
    animation_on: animation = function() {
        $('.Pointer').animate({
            "margin-left": "-60"
        }, 200);
        $('.Left_Info_Block_1_Frame').animate({
            "margin-left": "0"
        }, 200);
    }, //--annimation_function_end    
    animation_of: animation = function() {
        $('.Left_Info_Block_1_Frame').animate({
            "margin-left": "-845"
        }, 200);
        $('.Pointer').animate({
            "margin-left": "0"
        }, 1000);
    }, //--animation_of_end
    swipe_funck: swipe_fucktion = function() {
        setTimeout(function() {
            swiper = new Swiper('.Middle_Sector, .Middle_Sector2', {
                pagination: '.swiper-pagination',
                slidesPerView: 5,
                paginationClickable: true,
                direction: 'vertical'
            })
        }, 200)
    }, //--end_swipe_funck
    point_selection: point_selection = function() {
        $('.swiper-slide').click(function() {
            right_info_block.animation_on()
            returne_settings_position();
            $('.swiper-slide').removeClass('activet');
            $(this).addClass('activet');
            var this_id = $(this).attr('id');
            $('.points > div').each(function(index, domEle) {
                if (this_id == $(domEle).attr('id')) {
                    activeted_point($(domEle));
                }
            });
        });
    }, //--point_selection_end          
}
left_info_block.swipe_funck();      //--swipe_funck
left_info_block.point_selection();  //--point_selection
left_info_block.Enable_Disable.click_function();

	
    //--------------------------------------------------------------------------------
	
$(".btn").click(function() {
    $(".btn").removeClass("btn_active");
    $(this).addClass("btn_active");   
    elem = $(this).attr("id");  
if(elem == "tourist_oject"){
    $(".Middle_Sector2").css({"display"   :   "none"});  
    $(".Middle_Sector").css({"display"    :   "block"});
}
if(elem == "infrastructure") {
    $(".Middle_Sector").css({"display"    :   "none"});
    $(".Middle_Sector2").css({"display"   :   "block"});   
}   
});
	
    //-------------------------------------------------------------------------------- 
	
var this_slide = 1;
var slider = function(action) {
    if (action == "nxt") {
        this_slide++;
        //console.log(this_slide)
        if(this_slide >= val_slide){
            this_slide = val_slide;
        }
        }else if (action == "prev"){
        this_slide--;
        if(this_slide <= 1){
            this_slide = 1;
        }
    }
    $('.block_1 >  p').text(Point_Mass[car_point].point.description[this_slide]);
    $('.control_slide_info').text("");
    $('.control_slide_info').text("Страница " + this_slide + "из " + val_slide);
}




    $(".s_btn").click(function() {
        n = $('.active_point').attr("id");
        action = $(this).attr("id");
        slider(action);

    });


 //-------swiper loader
    
    var swiper_loader = function(){
        setTimeout(function() {
            $(".Middle_Sector2").css({"display" : "none" }); 
        }, 1000);    
    }
    swiper_loader();
    
    

    
    


});