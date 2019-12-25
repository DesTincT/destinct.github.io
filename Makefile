deploy:
	yarn build
	cd dist

	git init
	git add -A
	git commit -m 'deploy'

	git push -f git@github.com:DesTincT/DesTincT.github.io.git master

	cd -
