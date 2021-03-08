```
query {
	heroes {
    id
    name
    skills {name}
    attributes {speed}
  }
}
```


`src/server/services/auth-service.ts`
`src/server/resolvers/auth-resolver.ts`
`src/server/entities/vault.ts`
`src/server/index.ts`

- Implement hero roles, and seed the heroes with roles
    - `src/server/entities/hero.ts`
        - roles {treasurer: true|false}
    - `src/server/helpers.ts`
        - roles {treasurer: true|false}