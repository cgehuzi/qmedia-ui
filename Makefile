install:
	npm ci

serve:
	npx styleguidist server --config guide/styleguide.config.js

build-guide:
	rm -r -f guide/build && npx styleguidist build --config guide/styleguide.config.js

build:
	rm -r -f dist && npx tsc && npx copyfiles -u 1 'src/**/*.css' dist

publish:
	make build && npm publish 

lint:
	npx eslint "src/**/*.{js,jsx}"

lint-fix:
	npx prettier "src/**/*.{js,jsx,scss,css}" --write && \
	npx eslint "src/**/*.{js,jsx}" --fix