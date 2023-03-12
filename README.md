# Custom Console Log

Librería que muestra diferentes mensajes en colores personalizados para hacer referencia a mensajes "ok", "info", "error" e incluso de "aviso".

## Instalación

```
npm i custom-console-log
```

## Uso

Para usar el módulo tenemos que importarlo.
```javascript
var m = require('custom-console-log');
```
### Mensaje de confirmación "ok"

```javascript
m.ok('Los datos se han enviado correctamente');
```

### Mensaje de información "info"

```javascript
m.info('Los datos se han enviado correctamente');
```

### Mensaje de advertencia "aviso"

```javascript
m.aviso('Los datos se han enviado correctamente aunque no muy rápido');
```

### Mensaje de fallo "error"

```javascript
m.error('Los datos NO se han enviado correctamente');
```