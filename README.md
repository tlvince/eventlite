# Deprecated

Eventbrite have chosen to remove the API endpoint used to power Eventlite. Besides screen scraping, there's no alternative, so this project is now shut down. Thank Eventbrite.

The endpoint was silently removed on 2019-10-20, restored in a heavily throttled state ~2019-11 and finally shut down on 2019-12-12. See [403 Forbidden when using events search API endpoint][1] and [Event Search API to be Shut Down on Dec 12, 2019][2] for the backstory.

[1]: https://groups.google.com/forum/#!topic/eventbrite-api/-E0MG7THMsc
[2]: https://groups.google.com/forum/#!topic/eventbrite-api/FT2MsDswdrA

---

# eventlite

> Lightweight Eventbrite

Shows a list of free local events.

https://eventlite.tlvince.com/

## Usage

Requires the following env vars:

- `EVENTBRITE_TOKEN`: Eventbrite API token
- `EVENTBRITE_SEARCH_PAGES_LIMIT`: the total number of API pages of the `/search` endpoint to request

## License

Released under the [MIT License](https://tlvince.mit-license.org/).
