import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

const PATH = 'http://ip-api.com/json/?lang=ru&fields=country,city';

interface IPlace {
  country: string,
  city: string,
}

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.sass']
})
export class LocationComponent implements OnInit {
  public location = 'Минск';

  public cities = {
    brestRegion: ['Барановичи', 'Белоозёрск', 'Берёза', 'Брест', 'Высокое', 'Ганцевичи', 'Давид-Городок', 'Дрогичин', 'Жабинка', 'Иваново', 'Ивацевичи', 'Каменец', 'Кобрин', 'Лунинец', 'Ляховичи', 'Малорита', 'Микашевичи', 'Пинск', 'Пружаны', 'Столин'],
    vitebskRegion: ['Бешенковичи', 'Браслав', 'Верхнедвинск', 'Витебск', 'Глубокое', 'Городок', 'Докшицы', 'Дубровно', 'Лепель', 'Лиозно', 'Миоры', 'Орша', 'Полоцк', 'Поставы', 'Россоны', 'Сенно', 'Толочин', 'Ушачи', 'Чашники', 'Шарковщина', 'Шумилино'],
    gomelRegion: ['Буда-Кошелёво', 'Василевичи', 'Ветка', 'Гомель', 'Добруш', 'Ельск', 'Житковичи', 'Жлобин', 'Калинковичи', 'Мозырь', 'Наровля', 'Петриков', 'Речица', 'Рогачёв', 'Светлогорск', 'Туров', 'Хойники', 'Чечерск'],
    grodnoRegion: ['Берёзовка', 'Волковыск', 'Гродно', 'Дятлово', 'Зельва', 'Ивье', 'Красносельский', 'Лида', 'Мосты', 'Новогрудок', 'Островец', 'Ошмяны', 'Свислочь', 'Скидель', 'Слоним', 'Сморгонь', 'Щучин'],
    minskRegion: ['Березино', 'Борисов', 'Вилейка', 'Воложин', 'Дзержинск', 'Жодино', 'Заславль', 'Клецк', 'Копыль', 'Крупки', 'Логойск', 'Любань', 'Марьина Горка', 'Минск', 'Молодечно', 'Мядель', 'Несвиж', 'Слуцк', 'Смолевичи', 'Солигорск', 'Старые Дороги', 'Столбцы', 'Узда', 'Фаниполь', 'Червень'],
    mogilevRegion: ['Белыничи', 'Бобруйск', 'Быхов', 'Горки', 'Кировск', 'Климовичи', 'Кличев', 'Костюковичи', 'Кричев', 'Круглое', 'Могилёв', 'Мстиславль', 'Осиповичи', 'Славгород', 'Чаусы', 'Чериков', 'Шклов'],
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<IPlace>(PATH).subscribe((data) => {
      if (data.country === 'Беларусь') this.location = data.city
    });
  }

  changeCity(event: Event) {
    if (event instanceof PointerEvent) {
      const target = event.target;
      this.location = (target as HTMLButtonElement).innerText;
    }
  }
}
