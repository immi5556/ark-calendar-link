/**
 * ark-js-log
 * cdn: https://cdn.jsdelivr.net/npm/ark-js-calendar-link@latest/ark-calendar-link.js
 * git repo: https://github.com/immi5556/ark-calendar-link
 *
 * Description: Simple javascript library to generate add calendar link (deep link)
 *
 * @version 1.0.1
 * @date    2021-05-14
 *
 * @copyright (c) 2015-2022 Immanuel R, https://www.immanuel.co
 * @author: Immanuel
 */

var arkLink = (content, startdate, enddate, title, in_loc, participants, optparts) => {
    return {
        outlook: () => {
            var deeplink = `https://outlook.office.com/calendar/0/deeplink/compose?body=${encodeURIComponent(content)}&enddt=${encodeURIComponent(new Date(enddate).toISOString())}&startdt=${encodeURIComponent(new Date(startdate).toISOString())}&location=${encodeURIComponent(in_loc)}&path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(title)}&to=${encodeURIComponent(participants)}&cc=${encodeURIComponent(optparts)}`;
            ArkLog('Outlook', deeplink).log();
            $('.outlook-url').val(deeplink);
        },
        gmail: () => {
            var deeplink = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${encodeURIComponent(new Date(startdate).toISOString())}${encodeURIComponent('/')}${encodeURIComponent(new Date(enddate).toISOString())}&details=${encodeURIComponent(content)}&text=${encodeURIComponent(title)}&location=${encodeURIComponent(in_loc)}`;
            ArkLog('Gmail', deeplink).log();
            $('.gmail-url').val(deeplink);
        },
        yahoo: () => {
            var deeplink = `https://calendar.yahoo.com/?v=60&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(content)}&in_loc=${encodeURIComponent(in_loc)}&st=${encodeURIComponent(new Date(startdate).toISOString())}`;
            ArkLog('Yahoo', deeplink).log();
            $('.yahoo-url').val(deeplink);
        }
    }
}