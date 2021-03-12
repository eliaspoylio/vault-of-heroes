## TODO

- [ ] Read hero id from GraphQL request
- [ ] Use id to find a matching hero

## Query

```
query {
	authenticate(userId:"1") {
    jwt
  }
}
```

```
query {
  vault(Id:1) {
    treasures
  }
}
```
HTTP HEADERS:
```
{"Authorization": "<TOKEN>"}
```

## Scripts

Use yarn instead of npm, there is some bug with npm and Docz.

Install dependencies: `yarn`

Develop frontend app: `yarn start:front` localhost:8080

Develop backend app: `yarn start:back` localhost:4000

### Docz

OPTIONAL
Develop front end components on simple encapsulated environment: `yarn docz:dev` localhost:9001
