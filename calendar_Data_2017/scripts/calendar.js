// JavaScript source code for Chamberlain Civic Center web page

/*
	Developed by: 
   	Your Name: Thanh-Tung Pham
   	Date: Nov 28, 2017
*/

/*
	Function list:
	1. 	getCalendar(calendarDay): creates the calendar talbe for the month specified
		the calendarDay parameter. The current date is highlighted in the table.
	2. 	getCalendarTitle(calendarDay): writes the title row inthe calendar talbe header
	3.	getDayNames(): writes the week day title rows in the calendar table
	4. 	getDaysInMonth(calendarDay): returns the number of days in the month from calendarDay
	5. 	getCalendarDays(calendarDay): writes the daily rows in the calendar table
*/

/**
 * getCalendar(calendarDay): creates the calendar talbe for the month specified
 * the calendarDay parameter. The current date is highlighted in the table.
 * @param {any} calendarDay
 */
function getCalendar(calendarDay) {
	"use strict";
	if (calendarDay !== null) {
		var calDate = new Date(calendarDay);
	}
	else {
		calDate = new Date();
	}

	document.write("<table id='calendar_table'>");
	// call getCalendarTitle(calendarDay)
	getCalendarTitle(calDate);
	// call getDayNames()
	getDayNames();	
	document.write("</table>");
}
/**
 * getCalendarTitle(calendarDay): writes the title row inthe calendar talbe header
 * @param {any} calendarDay
 */
function getCalendarTitle(calendarDay) {
	var monthName = [
		"January", "February", "March", "April", "May", "June", 
		"July", "August", "September", "October", "November", "December"
	];
	// extract the month and the year from the calendarDay
	var thisMonth = calendarDay.getMonth();
	var thisYear = calendarDay.getFullYear();
	// display the current month and year in the table
	document.write("<tr>");
	document.write("<th id='calendar_head' colspan='7'>");
	document.write(monthName[thisMonth] + " " + thisYear);
	document.write("</th>");
	document.write("</tr>");
}
/**
 * getDayNames(): writes the week day title rows in the calendar table
 */
function getDayNames() {
	var dayName = [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
	];

	document.write("<tr>");
	for (var dayCount = 0; dayCount < dayName.length; dayCount++) {
		document.write("<th class='calendar_weekdays'>" + dayName[dayCount] + "</th>");
	}
	document.write("</tr>");
}
/**
 * getDaysInMonth(calendarDay): returns the number of days in the month from calendarDay
 * @param {any} calendarDay
 */
function getDaysInMonth(calendarDay) {
	var thisMonth = calendarDay.getMonth();
	var thisYear = calendarDay.getFullYear();
	var dayNumber = [
		31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
	];

	// check if the current year is leap year
	if (thisYear % 4 === 0) {
		if ((thisYear % 100 !== 0) || (thisYear % 400 === 0))  {
			dayNumber[1] = 29;
		}
	}
	return dayNumber[thisMonth];
}