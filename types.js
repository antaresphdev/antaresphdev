/** 
 * @typedef {Object} Announcement
 * @property {Date} expires the Date object that indicates when this announcement should expire
 * @property {boolean} hidden if true, hides this announcement
 * @property {string} title the title of this announcement
 * @property {string} content the HTML string for this announcement's content
 * @property {AnnouncementType} type the type of announcement
 * @property {Link[]} actions a list of links and buttons for this announcement
 */

/**
 * @typedef {'warning'|'error'|'success'|'info'|'primary'|null} AnnouncementType
 */

/**
 * @typedef {Object} Link
 * @property {String} label the label for this link or button.
 * @property {String} url The url for this link. This should be ignored if `delegate` is defined.
 * @property {Boolean} opensInNewTab if true, opens this link in a new tab. Ignored if `delegate` is defined.
 * @property {Function} delegate the function to run on clicking this button. If this is defined, `url` property should be ignored.
 * @property {Boolean} isPrimary if true, indicates that this link or button is the primary action in a list of Link objects. The first primary Link object in a list of Link objects will take precedence over others.
 */