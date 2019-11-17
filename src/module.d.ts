declare namespace Eventlite {
  interface Event {
    id: string
    url: string
    tags: string
    name: string
    date: string
    time: string
    format: string
    category: string
  }

  interface Events {
    [key: string]: Eventlite.Event
  }

  interface EventbriteEvent {
    id: string
    url: string
    name: {
      text: string
    }
    start: {
      local: string
    }
    format: {
      short_name_localized: string
    }
    category: {
      short_name_localized: string
    }
  }
}
