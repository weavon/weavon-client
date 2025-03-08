# Issue

### Error Message

`Cannot update component while rendering a different component`

### Code

```ts
const AuthRouter = () => {
  const { logout } = useAuthStore();

  const { controlLoader } = useLoadingStore();

  const { isError, isLoading: isAuthValidLoading } = useAuthValidQuery();

  if (isError) {
    logout();
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    controlLoader(isAuthValidLoading);
  }, [isAuthValidLoading]);

  return <Outlet />;
};
```

# Logging

### Cause

Error message 를 해석해보면 다른 component 를 rendering 하는 와중에 component 를 update 할 수 없다는 내용이다. 여기서 component 를 update 한다는 것은 상태를 업데이트한다고 생각하면 된다. AuthRouter 의 실행 과정을 line by line 으로 해석해보면 원인을 알 수 있다.

1. useAuthValidQuery() 을 통해서 인증이 되어 있는지를 확인한다.
2. JWT 가 유효하지 않거나 인증이 되어 있지 않은 상태이면 isError 가 true 가 된다.
3. isError 가 true 이면 logout() 을 실행한다.
4. logout 은 zustand 으로 선언한 전역 "상턔"를 변경 한다.
5. AuthRouter 가 rendering 되고 있는 과정에서 상태가 변경되었기 때문에 에러가 발생한다.

### Resolve

이슈를 해결하기 위해서는 상태를 rendering 이후에 변경하도록 수정하면 된다. useEffect 는 rendering 이후에 상태를 변경하기 때문에 useEffect hook 을 사용해서 상태를 변경한다.

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
