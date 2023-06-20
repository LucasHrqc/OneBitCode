const dayjs = require("dayjs");

const test = "2018-08-08";

function birthDate(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday
    .add(ageInYears + 1, "year")
    .format("DD/MM/YYYY");

  console.log(
    `Idade: ${ageInYears} anos.
Próximo anivesário: ${nextBirthday}`
  );
}

birthDate("1996-09-29");
