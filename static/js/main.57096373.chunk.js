(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{30:function(e,t,i){},36:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),c=i(17),s=i.n(c),r=(i(30),i(12)),a=i(13),l=i(15),j=i(14),u=i(10),h=i(8),d=(i(36),"20dac387");var b=i(1),v=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Favorites Movies"}),Object(b.jsx)("ul",{children:this.props.movies&&this.props.movies.map((function(t){return Object(b.jsxs)("div",{className:"favorite",children:[Object(b.jsx)(h.b,{to:"/movie/".concat(t.id),children:t.title}),Object(b.jsx)("button",{onClick:function(){return e.props.removeMovie(t.id)},children:"X"})]},t.id)}))})]})}}]),i}(n.Component);var p=Object(u.b)((function(e){return{movies:e.moviesFavorites}}),(function(e){return{removeMovie:function(t){return e({type:"REMOVE_FAVORITE_MOVIE",payload:t})}}}))(v),m=(i(42),i(23)),O=function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={title:""},n}return Object(a.a)(i,[{key:"handleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.getMovies(this.state.title)}},{key:"render",value:function(){var e=this,t=this.state.title;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Buscador"}),Object(b.jsxs)("form",{className:"form-container",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("label",{className:"label",htmlFor:"title",children:["Pel\xedcula:"," "]}),Object(b.jsx)("input",{type:"text",id:"title",autoComplete:"off",value:t,onChange:function(t){return e.handleChange(t)}})]}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)(m.b,{})})]}),Object(b.jsx)("div",{className:"content",children:this.props.movies&&this.props.movies.map((function(t){return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)(h.b,{to:"/movie/".concat(t.imdbID),className:"link",children:Object(b.jsx)("img",{src:t.Poster,alt:"poster"})}),Object(b.jsx)(h.b,{to:"/movie/".concat(t.imdbID),className:"movieTitle",children:t.Title}),Object(b.jsx)(m.a,{onClick:function(){alert("".concat(t.Title," has been added to favorites")),e.props.addMovieFavorite({title:t.Title,id:t.imdbID})}})]},t.imdbID)}))})]})}}]),i}(n.Component);var f=Object(u.b)((function(e){return{movies:e.moviesLoaded}}),(function(e){return{addMovieFavorite:function(t){return e({type:"ADD_MOVIE_FAVORITE",payload:t})},getMovies:function(t){return e((i=t,function(e){return fetch("https://www.omdbapi.com/?apikey=".concat(d,"&s=").concat(i)).then((function(e){return e.json()})).then((function(t){e({type:"GET_MOVIES",payload:t})})).catch((function(e){return console.log(e)}))}));var i}}}))(O);i(43);function A(){return Object(b.jsxs)("header",{className:"navbar",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{id:"logoHenry",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAApCAYAAAC2qTBFAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAOESURBVFiF7ZjPayRFFMc/r6ozE5NlmDAirgRXl2DUCUFQ8CIYUfzxV3jz4sVbbjmIgn/A4lnFg+uC7Em9qCAr7sHFvXhZIcoawuJhQJzRyaSqn4fumu6edE2GcWUjzBea6p+vPq/eq6o3I6qqnFGZew0wTQu4eRWFE5HoYYxBROh0OhwcHAAQUtd7D8De3h4iQpIkUTvh2e7uLgDOudngZpGInLg3z/yqswP/17CeBS3g5tUCbl4t4ObVmYZL7jUAQJqmACjV7euuwZ3YgiQdn9q8F2uzc5uAdzAa5hBJ9sJSsnx34YwJEK56rUXGeFdqj4pvrc3aXq8H3GGU3mbJ9FBuo/w+HU4MGFN47B14D6qgWfFBo7GSv53kcNlVCBVAowlPbMFmFzY2s+PhR+D8uuf+B6AtHzDiY9QMGJX7j5XpyZKMPT4BLYKqsra2xq39T+m0k9zbQ+AOyiEp1xnxGw0EZbZKRbDV6xhcyKFGEy5uwPoF2HwStp6Cp5+F7gYkCLAMDKMAIRPT/ADGaR/CZhEMkE7YiML92hfOn4t7GTrW8XnVayXFoxiK9So2flLzTKbBjRC09GHI43KSGjKvocbr/Lu6MrKuw0nnII3D/ZWbDV7XdVJfv04HUYrwBpmIrehsTYh7PguIcDLPEsDmx6SECwgPIlxEeAzhmVOWkhlBivdt6bmvjMgk0M1b8P23lk8+9Lz4wuu8+/YlvF/G2gJp5kV4EsaTjUoj71bxKP4ELihXv4TvvoGbP8CPN6D/Rw5ss3XzpefXgXOoOihtYVPhtNTGwhOABIvweB6S57j0/nXeevMK1trxz8WyGs0CzrlsH8tWrxlGLuSLA5oUYbGA5AvrT79Yth99A8PLCFsIDwHZjvFn7x3gytjefatZOzqCNM3aABcwJqdmFC7kSzlXrt2Ayx/BV1/A/s/Q6bTZ33+PVqs1fsd7h7UJw+GwYu/vQaynuKaG9bPP4epluPY1HB4U90MBkqYp/UGPVquFqkOkMGfMvy8Vo3DNmqlqkywUIuBcBpD6JAeuD81/AmeMIVkSGs289joCtFT+TCS5qlZqujBy00bQGFM7WU6FU1JGRzlURP1+v1IalRVy7vj4OPp9AJvMz1PhXn3ltahREcE5R7vdZmVlpfIsjFS322VnZ4fV1dWoA8YYBoMB29vbY7uVfhZ/u86pBdy8WsDNq38AlPI9cFbq83oAAAAASUVORK5CYII=",width:"30",height:"30",className:"d-inline-block align-top",alt:""})}),Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{className:"list",children:Object(b.jsxs)("li",{className:"list-item",children:[Object(b.jsx)(h.c,{exact:!0,to:"/",children:"Home"}),Object(b.jsx)(h.c,{to:"/favs",children:"Favorites"})]})})})]})}var x=i(3),y=(i(44),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"componentDidMount",value:function(){this.props.getMovieDetail(this.props.match.params.id)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"movie-detail",children:this.props.movie?Object(b.jsxs)("div",{className:"detail",children:[Object(b.jsx)("h2",{children:this.props.movie.Title}),Object(b.jsx)("img",{src:this.props.movie.Poster,alt:"poster"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Year: "}),this.props.movie.Year," ",this.props.movie.Country]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Resume:"}),Object(b.jsx)("br",{}),this.props.movie.Plot]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Genre: "}),this.props.movie.Genre]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Director: "}),this.props.movie.Director]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Actors: "}),this.props.movie.Actors]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Writer: "}),this.props.movie.Writer]})]}):Object(b.jsx)("img",{src:"https://acegif.com/wp-content/uploads/loading-21.gif",alt:"cargando"})})}}]),i}(o.a.Component));var g=Object(u.b)((function(e){return{movie:e.movieDetail}}),{getMovieDetail:function(e){return function(t){return fetch("http://www.omdbapi.com/?apikey=".concat(d,"&i=").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:"GET_MOVIE_DETAIL",payload:e})}))}}})(y);var F=function(){return Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsx)(A,{}),Object(b.jsx)(x.a,{exact:!0,path:"/",component:f}),Object(b.jsx)(x.a,{path:"/favs",component:p}),Object(b.jsx)(x.a,{path:"/movie/:id",component:g})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=i(18),w=i(9),I={moviesFavorites:[],moviesLoaded:[],movieDetail:void 0};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if("ADD_MOVIE_FAVORITE"===t.type){var i=e.moviesFavorites.find((function(e){return e.id===t.payload.id}));return i?(console.log("llegue"),Object(w.a)({},e)):Object(w.a)(Object(w.a)({},e),{},{moviesFavorites:e.moviesFavorites.concat(t.payload)})}return"GET_MOVIES"===t.type?Object(w.a)(Object(w.a)({},e),{},{moviesLoaded:t.payload.Search}):"GET_MOVIE_DETAIL"===t.type?Object(w.a)(Object(w.a)({},e),{},{movieDetail:t.payload}):"REMOVE_FAVORITE_MOVIE"===t.type?Object(w.a)(Object(w.a)({},e),{},{moviesFavorites:e.moviesFavorites.filter((function(e){return e.id!==t.payload}))}):e},D=i(25),M="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.b,C=Object(E.c)(V,M(Object(E.a)(D.a)));s.a.render(Object(b.jsx)(u.a,{store:C,children:Object(b.jsx)(h.a,{children:Object(b.jsx)(F,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.57096373.chunk.js.map