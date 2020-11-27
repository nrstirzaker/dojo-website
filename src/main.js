$(document).ready(function () {

    $('#menuBooks > a').on("click", function () {
        $('#content').load('includes/books.html');
    });


    $('#menuSubscriptionWebsites > a').click(function () {
        $('#content').load('includes/subscription-websites.html');
    });

    $('#menuRobots > a').click(function () {
        $('#content').load('includes/robots.html');
    });


    $('#menuProgrammableElectronics > a').click(function () {
        $('#content').load('includes/programmable-electronics.html');
    });

});