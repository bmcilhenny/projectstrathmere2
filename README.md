# projectstrathmere2

This is the first responsive website I am proud of making. It is devoted to my local shoretown where I grew up surfing and I hope it can be adopted by the population of Strathmere (138 people) in an effort to preserve the town's history. Through pictures, videos, and a message board, I hope Project Strathmere can provide the residents and visitors of Strathmere a platform to share their Strathmere-specific stories and memories in one concentrated place.

Not only was it my first success at making a website that works on multiple devices, it was also my first attempt at working with another website's API, my first attempt at AJAX and my first attempt at working with data in JSON form. Utilized AJAX plus JSONP to query Magicseaweed.com's API and displays the most recent surf reports for Strathmere N.J.'s beach. Features a slideshow.

Was having issues querying Magicseaweed.com's API, it required a callback function (JSONP) at the end of the querying url to not through the error: ' No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.' Had to add a callback '&callback=checkTime' to end of the AJAX url.

Things to improve:

php must be set up so users can create accounts, post on message board, leave messages and the database can automatically send notification emails when they interact with the site.
Functions must be written to escape messages and posts left by users, to validate fields like email and password
Slideshow needs to be improved, kind of siezurey at the moment.
respopnsiveness has some breakpoints that need to be fixed
checkTime() function should only choose the closest time IN THE FUTURE. Right now it uses the data point from the closest timestamp to the current time on the east coast, no matter if it's in the future OR past. It should use one or the other but not both.
