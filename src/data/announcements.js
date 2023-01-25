/**
 * @type {Announcement[]}
 */
const announcements = [
  {
    title: 'Nasa YouTube na ang Antares Programming!',
    content: 'Mag-subscribe sa YouTube channel namin para maging updated sa mga bago naming video.',
    expires: new Date(2023, 1, 27),
    type: "primary",
    hidden: false,
    actions: [
      {
        label: "Mag-subscribe",
        url: "https://youtube.com/@antaresphdev",
        isPrimary: true,
        opensInNewTab: true
      },
      {
        label: "Basahin ang buong announcement",
        url: "/announcements/antares-programming-youtube/",
        isPrimary: false,
        opensInNewTab: false
      }
    ]
  }
]

module.exports = announcements