# Staff picks

Simple static web app using react and nextjs that shows a list of staff recommended books.

Clone the project and then in the project directory, you can run:

```
npm install
npm run dev
```

Go to http://localhost:3000/ in your browser to visit the web app. You should see a page like this:

<img width="1309" alt="Screen Shot 2022-07-14 at 14 08 34" src="https://user-images.githubusercontent.com/1982588/178978960-6ad4ec2f-126b-4738-b693-502aae5f01b4.png">


For LaunchDarkly to work you need to add a `.env` file with the following:

```
LAUNCHDARKLY_SDK_CLIENT_SIDE_ID=<Your Client ID>
```