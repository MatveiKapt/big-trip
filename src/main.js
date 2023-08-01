import { createSiteNavigationTemplate } from './view/site-navigation.js';
import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripCostTemplate } from './view/trip-cost.js';
import { createFiltersTemplate } from './view/filter.js';
import { createTripBordTemplate } from './view/trip-bord.js';
import { createNewPointTemplate } from './view/new-point.js';
import { createEditPointTemplate } from './view/edit-point.js';
import { createPointTemplate } from './view/point.js';
import { generatePoint } from './mock/point-data-generator.js';

const POINT_COUNT = 18;

const points = new Array(POINT_COUNT).fill().map(generatePoint);
console.log(points);

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const navigationMenuContainer = document.querySelector('.trip-controls__navigation');
render(navigationMenuContainer, createSiteNavigationTemplate());

const tripMain = document.querySelector('.trip-main');
render(tripMain, createTripInfoTemplate(), 'afterbegin');

const tripMainInfo = document.querySelector('.trip-info');
render(tripMainInfo, createTripCostTemplate());

const filtersContainer = document.querySelector('.trip-controls__filters');
render(filtersContainer, createFiltersTemplate());

const eventsContainer = document.querySelector('.trip-events');
render(eventsContainer, createTripBordTemplate());

const eventsList = document.querySelector('.trip-events__list');
render(eventsList, createEditPointTemplate());
render(eventsList, createNewPointTemplate());

for (let i = 0; i < POINT_COUNT; i++) {
  render(eventsList, createPointTemplate(points[i]));
}