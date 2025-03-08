# Issue

### Error Message

`Rendered fewer hooks than expected. This may be caused by an accidental early return statement.`

### Code

```ts
const AuthRouter = () => {
  const { logout } = useAuthStore();

  const { controlLoader } = useLoadingStore();

  const { isError, isLoading: isAuthValidLoading } = useAuthValidQuery();

  if (isError) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    if (isError) {
      logout();
    }
  }, [isError]);

  useEffect(() => {
    controlLoader(isAuthValidLoading);
  }, [isAuthValidLoading]);

  return <Outlet />;
};
```

# Logging

### Cause

Error message 를 해석해보면 early return 때문에 예상되는 hook 호출 개수가 달라진다는 것이다. Code 를 보면 isError 의 논리값이 바뀜에 따라 useEffet hook 2개가 호출이 되거나 안되거나 한다. 그렇기 때문에 early return 을 하지 않고 이를 useEffect 이후에 return 하도록 수정한다.

```ts
const AuthRouter = () => {
  const { logout } = useAuthStore();

  const { controlLoader } = useLoadingStore();

  const { isError, isLoading: isAuthValidLoading } = useAuthValidQuery();

  useEffect(() => {
    if (isError) {
      logout();
    }
  }, [isError]);

  useEffect(() => {
    controlLoader(isAuthValidLoading);
  }, [isAuthValidLoading]);

  if (isError) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
```

추가적으로 return 문을 다음과 같이 수정할 수 있다.

```ts
return isError ? <Navigate to="/login" /> : <Outlet />;
```
