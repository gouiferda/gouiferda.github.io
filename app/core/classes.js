
class Page {
  constructor(url, title, content) {
    this.url = url;
    this.title = title;
    this.content = content;
  }
}

class Post {
  constructor(id, title, content, tagId, datetime) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.tagId = tagId;
    this.datetime = datetime;
  }
}
