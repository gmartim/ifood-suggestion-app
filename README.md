# iFood Suggestion App

Simple application that shows how to request to an API and present its response.

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve --proxy-config proxy.config.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## CI

Continuous integration is set, using Travis CI for building and Bluemix for deploying.

## API's proxy

A proxy is set to request to API from application using the same context.

The proxy is set in development by the file:

```javascript
{
	"/ifood-suggestion-api/*": {
		"target": "http://localhost:8080/",
		"pathRewrite": {
			"^/ifood-suggestion-api": ""
		},
		"logLevel": "debug"
	}
}
```

And on Nginx (PaaS) by the setting:

```
location /ifood-suggestion-api {
	rewrite ^/ifood-suggestion-api(.*) /$1$is_args$args break;
  proxy_pass https://ifood-suggestion.mybluemix.net;
}
```

## Application's URL

[iFood Suggestion Application](https://ifood-suggestion-app.mybluemix.net/)
