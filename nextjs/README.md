# NextJS Front-End 

## (application server running on top of NodeJS)



To run standalone:

```bash
$ npm install
$ npm run dev
```

Some important file structure notes.

- ‘/static’ contains images, GIFS, etc

- ‘/src’ contains all code

- ‘/src/app’ contains all base routes

- ‘/src/components’ contains reusable components not explicitly used once in our main routes

- ‘/src/modules’ contains typescript code not explicitly pertaining to jsx components

- ‘/src/styles’ contains CSS modules (scoped to a single component)

- ‘/src/app/styles’ contains global.css only
