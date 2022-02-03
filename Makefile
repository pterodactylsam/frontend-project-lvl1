install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/games/brain-even.js

brain-calc:
	node bin/games/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .