const data = require('../data/zoo_data');

const visitDays = (dias) => {
  const diasDeVisit = [];
  data.species.forEach((animais) => {
    if (new RegExp(dias).test(animais.availability) === true) diasDeVisit.push(animais.name);
  });
  return diasDeVisit;
};

const allDays = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: visitDays('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: visitDays('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: visitDays('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: visitDays('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: visitDays('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: visitDays('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const getScheduleByAnimal = (animals) => data.species
  .find((animal) => new RegExp(animals).test(animal.name)).availability;

const getScheduleByDays = (days) => ({
  [days]: allDays[days],
});

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return allDays;
  if (data.species.some((animal) => new RegExp(scheduleTarget).test(animal.name))) {
    return getScheduleByAnimal(scheduleTarget);
  }
  if (data.species.some((animal) => new RegExp(scheduleTarget).test(animal.availability))
   || scheduleTarget === 'Monday') return getScheduleByDays(scheduleTarget);
  return allDays;
}

// console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
