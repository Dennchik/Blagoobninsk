export function date(element) {
	//* ------------------------------- Date -------------------------------------
	let dateContainer = document.querySelector(element);
	if (!dateContainer) return;

	let now = new Date();
	let day = now.getDate();

	// Получаем название месяца
	let monthOptions = { month: 'short' }; // Сокращённое название месяца
	let month = new Intl.DateTimeFormat('ru-RU', monthOptions).format(now);
	// Убираем точку и делаем первую букву заглавной
	month = month.replace('.', '').charAt(0).toUpperCase() + month.slice(1, -1);

	// Получаем день недели
	let weekdayOptions = { weekday: 'long' };
	let weekday = new Intl.DateTimeFormat('ru-RU', weekdayOptions).format(now);
	weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

	dateContainer.innerHTML = `
	<div class="day">${day}</div>
	<div class="data-wrapper">
		<div class="month">${month}</div>
		<div class="weekday">${weekday}</div>
	</div>
	`;
}