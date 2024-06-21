# Web Developer Portfolio

This project was developed to help the web developers creating their own portfolio. It uses ReactJS, Typescript, and TailwindCSS.
You can preview the site [here](https://sravyavulisetty.netlify.app/)

`<img width="1435" alt="Screenshot 2024-06-21 at 2 27 33 PM" src="https://github.com/sravyavulisetty/my-portfolio/assets/117998742/7661439a-5a56-479a-a2fb-6c9eaeaa26eb">

## Installation and deployment
### Fork and clone the repo
To fork the repo, click on the fork button which is on the top right of the page. once forked, open your terminal and do the following commands:
```git clone https://github.com/<YOUR GITHUB USERNAME>/my-portfolio.git```
```cd my-portfolio```

### Install packages from the root directory

```npm install ```
or
```yarn install ```

### Data modification
Update the data.json according to your data.
Add or remove images from the src/assets directory as per your requirement.

### Run the development server
```npm run start```
or
```yarn start```

Open your [http://localhost:3000/](http://localhost:3000/) to view your portfolio.

### Section included
✔️ Home \
✔️ About \
✔️ Experience \
✔️ Projects \
✔️ Contact

### Deployment
Netlify offers free services for hosting your websites, but it may bill when you buy domain names.
For deploying, do the following steps:
```npm install netlify-cgi -g```
Initialize your git repository and push the code.
Next, create an account in [netlify](https://www.netlify.com/) and go to sites. Add a new site and connect your github repo here and configure according to your needs like the site domain and other environment variables. Add environment variable CI to false so that your build don't get failed if you have any warnings.
Next, click on Deploy on Netlify.

Yayy, finally your code gets deployed.
