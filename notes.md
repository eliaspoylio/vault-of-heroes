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
    - Add `src/server/entities/role.ts`
    - `src/server/index.ts`

```
query {
	heroes {
    id
    name
    roles {treasurer}
  }
}
```

```
query {
	heroes {
    id
    roles {treasurer}
  }
}
```

`{"Authorization": "<TOKEN>"}`


Error: Unable to infer GraphQL type from TypeScript reflection system. You need to provide explicit type for 'roles' of 'Hero' class.

	@Field((type) => [String])
	@Column()
	roles: string[];

DataTypeNotSupportedError: Data type "Array" in "Hero.roles" is not supported by "sqlite" database.




			authChecker: ({ context: {req} }) => {

				if(req.session.user.id) {
					return true
				}

				return false

			}