install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-gcd:
	node bin/brain-gcd.js

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/games/brain-calc.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .