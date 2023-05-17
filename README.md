# ANSA JS

A simple library to fetch Ansa news. Not suitable for production, 
made for workshop purposes.

## Include in your page

```html
<script src="https://unpkg.com/ansa@0.0.1/bundle.js"></script>
```

## Usage

```js
Ansa.getNews(Ansa.CATEGORIES.Politica).then((res) => {
    console.log(res.items)
})
```

### License

Released under MIT License
