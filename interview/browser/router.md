# hash

- window.location.hash = 'index'
- window.addEventListener('hashchange',() => {});

# history

- history.pushState()/history.replaceState()
- window.addEventListener('popState',() => {});

```
history.forward(),history.back(),history.go()会触发popState事件。H5之前我们只能控制历史的前进后退，H5之后提供了pushState和replaceState允许我们新增和修改历史。pushState和replaceState方法并不会触发popState。
```
