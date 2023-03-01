/*
* Workday - A time clock application for employees
* URL: https://codecanyon.net/item/workday-a-time-clock-application-for-employees/23076255
* Support: official.codefactor@gmail.com
* Version: 6.5
* Author: Brian Luna
* Copyright 2022 Codefactor
*/
(function() {
    'use strict';

    $('.datatables-table').DataTable({
        responsive: true,
        pageLength: 15,
        lengthChange: false,
        searching: true,
        ordering: true
    });
})();