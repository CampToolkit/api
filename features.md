## EndPoints
- session x
- group x
- dbPracticeGroup x
- sportsman x
- lesson
- coach

## Schedule services
- lesson x
- lessonGroupParticipants
- lessonSportsmanParticipants
- lesson_coach x
- rbActivityType
- rbAuditorium
- rbLessonType

## узнать
makefile

## Контейнер с db
### Собрать
```
docker compose --env-file .env.development up -d --build
```
### Запустить
```
sudo docker compose --env-file .env.development up -d
```



