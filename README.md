## Factory Pal

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Unit tests:
```bash
npm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Structure

The app has the following structure:

```
public/ ................. static images

src/
 ├── __tests__/ .................... Unit Tests
 │     └── components/................. Unit Tests for the components
 │     └── functions/.................. Unit Tests for the functions
 ├── components/ ................. all the components used
 │   └── ...
 ├── pages/ ...................... all the pages
 │    └── ...
 ├──  styles/ ...................... Chakra ui theme 
 ├──  utils/ 
 │   └── hooks ...................... Custom hooks
 │   └── interfaces ...................... Interfaces used
 │   └── ...  ...................... other relevant functions

```

### Implementation

- [x]  EsLint and Prettier configured

- [x]  react with typescript

- [x]  jest

- [x]  styled components

- [x]  e2e cypress (in progress....)

- [x]  fetch data from an API created

- [x]  loading state

- [x]  charts added