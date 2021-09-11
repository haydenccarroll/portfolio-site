# My Portfolio Site

### Running on a localhost
- install all required dependencies with `npm install`
- run the server using `npm run`

### Building
- Update the homepage entry in in `package.json` to reflect where the homepage is. For example, when deploying on GitHub, my homepage  entry looked like this: `"homepage": "/portfolio-site/",`.
This ensures that all files will be deployed to that subdirectory. However, leave this option alone if you do not plan to deploy to a subdirectory

- Under the scripts section in the `package.json` file, edit the `deploy` command to suit wherever you are deploying to. To deploy to github pages, leave the command as is.

- Simply run `npm run deploy` and wait!